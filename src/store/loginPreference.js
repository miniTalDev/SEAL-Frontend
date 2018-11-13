export const loginPreference = {
  state: {
    isShowToolBar: true
  },
  actions: {
    setIsShowToolBar: function ({ commit }, isShowToolBar) {
      commit('setIsShowToolBar', isShowToolBar)
    }
  },
  mutations: {
    setIsShowToolBar: function (state, isShowToolBar) {
      state.isShowToolBar = isShowToolBar
    }
  },
  getters: {
    getIsShowToolBar: function (state) {
      return state.isShowToolBar
    }
  }
}
