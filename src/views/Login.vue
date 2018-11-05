<template>
<v-app id = "background">
  <v-content>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-card-text>
                <img src="https://www.sit.kmutt.ac.th/en/wp-content/uploads/2018/05/logo-flat-blk.png"/>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
                <v-btn color="rgb(163,190,140)">Login</v-btn>
                <hr/>
                <v-btn @click="login_facebook()" color="rgba(59, 89, 152)" style="color:white">Facebook</v-btn>
                <br/><br/>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
  </v-content>
</v-app>
</template>

<script>
import axios from 'axios'
import {mapGetters} from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      profile: {},
      ready: false,
      authorized: false
    }
  },
  computed: {
    ...mapGetters(['getUser'])
  },
  methods: {
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
#background {
  background-image: url("https://scontent.fbkk6-2.fna.fbcdn.net/v/t1.0-9/23844857_10155288832968789_8091596763212753375_n.jpg?_nc_cat=106&_nc_eui2=AeHyGuSX8hHWQacYDXKfUsobwJMBvCSdItX1D8Ts_Y42CbXFJhQaYSTIs59HjOh5svKrP9hr-FauQw2OPCI288gC7Op93DpB1P6Np98wAVBMZQ&_nc_ht=scontent.fbkk6-2.fna&oh=0f563d4bc2aa5a3e965282d4dda9bc96&oe=5C781663");
  background-size: 100%;
}
</style>
