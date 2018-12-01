<template>
  <v-app>
    <ToolBar v-show="getIsShowToolBar" ref="toolBar"/>
    <router-view  @loadToolBarAfterLogin="loadToolBar()"></router-view>
    <v-footer color="black" app inset>
      <p class="white--text text-copyright">&copy; Seal-Learning X VueJS</p>
    </v-footer>
  </v-app>
</template>
<script>
import axios from "axios";
import ToolBar from "./components/Header/ToolBar";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    ToolBar
  },
  mounted() {
    console.log(process.env.VUE_APP_TEST);
    console.log(process.env.lnwza);
  },
  data() {
    return {};
  },
  methods: {
    loadToolBar: function() {
      console.log("emit work!!!");
      this.$refs.toolBar.loadAllFaculties()
      this.$refs.toolBar.loadAllFavorite()
    }
  },
  computed: {
    ...mapGetters(["getIsShowToolBar"])
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

.text-copyright {
  margin: 0px;
  position: absolute;
  right: 10px;
}
</style>
