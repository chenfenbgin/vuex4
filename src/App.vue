<template>
  <home-page></home-page>
  <!-- <h2>{{ counter }}</h2> -->
  <h2>App: {{ $store.state.counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
</template>

<script>
import HomePage from "./pages/HomePage";
export default {
  name: "App",
  components: {
    HomePage,
  },
  // data() {
  //   return {
  //     message: "hello world",
  //     // counter: 0, 提取到store/index.js中的 state,但是需要使用$store.state.counter
  //   };
  // },
  methods: {
    increment() {
      // this.counter++;
      // 下面的操作违反了单向数据操作原则，应该提交mutation
      // this.$store.state.counter++;
      this.$store.commit("increment");
    },
    decrement() {
      // this.counter--;
      this.$store.commit("decrement");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: an tialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
