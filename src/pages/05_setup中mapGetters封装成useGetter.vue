<template>
  <hr />
  <!-- <h2>总价值：{{totalPrice}}</h2> -->
  <h2>总价值：{{ $store.getters.totalPrice }}</h2>

  <!-- getters本身是不能接受参数的，可以返回一个函数 -->
  <h2>总价值：{{ $store.getters.totalPriceCounteGreateN(1) }}</h2>

  <!-- 获取getters中的nameInfo,ageInfo, 但是这种写法跟之前获取state一样，不推荐，使用computed-->
  <h2>nameInfo-> {{ $store.getters.nameInfo }}</h2>
  <h2>ageInfo-> {{ $store.getters.ageInfo }}</h2>
  <h2>heightInfo-> {{ $store.getters.heightInfo }}</h2>

  <!-- 使用computed获取getters: 数组写法 -->
  <!-- <h2>computed： getters -> {{ nameInfo }}</h2>
  <h2>computed： getters -> {{ ageInfo }}</h2>
  <h2>computed： getters -> {{ heightInfo }}</h2> -->

  <!-- 对象写法 -->
  <h2>computed： getters -> {{ sNameInfo }}</h2>
  <h2>computed： getters -> {{ sAgeInfo }}</h2>
  <h2>computed： getters -> {{ sHeightInfo }}</h2>
  <hr />
</template>

<script>
import { mapGetters } from "vuex";
export default {
  // 不推荐这么使用，如果很多地方用到的话， 应该使用getter了。
  // computed: {
  //   totalPrice(){
  //     return this.$store.state.books.reduce()
  //   }
  // }
  // 属性太对，也不推荐这么做，应该使用辅助函数，mapGetters
  // computed: {
  //   nameInfo() {
  //     return this.$store.getters.nameInfo;
  //   },
  // },

  // mapGetters数组写法
  // computed: {
  //   ...mapGetters(['nameInfo', 'ageInfo', 'heightInfo'])
  // }

  // mapGetters对象写法
  computed: {
    ...mapGetters({
      // 对象写法，跟state不一样， counter: state => state.counter
      sNameInfo: "nameInfo",
      sAgeInfo: "ageInfo",
      sHeightInfo: "heightInfo",
    }),
  },
};
</script>

<style lang="scss" scoped></style>
