import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    facultyID: 0,
    user: {
      userId: '59130500097',
      userName: 'Au',
      userImg: 'https://scontent.fbkk2-4.fna.fbcdn.net/v/t1.0-9/30726269_10215071824725078_6112983317628141762_n.jpg?_nc_cat=101&_nc_eui2=AeFegqDiTGYv1Ou0FUAj2uEAJ4F9EoP4AH3OrcsE5BHMbLhha6fB2sTkiagqxj93DPt1NwbE9W-JPe2_dec6iF-ATNlCYkm1m762xeHkLLcI0A&_nc_ht=scontent.fbkk2-4.fna&oh=d1959b535ba861c75e9195914b07b551&oe=5C742742',
      facultyID: 1,
      programName: 'Bachelor of Science Program in Information Technology',
      programCode: 'B.Sc.IT',
      role: 'ROLE_USER'
    },
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
      console.log(keyword)
      state.keyword = keyword
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
    }
  }
})
