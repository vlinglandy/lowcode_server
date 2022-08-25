<template>
  <div class="container">
      <PageHeader></PageHeader>
      <div class="main">
        <Left></Left>
        <div class="canvas">
            <Top></Top>
            <Center></Center>
        </div>
        <Right></Right>
      </div>
  </div>
</template>


<script>
import '@/assets/css/index.scss'
import Top from './layout/Top.vue'
import Left from './layout/Left.vue'
import Center from './layout/Center.vue'
import Right from './layout/Right.vue'
export default {
    data() {
      return {

      }
    },
    components:{
      Top,
      Left,
      Right,
      Center,
    },
}
</script>

<style scoped>
template{
  width: 100%;
  height: 100%;
}
.main{
  width: 100%;
  height: calc(100% - 41px);
  display: flex;
  position:relative;
  top: 41px;
}
.container{
  width: 100%;
  height: 100%;
}
.canvas{
  margin: 0 auto;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}
.canvas::-webkit-scrollbar{
  display:none
}
</style>