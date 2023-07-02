<template>
  <div class="params">
    <h1>This is an params test page</h1>
    <div>{{ name }} || {{ age }} || {{ obj }}</div>
    <button @click="goBack">返回</button>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  name: "Params",

  // 组件创建的过程
  setup() {
    // 全局路由对象
    let router = useRouter();

    // 当前路由对象
    let route = useRoute();

    let name = ref("");
    let age = ref(0);
    let obj = ref({});

    // 组件挂载的过程
    // 包括数据、dom等等
    // 1. 发送请求（前后端接口联调）
    // 2. 数据的初始化操作（比如接收路由传递的参数）
    onMounted(() => {
      console.log("onMounted");
      name.value = route.params.name;
      age.value = route.params.age;
      obj.value = JSON.parse(route.params.obj);
    });

    // 组件卸载的过程
    // 用于清除计时器、清除闭包函数
    onUnmounted(() => {
      console.log("onUnmounted");
    });

    console.log("setup");

    // 关于 setup / onMounted / onUnMounted，掌握常用生命周期及其使用场景，打印的结果可以自己看下

    // console.log("route", route);

    // params 传递过来的参数都是字符串
    // console.log("route.params", route.params);
    // console.log("route.params.obj", JSON.parse(route.params.obj));

    // 返回
    let goBack = () => {
      router.back();
    };

    return {
      goBack,
      name,
      age,
      obj,
    };
  },
});
</script>

<style scoped lang="scss">
.params {
  button {
    padding: 0 10px;
    font-size: 18px;
    margin-top: 10px;
  }
}
</style>
