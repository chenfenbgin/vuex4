<template>
  <hr />
  <h2>当前计数 -> {{ $store.state.counter }}</h2>

  <button @click="$store.commit('increment')">+1</button>
  <button @click="$store.commit('decrement')">-1</button>

  <button @click="increment_n({ n: 10 })">+10</button>

  <hr />
</template>

<script>
import { INCREMENT_N } from "../store/mutation-types";
import { mapMutations } from "vuex";

export default {
  setup() {
    // 对象， key放的是increment， value是函数
    const storeMutations = mapMutations([
      "increment",
      "decrement",
      INCREMENT_N,
    ]);
    return {
      ...storeMutations,
    };
  },
};
</script>

<style lang="scss" scoped></style>
