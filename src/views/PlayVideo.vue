<template>
  <v-app>
      <div class="container-fluid over-scroll">
        <div class="row">
          <div class="col-8">
            <div class="row">
              <div class="col-12">
                <d-player class="video-player" @play="play" :options="config" ref="player"></d-player>
              </div>
              <div class="col-12">
                <p class="video-name">{{videoDetail.video_name}}</p>
                <p class="descript-video">
                  <v-icon class="icon-description">person</v-icon>
                  {{videoDetail.teacher.teacher_name}}
                </p>
                <p class="descript-video">
                  <v-icon class="icon-description">access_time</v-icon>
                  {{videoDetail.video_date}}
                </p>
                <p class="descript-video">
                  <v-icon class="icon-description">location_on</v-icon>
                  Classroom: {{videoDetail.room.room_name}}
                </p>
              </div>
            </div>
          </div>
          <div class="col-4">
            
          </div>
        </div>
      </div>
  </v-app>
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
        subtitle: {
        },
        logo: require('../assets/seal-logo.png'),
        theme: 'red'
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

<style>
  .over-scroll {
    overflow-y: scroll;
  }

  .video-player {
    width: 100%;
    height: 550px;
    margin-top: 80px;
    margin-bottom: 20px;
  }

  .video-name {
    text-align: left;
    font-size: 25px;
    color: #ffffff;
    font-weight: 500;
  }

  .icon-description {
    color: #ffffff !important;
    margin-right: 10px;
  }

  .descript-video {
    font-size: 16px;
    text-align: left;
    color: #ffffff;
  }

  .comment-section {
    margin-bottom: 50px;
  }

  .count-comment {
    font-size: 18px;
    font-weight: 500;
    text-decoration: underline;
    color: #ffffff;
    text-align: left;
  }

  .comment-img {
    border-radius: 50px;
    width: 50px;
    height: 50px;
    overflow: hidden;
    color: #ffffff;
  }

  .comment-field {
    background-color: #191919;
    color: #ffffff;
    font-size: 16px;
  }
</style>