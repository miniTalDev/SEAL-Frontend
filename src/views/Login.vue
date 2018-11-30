<template>
  <v-app>
    <v-container fluid id="background"></v-container>
    <v-container fluid fill-height class="login">
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <!-- Display login for person who don't login yet. -->
          <v-card v-if="alreadyLogin == false" class="login-block">
            <v-card-text>
              <img class="logo-img" src="https://www.sit.kmutt.ac.th/en/wp-content/uploads/2018/05/logo-flat-blk.png"/>
              <v-form>
                <v-text-field v-model="username" prepend-icon="person" name="login" label="Login" type="text" ></v-text-field>
                <v-text-field v-model="password" prepend-icon="lock" name="password" label="Password" id="password" type="password" @keyup.enter.native="loginAuthen()"></v-text-field>
              </v-form>
            </v-card-text>
              <v-btn color="rgb(163,190,140)" @click="loginAuthen()">Login</v-btn>
              <hr/>
          </v-card>
          <!-- Detail for person who already login-->
          <v-card v-else class="login-block">
            <v-card-text>
              <img class="logo-img" src="https://www.sit.kmutt.ac.th/en/wp-content/uploads/2018/05/logo-flat-blk.png"/>
              <h1>Profile Detail : {{getUser.userName}} {{getUser.userId}}</h1>
            </v-card-text>
              <router-link to="/" >
                <v-btn color="rgb(163,190,140)" @click="setIsShowToolBar(true)">Back To Homepage</v-btn>
              </router-link>
                <v-btn color="rgb(163,190,140)" @click="verifyJWT()">Send JWT To Verify</v-btn>
              <v-btn color="rgb(163,190,140)" @click="logout()">Logout</v-btn>
              <hr/>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      profile: {},
      alreadyLogin: false,
      authorized: false,
      username: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters(['getUser', 'getJwtToken', 'getUser'])
  },
  mounted () {
    this.setIsShowToolBar(false)
    this.verifyIsLoginByJwtYet()
  },
  methods: {
    ...mapActions(['setJwtToken', 'setUser','setIsShowToolBar']),
    verifyIsLoginByJwtYet: function () {
      let jwtToken = localStorage.getItem('jwtToken')
      if (jwtToken != null) {
        this.alreadyLogin = true
      }
    },
    loginAuthen: async function () {
      let id = this.username
      let password = this.password
      let userAuthentication = await axios.post(process.env.VUE_APP_USER_SERVICE_URL + '/user/login',
        {
          id,
          password
        }
      ).catch((error)=>{
          this.$swal('กรุณา login ใหม่', error.response.data.message , 'error');
      })
      userAuthentication = userAuthentication.data
      let jwtTokenLocalStorage = localStorage.getItem('jwtToken')
      if (userAuthentication != null) {
        localStorage.setItem('jwtToken', userAuthentication.jwtToken)
        let userAfterDecodeJWT = jwtDecode(userAuthentication.jwtToken).user
        this.setJwtToken(userAuthentication.jwtToken)
        this.setUser(userAfterDecodeJWT)
        this.setIsShowToolBar(true)
        this.$emit('loadToolBarAfterLogin')
        this.$router.push('/')
      }
    },
    logout: function (){
      localStorage.removeItem('jwtToken')
      this.alreadyLogin = false
    },
    verifyJWT: async function(){
      let jwtTokenLocalStorage = localStorage.getItem('jwtToken')
      let verifyData = await axios.get(
        `${process.env.VUE_APP_USER_SERVICE_URL}/users`,
        {
          headers: {
            Authorization: `Bearer ${jwtTokenLocalStorage}`
          }
        }
      )
      verifyData = verifyData
    }
  }
}
</script>

<style scoped>
  #background {
    background-image: url("https://scontent.fbkk6-2.fna.fbcdn.net/v/t1.0-9/23844857_10155288832968789_8091596763212753375_n.jpg?_nc_cat=106&_nc_eui2=AeHyGuSX8hHWQacYDXKfUsobwJMBvCSdItX1D8Ts_Y42CbXFJhQaYSTIs59HjOh5svKrP9hr-FauQw2OPCI288gC7Op93DpB1P6Np98wAVBMZQ&_nc_ht=scontent.fbkk6-2.fna&oh=0f563d4bc2aa5a3e965282d4dda9bc96&oe=5C781663");
    background-size: 100%;
    filter: blur(5px);
  }

  .login {
    position: absolute;
  }

  .login-block {
    border-radius: 10px;
  }

  .logo-img {
    width: 120px;
    height: auto;
  }

  .v-btn {
    width: 80%;
  }
</style>

