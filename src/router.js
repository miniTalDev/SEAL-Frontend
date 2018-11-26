import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
Vue.use(Router)
// เมื่อใช้ route mode history เพื่อลบ # ออกจาก URL ต้องอย่าลืม config บน Server เช่นกัน
// ด้วยไม่อย่างนั้นนอาจจะมีปัญหา ซึ่งดูได้จากเว็บ Vue-Router : HTML5 History Mode
let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home'
    },
    {
      path: '/player/:videoID',
      name: 'player',
      component: () => import('./views/PlayVideo.vue')
    },
    {
      path: '/faculty/:facultyID',
      name: 'faculty',
      component: () => import('./views/FacultySubject.vue')
    },
    {
      path: '/subject/:subjectID',
      name: 'subject',
      component: () => import('./components/Content/DisplayVideoList.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/faculty/:facultyID/:keyword',
      name: 'keyword',
      component: () => import('./views/SearchSubject.vue')
    },
    {
      path: '/subject/:keyword',
      name: 'searchsubject',
      component: () => import('./views/SearchSubject.vue')
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   let jwtToken = localStorage.getItem('jwtToken')
//   if (jwtToken != null) {
//     this.userDetailJWT.setJwtToken(jwtDecode(jwtToken))
//   }
//   next()
// })

export default router
