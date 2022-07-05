<template>
  <h2>Home: {{ $store.state.counter }}</h2>
  <!-- 1、通过计算属性展示 -->
  <h2>Home: {{ sName }}</h2>

  <!-- 4、通过mapState数组映射后获取 -->
  <h2>Home: {{ counter }}</h2>
  <!-- 6、通过mapState对象写法映射后获取 -->
  <h2>Home: {{ objCounter }}</h2>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    // 2、这种获取计算属性，如果有多个太麻烦了，我们应该使用mapState进行映射
    // sCounter() {
    //   return this.$store.state.counter;
    // },
    sName() {
      return this.$store.state.name;
    },
    // 3、其他的计算属性，从state获取；mapState有两种写法： 对象  | 数组写法
    // 注意：mapState返回的是一个对象,需要使用展开运算符
    ...mapState(["name", "counter", "age"]),

    // 5、对象写法
    ...mapState({
      objCounter: (state) => state.counter,
      objName: (state) => state.name,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
