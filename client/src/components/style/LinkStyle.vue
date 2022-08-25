<template>
  <div>
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
        {flag:"colorChoose",label:"字体颜色",style:"linkStyle",comprop:"color"},
        {flag:"selectCols" ,label:"字重",style:"linkStyle",comprop:"fontWeight",options:["400","700","900"]},
        {flag:"selectGroup",label:"装饰线",style:"linkStyle",comprop:"textDecoration",options:[{label:"none",content:"无"},{label:"line-through",content:"中间"},{label:"underline",content:"底部"}]},
        {flag:"numInput",label:"字体大小",style:"linkStyle",comprop:"fontSize",unitSelect:true},
      ]
    }
  }
}
</script>

<style>
</style>