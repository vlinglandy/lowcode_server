<template>
  <div class="btn">
    <img :src="getImgUrl('assets/add-btn.png')" alt="">
  </div>
</template>

<script>
export default {
  setup(){
    const getImgUrl = (name) =>{
      return new URL(`../../${name}`, import.meta.url).href
    }
    return {
      getImgUrl
    }
  },
  name:'CenterButton'
}
</script>

<style scoped>
.btn img{
    width: 16px;
    height: 16px;
    z-index: 3;
}
.btn{
    cursor: pointer;
    top: calc(50% - 8px);
    left: calc(50% - 8px);
    position: absolute;
}
</style>