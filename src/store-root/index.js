// 1、创建一个仓库
import { createStore } from "vuex";
import { INCREMENT_N } from "./mutation-types";

import axios from "axios";

const store = createStore({
  state() {
    return {
      counter: 100,
      name: "why",
      age: 18,
      height: 1.88,
      books: [
        { name: "深入Vuejs", price: 200, count: 3 },
        { name: "深入Webpack", price: 240, count: 5 },
        { name: "深入React", price: 130, count: 1 },
        { name: "深入Node", price: 220, count: 2 },
      ],
      discount: 0.6,
      banners: [],
    };
  },

  getters: {
    // getters第一个参数：state； 第二个参数，getters
    totalPrice(state, getters) {
      let totalPrice = 0;
      for (const book of state.books) {
        totalPrice = book.count * book.price;
      }
      // return totalPrice;
      // 折上折
      return totalPrice * getters.currentDiscount;
    },
    currentDiscount(state) {
      return state.discount * 0.9;
    },
    // getters本身是不能传参数的,可以返回一个函数
    totalPriceCounteGreateN(state, getters) {
      return function (n) {
        let totalPrice = 0;
        for (const book of state.books) {
          if (book.count > n) {
            totalPrice = book.count * book.price;
          }
        }
        // return totalPrice;
        // 折上折
        return totalPrice * getters.currentDiscount;
      };
    },
    nameInfo(state) {
      return `name: ${state.name}`;
    },
    ageInfo(state) {
      return `age: ${state.age}`;
    },
    heightInfo(state) {
      return `height: ${state.height}`;
    },
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },

    // 如过传过来的是对象，需要payload.n
    [INCREMENT_N](state, payload) {
      state.counter += payload.n;
    },

    addBannerData(state, payload) {
      state.banners = payload;
    },
  },

  actions: {
    // 1、参数问题： 放函数, 第二个参数是传递过来的
    incrementAction(context, payload) {
      console.log(payload);
      // 这里是可以执行异步操作的
      setTimeout(() => {
        context.commit("increment");
      }, 1000);
    },
    // 写法一：
    // decrementAction(context) {
    //   console.log(context);
    // },

    // 2、context的其他属性
    // 写法二：
    decrementAction({
      commit,
      // getters,
      // dispatch,
      // state,
      // rootState,
      // rootGetters,
    }) {
      // console.log(context);
      commit("decrement");
    },
    getHomeMultidata(context) {
      return new Promise((resolve, reject) => {
        axios
          .get("http://123.207.32.32:8000/home/multidata")
          .then((res) => {
            context.commit("addBannerData", res.data.data.banner.list);
            resolve({ name: "coderwhy", age: 18 });
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
});

// 2、将仓库导出
export default store;
