<template>
    <v-container fluid>
          <v-container grid-list-md >
            <v-layout row wrap>
                <v-flex v-for="video in videoDetails" :key="video.video_id" xs3 >
                    <router-link :to="`/player/${video.video_id}`" @click="testLoad()">
                      <video-card :imgURL="video.video_thumbnail" :videoID="video.video_id" :videoDate="video.video_date"
                      :teacherName="video.teacher.teacher_name" :subjectName="video.video_name"  />
                    </router-link>
                </v-flex>
            </v-layout>
          </v-container>
      </v-container>
</template>
<script>
import VideoCard from './VideoCard'
import axios from 'axios'

export default {
  name: 'DisplayVideoList',
  components: {
    VideoCard
  },
  mounted () {
    this.subjectID = (this.$route.params.subjectID === undefined) ? 2 : this.$route.params.subjectID
    this.loadAllVideoCard()
  },
  props: {

  },
  data () {
    return {
      isShowMenu: false,
      videoDetails: [],
      videoUrlSample: 'https://ngelearning.sit.kmutt.ac.th/api/v0/subject/2/videos',
      subjectID: 2
    }
  },
  methods: {
    loadAllVideoCard: async function () {
      let videoDetails = await axios.get(process.env.VUE_APP_SUBJECT_SERVICE_URL + `/${this.subjectID}/videos`)
      videoDetails = videoDetails.data
      this.videoDetails = videoDetails
      console.log(this.subjectID)
    },
    fetchVideoById: function (videoId) {

    },
    testLoad: function () {
    }
  }
}
</script>
