<template>
<div class='lineBox border smaller'>
      <div class="label">{{datas.label}}</div>
      <div class="inputLine" >
      <input :value="views[datas.style][datas.comprop].replace(/[a-z%]+/,'')" @input="views[datas.style][datas.comprop]=$event.target.value+type" autocomplete="off" placeholder="0">
       <select v-if="datas.unitSelect" class="select-unit" v-model="type" name="select">
          <option v-for="(t,index) in typeArr" :key="index">{{t}}</option>
        </select>
       <span v-else>px</span>
      </div>
    </div>
    
</template>

<script>
export default {
  props: [ 'datas','views'],
  data() {
    return {
      typeArr:['px','%','em'],
      type:'px'
    }
  },
  created(){
    if(this.views[this.datas.style][this.datas.comprop]=='')return
      this.type = this.views[this.datas.style][this.datas.comprop].match(/[a-z%]+/)[0]
    },
  watch:{
      type:{
        handler(newVal){
          this.views[this.datas.style][this.datas.comprop] =this.views[this.datas.style][this.datas.comprop].replace(/[a-z%]+/,'') + newVal
        }
      },
  }}

  

</script>

<style >

</style>