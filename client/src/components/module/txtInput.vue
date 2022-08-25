<template>
 <div class='lineBox border smaller'>
      <div class="label">{{datas.label}}</div>
      <input v-model="views[datas.style][datas.comprop]" placeholder="输入文本">
    </div>
</template>

<script>
export default {
  props: [ 'datas','views'],
  data() {
    return {
     
    }
  },
  methods: {
  }
  
  }

</script>

<style >

</style>