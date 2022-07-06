<template>
  <hr />
  <h2>当前计数 -> {{ $store.state.counter }}</h2>

  <button @click="incrementAction">+1</button>
  <button @click="decrementAction">-1</button>

  <!-- 对象写法 -->
  <button @click="add">+1</button>
  <button @click="sub">-1</button>
  <hr />
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    // 1、数组写法
    ...mapActions(["incrementAction", "decrementAction"]),
    // 2、对象写法
    ...mapActions({
      // add，可以重新命名
      add: "incrementAction",
      sub: "decrementAction",
    }),
  },

  setup() {
    const actions = mapActions(["incrementAction", "decrementAction"]);
    return {
      ...actions,
    };
  },
};
</script>

<style lang="scss" scoped></style>
