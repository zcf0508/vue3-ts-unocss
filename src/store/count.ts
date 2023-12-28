import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  // 定义状态
  state() {
    return { count: 0 };
  },

  getters:{
    double(state) {
      return state.count * 2;
    },
  },
  actions: {
    async increment() {
      return Promise.resolve().then(() => {
        this.count += 1;
      });
    },
    add(payload: number) {
      this.count = this.count + payload;
    },
  },
});
