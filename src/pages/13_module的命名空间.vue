<template>
  <div>
    <h2>root: {{ $store.state.rootCounter }}</h2>
    <h2>home: {{ $store.state.home.homeCounter }}</h2>
    <h2>user: {{ $store.state.user.userCounter }}</h2>

    <hr />
    <!-- 不可以这么拿$store.state.home.getters.doubleHomeCounter -->
    <!-- home模块中获取getters中的函数, 没有命名空间的写法  -->
    <!-- doubleCounter: {{ $store.getters.doubleHomeCounter }} -->

    <!-- 有namespace的写法 -->
    <h2>doubleHomeCounter: {{ $store.getters["home/doubleHomeCounter"] }}</h2>

    <button @click="homeIncrement">home+1</button>
    <!-- 模块中派发事件 -->
    <button @click="homeIncrementAction">home+1</button>
  </div>
</template>

<script>
export default {
  methods: {
    homeIncrement() {
      // this.$store.commit("increment");
      // 有命名空间了，需要指定模块
      this.$store.commit("home/increment");
    },
    homeIncrementAction() {
      this.$store.dispatch("home/incrementAction");
    },
  },
};
</script>

<style scoped></style>
