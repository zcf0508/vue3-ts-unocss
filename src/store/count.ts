import { hamiVuex } from '@/store';

export const counterStore = hamiVuex.store({
  // 设置一个唯一名称，方便调试程序和显示错误信息
  $name: 'counter',

  // 定义状态
  $state() {
    return { count: 0 };
  },

  async increment() {
    return Promise.resolve().then(() => {
      this.$patch({
        count: this.count + 1,
      });
    })
  },

  async add(payload: number) {
    return Promise.resolve().then(() => {
      this.$patch({
        count: this.count + payload,
      });
    })
  },

  get double(): number {
    return this.count * 2;
  },
});
