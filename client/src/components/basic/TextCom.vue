<template>
  <div class="text"  :style="views.style" >
    <div :style="views.textStyle"> {{views.content}}</div>
  </div>
</template>

<script>
export default {
  props: ['myStyle','views'],
  data() {
    return {
      textarea1: '',
    }
  }
}
</script>

<style scoped>

</style>