const state = {
  showFooter: true,
  changeableNum: 30
}

const getters = {
  isShow (state) {
    return state.showFooter
  },
  getChnagedNum () {
    return state.changableNum
  }
}

const mutations = {
  show (state) {
    state.showFooter = true
  },
  hide (state) {
    state.showFooter = false
  },
  newNum (state, num) {
    state.changeableNum += num
  }
}

const actions = {
  hideFooter (context) {
    context.commit('hide')
  },
  showFooter (context) {
    context.commit('show')
  },
  getNewNum (context, num) {
    context.commit('newNum', num)
  }
}

export default{
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
