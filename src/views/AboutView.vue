<template>
  <div class="about">
    <h1>This is an about page</h1>
    <child :message="msg"></child>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Child from "@/components/child/Child.vue";

export default defineComponent({
  name: "About",
  components: {
    Child,
  },
  setup() {
    let msg = ref("the message from about page.");
    return {
      msg,
    };
  },
});
</script>
