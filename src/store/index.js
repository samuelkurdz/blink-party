import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    singleUserDetail: {},
  },
  mutations: {
    setUsersList: (state, data) => {
      state.users = data;
    },
  },
  actions: {
    pushUsersFromDataBaseToAttendeeList({ commit }, user) {
      commit('setUsersList', user);
    },
  },
  modules: {
  },
});
