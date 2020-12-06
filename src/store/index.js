import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    isLoggedIn: false,
    users: [],
    singleUserDetail: null,
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
    removeUserFromList: (state, userId) => {
      state.users.forEach((user, index) => {
        if (user.id === userId) {
          state.users.splice(index, 1);
        }
      });
    },
    setSingleUser: (state, userDetails) => {
      state.singleUserDetail = userDetails;
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
    removeUserAction({ commit }, userId) {
      commit('removeUserFromList', userId);
    },
    setSingleUserAction({ commit }, userDetails) {
      commit('setSingleUser', userDetails);
    },
  },
  modules: {
  },
  getters: {
    loginState: (state) => state.isLoggedIn,
    userState: (state) => state.singleUserDetail,
    allUsers: (state) => state.users,
  },
});
