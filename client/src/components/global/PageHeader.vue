<template>
  <div>
    <header class="header">
        <div class="logo">
          <img :src="getImgUrl('logo3.png')" alt="">
        </div>
        <div class="operate">
          <el-button size="mini" type="primary" plain @click="exportHtml">导出HTML</el-button>
          <el-button size="mini" type="primary" plain @click="exportVue">导出Vue</el-button>
          <el-button size="mini" type="primary" plain @click="sendSaveJsonEvent">导出json</el-button>
        </div>
    </header>
  </div>
</template>

<script>
export default {
  setup(){
    const getImgUrl = (name) =>{
      return new URL(`../../assets/${name}`, import.meta.url).href
    }
    return {
      getImgUrl
    }
  },
  methods:{
    exportHtml(){
      this.$bus.emit("exportHtml",false)
    },
    exportVue(){
        this.$bus.emit("exportHtml",true)
    },
    sendSaveJsonEvent() {
      this.$bus.emit('saveJson')
    },
  }
}
</script>

<style scoped>
.header{
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  margin-bottom: 1px;
  position: fixed;
  top:0px;
  z-index:103;
}

.operate{
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>