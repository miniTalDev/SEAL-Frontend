export const favouritePreference = {
  state: {
    favoriteSubject: []
  },
  actions: {
    setFavoriteSubject: function ({ commit }, favoriteSubject) {
      commit('setfavoriteSubject', favoriteSubject)
    }
  },
  mutations: {
    setfavoriteSubject: function (state, favoriteSubject) {
      state.favoriteSubject = favoriteSubject
    }
  },
  getters: {
    getfavoriteSubject: function (state) {
      return state.favoriteSubject
    }
  }
}
