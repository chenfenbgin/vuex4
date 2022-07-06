<template>
  <hr />
  <h2>当前计数 -> {{ $store.state.counter }}</h2>

  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
  <hr />
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.dispatch("incrementAction", { count: 200 });
    },

    // 派发方式一：
    // decrement() {
    //   this.$store.dispatch("decrementAction");
    // },
    // 派发方式二：对象类型
    decrement() {
      this.$store.dispatch({
        type: "decrementAction",
        count: 200,
      });
    },
  },
  mounted() {
    // 对于页面来说，我们只需要做一次时间的配发就行了
    this.$store.dispatch("getHomeMultidata");
  },
};
</script>

<style lang="scss" scoped></style>
