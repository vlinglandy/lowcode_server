<template>
  <div class="card" :style="views.style">
    <el-image
      :src="views.src"
      :style="views.imgStyle"
      fit="cover"
      :alt="views.alt"
      style="cursor: pointer"
    >
      <div slot="error" class="image-slot">
        <i class="el-icon-picture-outline"></i>
        <p style="color: white">点击上传图片</p>
      </div>
    </el-image>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // src:'',
    };
  },
  props: ["views"],
  watch: {
    style: function (newVal) {
      console.log("new", newVal);
    },
  },
  mounted() {},
  methods: {
  },
};
</script>

<style scoped>
.card {
  width: 300px;
  height: 200px;
  text-align: center;
  margin: 0 auto;
  line-height: 50px;
  color: aliceblue;
}
</style>