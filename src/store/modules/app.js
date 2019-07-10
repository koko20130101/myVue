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
  updateMenuList (state, menu) {
    state.menuList = menu
  }
}

const actions = {
  login ({commit}, params) {
    //
  },
  async logout () {
    try {
      //
    } catch (error) {
    }
  },
  // 获取左侧导航
  fetchMenus ({commit}) {
    //
  },
  // 从本地存储中获取左侧导航
  restoreMenuList ({commit}) {

  }
}
