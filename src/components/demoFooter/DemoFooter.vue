<template>
  <div>
    <div>已完成{{ completeNum }} / 全部{{ all }}</div>
    <div v-if="completeNum > 0">
      <button>清除已完成</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "demoFooter",
  setup() {
    let completeNum = ref(1);
    let all = ref(3);
    return {
      completeNum,
      all,
    };
  },
});
</script>

<style scoped lang='scss'>
</style>
