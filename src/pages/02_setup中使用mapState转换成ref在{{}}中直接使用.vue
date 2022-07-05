<template>
  <h2>Home: {{ $store.state.counter }}</h2>
  <hr />
  <h2>Home: {{ sCounter }}</h2>
  <h2>{{ counter }}</h2>
  <hr />
</template>

<script>
import { mapState, useStore } from "vuex";
import { computed } from "vue";
export default {
  computed: {
    fullCounter: function () {
      return "counter...";
    },
  },
  setup() {
    const store = useStore();
    const sCounter = computed(() => store.state.counter);

    // 返回的是一个函数，...展开，也是一个个函数
    // 1、解决方案：counter => function => computed(function) => counter
    const storeStateFns = mapState(["counter", "name", "age"]);

    // 3、需要保存ref
    const storeState = {};
    // 2、获取storeState对象中的key, {name: function, age: function, height: function}
    Object.keys(storeStateFns).forEach((fnKey) => {
      // const fn = storeStateFns[fnKey]; // 取到函数,这么取值是娶不到的，应该绑定this
      const fn = storeStateFns[fnKey].bind({ $store: store });

      // 4、进行保存
      storeState[fnKey] = computed(fn); //使用computed进行包裹，生成sCounter一样的ref
    });

    return {
      sCounter,
      ...storeState,
    };
  },
};
</script>

<style lang="scss" scoped></style>
