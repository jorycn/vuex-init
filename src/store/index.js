import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)
Vue.config.debug = true

const state = {
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  strict: true
})
