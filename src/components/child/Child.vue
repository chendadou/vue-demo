<template>
  <div>this is a child page.</div>

  <!-- props 接收的数据可直接在模板中使用 -->
  <div>父组件传递过来的数据：{{ message }}</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Child",

  // props 接收父组件传递过来的数据，而且这些数据不能直接修改
  props: {
    message: {
      // 数据类型校验
      type: String,

      // 默认值，若 required: true，那么没必要设置这个默认值
      default: "default value",

      // 是否必传，required 默认是 false，可根据实际场景需要将其修改为 true
      required: false,
    },
  },
  setup(props) {
    console.log("props.message: ", props.message);
    return {};
  },
});
</script>
