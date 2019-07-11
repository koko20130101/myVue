const state = {
  info: {}
}

const getters = {}

const mutations = {
  // 更新用户信息
  updateInfo (state, info) {
    // 去重合并对象
    state.info = {...state.info, ...info}
  }
}

const actions = {
  restoreInfo ({commit}) {
    try {
      // 从本地存储中获取数据
    } catch (error) { }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
