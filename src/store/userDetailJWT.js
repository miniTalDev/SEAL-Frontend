export const userDetailJWT = {
  state: {
    jwtToken: '',
    user: {
      userId: '59130500097',
      userName: 'Au',
      userImg: 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/user.png',
      facultyID: 1,
      programName: 'Bachelor of Science Program in Information Technology',
      programCode: 'B.Sc.IT',
      role: 'ROLE_USER'
    },
    favorite: ''
  },
  actions: {
    setJwtToken: function ({ commit }, jwtToken) {
      commit('setJwtToken', jwtToken)
    },
    setUser: function ({ commit }, user) {
      let temptUser = {
        userId: user.userId,
        userName: user.userName,
        userImg: user.userImg,
        facultyID: 1,
        programName: user.faculty,
        programCode: user.faculty,
        role: 'ROLE_USER'
      }
      commit('setUser', temptUser)
    },
    setFavorite: function ({ commit }, favorite) {
      commit('setFavorite', favorite)
    }
  },
  mutations: {
    setJwtToken: function (state, jwtToken) {
      state.jwtToken = jwtToken
    },
    setUser: function (state, user) {
      state.user = user
    },
    setFavorite: function (state, favorite) {
      state.favorite = favorite
    }
  },
  getters: {
    getUser: function (state) {
      return state.user
    },
    getJwtToken: function (state) {
      return state.jwtToken
    },
    getFavorite: function (state) {
      return state.favorite
    }
  }
}
