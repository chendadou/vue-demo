<template>
  <!-- html 部分 -->
  <h1>home page</h1>
  <demo-header></demo-header>
  <demo-main></demo-main>
  <demo-footer></demo-footer>
  <div>{{ name }}</div>
  <div>{{ age }}</div>
  <div>{{ arr }} / {{arr[1]}}</div>
  <div>{{ obj }} / {{obj.name}}</div>
</template>

<script>
// js 部分
import { defineComponent, ref } from "vue";
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
    const name = ref("chendadou");
    const age = ref(3);
    const arr = ref(["aaa", "bbb", "ccc"]);
    const obj = {
      name: "test",
      no: 8,
    };
    return {
      name,
      age,
      arr,
      obj,
    };
  },
});
</script>

<style scoped lang='scss'>
/* css 部分 */
/* scoped：表示样式仅在当前组件生效 */
</style>
