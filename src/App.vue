<template>
    <v-app>
      <ToolBar v-show="getIsShowToolBar" />
      <router-view></router-view>
      <v-footer color="black" app inset>
        <span class="white--text">&copy; Seal-Learning</span>
      </v-footer>
    </v-app>
</template>
<script>
import ToolBar from "./components/Header/ToolBar"
import {mapGetters} from 'vuex'
export default {
  name: "App",
  components: {
    ToolBar
  },
  mounted() {

  },
  props: {
    msg: String
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['getIsShowToolBar'])
  }
};
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
