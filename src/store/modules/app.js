import {api} from '@/api'
import {REQ_RETRY_TIME} from '@/config'

const state = {
  token: '',
  index: {},
  menuList: [] // 左侧导航菜单
}

const getters = {
  isLogin (state, getters, rootState) {
    return state.token !== '' && rootState.user.infos.userName !== void 0
  }
}

const mutations = {
  setToken (state, token) {
    state.token = token
  },
  // 登录后默认页
  updateIndex (state, firstPage) {
    state.index = firstPage
  },
  // 更新左侧菜单
  updateMenuList (state, menu) {
    state.menuList = menu
  }
}

const actions = {
  // 登录
  login ({commit}, params) {
    return api.doLogin(params).then(res => {
      // 解构赋值
      const {data: {data}} = res
      const {token, ...userInfo} = data
      // void其实是javascript中的一个函数，接受一个参数，返回值永远是undefined
      // 重命名userId
      if (userInfo.id && userInfo.userId === void 0) {
        userInfo.userid = userInfo.id
      }
      // 设置状态中的token
      commit('setToken', token)
      // 设置用户状态模块中的用户信息
      commit('user/updateInfo', userInfo, {root: true})
      return res
    })
  },
  // 登出
  async logout () {
    try {
      //
    } catch (error) {
      //
    }
  },
  // 获取左侧导航
  fetchMenus ({commit}) {
    return new Promise((resolve) => {
      // 立即执行函数
      (function retry () {
        api.findMenus().then(res => {
          commit('updateIndex', res.data.data.index)
          commit('updateMenuList', res.data.data.menuList)
          resolve(res)
        }).catch(e => {
          let myTimeout = setTimeout(() => {
            retry()
            clearTimeout(myTimeout)
          }, REQ_RETRY_TIME)
        })
      }())
    })
  },
  // 从本地存储中获取左侧导航
  restoreMenuList ({commit}) {

  }
}

export default {
  namespaced: true, // 解决不同模块命名冲突的问题，各页面引用时要加上模块名
  state,
  mutations,
  actions,
  getters
}
