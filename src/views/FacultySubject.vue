<template>
<v-app>
  <v-content>
    <v-container fluid>
      <v-container grid-list-md>
        <v-layout row wrap flexbox>
          <v-flex>
            <h2 class="title-course">{{getHeaderContent}}</h2>
          </v-flex>
        </v-layout>
        <v-layout row wrap align-end flexbox>
            <v-flex v-for="subject in subjectDetails" :key="subject.subject_id" xs12 sm3 >
                <subject-card :subjectID="subject.subject_id" :subjectCode="subject.subject_code" :subjectName="subject.subject_name"/>
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
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'FacultySubject',
  components: {
    subjectCard
  },
  data () {
    return {
      isShowMenu: false,
      subjectDetails: [],
      facultyID: 1,
      dialog: false
    }
  },
  computed: {
    ...mapGetters(['getHeaderContent'])
  },
  mounted () {
    this.dialog = true
    if (localStorage.getItem('jwtToken') == null) {
      this.$router.push({ path: '/login' })
    } else {
      this.loadAllSubjectFromFaculty()
    }
  },
  watch: {
    '$route.params.facultyID': function (facultyID) {
      this.dialog = true
      this.facultyID = facultyID
      this.loadAllSubjectFromFaculty()
    }
  },
  methods: {
    ...mapActions(['setFacultyID']),
    loadAllSubjectFromFaculty: async function () {
      let jwtTokenLocalStorage = localStorage.getItem('jwtToken')
      let subjectDetails = await axios.get(
        `${process.env.VUE_APP_PROGRAM_SERVICE_URL}/program/${this.facultyID}/subjects`,
        {
          headers: {
            Authorization: `Bearer ${jwtTokenLocalStorage}`
          }
        }
      ).catch((response)=>{
        localStorage.removeItem('jwtToken')
        this.$swal('กรุณา login', 'หมดเวลาการใช้งาน', 'error');
        this.$router.push('/login')
      })
      subjectDetails = subjectDetails.data
      this.setFacultyID(this.facultyID)
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

  .title-course {
    color: #fff;
    text-align: left;
  }
</style>