import {
  SIGNIN
} from './mutation-types'

const mutations = {
  [SIGNIN] (state, data) {
    state.uin = data
  }
}

export default mutations
