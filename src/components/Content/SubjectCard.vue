<template>
      <v-hover>
        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`"
      class="mx-auto">
          <v-img
            src="https://cdn.dribbble.com/users/5485/screenshots/2187027/programming.png"
            aspect-ratio="2.75"
          ></v-img>
          <v-card-text>
              <span class="title">{{subjectCode}}</span>
              <br/>
              <span class="">{{subjectName}}</span>
          </v-card-text>
        </v-card>
      </v-hover>
</template>

<script>
export default {
  name: 'SubjectCard',
  components: {

  },
  mounted () {

  },
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

  }
}
</script>
