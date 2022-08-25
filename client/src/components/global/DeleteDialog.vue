<template>
  <div>
    <el-dialog
      title="提示"
      v-model="dialogVisible"
      width="30%"
      v-if="edit"
      :show-close="false"
    >
      <span>确定删除这个组件吗</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click.stop="unVisiable">取 消</el-button>
          <el-button type="primary" @click.stop="delCom"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
    emits:['delComEvent','update:dialogVisible'],
    props:['dialogVisible','edit'],
    methods: {
        delCom(){
            this.$emit("delComEvent")
        },
        unVisiable(){
            this.$emit("update:dialogVisible",false)
        }
    },
}
</script>

<style>

</style>