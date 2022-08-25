<template>
 <div class='lineBox border smaller'>
      <div class="label">{{datas.label}}</div>
      <el-switch v-model="views[datas.style][datas.comprop]" :active-value="datas.value[0]" :inactive-value="datas.value[1]"></el-switch>
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

<style>

</style>