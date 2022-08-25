<template>
    <div class='lineBox border smaller'>
      <div class="label">{{datas.label}}</div>
      <div class="inputLine" >
      <select class="select-box" v-model="views[datas.style][datas.comprop]" name="select">
        <option disabled selected value >select</option>
        <option v-for="(t,index) in datas.options" :key="index">{{t}}</option>
      </select>
      </div>
    </div>
    
</template>

<script>
export default {
  props: [ 'datas','views'],
  data() {
    return {
     typeArr:['px','%'],
      type:''
    }
  },
  methods: {
  }
  
  }

</script>

<style scoped>
select{
  padding-left: 0px !important;
}
</style>