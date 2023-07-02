<template>
  <div class="query">
    <h1>This is an query test page</h1>
    <ul>
      <li v-for="(value, key) in query" :key="key">{{ key }}: {{ value }}</li>
    </ul>
    <button @click="goBack">返回</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  name: "Query",
  setup() {
    // 全局路由对象
    let router = useRouter();

    // 当前路由对象
    let route = useRoute();

    // console.log("route", route);

    // query 传递过来的参数都是字符串
    console.log("route.query", route.query);
    console.log("route.query.obj", JSON.parse(route.query.obj));

    // 返回
    let goBack = () => {
      router.back();
    };

    return {
      goBack,
      query: route.query,
    };
  },
});
</script>

<style scoped lang="scss">
.query {
  button {
    padding: 0 10px;
    font-size: 18px;
    margin-top: 10px;
  }
}
</style>
