/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-06-21 09:18:46
 * @LastEditTime: 2021-06-27 14:14:39
 */
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
