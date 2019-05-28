import Vue from 'vue'
import Vuex from 'vuex'
import * as types from '@/store/mutations-types'
import user from '@/store/user/index'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user
  },
  state: {
    leftBar: true
  },
  mutations: {
    [types.GLOBAL_LEFT_BAR_MUTATIONS] (state, payload) {
      state.leftBar = payload
    }
  }
})

export default store
