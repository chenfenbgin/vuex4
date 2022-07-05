<template>
  <h2>Home: {{ $store.state.counter }}</h2>
  <hr />
  <h2>Home: {{ sCounter }}</h2>
  <h2>{{ counter }}</h2>
  <hr />
</template>

<script>
import { useState } from "../hooks/useState";
export default {
  setup() {
    // useState两种写法， 交给useState.js中的mapState，它本身支持这两种写法的
    const storeState = useState(["counter", "name"]);
    const storeState2 = useState({
      sCounter: (state) => state.counter,
      sName: (state) => state.name,
    });
    return {
      ...storeState,
      ...storeState2,
    };
  },
};
</script>

<style lang="scss" scoped></style>
