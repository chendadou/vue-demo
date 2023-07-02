<template>
  <div class="start">
    <h1>1. todo list demo</h1>
    <div>
      <button @click="start">开始任务</button>
    </div>

    <h1>2. 路由传参示例</h1>
    <div>
      <button @click="goQuery">query 传参</button>
    </div>
    <div>
      <button @click="goParams">params 传参</button>
    </div>

    <h1>3. 父子组件传参</h1>
    <div>
      <button @click="goAbout">示 例</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Start",
  setup() {
    // 全局路由对象
    let router = useRouter();

    // console.log("router", router);

    let name = ref("kelly");
    let age = ref(3);
    let obj = ref({
      test: "query",
      num: 123,
    });

    let start = () => {
      router.push({
        path: "/home",
      });

      // 或者用：router.push("/home");
    };

    // query 传参：用 path 或者 name 皆可
    let goQuery = () => {
      router.push({
        // path: '/demo/query',
        name: "Query",
        query: {
          name: name.value,
          age: age.value,
          obj: JSON.stringify(obj.value),
        },
      });
    };

    // params 传参：只能用 name
    // 注意：使用方式和 query 传参有所不同，不能单独使用，否则无法通过 useRoute() 获取到对应的 params
    // 我这边用的方式是修改 router/index.js 中的 path，通过加上 /:name 等来完成 params 传参
    // 当然，还有其他的方式来实现 params 传参，具体的参考以下链接
    // 参考：https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22
    let goParams = () => {
      router.push({
        name: "Params",
        params: {
          name: name.value,
          age: age.value,
          obj: JSON.stringify(obj.value),
        },
      });
    };

    // 父子组件传参
    let goAbout = () => {
      router.push({
        path: "/about",
      });
    };

    return {
      start,
      goQuery,
      goParams,
      goAbout,
    };
  },
});
</script>

<style lang="scss" scoped>
.start {
  button {
    padding: 0 10px;
    font-size: 18px;
    margin-bottom: 10px;
  }
}
</style>
