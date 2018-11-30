<template>
  <v-hover>
    <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`"
  class="mx-auto subject-card">
  <router-link :to="`/subject/${subjectID}`">
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
  <v-btn icon>
          <v-icon dark>favorite</v-icon>
  </v-btn>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'SubjectCard',
  components: {},
  mounted () {},
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
  methods: {}
}
</script>

<style scoped>
.subject-card {
  width: auto;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 10px;
}

.thumbnail {
  width: 100%;
  height: 110px;
}
</style>
