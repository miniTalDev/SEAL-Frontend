<template>
      <v-hover>
        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`"
      class="mx-auto">
          <v-img
            :src="imgURL"
            aspect-ratio="2.75"
          ></v-img>
          <v-card-text>
              <span class="title">{{subjectName}}</span>
              <hr/>
              <span class="body-1">{{teacherName}}</span>
              <br/>
              <span class="grey--text body-1">{{videoDate}}</span>
          </v-card-text>
        </v-card>
      </v-hover>
</template>

<script>
export default {
  name: 'VideoCard',
  components: {

  },
  mounted () {

  },
  props: {
    imgURL: String,
    teacherName: String,
    subjectName: String,
    videoDate: String,
    videoID: String
  },
  data () {
    return {
      reviews: 413,
      value: 4.5
    }
  },
  methods: {

  }
}
</script>
