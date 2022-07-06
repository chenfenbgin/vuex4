<template>
  <hr />
  <h2>当前计数 -> {{ $store.state.counter }}</h2>

  <button @click="increment">+1</button>
  <hr />
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.dispatch("incrementAction");
    },
  },
  mounted() {
    // 对于页面来说，我们只需要做一次时间的配发就行了
    this.$store.dispatch("getHomeMultidata");
  },
};
</script>

<style lang="scss" scoped></style>
