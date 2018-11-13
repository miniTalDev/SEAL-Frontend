import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    facultyID: 0,
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
    keyword: ''
  },
  actions: {
    isLoginAuthentication: function () {
    },
    setFacultyID: function ({ commit }, facultyID) {
      commit('setFacultyID', facultyID)
    },
    setKeyword: function ({ commit }, keyword) {
      commit('setKeyword', keyword)
    },
    setJwtToken: function ({ commit }, jwtToken) {
      console.log('action work : ' + jwtToken)
      commit('setJwtToken', jwtToken)
    },
    setUser: function ({ commit }, user) {
      console.log('Action work :' + user)
      let temptUser = {
        userId: user.id,
        userName: user.firstname,
        userImg: user.image,
        facultyID: 1,
        programName: user.faculty,
        programCode: user.faculty,
        role: 'ROLE_USER'
      }
      commit('setUser', temptUser)
    }
  },
  mutations: {
    setFacultyID: function (state, facultyID) {
      console.log(facultyID)
      state.facultyID = facultyID
    },
    setKeyword: function (state, keyword) {
      state.keyword = keyword
    },
    setJwtToken: function (state, jwtToken) {
      state.jwtToken = jwtToken
    },
    setUser: function (state, user) {
      state.user = user
    }
  },
  getters: {
    getFacultyID: function (state) {
      return state.facultyID
    },
    getUser: function (state) {
      return state.user
    },
    getKeyword: function (state) {
      return state.keyword
    },
    getJwtToken: function (state) {
      return state.jwtToken
    }
  }
})
