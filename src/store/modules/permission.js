import {api} from '@/api'

const state = {
  // 资源权限 {
  // routerName:{resourceName: resourceValue},
  // _all: {全部}}
  resources: {
    _all: {}
  },
  // 所有资源权限集合
  permissions: {}
}

const getters = {}

const mutations = {
  // 设置资源权限
  setPermissions (state, resourceMap) {
    state.permissions = resourceMap
    console.log(state)
  }
}

const actions = {
  fetchResourceByUserId ({commit, rootState}) {
    let userId = rootState.user.info.userId
    if (userId !== void 0) {
      return api.getResourceByUserId({id: userId}).then(res => {
        // 解构赋值
        let {data: { data }} = res
        // 设置state
        commit('setPermissions', data)
      })
    } else {
      console.log('重新登录')
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
