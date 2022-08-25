<template>
  <div>
    <div class='module'>常规</div>
    <component v-for="(datas,index) in datas" 
    :key="index" 
    :is="datas.flag" 
    :datas="datas" 
    :views="views"
    ></component>
  </div>
</template>

<script>
export default {
    props: ["views"],
    data() {
    return {
      datas:[
        {flag:"colorChoose",label:"背景颜色",style:"btnStyle",comprop:"backgroundColor"},
        {flag:"selectGroup",label:"按钮类型",style:"props",comprop:"btnType",options:[{label:"button",content:"按钮"},{label:"submit",content:"提交"},{label:"reset",content:"重置"}]},
        {flag:"txtInput",label:"按钮内容",style:"props",comprop:"content"},
      ]
          
        }
    },
    methods: {
    
    },
}
</script>

<style>

</style>