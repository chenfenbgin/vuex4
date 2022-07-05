import { mapState, useStore } from "vuex";
import { computed } from "vue";

export function useState(mapper) {
  // mapState(["counter", "name", "age"]): 不能写死
  // 获取到对应的对象的functions： [name: function, age: function]
  const storeStateFns = mapState(mapper);
  const store = useStore();

  const storeState = {};
  Object.keys(storeStateFns).forEach((fnKey) => {
    const fn = storeStateFns[fnKey].bind({ $store: store });
    storeState[fnKey] = computed(fn);
  });

  return storeState;
}
