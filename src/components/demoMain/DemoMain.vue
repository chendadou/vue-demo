<template>
  <div v-for="(item, index) in list" :key="index" class="items">
    <input type="checkbox" v-model="item.complete" class="check-input" />
    {{ item.title }}
    <button @click="deleteTask(item, index)" class="delete-btn">删除</button>
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

    // 删除任务
    let deleteTask = (item, index) => {
      console.log("delete", item, index);
    };
    return {
      list,
      deleteTask,
    };
  },
});
</script>

<style scoped lang='scss'>
.items {
  padding: 10px 5px;
  height: 36px;
  line-height: 36px;
  border-radius: 3px;
  position: relative;
  cursor: pointer;

  .check-input {
    zoom: 120%;
  }

  .delete-btn {
    position: absolute;
    top: 12px;
    right: 5px;
    z-index: 99;
    padding: 0 10px;
    display: none;
  }

  &:hover {
    background-color: #ccc;
    .delete-btn {
      display: block;
    }
  }
}
</style>
