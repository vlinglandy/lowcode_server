<template>

  <div class="link" :style="views.style" @click="linkClick">
    <a class="link-a" :href="'https://' + views.link" :style="views.linkStyle" ref="linkCom">{{
        views.content
    }}
    </a>
  </div>

</template>

<script>

export default {
  props: [
    'views',
    'edit'
  ],
  data() {
    return {
      
    }
  },
  methods: {
    linkClick(e) {
      if (this.edit) {//hp更改了跳转函数
        e.preventDefault() //编辑模式下阻止跳转，点击时返回属性
      }
    },
    
  },
  mounted() {

  }
}
</script>

<style scoped>
.link {
  text-align: center;
  padding: 1px 10px;
  box-sizing: content-box;
  border: 1px solid transparent;
}

</style>