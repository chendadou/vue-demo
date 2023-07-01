<template>
  <div class="params">
    <h1>This is an params test page</h1>
    <ul>
      <li v-for="(value, key) in params" :key="key">{{key}}: {{value}}</li>
    </ul>
    <button @click="goBack">返回</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  name: "Params",
  setup() {
    // 全局路由对象
    let router = useRouter();

    // 当前路由对象
    let route = useRoute();

    // console.log("route", route);

    // params 传递过来的参数都是字符串
    console.log("route.params", route.params);
    console.log("route.params.obj", JSON.parse(route.params.obj));

    // 返回
    let goBack = () => {
      router.back();
    };

    return {
      goBack,
      params: route.params,
    };
  },
});
</script>
