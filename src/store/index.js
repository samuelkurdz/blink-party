import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    isLoggedIn: false,
    users: [],
    singleUserDetail: {},
  },
  mutations: {
    setUsersList: (state, data) => {
      state.users = data;
    },
    setToken(state, token) {
      state.token = token;
      // simplified line
      state.isLoggedIn = token != null;
    },
  },
  actions: {
    pushUsersFromDataBaseToAttendeeList({ commit }, user) {
      commit('setUsersList', user);
    },
    // admin login/logout
    setToken({ commit }, token) {
      commit('setToken', token);
    },
  },
  modules: {
  },
});
