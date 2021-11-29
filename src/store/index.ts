// store.ts
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

import { State as CountState } from "./modules/count";
import modules from "./modules";

import { Getters, Dispatch, Commit } from "./utils";

export interface State {
  count: CountState;
}

interface UseStoreHooks {
  state: State;
  getters: Getters;
  commit: Commit;
  dispatch: Dispatch;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  modules,
});

// 定义自己的 `useStore` 组合式函数
export function useStore() {
  const store = baseUseStore<State>(key);

  const { state, getters, dispatch, commit }: UseStoreHooks = store;

  return {
    state,
    getters,
    commit,
    dispatch,
  };
}
