export const headerContentPreference = {
  state: {
    headerContent: 'SIT Elearning'
  },
  actions: {
    setHeaderContent: function ({ commit }, headerContent) {
      commit('setHeaderContent', headerContent)
    }
  },
  mutations: {
    setHeaderContent: function (state, headerContent) {
      state.headerContent = headerContent
    }
  },
  getters: {
    getHeaderContent: function (state) {
      return state.headerContent
    }
  }
}
