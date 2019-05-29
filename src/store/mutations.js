// 根级 mutations

import * as types from '@/store/mutations-types'

export default {
  [types.GLOBAL_LEFT_BAR_MUTATIONS] (state, payload) {
    state.leftBar = payload
  }
}
