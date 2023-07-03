<template>
  <!-- html 部分 -->
  <div class="home">
    <h1>todo list</h1>
    <div class="home-content">
      <demo-header @add="add"></demo-header>
      <demo-main :list="list"></demo-main>
      <demo-footer :list="list"></demo-footer>
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

    let newTask = ref('');
    const add = (val) => {
      newTask.value = val;
      console.log(val);
    }
    
    return {
      add,
      list,
      newTask,
    };
  },
});
</script>

<style scoped lang='scss'>
/* css 部分 */
/* scoped：表示样式仅在当前组件生效 */
.home {
  margin: 20% auto;
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
