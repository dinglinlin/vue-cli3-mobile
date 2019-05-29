import * as types from '@/store/mutations-types.js'

// state
const state = {
  userInfo: {
    name: 'smalin',
    age: 24
  },
  todos: [
    {
      id: 1,
      done: false,
      name: 'smalin'
    }, {
      id: 2,
      done: true,
      name: 'dinglin'
    }
  ]
}

// getters
const getters = {
  doneTodos: state => {
    return state.todos.filter(todo => todo.done)
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
  getters,
  actions,
  mutations
}
