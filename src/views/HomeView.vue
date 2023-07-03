<template>
  <!-- html 部分 -->
  <div class="home">
    <h1>todo list</h1>
    <div class="home-content">
      <demo-header @add="addTask"></demo-header>
      <demo-main :list="list" @del="deleteTask"></demo-main>
      <demo-footer :list="list" @clear="clearCompletedTask" :completeNum="completeNum"></demo-footer>
    </div>
  </div>
</template>

<script>
// js 部分
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";

import DemoHeader from "@/components/demoHeader/DemoHeader";
import DemoMain from "@/components/demoMain/DemoMain";
import DemoFooter from "@/components/demoFooter/DemoFooter";

export default defineComponent({
  // 组件名称
  name: "Home",

  // 接收来自父组件的数据
  props: {},

  // 定义子组件
  components: {
    DemoHeader,
    DemoMain,
    DemoFooter,
  },

  // setup 函数
  setup(props, ctx) {
    let store = useStore();
    let list = computed(() => {
      return store.state.list;
    });

    // 已完成总数
    let completeNum = computed(() => {
      const arr = store.state.list.filter(item => item.complete);
      return arr.length;
    });

    // 新增任务（val：新增的任务名称）
    const addTask = (val) => {

      // TODO: 【优化】输入校验：去除前后空格，空值处理

      // 判断新增的任务是否已存在
      let mark = true;
      list.value.map(item => {
        if (item.title === val) {

          // 有重复的任务
          mark = false;
          alert('任务已存在，请勿重复添加！');
        }
      });

      // 没有重复的任务
      if (mark) {

        // 调用 mutations
        store.commit('addTodoTask', {
          title: val,
          complete: false,
        });
      }

      console.log('addTask', val);
    }

    // 删除任务（val：所选任务的数组下标）
    const deleteTask = (val) => {

      // 调用 mutations
      store.commit('deleteTodoTask', val);
      console.log('deleteTask', val);
    }

    // 清空已完成任务
    const clearCompletedTask = (val) => {

      // 调用 mutations
      store.commit('clearTodoTask', val);
      console.log('clearCompletedTask', val);
    }

    return {
      addTask,
      list,
      deleteTask,
      clearCompletedTask,
      completeNum,
    };
  },
});
</script>

<style scoped lang='scss'>
/* css 部分 */
/* scoped：表示样式仅在当前组件生效 */
.home {
  margin: 100px auto;
  padding: 10px;
  width: 500px;
  border: 1px solid #ddd;
  border-radius: 5px;

  h1 {
    text-align: center;
  }

  :not(h1) {
    font-size: 20px;
  }

  .home-content {
    width: 300px;
    margin: 0 auto;
  }
}
</style>
