// 1、创建一个仓库
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      counter: 100,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
  },
});

// 2、将仓库导出
export default store;
