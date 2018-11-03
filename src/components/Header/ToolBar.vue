<template>
    <v-toolbar app>
        <router-link to="/" style="">
          <v-toolbar-title >Seal-Learning</v-toolbar-title>
        </router-link>
        <v-spacer></v-spacer>
        <b-dropdown id="ddown1" text="Subject By Faculty" class="m-md-2" >
            <b-dropdown-item v-for="faculty in faculties" :key="faculty.program_id" :to="`/faculty/${faculty.program_id}`" @click="setFacultyID(faculty.program_id)">
              {{faculty.program_name}}
            </b-dropdown-item>
        </b-dropdown>
        <v-text-field placeholder="ลองหาวีดีโอดูสิ~"></v-text-field>
        <v-btn icon>
            <v-icon>search</v-icon>
        </v-btn>
      </v-toolbar>
</template>
<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  name: 'ToolBar',
  components: {

  },
  mounted () {
    this.loadAllFaculties()
  },
  props: {
  },
  data () {
    return {
      faculties: [
        'Bachelor of Science Program in Information Technology',
        'Bachelor of Science Program in Computer Science',
        'Master of Science Program in Information Technology"'
      ]

    }
  },
  methods: {
    ...mapActions(['setFacultyID']),
    loadAllFaculties: async function () {
      let faculties = await axios.get(`${process.env.VUE_APP_PROGRAM_SERVICE_URL}/programs`)
      faculties = faculties.data
      this.faculties = faculties
    }
  }
}
</script>
