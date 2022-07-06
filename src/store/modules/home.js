// 一个模块，本身就是一个对象而已
const homeModule = {
  namespaced: true,
  state() {
    return {
      homeCounter: 300,
    };
  },
  getters: {
    doubleHomeCounter(state) {
      return state.homeCounter * 2;
    },
  },
  mutations: {
    increment(state) {
      state.homeCounter++;
    },
  },
  actions: {
    incrementAction(context) {
      context.commit("increment");
    },
  },
};
export default homeModule;
