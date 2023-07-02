<template>
  <div>
    <h1>This is an about page</h1>

    <!-- @send 是子组件里定义的 emit 分发事件，用于子组件向父组件传递数据 -->
    <child :message="msg" @send="print"></child>
    <div>[About Page] 子组件传递过来的数据：{{ childMsg }}</div>

    <button @click="goBack">返回</button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import Child from "@/components/child/Child.vue";

export default defineComponent({
  name: "About",
  components: {
    Child,
  },
  setup() {
    let msg = ref("the message from about page.");
    let childMsg = ref("");
    let router = useRouter();

    // 对于子组件传递过来的数据，打印 + 赋值
    const print = (val) => {
      console.log(val);
      childMsg.value = val;
    };

    // 返回
    const goBack = () => {
      router.back();
    };

    return {
      msg,
      print,
      childMsg,
      goBack,
    };
  },
});
</script>
