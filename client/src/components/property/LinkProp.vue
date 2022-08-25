<template>
   <div>
    <div class='lineBox border smaller'>
      <div class="label" >链接</div>
      <div class="srcline"><span>https://</span>
        <input v-model="views.link">
      </div>
    </div>
    <div class='lineBox border smaller'>
      <div class="label">链接标题</div>
      <input v-model="views.content">
    </div>
  </div>

</template>

<script>
export default {
  props: ["views"],
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