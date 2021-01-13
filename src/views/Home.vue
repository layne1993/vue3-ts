<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div style="margin-bottom: 20px">
      If Element Plus is successfully added to this project, you'll see an
      &lt;el-button&gt;bellow
    </div>
    <el-button type="primary">el-button</el-button>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld
  }
});
</script>
