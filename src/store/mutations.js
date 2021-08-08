//Vuex에 정의된 state 변수는 반드시 mutations를 이용해서 변경 해야 함...
export default {
  SET_NEWS(state, news) {
    state.news = news;
  },
  SET_ASK(state, asks) {
    state.asks = asks;
  },
  SET_JOBS(state, jobs) {
    state.jobs = jobs;
  },
  SET_USER(state, user) {
    state.user = user;
  },
  SET_ITEM(state, item) {
    state.item = item;
  },
};
