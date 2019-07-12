import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { // 状态模块
    app,
    user,
    permission
  }
})
