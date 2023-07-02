<template>
  <div class="child">
    <h2>this is a child page.</h2>

    <!-- props 接收的数据可直接在模板中使用 -->
    <div>[Child Page] 父组件传递过来的数据：{{ message }}</div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";

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
  setup(props, ctx) {
    // 父组件向子组件传递的数据
    console.log("props.message: ", props.message);

    let childMsg = ref("the message from child page.");

    // 子组件向父组件传递数据，通过 ctx.emit 分发事件
    // ctx(事件名称，传递的数据)
    onMounted(() => {
      ctx.emit("send", childMsg.value);
    });

    return {};
  },
});
</script>

<style scoped lang="scss">
.child {
  border: 1px solid #ccc;
  margin: 5px;
  padding: 10px;
}
</style>
