<template>
  <div class="RealTimeView">
    <el-dialog v-model="releaseVisiable" :show-close="false" width="850px" top="8vh">
      
      <iframe
        v-if="releaseVisiable"
        ref="iframe"
        class="screen"
        :scrolling="false"
        :src="origin + '/release/1'"
        @load="load"
      ></iframe>
      <template #footer>
        <el-button @click.stop="unVisiable" size="mini">关闭</el-button>
      </template>
      <!-- <van-loading v-if="loading" size="24px" vertical>加载中</van-loading> -->
    </el-dialog>
  </div>
</template>

<script>
export default {
  emits:['update:releaseVisiable'],
  props: ['releaseVisiable','views'],
  data() {
    return {
      loading: true,
      origin:'http://localhost:3000'
    }
  },
  beforeCreate(){
    this.origin = window.location.origin
  },
  methods: {
    load() {
      this.loading = false
    //   this.$refs["iframe"].contentWindow.postMessage(this.val, "http://localhost:8080");
    },
    unVisiable(){
        this.$bus.emit("switchState")
    }
  },
}
</script>

<style lang="scss" scoped>
.RealTimeView {
  .screen {
    width: 800px /*no*/;
    height: 470px /*no*/;
    border: 0;

    // 隐藏滚动条
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
  }
}
</style>
