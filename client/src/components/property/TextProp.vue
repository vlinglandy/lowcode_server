
<template>
  <div>
    <div class='module border smaller'>文本内容</div>
    <textarea class='content' v-model="views.content"></textarea>

   

  </div>
</template>

<script>
export default {
    props:["views"],
    data() {
        return {
        }
    },
    method:{
    }
}
</script>

<style lang="scss" scoped>
.content{
  width: 284px;
  height: 400px;
  border: 1px  solid #DCDFE6;
  outline:none;
  overflow:auto;
  resize: none;
  padding: 3px;
  white-space:pre-wrap
}
</style>