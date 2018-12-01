<template>
<v-content>
  <v-container fluid>
    <v-container grid-list-md class="space-top">
      <v-layout row wrap flexbox>
        <v-flex>
          <h2 class="title-subject" v-if="isHomePage == false">{{getHeaderContent}}</h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap align-end flexbox>
        <v-flex v-for="video in videoDetails" :key="video.video_id" xs12 sm3>
          <router-link :to="`/player/${video.video_id}`" @click="testLoad()">
            <video-card
              :imgURL="video.video_thumbnail"
              :videoID="video.video_id"
              :videoDate="video.video_date"
              :teacherName="video.teacher.teacher_name"
              :subjectName="video.video_name"
            />
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>

  <v-dialog v-model="dialog" hide-overlay persistent width="300">
    <v-card color="black" dark>
      <v-card-text>
        Loading...
        <v-progress-linear
          indeterminate
          color="white"
          class="mb-0"
        ></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>

</v-content>
</template>
<script>
import VideoCard from './VideoCard'
import axios from 'axios'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'DisplayVideoList',
  components: {
    VideoCard
  },
  data () {
    return {
      dialog: true,
      isShowMenu: false,
      videoDetails: [],
      videoUrlSample:'https://ngelearning.sit.kmutt.ac.th/api/v0/subject/2/videos',
      subjectID: 2,
      isHomePage: false
    }
  },
  mounted () {
    this.subjectID = this.$route.params.subjectID === undefined ? 2 : this.$route.params.subjectID
    this.loadSubjectTitle()
    this.loadAllVideoCard()
  },
  computed: {
    ...mapGetters(['getHeaderContent'])
  },
  methods: {
    ...mapActions(['setHeaderContent']),
    loadSubjectTitle: function(){
      if(this.$route.path == '/'){
        this.isHomePage = true
      }
      else{
        console.log(this.$route.query.subjectName)
        this.setHeaderContent(this.$route.query.subjectName)
      }
      console.log(this.$route.path)
    },
    loadAllVideoCard: async function () {
      let jwtTokenLocalStorage = localStorage.getItem('jwtToken')
      let videoDetails = await axios.get(
        `${process.env.VUE_APP_VIDEO_SERVICE_URL}/subject/${this.subjectID}/videos`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${jwtTokenLocalStorage}`
          }
        }
      ).catch((response)=>{
        localStorage.removeItem('jwtToken')
        this.$swal('กรุณา login', 'หมดเวลาการใช้งาน', 'error');
        this.$router.push('/login')
      })
      videoDetails = videoDetails.data
      this.videoDetails = videoDetails
      this.dialog = false
    },
    fetchVideoById: function (videoId) {},
    testLoad: function () {}
  }
}
</script>

<style scoped>
  .v-content {
    padding-top: 0px !important;
  }

  .space-top {
    margin-top: 60px;
  }

  .title-subject {
    color: #fff;
    text-align: left;
  }
</style>
