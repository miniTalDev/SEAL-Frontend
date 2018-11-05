<template>
  <v-content>
      <br/>
      <d-player @play="play" :options="config" ref="player" style="width:54%;margin:auto"></d-player>
      <p>{{videoDetail.video_name}}</p>
  </v-content>
</template>
<script>
import axios from 'axios'
import VueDPlayer from 'vue-dplayer'
import 'vue-dplayer/dist/vue-dplayer.css'

export default {
  name: 'PlayVideo',
  mounted () {
    this.fetchVideoDetail()
  },
  components: {
    'd-player': VueDPlayer
  },
  props: {

  },
  data () {
    return {
      videoID: 0,
      videoDetail: {},
      config: {
        screenshot: true,
        video: {
          pic: 'demo.jpg',
          thumbnails: 'thumbnails.jpg'
        },
        logo: require('../assets/seal-logo.png')

      }
    }
  },
  methods: {
    fetchVideoDetail: async function () {
      this.videoID = this.$route.params.videoID
      let videoDetail = await axios.get(`${process.env.VUE_APP_VIDEO_SERVICE_URL}/video/${this.videoID}`)
      videoDetail = videoDetail.data
      this.videoDetail = videoDetail
      this.$refs.player.dp.switchVideo({
        url: this.videoDetail.player.hls_url
      })
    },
    play () {
    }
  }
}
</script>
