<template>
  <v-app>
    <v-container fluid id="background"></v-container>
    <v-container fluid fill-height class="login">
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="login-block">
            <v-card-text>
              <img class="logo-img" src="https://www.sit.kmutt.ac.th/en/wp-content/uploads/2018/05/logo-flat-blk.png"/>
              <v-form>
                <v-text-field v-model="username" prepend-icon="person" name="login" label="Login" type="text" ></v-text-field>
                <v-text-field v-model="password" prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
              </v-form>
            </v-card-text>
              <v-btn color="rgb(163,190,140)" @click="loginAuthen()">Login</v-btn>
              <hr/>
              <v-btn @click="login_facebook()" color="rgba(59, 89, 152)" style="color:white">Facebook</v-btn>
              <br/><br/>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      profile: {},
      ready: false,
      authorized: false,
      username: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters(['getUser', 'getJwtToken', 'getUser'])
  },
  methods: {
    ...mapActions(['setJwtToken', 'setUser']),
    async login_facebook () {
      await FB.getLoginStatus(function (response) {
        console.log(response)
        const api = axios.create({
          headers: {
            access: response
          }
        })
        const data = api
          .post('', {

          })
          .then(function (response) {

          })
          .catch(function (response) {
            alert('มีบางอย่าง error !!!')
          })
      })
    },
    loginAuthen: async function () {
      let id = this.username
      let password = this.password
      let userAuthentication = await axios.post(process.env.VUE_APP_USER_SERVICE_URL + '/user/login',
        {
          id,
          password
        }
      )
      userAuthentication = userAuthentication.data
      this.setJwtToken(userAuthentication.jwtToken)
      console.log(this.getJwtToken)
      localStorage.setItem('jwtToken', this.getJwtToken)
      console.log('Get From local Stroage : ' + localStorage.getItem('jwtToken'))
      if (localStorage.getItem('jwtToken') != null) {
        this.$router.push('/')
      }
      console.log(userAuthentication.user)
      this.setUser(userAuthentication.user)
    }
  },
  async mounted () {
    console.log('--- [Login.vue]Get User from Vuex ---')
    console.log(this.getUser)
    window.fbAsyncInit = () => {
      FB.init({
        appId: '1910900992326991',
        cookie: true,
        xfbml: true,
        version: 'v3.2'
      })
    }
  }
}
</script>

<style>
  .v-navigation-drawer, .v-toolbar, .v-footer {
    display: none;
  }
</style>

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
