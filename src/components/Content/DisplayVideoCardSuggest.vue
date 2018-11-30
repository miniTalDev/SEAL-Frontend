<template>
<v-app>
  <v-content>
    <v-container fluid>
      <v-layout row wrap align-end flexbox>
          <v-flex v-for="video in videoDetails" :key="video.video_id" xs12 >
              <router-link :to="`/player/${video.video_id}`" @click="testLoad()">
                <video-card :imgURL="video.video_thumbnail" :videoID="video.video_id" :videoDate="video.video_date"
                :teacherName="video.teacher.teacher_name" :subjectName="video.video_name"  />
              </router-link>
          </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</v-app>
</template>

<script>
import VideoCard from './VideoCardSuggest'
import axios from 'axios'

export default {
  name: 'DisplayVideoListSuggest',
  components: {
    VideoCard
  },
  mounted () {
    this.subjectID =
      this.$route.params.subjectID === undefined
        ? 2
        : this.$route.params.subjectID
    this.loadAllVideoCard()
  },
  props: {},
  data () {
    return {
      dialog: true,
      isShowMenu: false,
      videoDetails: [],
      videoUrlSample:
        'https://ngelearning.sit.kmutt.ac.th/api/v0/subject/2/videos',
      subjectID: 2
    }
  },
  methods: {
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

<style>
  v-content {
    padding: 15px !important;
  }
</style>
