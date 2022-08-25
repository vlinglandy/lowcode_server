<template>
  <div>
    <div class='module'>常规</div>
    <div style="display: flex;align-items: center;margin-top: 2%;">
      <div class="label">代替文本：</div>
      <el-input class="input" v-model="views.alt"></el-input>
    </div>
    <div style="display: flex;align-items: center;margin-top: 5%;">
      <div class="label">图片路径：</div>
      <el-input class="input" v-model="views.src"></el-input>
    </div>
    <!-- 下面代码未定义的函数被我删了，不然会有bug -->
    <el-upload action="upload" :on-success="success" :show-file-list="false" :before-upload="beforeUpload" style="margin-top:5%">
      <el-button size="small" type="primary" >点击上传</el-button>
  </el-upload>
  </div>
</template>

<script>

export default {
    props:["views"],
    data() {
        return {
            
        }
    },
    methods:{
       success(response) {
      this.views.src = 'http://127.0.0.1:3001/' + response.path.slice(7)
    },
    beforeUpload(file) {
      const isSvg = file.type === 'img/svg';
      const isLt30M = file.size / 1024 / 1024 < 30;
      if (isSvg) {
        Message.error('上传图片不能是 svg 格式!');
      }
      if (!isLt30M) {
        Message.error('上传图片大小不能超过 30MB!');
      }
      return isSvg && isLt30M;
    },
    }
};
</script>

<style scoped>

.input {
  width: 70%;
  float: right;
}
.label {
  width:30%;
  display: flex;
  justify-content: left;
  align-items: center;
}
.module {
  width: 280px;
  margin-top: 3px;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  background-color: rgb(219, 226, 242);
  text-align: left;
  font-weight: 700;
  text-indent: 1em;
  line-height: 36px
}

</style>