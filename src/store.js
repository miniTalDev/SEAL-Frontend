import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    facultyID: 0,
    user: {
      userId: '59130500097',
      userName: 'linjingyun12',
      facultyID: 1,
      programName: 'Bachelor of Science Program in Information Technology',
      programCode: 'B.Sc.IT',
      role: 'ROLE_USER'
    }
  },
  actions: {
    setFacultyID: function ({ commit }, facultyID) {
      commit('setFacultyID', facultyID)
    }
  },
  mutations: {
    setFacultyID: function (state, facultyID) {
      console.log(facultyID)
      state.facultyID = facultyID
    }
  },
  getters: {
    getFacultyID: function (state) {
      return state.facultyID
    },
    getUser: function (state) {
      return state.user
    }
  }
})
