import Vue from 'vue'
import Vuex from 'vuex'
import { userDetailJWT } from './store/userDetailJWT'
import { searchKeywordByFaculty } from './store/searchKeywordByFaculty'
Vue.use(Vuex)

console.log(userDetailJWT)
export default new Vuex.Store({
  modules: {
    userDetailJWT,
    searchKeywordByFaculty
  }
})
