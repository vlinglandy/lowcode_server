<template>
  <div class="right" >
    <div class="right-describ">
      <img :src="getImgUrl('assets/page.png')" />页面
    </div>
    <div class="right-choices">
      <div class="right-choices-one" @click="isMeta = true" :class="{active: isMeta}">属性</div>
      <div class="right-choices-two" @click="isMeta = false" :class="{active: !isMeta}">样式</div>
    </div>
    <div class="right-main" v-if="Object.keys(views).length>0">
      <div v-if="isMeta">
        <component :views="views" :is="propMap[views.component]"></component>
      </div>
      <div v-else>
        <component :views="views" :is="styleMap[views.component]"></component>
      </div>
    </div>
    <div class="right-main right-text" v-else>
      <div class="right-main-promot">
        您还未选中任何组件呦
      </div>
    </div>
  </div>
  
</template>


<script>
import '@/assets/css/rightModule.scss'
export default {
  setup(){
    const getImgUrl = (name) =>{
      return new URL(`../../${name}`, import.meta.url).href
    }
    return {
      getImgUrl
    }
  },
  data() {
    return {
      isMeta:true,
      propMap:{
        "ButtonCom":"ButtonProp",
        "ImgCom":"ImgProp",
        "LinkCom":"LinkProp",
        "TextCom":"TextProp",
        "VideoCom":"VideoProp",
        "FlexBox":"FlexBoxProp",
      },
      styleMap:{
        "ButtonCom":"ButtonStyle",
        "ImgCom":"ImgStyle",
        "LinkCom":"LinkStyle",
        "TextCom":"TextStyle",
        "VideoCom":"VideoStyle",
        "FlexBox":"FlexBoxStyle",
      },
      views: {},
    };
  },
  mounted() {
    this.$bus.on("views", (view) => {
      this.views = view;
    });
    this.$bus.on("cleanView", () => {
      this.views = {}
    });
  },
  methods: {
    sendViews(view) {
      this.$bus.emit("views", view);
    },
    upload() {},
  },
  components: {
  },
};
</script>

<style lang="sass" scoped>
.right-main::-webkit-scrollbar{
  display:none
}
.right {
  width: 300px;
  height: 100%;
  background: #fff;
  padding: 3px 10px 0px 10px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
   /* 8.18hp修改(以下) 禁用文字选中 */
   -o-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  z-index: 99;
  // 8.18hp修改(以上)
  &-describ {
    height: 25px;
    display: flex;
    justify-content: flex-start;
    font-size:12px;
    color: #aaa;
    align-items: center;
  }
  &-main{//8.18 hp修改修正滚动条显示
    height:100%;
    overflow-y: auto;
    overflow-x:hidden;
    &-promot{
      color: #555;
      font-size: 12px;
      margin: 100px auto 0px;
    }
  }
  &-text{
    width:100%;
  }
  &-describ img {
    width: 15px;
    height: 15px;
    margin-right: 5px;
    flex-shrink: 0;
  }
  &-choices {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 100%;
    color: #888;
    font-size: 14px;
    flex-shrink: 0;
    &-one {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      border-bottom: 2px solid transparent;//8.18 hp修改点击偏移
    }
    &-two {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      border-bottom: 2px solid transparent;//8.18 hp修改点击偏移
    }
  }
}
.active{
  color: rgb(85, 132, 255);
  border-bottom: 2px solid rgb(85, 132, 255);
  box-shadow: 0 0 3px #eee;
}
</style>