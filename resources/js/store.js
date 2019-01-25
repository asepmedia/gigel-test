import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import {getUser, checkToken, passportToken} from './utils/Auth'


const store = new Vuex.Store({
  state: {
    loading: false,
    profile: getUser(),
    isLogin: checkToken(),
    token: passportToken()
  },
  mutations: {  
    setLoading (state, n) {
      state.loading = n
    },
    setLogin (state, n) {
      state.isLogin = n
    }
  },
})

export default store