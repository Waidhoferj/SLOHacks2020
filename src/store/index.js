import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {},
    analysis: {}
  },
  mutations: {
    updateUserInfo(state, info) {
      state.userInfo = info;
    },
    updateAnalysis(state, results) {
      state.analysis = results;
    }
  },
  actions: {},
  modules: {}
});
