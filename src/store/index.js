import { createStore } from "vuex"

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import modules from './modules'

export default createStore({
  strict: false,
  state,
  mutations,
  getters,
  actions,
  modules: {
    ...modules
  }
})
