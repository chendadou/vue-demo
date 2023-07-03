<template>
  <div class="footer">
    <div>已完成{{ completeNum }} / 全部{{ list.length }}</div>
    <div v-if="completeNum > 0" class="clear-btn">
      <button @click="clearCompleteTask">清除已完成</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "demoFooter",
  props: {
    list: {
      type: Array,
      required: true,
    }
  },
  setup() {
    let completeNum = ref(1);

    // 清除已完成
    let clearCompleteTask = () => {
      console.log("clear");
    };
    return {
      completeNum,
      clearCompleteTask,
    };
  },
});
</script>

<style scoped lang='scss'>
.footer {
  display: flex;
  align-items: center;
  padding-left: 5px;
  margin-top: 10px;

  .clear-btn {
    margin-left: 10px;

    button {
      padding: 0 10px;
    }
  }
}
</style>
