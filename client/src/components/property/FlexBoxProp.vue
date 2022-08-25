<template>
  <div>
    <div class='module'>常规</div>
     <component v-for="(data,index) in datas"
    :key="index" 
    :is="data.flag" 
    :datas="data" 
    :views="views"
    ></component>
  </div>
</template>

<script>
export default {
    data() {
        return {
          datas:[
          {flag:"txtInput",label:"文本内容",style:"props",comprop:"content"},
         {flag:"numInput",label:"宽度",style:"style",comprop:"width",unitSelect:true},
         {flag:"numInput",label:"高度",style:"style",comprop:"height",unitSelect:true},
         {flag:"numInput",label:"字体大小",style:"style",comprop:"fontSize",unitSelect:false},
         {flag:"numInput",label:"行高",style:"style",comprop:"lineHeight",unitSelect:false},
      ]
        }
    },
    props:["views"]
}
</script>

<style lang="scss" >//8.18 hp更改

</style>