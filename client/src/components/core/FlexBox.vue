<template>
  <div class="myflexbox" :style="views.style" draggable="false" :class="{showBorder:edit,mask:views.focus && edit}" @drop.stop="dropParent($event)">
    <CenterButton style="z-index:100;" @click.stop="addFlexBox(views)" v-if="views.focus && edit"></CenterButton>
    {{ views.props.content }}
    <!-- <DynamicDraw :currentCom="currentCom" :flexFocus="views.focus" :flexStyle="{justifyContent:views.style.justifyContent,alignItems:views.style.alignItems,flexDirection:views.style.flexDirection}" :views="views.views" :myStyle="views.views.style" :edit="edit"></DynamicDraw> -->
      <component
        v-for="(node,index) in views.children"
        @click.stop="focusChild(index,key)"
        @dragenter.stop="dragenterLight($event,node)"
        @dragstart.stop="dragstart(views.children,node, index)" 
        :draggable="edit"

        :style="node.style"
        :class="{showBorder:edit,componenthover:edit, selected:node.focus == true && edit && currentCom == node}"

        :comContent="node.comContent"
        :views="node"
        :myStyle="node.style"
        :edit="edit"
        :centerCom="centerCom"
        :currentCom="currentCom"
        :pattern="pattern"

        :is="node.component"
        :key="node.id"
      >
      </component>
</div>
</template>

<script>
import {nanoid} from 'nanoid';
import commonData from '@/data/commonData.js'//改动
import {dataFormat} from '@/utils/dataFormat.js'
import {deepClone} from '@/utils/deepClone.js'
import CenterButton from "@/components/global/CenterButton.vue"
export default {
  name:'FlexBox',
  props: [
    'views',
    "edit",
    "centerCom",
    "currentCom",
    "pattern"
  ],
  data() {
    return {
      center:false,
      showButton:true,
      littleCenterCom: false, //是否是小画布内的组件
      currentIndex: -1,//选中组件的索引
    }
  },
  mounted(){
    this.$bus.on("deleteFlexBoxCom",()=>{
      this.currentIndex = -1
    })
  },
  methods: {
    addFlexBox(node){
      if(!this.edit) return // 如果不是编辑状态，无效
      this.$bus.emit("sonAddFlexBox",node)
      console.log("发布事件");
    },
    // 组件拖拽时悬浮时高亮
    dragenterLight(e,node){
      e.preventDefault();
      this.$bus.emit("clearFocus")
      node.focus = true
    },
    focusChild(i){
      if(!this.edit) return // 如果不是编辑状态，无效
      this.$bus.emit("clearFocus")
      let view = this.views.children[i]
      this.$bus.emit("updateCurrentCom",view)
      view.focus = true
      // 全局相对寻址
      this.$bus.emit("refreshCurrentViews",{views:this.views.children,index:i})
      this.$bus.emit('sendDeleteIndex',i)
      this.$bus.emit("deleteFlexBoxCom")// 重置其余索引
      // 激活向右发送数据事件
      this.$bus.emit('views',view);
    },
    dropCommon(e){
      console.log("准备drop===");
      this.$bus.emit("clearFocus")
      var data = e.dataTransfer.getData("attr");
      // 深拷贝拷贝默认组件样式
      var newData = deepClone(commonData[data])
      // 数据特殊化处理之后统一处理共同样式
      newData = dataFormat(data,newData);
      // 数据统一处理
      newData.id = nanoid();
      // 问题多，暂时删了定位
      if(this.pattern != 'static'){
        newData.style.left = e.offsetX + "px";
        newData.style.top = e.offsetY + "px";
      }
      
      return newData
    },
    dropCenterCom(e){
      console.log("在弹性盒子中的组件");
      this.$bus.emit("rootDelete")
      // 问题多，暂时删了定位
      if(this.pattern != 'static'){
        this.currentCom.style.left = e.offsetX + "px";
        this.currentCom.style.top = e.offsetY + "px";
      }
      this.$bus.emit("offCenter")
      this.currentCom.id = nanoid();
      return deepClone(this.currentCom)
    },
    // 判断是否为中间组件并且拖动的不是flexbox
    isCenterFlexbox(){
      if(this.centerCom && this.currentCom.component == 'FlexBox')return true
      return false
    },
    dropParent(e){
      if(!this.edit) return
      // if(this.isCenterFlexbox())return //判断是否是flexbox
      var newData = this.centerCom === true ? this.dropCenterCom(e) : this.dropCommon(e)
      // newData.comContent = commonData[data]//改定

      // let newChild = deepClone(commonData['FlexBox'])
      // newChild.children.push(newData)// 819改了
      this.views.children.push(newData);
      // 激活向右发送数据事件
      this.$bus.emit('views',newData);
      this.views.focus = false
    },
    dropChildren(e,i,node){
      if(!this.edit) return 
      // if(this.isCenterFlexbox())return 
      var newData = this.centerCom === true ? this.dropCenterCom(e) : this.dropCommon(e)
      // newData.comContent = commonData[data]//改定
      node.children.push(newData);
      // 激活向右发送数据事件
      this.$bus.emit('views',newData);
      this.views.children[i].focus = false
    },
    //选中组件
    select(index,view,node) {
      if(!this.edit) return // 如果不是编辑状态，无效
      this.$bus.emit("clearFocus")
      // 全局相对寻址
      view.focus = true
      this.$bus.emit("refreshCurrentViews",{views:node.children,index:index})
      // 单views相对寻址
      this.$bus.emit("updateCurrentCom",view)
      this.$bus.emit('sendDeleteIndex',index)
      this.$bus.emit("deleteFlexBoxCom")// 重置其余索引
      this.currentIndex = index
      // 激活向右发送数据事件
      this.$bus.emit('views',view);
    },
    dragstart(children,node, index) {
      if(!this.edit) return // 如果不是编辑状态，无效
      
      this.$bus.emit("clearFocus")
      this.$bus.emit("refreshCurrentViews",{views:children,index:index})
      this.$bus.emit("onCenter")
      this.littleCenterCom = true;
      // this.currentCom = view;
      this.$bus.emit("updateCurrentCom",node)
      console.log(this.currentCom);
      this.$bus.emit("refreshCurrentCom",this.littleCenterCom)
    },
  },
  components:{
    CenterButton 
  }
}
</script>

<style scoped>

.mask{
  position: absolute;
  left: 0;
  top: 0px;
  bottom: 0;
  right: 0;
  background-color: #baf8ff;
  border: 2px solid #06c;
  opacity: 0.5;
  z-index: 10;
}

.showBorder{
  border: 1px dashed #06c;
  width: 100%;
}
.selected {
  /*hp修正点击组件因增加边框而偏移*/
  border: 1px solid rgb(238, 248, 131) !important
}

.flex{
  display: flex;
  width:100%;
  height: 100%;
}

.component-hover {
  display: inline-block;
  /*hp修正点击组件因增加边框而偏移*/
  border: 1px solid transparent;
}

.component-hover:hover {
  border: 1px dashed rgb(0, 108, 255);
}

</style>