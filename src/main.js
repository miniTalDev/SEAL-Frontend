import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueXgplayer from 'vue-xgplayer'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.use(VueXgplayer, {
  // globalOptions
  enterLogo: {
    width: 100,
    height: 40
  },
  playsinline: true
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
