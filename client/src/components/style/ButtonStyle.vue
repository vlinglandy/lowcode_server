<template>
  <div>
    <div class='module'>边框</div>
    <component v-for="(datas,index) in datas[0]"
    :key="'A'+index" 
    :is="datas.flag" 
    :datas="datas" 
    :views="views"
    ></component>
    <div class='module'>字体</div>
  <component v-for="(datas,index) in datas[1]"
    :key="'B'+index" 
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
      datas:[[
         {flag:"numInput",label:"按钮宽度",style:"btnStyle",comprop:"width",unitSelect:false},
         {flag:"numInput",label:"按钮高度",style:"btnStyle",comprop:"height",unitSelect:false},
         {flag:"numInput",label:"边框圆角",style:"btnStyle",comprop:"borderRadius",unitSelect:false},
         ],[
           {flag:"switchBtn",label:"下划线",style:"btnStyle",comprop:"textDecoration",value:["underline","none"]},
           {flag:"switchBtn",label:"文字加粗",style:"btnStyle",comprop:"fontWeight",value:["700","400"]},
           {flag:"numInput",label:"字体大小",style:"btnStyle",comprop:"fontSize",unitSelect:false},
        ]
      ]
      
    }
  },
  methods: {
    
  }
}
</script>

<style >
</style>