<template>
    <div>
      <div class='module'>字体</div>
       <component v-for="(datas,index) in datas[0]"
      :key="'First'+index" 
      :is="datas.flag" 
      :datas="datas" 
      :views="views"
       ></component>
      <div class='module'>文本</div>
      <component v-for="(datas,index) in datas[1]"
      :key="'second'+index" 
      :is="datas.flag" 
      :datas="datas" 
      :views="views"
       ></component>

    <div class='module'>定位</div>
    <component v-for="(datas,index) in datas[2]"
      :key="'third'+index" 
      :is="datas.flag" 
      :datas="datas" 
      :views="views"
       ></component>
      </div> 
</template>

<script>
export default {
    props:["views"],
    data() {
        return {
          datas:[[
         {flag:"colorChoose",label:"字体颜色",style:"textStyle",comprop:"color"},
         {flag:"selectCols" ,label:"字体粗细",style:"textStyle",comprop:"fontWeight",options:['100','200','300','400','500','600','600','700','800','900']},
         {flag:"switchBtn",label:"斜体",style:"textStyle",comprop:"fontStyle",value:["italic","normal"]},
         {flag:"numInput",label:"字体大小",style:"textStyle",comprop:"fontSize",unitSelect:false},
         {flag:"selectCols" ,label:"字体",style:"textStyle",comprop:"fontFamily",options:['Helvetica Neue','Helvetica',"PingFang SC","Hiragino Sans GB",'Microsoft YaHei','Arial','sans-serif']},
         
         
       ],[
         {flag:"numInput",label:"行高",style:"textStyle",comprop:"lineHeight",unitSelect:false},
        {flag:"numInput",label:"缩进",style:"textStyle",comprop:"textIndent",unitSelect:true},
        {flag:"selectGroup",label:"装饰线",style:"textStyle",comprop:"textDecoration",options:[{label:"none",content:"无"},{label:"line-through",content:"中间"},{label:"underline",content:"底部"}]},
       ],[
         {flag:"numInput",label:"间距",style:"textStyle",comprop:"letterSpacing",unitSelect:false},
        {flag:"selectGroup",label:"水平对齐",style:"textStyle",comprop:"textAlign",options:[{label:"left",content:"左"},{label:"center",content:"中"},{label:"right",content:"右"}]},
        {flag:"selectGroup",label:"垂直对齐",style:"textStyle",comprop:"textAlign",options:[{label:"top",content:"上"},{label:"middle",content:"中"},{label:"bottom",content:"下"}]},
       ]
            ]
       
       }
    },
}
</script>
<style lang="scss" scoped>
</style>