<template>
  <div class="center" :class="{phoneSize:isPhone}">
    <PowerfulDynamicDraw 
      :centerCom="centerCom"
      :currentCom="currentCom"
      :edit="edit"
      :views="views"
      :currentIndex="currentIndex"
      class="DynamicDraw"
      ></PowerfulDynamicDraw>
  </div>
</template>

<script>
import '@/assets/css/index.scss'
import { getOne } from '@/api/sendOut.js'
export default {
  data() {
    return {
      edit: false,// 编辑模式false为预览模式
      isPhone: false,
      dialogVisible:false,
      centerCom: false, //是否是画布内的组件
      currentCom: {}, //选中的组件
      currentIndex: -1,//选中组件的索引
      views: [],// 主要视图数据
    };
  },
  created(){
    let id = this.$route.params.id
    let cache = localStorage.getItem(String(id))
    if(cache){
      this.views = JSON.parse(cache)
    }else{
      let form  = new FormData()
      form.append('id',id)
      this.$axios(getOne(form))
        .then((res) => {
          this.views = JSON.parse(res.data.result.result)
          localStorage.setItem(String(id),JSON.stringify(this.views))
        }).catch(()=>{
          this.views = JSON.parse(localStorage.getItem('views'))
        })
    }
    
  },
  mounted() {

  },
  methods: {

    
  },
  components: {
  },
};
</script>

<style scoped>

.block{
  box-sizing: border-box;
}
.center {
  position: relative;
  height: 100%;
  box-sizing: border-box;
  background: #fff;
  overflow: scroll;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
}

.center::-webkit-scrollbar{
  display:none
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
  border: 2px solid rgba(0,108,255);
}

.DynamicDraw{
  width:100%;
}
.tpl-container {
  cursor: pointer;
}

.componenthover:hover{
  border: 1px dashed rgb(0,108,255);
}

.deleteBtn {
  float: right;
}
</style>