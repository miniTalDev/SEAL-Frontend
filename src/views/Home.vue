<template>
  <v-content>
    <banner/>
    <display-video-list :facultyID="toString(getFacultyID)" />
  </v-content>
</template>

<script>
import Banner from '../components/Header/Banner'
import DisplayVideoList from '../components/Content/DisplayVideoList'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Banner,
    DisplayVideoList
  },
  mounted () {
    console.log('Getter Work : ' + this.facultyID)
    // this.$router.push('faculty/' + this.facultyID)
  },
  props: {},
  data () {
    return {
      subjectID: '1',
      facultyID: this.getFacultyID
    }
  },
  methods: {},
  computed: {
    ...mapGetters(['getFacultyID'])
  },
  watch: {
    getFacultyID: function () {
      console.log(this.getFacultyID)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
