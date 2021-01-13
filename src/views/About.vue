<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button type="primary" @click="decrease">-</el-button>
    <span style="margin: 0 10px;">{{ count }}</span>
    <el-button type="primary" @click="increase">+</el-button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const count = computed(() => store.state.count);
    const increase = () => {
      store.commit("increase");
    };
    const decrease = () => {
      store.commit("decrease");
    };
    return { count, increase, decrease };
  }
});
</script>
