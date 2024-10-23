<template>
  <div id="app">
    <LuffyHeader />
    <router-view />
    <!-- 到根目录后自动发生跳转，触发路由到home路径 -->
  </div>
</template>

<script>
import LuffyHeader from "./components/common/LuffyHeader.vue";

export default {
  name: "App",
  methods: {
    // 错误的使用vuex，当使用异步时会前后端不一致
  },
  computed: {},
};
// console.log(this);
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
