export const searchKeywordByFaculty = {
  state: {
    facultyID: 0,
    keyword: ''
  },
  actions: {
    setFacultyID: function ({ commit }, facultyID) {
      commit('setFacultyID', facultyID)
    },
    setKeyword: function ({ commit }, keyword) {
      commit('setKeyword', keyword)
    }
  },
  mutations: {
    setFacultyID: function (state, facultyID) {
      console.log(facultyID)
      state.facultyID = facultyID
    },
    setKeyword: function (state, keyword) {
      state.keyword = keyword
    }
  },
  getters: {
    getFacultyID: function (state) {
      return state.facultyID
    },
    getKeyword: function (state) {
      return state.keyword
    }
  }
}
