<template>
    <v-app>
      <ToolBar v-show="getIsShowToolBar" />
      <router-view></router-view>
      <v-footer color="black" app inset>
        <span class="white--text">
          &copy; Seal-Learning X VueJS</span>
      </v-footer>
    </v-app>
</template>
<script>
import axios from 'axios'
import ToolBar from './components/Header/ToolBar'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    ToolBar
  },
  mounted () {
    console.log(process.env.VUE_APP_TEST)
    console.log(process.env.lnwza)
    // axios.get('http://localhost:3000/test',{
    //   headers: {
    //     'Authorization': localStorage.getItem('jwtToken')
    //   }
    // })
  },
  props: {
    msg: String
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['getIsShowToolBar'])
  }
}
</script>
<style>
a {
  text-decoration: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #191919;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
