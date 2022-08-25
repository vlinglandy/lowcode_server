<template>
  <div class="center" @click="showMainBtn" :class="{phoneSize:isPhone,mainBtn:showButton && edit}" @dragover="dropover" @drop.stop="drop">
    <!-- 展示中间按钮 -->
    <CenterButton style="z-index:100;" @click.stop="addFlexBox" v-if="showButton && edit"></CenterButton>
    <!-- 将需要读取的变量通通传递，只提供自定义事件修改变量 -->
    <PowerfulDynamicDraw 
      :centerCom="centerCom"
      :currentCom="currentCom"
      :edit="edit"
      :views="views"
      :currentIndex="currentIndex"
      class="DynamicDraw"
      @selectEvent="select"
      @dragstartEvent="dragstart"
      :pattern="pattern"
      ></PowerfulDynamicDraw>
    <DeleteDialog v-model:dialogVisible="dialogVisible" :edit="edit" @delComEvent="delCom" />
    <ReleaseDialog v-model:releaseVisiable="releaseVisiable" :views="views"/>
    <ShowDialog v-model:sendVisiable="sendVisiable" :src="src" />
    <a class="target" ref="link" href="" target="_blank" v-show="false"></a>
  </div>
</template>

<script>
import '@/assets/css/componentBox.scss'
import { nanoid } from 'nanoid';
import commonData from '@/data/commonData.js'//改动
import { dataFormat } from '@/utils/dataFormat.js'
import { deepClone } from '@/utils/deepClone.js'
import FileSaver from 'file-saver'
import { eventHandle } from './handle/centerEvent.js'

