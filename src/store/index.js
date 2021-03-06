import Vuex from "vuex";
import Vue from "vue";
import mutations from "./mutations.js";
import actions from "./actions.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    asks: [],
    jobs: [],
    user: {},
    item: {},
  },
  getters: {
    fetchedAsk(state) {
      return state.asks;
    },
    fetchedNews(state) {
      return state.news;
    },
    fetchedItem(state) {
      return state.item;
    },
  },
  mutations,
  actions,
});
