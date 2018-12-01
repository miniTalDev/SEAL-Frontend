<template>
  <v-hover>
    <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`"
  class="mx-auto subject-card">
  <router-link  :to="`/subject/${subjectID}?subjectName=${subjectName}`" >
      <v-img class="thumbnail"
        src="https://cdn.dribbble.com/users/5485/screenshots/2187027/programming.png"
        aspect-ratio="2.75"
      ></v-img>
      <v-card-text>
        <span class="title">{{subjectCode}} || {{getFavorite.subject_id}}</span>
        <br/>
        <span class="">{{subjectName}}</span>
      </v-card-text>
  </router-link>
    <div v-if="isFavouriteByUser">
      <v-btn icon @click="disloveFavorite(favouriteId)">
          <v-icon dark color="red">favorite</v-icon>
      </v-btn>
    </div>
    <div v-else>
      <v-btn icon @click="loveFavorite(subjectID)">
          <v-icon dark>favorite</v-icon>
      </v-btn>
    </div>
    </v-card>
  </v-hover>
</template>

<script>
import axios from 'axios'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'SubjectCard',
  props: {
    imgURL: String,
    subjectName: String,
    subjectID: String,
    subjectCode: String
  },
  data () {
    return {
      reviews: 413,
      value: 4.5,
      isFavouriteByUser: false,
      favouriteId: 0
    }
  },
  mounted(){
    this.checkSubjectIsFavourited()
  },
  methods: {
    ...mapActions(['setHeaderContent','setFavorite']),
    checkSubjectIsFavourited: function(){
      // console.log('subject-card redered : '+this.subjectID)
      let subjectFavourites = this.getFavorite
      // console.log(subjectFavourites[0])
      // console.log('User Fave : '+ subjectFavourites[1])
      for(let i = 0; i < subjectFavourites.length; i++){
        if( subjectFavourites[i].subjectId == this.subjectID){
          console.log(subjectFavourites[i].id)
          this.favouriteId = subjectFavourites[i].id
          this.isFavouriteByUser = true
          //console.log('Favourited by User : ' + this.subjectID)
        }
      }
    },
    loveFavorite: async function(subjectID){
      console.log('love')
      let jwtTokenLocalStorage = localStorage.getItem('jwtToken')
      let love = await axios.post(process.env.VUE_APP_USER_SERVICE_URL + '/favorite/user/'+this.getUser.userId+'/subject',
        {
          "subjectId": subjectID
        },{
          headers:{
            'Authorization': `Bearer ${jwtTokenLocalStorage}`
          }
        }
      )
      .catch((response)=>{
        localStorage.removeItem('jwtToken')
        this.$swal('กรุณา login', 'หมดเวลาการใช้งาน', 'error');
        this.$router.push('/login')
      })
    },
    disloveFavorite: async function(favouriteId){
      this.isFavouriteByUser = false
      console.log('dislove')
      let jwtTokenLocalStorage = localStorage.getItem('jwtToken')
      let dislove = await axios.delete(process.env.VUE_APP_USER_SERVICE_URL + '/favorite/'+this.getUser.userId+'/'+favouriteId,
      {
        headers:{
            'Authorization': `Bearer ${jwtTokenLocalStorage}`
          }
      })
      .catch((response)=>{
        localStorage.removeItem('jwtToken')
        this.$swal('กรุณา login', 'หมดเวลาการใช้งาน', 'error');
        this.$router.push('/login')
      })
    }
  },
  computed: {
    ...mapGetters(['getUser','getFavorite'])
  }
}
</script>

<style scoped>
.subject-card {
  width: auto;
  height: 250px;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 10px;
}

.thumbnail {
  width: 100%;
  height: 110px;
}
</style>
