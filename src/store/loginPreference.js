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
      console.log('Set Tool Bar Is Work !!!')
      state.isShowToolBar = isShowToolBar
    }
  },
  getters: {
    getIsShowToolBar: function (state) {
      return state.isShowToolBar
    }
  }
}
