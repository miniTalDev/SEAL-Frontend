<template>
    <v-container fluid>
          <v-container grid-list-md >
            <v-layout row wrap>
                <v-flex v-for="subject in subjectDetails" :key="subject.subject_id" xs3 >
                    <router-link :to="`/subject/${subject.subject_id}`">
                      <subject-card :subjectID="subject.subject_id" :subjectCode="subject.subject_code" :subjectName="subject.subject_name"/>
                    </router-link>
                </v-flex>
            </v-layout>
          </v-container>
      </v-container>
</template>
<script>
import subjectCard from '../components/Content/SubjectCard.vue'
import axios from 'axios'

export default {
  name: 'FacultySubject',
  components: {
    subjectCard
  },
  data () {
    return {
      isShowMenu: false,
      subjectDetails: [],
      facultyID: 1
    }
  },
  props: {

  },
  mounted () {
    this.loadAllSubjectFromFaculty()
  },
  watch: {
    '$route.params.facultyID': function (facultyID) {
      this.facultyID = facultyID
      this.loadAllSubjectFromFaculty()
    }
  },
  methods: {
    loadAllSubjectFromFaculty: async function () {
      let subjectDetails = await axios.get(process.env.VUE_APP_PROGRAM_SERVICE_URL + `/${this.facultyID}/subjects`)
      subjectDetails = subjectDetails.data
      console.log(subjectDetails)
      this.subjectDetails = subjectDetails
    },
    fetchSubjectById: function (subjectId) {
      console.log('Click and Load Subject By ID : ' + subjectId)
    }
  }
}
</script>
