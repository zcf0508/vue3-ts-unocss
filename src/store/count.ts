import { hamiVuex } from "@/store";

// 实现原理：动态注册的 Vuex Module 对象
export const counterStore = hamiVuex.store({
  // 设置一个唯一名称，方便调试程序和显示错误信息
  $name: "counter",

  // 定义状态，也可以是返回状态的函数
  $state() {
    return { count: 0 };
  },

  increment(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.$patch({
        count: this.count + 1,
      });
      resolve();
    });
  },

  add(payload: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this.$patch({
        count: this.count + payload,
      });
      resolve();
    });
  },

  get count_value(): number {
    return this.count;
  },
});
