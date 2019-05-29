// 根级 actions

import * as api from '@/api/index'

import * as types from '@/store/mutations-types'

export default {
  [types.GLOBAL_LEFT_BAR_MUTATIONS]: async ({ commit }, userInfo) => {
    commit(types.USER_MODULE_LOGIN, await api.userLogin(userInfo))
  }
}
