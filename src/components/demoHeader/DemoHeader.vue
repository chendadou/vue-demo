<template>
  <div>
    <input
      class="task-name"
      type="text"
      placeholder="请输入任务名称"
      v-model="task"
      @keydown.enter="addTask"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "demoHeader",
  setup() {
    let task = ref("");

    // 新增任务
    let addTask = () => {
      console.log(task.value);
    };
    return {
      task,
      addTask,
    };
  },
});
</script>

<style scoped lang='scss'>
.task-name {
  width: -webkit-fill-available;
  height: 36px;
  line-height: 36px;
  padding: 5px;
  margin-bottom: 5px;
}
</style>
