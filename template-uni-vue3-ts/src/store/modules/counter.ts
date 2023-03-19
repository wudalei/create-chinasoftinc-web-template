// stores/counter.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 };
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    // 加任何数
    increment(n = 1) {
      this.count += n;
    },
  },
  // getters的含义是计算得到一个计算过的state
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
});
