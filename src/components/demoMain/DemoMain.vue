<template>
  <div v-for="(item, index) in list" :key="index">
    <input type="checkbox" v-model="item.complete" />
    {{ item.title }}
    <button>删除</button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "demoMain",
  setup() {
    let list = ref([
      {
        title: "吃饭",
        complete: true,
      },
      {
        title: "睡觉",
        complete: false,
      },
      {
        title: "打游戏",
        complete: false,
      },
    ]);
    return {
      list,
    };
  },
});
</script>

<style scoped lang='scss'>
</style>
