<template>
  <div>
    <div>count的值为: {{ count }}</div>
    <div>double的值为: {{ double }}</div>
    <el-button type="primary" @click="increment">
      增加count值
    </el-button>
    <div>title的值为: {{ title }}</div>
    <el-button @click="decrement">
      修改title的值
    </el-button>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
  computed,
  watch,
  onMounted
} from "vue";
export default defineComponent({
  setup() {
    const count = ref(0);
    const increment = () => {
      count.value++;
    };
    const state = reactive({
      title: "",
      decrement: () => {
        state.title += "hi!";
      }
    });
    watch([count, () => state.title], () => {
      document.title = "updated " + state.title + count.value;
    });
    const double = computed(() => count.value * 2);
    onMounted(() => {
      console.info("onMounted");
    });
    return {
      ...toRefs(state),
      count,
      increment,
      double
    };
  }
});
</script>

<style scoped>
div {
  margin: 10px 0;
}
</style>
