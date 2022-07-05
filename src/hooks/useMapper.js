import { useStore } from "vuex";
import { computed } from "vue";

export function useMapper(mapper, mapFn) {
  const storeStateFns = mapFn(mapper);
  const store = useStore();

  const storeState = {};
  Object.keys(storeStateFns).forEach((fnKey) => {
    const fn = storeStateFns[fnKey].bind({ $store: store });
    storeState[fnKey] = computed(fn);
  });

  return storeState;
}
