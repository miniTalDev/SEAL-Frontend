<template>
<v-app>
  <v-content>
    <v-container fluid>
          <v-container grid-list-md class="space-top">
            <v-layout row wrap align-end flexbox>
                <v-flex v-for="subject in subjectDetails" :key="subject.subject_id" xs12 sm4 >
                    <router-link :to="`/subject/${subject.subject_id}`">
                      <subject-card :subjectID="subject.subject_id" :subjectCode="subject.subject_code" :subjectName="subject.subject_name"/>
                    </router-link>
                </v-flex>
            </v-layout>
          </v-container>
    </v-container>
  </v-content>

  <v-dialog v-model="dialog" hide-overlay persistent width="300">
    <v-card color="black" dark>
        <v-card-text>
          Loading...
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

</v-app>
</template>
<script>
import subjectCard from '../components/Content/SubjectCard.vue'
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'SearchSubject',
  components: {
    subjectCard
  },
  data () {
    return {
      isShowMenu: false,
      subjectDetails: [],
      facultyID: 1,
      dialog: false,
      keyword: ''
    }
  },
  props: {},
  mounted () {
    this.dialog = true
    this.loadSubjectsByKeyword()
  },
  watch: {
    '$route.params.keyword': function (keyword) {
      this.dialog = true
      this.loadSubjectsByKeyword()
    }
  },
  methods: {
    ...mapGetters(['getKeyword', 'getFacultyID']),
    loadSubjectsByKeyword: async function () {
      this.getKeyword()
      let jwtTokenLocalStorage = localStorage.getItem('jwtToken')
      let subjectDetails = await axios.get(
        `${process.env.VUE_APP_PROGRAM_SERVICE_URL}/program/${this.getFacultyID()}/subjects?find=${this.getKeyword()}`,
        {
          headers: {
            Authorization: `Bearer ${jwtTokenLocalStorage}`
          }
        }
      )
      subjectDetails = subjectDetails.data
      this.subjectDetails = subjectDetails
      this.dialog = false
    }
  }
}
</script>

<style scoped>
  .space-top {
    margin-top: 60px;
  }
</style>
