import * as types from '@/store/mutations-types.js'

// state
const state = {
  userInfo: {
    name: 'smalin',
    age: 24
  }
}

// mutations
const mutations = {
  [types.USER_MODULE_USER_INFO_MUTATIONS] (state, payload) {
    state.userInfo = payload.userInfo
  }
}

// actions
const actions = {

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
