import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    facultyID: 0
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
    }
  }
})
