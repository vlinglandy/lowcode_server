<template>
  
</template>

<script>
import example from '@/data/example.js';
export default {
    created(){
        console.log(this.$route.params.num);
        localStorage.setItem('views',JSON.stringify(example[this.$route.params.num]))
        this.$router.replace({path:'/'})
    }
}
</script>

<style>

</style>