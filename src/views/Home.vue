<template>
  <v-app>
    <banner/>
    <display-video-list :facultyID="toString(getFacultyID)" />
  </v-app>
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