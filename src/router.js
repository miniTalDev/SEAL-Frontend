import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

// เมื่อใช้ route mode history เพื่อลบ # ออกจาก URL ต้องอย่าลืม config บน Server เช่นกัน
// ด้วยไม่อย่างนั้นนอาจจะมีปัญหา ซึ่งดูได้จากเว็บ Vue-Router : HTML5 History Mode
export default new Router({
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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/PlayVideo.vue')
    },
    {
      path: '/faculty/:facultyID',
      name: 'faculty',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/FacultySubject.vue')
    },
    {
      path: '/subject/:subjectID',
      name: 'subject',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/Content/DisplayVideoList.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})