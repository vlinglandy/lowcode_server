<template>
    <div class='right-line border  smaller'>
      <div class="label">{{datas.label}}</div>
        <el-radio-group v-model="views[datas.style][datas.comprop]" size="mini">
        <el-radio-button v-for="(option,index) in datas.options" :key="index" :label="option.label">{{option.content}}</el-radio-button>
      </el-radio-group>
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