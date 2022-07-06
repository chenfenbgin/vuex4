<template>
  <hr />
  <h2>当前计数 -> {{ $store.state.counter }}</h2>

  <!-- 1、每次提交都是通过这种方式，太繁琐了： $store.commit('increment') -->
  <button @click="$store.commit('increment')">+1</button>
  <button @click="$store.commit('decrement')">-1</button>

  <button @click="increment_n({ n: 10 })">+10</button>

  <!-- 3、对象写法 -->
  <button @click="add">+1</button>
  <button @click="sub">-1</button>
  <hr />
</template>

<script>
import { INCREMENT_N } from "../store/mutation-types";
import { mapMutations } from "vuex";

export default {
  methods: {
    // 2、使用mapMutation, 映射，帮我们做提交
    // 2.1 数组写法
    ...mapMutations(["increment", "decrement", INCREMENT_N]),

    // 2.3 对象写法
    ...mapMutations({
      add: "increment",
      sub: "decrement",
    }),
  },
};
</script>

<style lang="scss" scoped></style>
