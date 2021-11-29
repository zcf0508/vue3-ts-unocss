import { ActionTree, MutationTree, Commit } from "vuex";

const state = {
  count: 0,
};

export type State = typeof state;

const mutations = {
  INCREMENT(state: State) {
    // 变更状态
    state.count++;
  },
  ADD(state: State, payload: number) {
    // 变更状态
    state.count += payload;
  },
};

const actions = {
  increment({ commit }: { commit: Commit }) {
    return new Promise((resolve, reject) => {
      commit("INCREMENT");
    });
  },
  add({ commit }: { commit: Commit }, payload: number) {
    return new Promise((resolve, reject) => {
      commit("ADD", payload);
    });
  },
};

const getters = {
  count: (state: State) => state.count,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
