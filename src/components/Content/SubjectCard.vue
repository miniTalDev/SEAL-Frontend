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
        <span class="title">{{subjectCode}}</span>
        <br/>
        <span class="">{{subjectName}}</span>
      </v-card-text>
  </router-link>
    <div v-if="subjectID===getFavorite.subject_id">
      <v-btn icon @click="disloveFavorite(getFavorite.id)">
              <v-icon dark color="red">favorite</v-icon>
      </v-btn>
    </div>
    <div v-else>
      <v-btn icon @click="loveFavorite(getFavorite.id)">
              <v-icon dark>favorite</v-icon>
      </v-btn>
    </div>
    </v-card>
  </v-hover>
</template>

<script>
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
      value: 4.5
    }
  },
  methods: {
    ...mapActions(['setHeaderContent','setFavorite']),
    loveFavorite: async function(subjectId){
      let love = await axios.post(process.env.VUE_APP_USER_SERVICE_URL + '/favorite/user/'+getUser.userId+'/subject',
        {
          "subjectId": subjectId
        }
      )
    },
    disloveFavorite: async function(Id){
      let dislove = await axios.delete(process.env.VUE_APP_USER_SERVICE_URL + '/favorite/'+getUser.userId+'/'+Id)
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
