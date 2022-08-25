<template>
  <div>
    <div class='module'>常规</div>
    <div class='lineBox border smaller'>
      <div class="label">链接标题</div>
      <input v-model="views.content">
    </div>
    <div class='lineBox border smaller'>
      <div class="label">控制器开关</div>
      <el-switch v-model="views.controls" active-color="#409eff" inactive-color="#dcdfe6">
      </el-switch>
    </div>
    <div class='lineBox border smaller'>
      <div class="label">链接</div>
      <input v-model="views.src">
    </div>
    <el-upload action="upload" :on-success="success" :show-file-list="false" :before-upload="beforeUpload">
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
    <div class='lineBox '>
      <div class="label">封面</div>
      <el-upload class="avatar-uploader" action="upload" :show-file-list="false" :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="views.poster" :src="views.poster" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>

  </div>
</template>

<script>

export default {
  props: ["views"],
  data() {
    return {

    }
  },
  methods: {
    success(response) {
      this.views.src = 'http://127.0.0.1:3001/' + response.path.slice(7)
    },
    handleAvatarSuccess(response) {
      this.views.poster = 'http://127.0.0.1:3001/' + response.path.slice(7)
    },
    beforeUpload(file) {
      const isMP4 = file.type === 'video/mp4';
      const isLt30M = file.size / 1024 / 1024 < 30;
      if (!isMP4) {
        Message.error('上传视频只能是 MP4 格式!');
      }
      if (!isLt30M) {
        Message.error('上传视频大小不能超过 30MB!');
      }
      return isMP4 && isLt30M;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        Message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        Message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  },
}
</script>

<style lang="scss" scoped>
.label {
  font-size: 12px;
  color: #444;
}

.smaller {
  margin-top: 7px;
  margin-bottom: 7px;
  padding-bottom: 5px;
}

.border {
  border-bottom: 1px solid #eee;
}

.module {
  width: 280px;
  height: 26px;
  margin-top: 3px;
  padding-bottom: 5px;
  background-color: rgb(219, 226, 242);
  text-align: left;
  font-weight: 700;
  text-indent: 1em;
  line-height: 36px
}

// 8.18 hp更改样式(以下)
.right-line {
  display: flex;
  padding: 7px 5px 7px 12px;
  width: 100%;
  font-size: 14px;
  align-items: center;

  .label {
    width: 70px;
    height: 100%;
    padding-top: 3px;
    text-align: left;

  }

  .el-radio-group {
    display: flex;
    width: 60%;
    flex-wrap: wrap;
    justify-content: flex-start;
    border-radius: 0 !important;

  }
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

//---8.18 hp更改样式(以上)
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

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  border: dotted 1px;
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
  object-fit: scale-down;
}
</style>