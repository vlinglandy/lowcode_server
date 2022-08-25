<template>
  <div>
      <component
        class="block tpl-container"
        v-for="(view, index) in views"
        :key="view.id"
        @dragstart.stop="dragstart(view, index,$event)"
        :style="{width:view.style.width,height:view.style.height}"
        :comContent="view.comContent"
        :views="view"
        :draggable="edit"
        :class="{componenthover:edit, selected:index == currentIndex && edit && view == currentCom}"
        :myStyle="view.style"
        :is="view.component"
        :edit="edit"
        :centerCom="centerCom"
        :pattern="pattern"
        :currentCom="currentCom"
        @click.stop="select(index,view)"
        @dragenter.stop="dragenterLight($event,view)"
    >
    </component>
  </div>
</template>

<script>
import '@/assets/css/componentBox.scss'
export default {
  emits:['selectEvent','dragstartEvent'],
  props: [
    'views',
    'edit',
    'index',
    'currentIndex',
    'currentCom',
    'centerCom',
    'pattern'
  ],
  data() {
    return {
    }
  },
  methods: {
    //选中组件
    select(index,view) {
      this.$emit("selectEvent",index,view)
    },
    // 组件拖拽时悬浮时高亮
    dragenterLight(e,view){
      e.preventDefault();
      this.$bus.emit("clearFocus")
      view.focus = true
    },
    dragstart(view, index , e) {
      this.$emit("dragstartEvent",view,index,e)
    },
  },
  components: {

  },
}
</script>

<style lang="scss" scoped>
.selected {
  border: 2px solid rgba(0,108,255);
}

.componenthover:hover{
  border: 1px dashed rgb(0,108,255);
}

</style>