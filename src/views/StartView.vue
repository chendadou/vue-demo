<template>
  <div>
    <button @click="start">开始任务</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Start",
  setup() {
    let router = useRouter();

    // console.log("router", router);

    let start = () => {
      router.push({
        path: "/home",
      });

      // 或者用：router.push("/home");
    };
    return {
      start,
    };
  },
});
</script>
