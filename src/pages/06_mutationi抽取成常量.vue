<template>
  <hr />
  <h2>当前计数 -> {{ $store.state.counter }}</h2>
  <button @click="$store.commit('increment')">+1</button>
  <button @click="$store.commit('decrement')">-1</button>

  <button @click="addTen">+10</button>
  <hr />
</template>

<script>
import { INCREMENT_N } from "../store/mutation-types";
export default {
  methods: {
    addTen() {
      // this.$store.commit("incrementN", 10);

      // 1、写法一：
      // this.$store.commit("incrementN", { n: 10, age: 2, name: "chen" });

      // 2、写法二：就是另外一种提交风格commit
      this.$store.commit({
        // 直接告诉提交的类型
        type: INCREMENT_N,
        n: 10,
        age: 2,
        name: "chen",
      });

      // 3、将incrementN抽成常量的方式
    },
  },
};
</script>

<style lang="scss" scoped></style>
