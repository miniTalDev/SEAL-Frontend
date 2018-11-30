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
    if (localStorage.getItem('jwtToken') == null) {
      this.$router.push({ path: '/login' })
    }
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
  }
}
</script>

<style scoped>
  .title-subject {
    display: none !important;
  }
</style>
