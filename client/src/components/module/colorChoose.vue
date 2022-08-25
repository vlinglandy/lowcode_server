<template>
 <div class='lineBox border smaller'>
      <div class="label">{{datas.label}}</div>
      <el-color-picker size="mini" v-model="views[datas.style][datas.comprop]"  show-alpha></el-color-picker>
    </div>
</template>

<script>
export default {
  props: [ 'datas',"views"],
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