import Vue from 'vue'
import Vuex from 'vuex'
import * as types from '@/store/mutations-types'
// 模块 mutations and actions
import mutations from '@/store/mutations'
import actions from '@/store/actions'

// modules
import user from '@/store/modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user
  },
  // 根级 state
  state: {
    leftBar: true,
    [types.GLOBAL_TODO_MUTATIONS]: [
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
  },
  // 根级 getters
  getters: {
    doneTodos: state => {
      return state[types.GLOBAL_TODO_MUTATIONS].filter(todo => todo.done)
    }
  },
  mutations,
  actions
})

export default store
