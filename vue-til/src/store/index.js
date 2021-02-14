import Vue from 'vue';
import Vuex from 'vuex';
import {
  deleteCookie,
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from '@/utils/cookies';
import { loginUser, registerUser } from '@/api/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: getAuthFromCookie() || '',
    username: getUserFromCookie() || '',
  },
  getters: {
    isLogin(state) {
      return state.username !== '';
    },
  },
  mutations: {
    setUserInfo(state, payload) {
      state.token = payload.token;
      state.username = payload.username;
      saveAuthToCookie(payload.token);
      saveUserToCookie(payload.username);
    },
    clearUserInfo(state) {
      state.token = '';
      state.username = '';
      deleteCookie('til_auth');
      deleteCookie('til_user');
    },
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      commit('setUserInfo', {
        token: data.token,
        username: data.user.username,
      });
      return data;
    },
    async SIGNUP(context, userData) {
      const { data } = await registerUser(userData);
      return data;
    },
  },
});
