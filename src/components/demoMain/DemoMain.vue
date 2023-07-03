<template>
  <div class="main">
    <div v-if="list.length > 0">
      <div v-for="(item, index) in list" :key="index" class="items">
        <input type="checkbox" v-model="item.complete" class="check-input" />
        {{ item.title }}
        <button @click="deleteTask(item, index)" class="delete-btn">删除</button>
      </div>
    </div>
    <div v-else class="none">
      暂无任务
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "demoMain",
  props: {
    list: {
      type: Array,
      required: true,
    }
  },
  emits: ['del'],
  setup(props, ctx) {

    // 删除任务
    let deleteTask = (item, index) => {
      ctx.emit('del', index);
      // console.log("delete", item, index);
    };
    return {
      deleteTask,
    };
  },
});
</script>

<style scoped lang='scss'>
.main {
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

  .none {
    padding: 10px 5px;
  }
}
</style>
