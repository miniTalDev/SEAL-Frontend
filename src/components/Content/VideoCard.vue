<template>
      <v-hover>
        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`"
      class="mx-auto">
          <v-img
            :src="imgURL"
            aspect-ratio="2.75"
          ></v-img>
          <v-card-text>
              <h4>{{subjectName}}</h4>
              <p>{{teacherName}}</p>
              <p>{{videoDate}}</p>
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