export default {
  data() {
    return {
      pattern: 'static',// 自由/相对/静态定位模式
      releaseVisiable: false,
      sendVisiable:false, // 发布弹窗
      showButton:true,
      edit: true,// 编辑模式false为预览模式
      isPhone: false,
      dialogVisible:false,
      centerCom: false, //是否是画布内的组件
      currentCom: {}, //选中的组件
      currentIndex: -1,//选中组件的索引
      views: [],// 主要视图数据
      step:1,
      begin:1,
      src:'',// 发布网址的链接
      currentViews:[],// 当前要修改的views
      currentViewsIndex:-1,// 当前要修改的view所在currentViews的索引
    };
  },
  created(){
    let views = localStorage.getItem('views')
    this.views = views ? JSON.parse(views) : []
  },
  mounted() {
    // 核心功能注册
                  // 保存json | 撤销  |   重做  |  重置中央变量 | 更新当前选中的views 
    eventHandle(['saveJson','backOff','forward','onCenter','refreshCurrentViews',
                  // 核心删除  |  导入json | 转换pc | 转换手机 | 预览/编辑  | 发布页面
                  'rootDelete','inputJson','toPc','toPhone','switchState','release',
                  // 清除选中状态 | 发送要被删除的索引 | 给盒子添加儿子 | 展示删除框
                  'clearFocus','sendDeleteIndex','sonAddFlexBox','showDeleteDialog',
                  // 更新中心变量   |   更新当前选中组件 | 导出Html  |  关闭中心变量  
                  'refreshCurrentCom','updateCurrentCom','exportHtml','offCenter' , 
                  // 切换静态/绝对定位  | 保存  |   重置
                  'switchPattern',     'save'   ,'reset'],this)
    
  },
  methods: {
    //删除组件
    delCom(){
      this.currentViews.splice(this.currentViewsIndex,1)
      this.currentIndex = -1
      this.dialogVisible = false
      this.$bus.emit("deleteFlexBoxCom")// 让flexbox中的views重置索引
      this.cleanSendView()
    },
    // 根据传递的数组和索引删除组件
    rootDelete(){
      this.currentViews.splice(this.currentViewsIndex,1)
    },
    //选中组件
    select(index,view) {
      this.$bus.emit("clearFocus")
      // 全局相对寻址
      this.$bus.emit("refreshCurrentViews",{views:this.views,index:index})
      // 单views相对寻址
      this.currentCom = view
      this.currentIndex = index;
      this.$bus.emit("deleteFlexBoxCom")// 重置每个组件的索引
      // 选中该flexbox
      if(view.component == 'FlexBox'){
        this.$bus.emit("clearFocus")
        view.focus = true
      }
      // 激活向右发送数据事件
      this.$bus.emit('views',view);
      
    },
    transformData(data, e ,ComX ,ComY ,callback){
      if(this.pattern != 'static'){
        data.style.left = e.offsetX - ComX + "px";
        data.style.top = e.offsetY -ComY + "px";
      }
      if(data.component != 'FlexBox')data.style.position = this.pattern;// 切换定位模式
      this.views.push(data);
      if(callback)callback(data);
    },
    drop(e) {
      e.preventDefault();
      var ComX=e.dataTransfer.getData('comOffsetX')
      var ComY=e.dataTransfer.getData('comOffsetY')
      this.$bus.emit("clearFocus")
      if (this.centerCom && this.edit) {
        this.transformData(this.currentCom,e,ComX,ComY)
        this.centerCom = false;
        this.rootDelete()
      }else{
        var data = e.dataTransfer.getData("attr");
        // 深拷贝拷贝默认组件样式
        var newData = deepClone(commonData[data])
        // 数据特殊化处理之后统一处理共同样式
        newData = dataFormat(data,newData);
        // 数据统一处理
        newData.id = nanoid();
        this.transformData(newData, e ,ComX,ComY, (res)=>{
          // 激活向右发送数据事件
          this.$bus.emit('views',res);
        });
        
      }
      
    },
    dropover(e) {
      e.preventDefault();
    },
    getJson() {
      // 将json转换成字符串
      const data = JSON.stringify(this.views)
      const blob = new Blob([data], { type: '' })
      FileSaver.saveAs(blob, 'json.json')
    },
    // 向右边发送一个清除事件，让右侧不显示，防止出bug
    cleanSendView(){
      this.$bus.emit("cleanView")
    },
    dragstart(view, index,e) {
      this.$bus.emit("clearFocus")
      this.$bus.emit("refreshCurrentViews",{views:this.views,index:index})
      e.dataTransfer.setData('comOffsetY',e.offsetY)//8.18hp修改预先存储鼠标相对组件位置
      e.dataTransfer.setData('comOffsetX',e.offsetX)
      this.centerCom = true;
      this.currentCom = this.views[index];
    },
    showMainBtn(e){
      e.preventDefault()
      this.$bus.emit("clearFocus")
      this.showButton = true
    },
    // 向各个方向添加盒子
    addFlexBox(){
      var newData = deepClone(commonData['FlexBox'])
      // 数据统一处理
      newData.id = nanoid();
      // newData.comContent = commonData[data]//改定
      this.views.push(newData);
      // 激活向右发送数据事件
      this.$bus.emit('views',newData);
    },
    // 如果两个值是不是除了focus之外其他都一样
    judgeTwoValueIsEqual (objA, objB) {
      objA = objA || {}
      objB= objB || {}
      // 取对象 A 和 B 的属性名数组
      const aProps = Object.getOwnPropertyNames(objA)
      const bProps = Object.getOwnPropertyNames(objB)
      // 长度是否一致
      if (aProps.length !== bProps.length) {
        return false
      }
      // 循环取出属性名，再判断属性值是否一致
      for (let i = 0; i < aProps.length; i++) {
        const propName = aProps[i]
        const type = typeof objA[propName]
        if (type === 'object' && type != null) { // 值是对象类型就递归
          if (!this.judgeTwoValueIsEqual(objA[propName], objB[propName])) { // 注：不能直接返回方法
            return false
          }
        } else {
          if (objA[propName] !== objB[propName]) {
            if(propName != 'focus') return false // 如果不一样的是focus属性，则过滤掉，不判断
          }
        }
      }
      return true
    },
  },
  computed:{
    // watch获取不到复杂变化的oldvalue，所以用计算属性调整
    viewsCopy(){
      return JSON.parse(JSON.stringify(this.views))
    }
  },
  watch:{
    viewsCopy:{
      deep:true,
      immediate:true,
       handler(newValue,oldVal){
        if(!newValue && !oldVal) return 
        if(this.judgeTwoValueIsEqual(newValue,oldVal)) return 
        if(this.step==1){
          //当为初始状态时
          sessionStorage.setItem(String(this.step),JSON.stringify([newValue]))
        }else{
          sessionStorage.setItem(String(this.step),JSON.stringify(newValue))
        }
        //阶段+1
        this.step++
        // 如果差距大于100就删前50个
        if(this.step - this.begin > 100){
          for(let i = this.begin;i < this.begin + 50;i++){
            sessionStorage.removeItem(String(i));
          }
          this.begin += 50
        }
      },
    },
    step:{
      immediate:true,
      handler(newValue){
        this.$bus.emit('getStep',--newValue)
      }
    },
    currentIndex:{
      handler(newValue){
        this.$bus.emit("selectEvent",newValue)
      }
    }
  },
  components: {

  },
};
</script>

<style lang="scss" scoped>


.center {
  margin: 5px 10px 0 10px;
  position: relative;
  height: 100%;
  box-sizing: border-box;
  box-shadow: 0 0 20px #ccc;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
}

.center::-webkit-scrollbar{
  display:none
}

.mainBtn{
    position: absolute;
    left: 0;
    top: 40px;
    bottom: 0;
    right: 0;
    background-color: #baf8ff;
    border: 2px solid #06c;
    opacity: 0.5;
    z-index: 2;
    height:calc(100% - 45px);
}
.pcSize {
  width: 100%;
}

.phoneSize {
  width: 375px;
  height: 667px;
  margin: 10px auto;
}

.selected {
  /*hp修正点击组件因增加边框而偏移*/
  border: 1px solid rgba(0, 108, 255) !important;
}

.tpl-container {
  cursor: pointer;
}

.component-hover {
  display: inline-block;
  /*hp修正点击组件因增加边框而偏移*/
  border: 1px solid transparent;
}

.component-hover:hover {
  border: 1px dashed rgb(0, 108, 255);
}


.deleteBtn {
  position:absolute;
  right: 0;
  top: 0;
  z-index: 100;
}
</style>