<template>

  <div>
    <div class='module'>布局</div>
    <component v-for="(datas,index) in datas[0]"
    :key="'Frist'+index" 
    :is="datas.flag" 
    :datas="datas" 
    :views="views"
    ></component>
    <div class='right-line'>
      <div class='label'>边距</div>
    </div>
  <!--8.18 hp更改(以下) -->
  <div class="margin-container">
        <div class="borderTop"><input placeholder="0"  :value="views.style.marginTop.replace('px','')"  @input="views.style.marginTop=$event.target.value+'px'"></div>
        <div class="borderBt"><input  placeholder="0"  :value="views.style.marginBottom.replace('px','')"  @input="views.style.marginBottom=$event.target.value+'px'"></div>
        <div class="borderLf"><input  placeholder="0"  :value="views.style.marginLeft.replace('px','')"  @input="views.style.marginLeft=$event.target.value+'px'"></div>
        <div class="borderRt"><input  placeholder="0"  :value="views.style.marginRight.replace('px','')"  @input="views.style.marginRight=$event.target.value+'px'"></div>
        <div class="padding-containner">
            <div class="borderTop"><input placeholder="0" :value="views.style.paddingTop.replace('px','')"  @input="views.style.paddingTop=$event.target.value+'px'"></div>
            <div class="borderBt"><input  placeholder="0" :value="views.style.paddingBottom.replace('px','')"  @input="views.style.paddingBottom=$event.target.value+'px'"></div>
            <div class="borderLf"><input  placeholder="0" :value="views.style.paddingLeft.replace('px','')"  @input="views.style.paddingLeft=$event.target.value+'px'"></div>
            <div class="borderRt"><input  placeholder="0" :value="views.style.paddingRight.replace('px','')"  @input="views.style.paddingRight=$event.target.value+'px'"></div>
        </div>
    </div>
<!--8.18 hp更改(以上) -->
 <div class='module'>边框</div>
   <component v-for="(datas,index) in datas[1]"
    :key="'scond'+index" 
    :is="datas.flag" 
    :datas="datas" 
    :views="views"
    ></component>  
  </div>
</template>

<script>
export default {
    data() {
        return {
            datas:[[
              {flag:"colorChoose",label:"背景颜色",style:"style",comprop:"backgroundColor"},
              {flag:"selectGroup",label:"换行",style:"style",comprop:"flexWrap",options:[{label:"warp",content:"换行"},{label:"nowarp",content:"不换行"}]},
              {flag:"selectGroup",label:"主轴方向",style:"style",comprop:"flexDirection",options:[{label:"row",content:"横向"},{label:"reset",content:"竖向"}]},
              {flag:"selectGroup",label:"主轴对齐",style:"style",comprop:"justifyContent",options:[{label:"flex-start",content:"头"},{label:"center",content:"居中"},{label:"flex-end",content:"尾"},{label:"space-around",content:"均匀"},{label:"space-between",content:"两侧"}]},
              {flag:"selectGroup",label:"侧轴对齐",style:"style",comprop:"alignItems",options:[{label:"flex-start",content:"头"},{label:"center",content:"居中"},{label:"flex-end",content:"尾"},{label:"space-around",content:"均匀"},{label:"space-between",content:"两侧"}]},
              ],[
              {flag:"colorChoose",label:"背景颜色",style:"style",comprop:"borderColor"},
              {flag:"numInput",label:"边框宽度",style:"style",comprop:"borderWidth",unitSelect:false},
              {flag:"numInput",label:"边框圆角",style:"style",comprop:"borderRadius",unitSelect:false},
              {flag:"selectGroup",label:"BoxSizing",style:"style",comprop:"boxSizing",options:[{label:"content-box",content:"content"},{label:"border-box",content:"border"}]},
              {flag:"selectGroup",label:"边框样式",style:"style",comprop:"flexWrap",options:[{label:"solid",content:"实线"},{label:"dashed",content:"虚线"},{label:"dotted",content:"点线"}]},
              ]
            ]
        }
    },
    props:["views"]
}
</script>
<style lang="scss" scoped>
.el-radio-group {
    display: flex;
    width: 60%;
    flex-wrap: wrap;
    justify-content: flex-start;
    border-radius: 0 !important;
}
.el-radio-group :deep(.el-radio-button__inner) {
    text-align: center;
    width: 50px;
    margin-right: 1px;
    padding: 7px 0;
    border-radius: 0;
    border: 1px solid #DCDFE6;
    box-shadow: none !important;
}


.margin-container {
    position: relative;
    margin-left: 15px;
    height: 150px;
    border: 0px;
    box-sizing: border-box
}

.margin-container input {
    position: absolute;
    text-align: center;
    background-color: inherit;
    z-index: 99;
    outline: none;
    &:hover {
        color: rgb(64, 158, 255)
    }
}

.margin-container div {
    position: absolute;
    width: 206px;
    height: 86px;
}

.borderTop {
    top: 0;
    left: 2px;
    border: 20px transparent solid;
    border-top-color: rgb(214, 228, 255);
    line-height: 16px;
    height: 20px;
    input {
        top: -20px;
        left: 10%;
        width: 80%;
        line-height: 20px
    }
}

.borderBt {
    top: 4px;
    left: 2px;
    border: 20px transparent solid;
    border-bottom-color: rgb(214, 228, 255);
    height: 20px;
    input {
        bottom: -20px;
        left: 10%;
        width: 80%;
        line-height: 20px
    }
}

.borderLf {
    top: 2px;
    left: 0;
    border: 20px transparent solid;
    border-left-color: rgb(214, 228, 255);
    input {
        top: 10%;
        left: -20px;
        width: 20px;
        height: 80%
    }
}

.borderRt {
    top: 2px;
    left: 4px;
    border: 20px transparent solid;
    border-right-color: rgb(214, 228, 255);
    input {
        top: 10%;
        right: -20px;
        width: 20px;
        height: 80%
    }
}

.padding-containner {
    top: 24px;
    left: 24px;
}

.padding-containner div {
    width: 158px;
    height: 38px;
}
</style>