<template>
<div>
    <v-toolbar app fixed dark :clipped-left="$vuetify.breakpoint.lgAndUp">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <router-link to="/" style="">
          <img src="https://ar.sit.kmutt.ac.th/assets/img/logosit.png" height="30px"/>
        </router-link>
        <v-spacer></v-spacer>
        <v-btn icon @click.native="dialog = true">
            <v-icon>search</v-icon>
        </v-btn>
        <v-btn fab @click="page('/login')">
        <v-avatar>
            <img :src="`${this.getUser.userImg}`"/>
        </v-avatar>
        </v-btn>
      </v-toolbar>
      <!--Drawer สำหรับกดแล้วให้แสดงแถบภาควิชาต่างๆ-->
      <v-navigation-drawer app fixed dark :clipped="$vuetify.breakpoint.mdAndUp" v-model="drawer" v-bind:width="250">
        <v-list dense>
          <v-list-tile
          v-for="item in items"
            :key="item.title"
            @click="page(item.page)"
          >
            <v-list-tile-action>
              <v-icon v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{item.title}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-list dense>
          <v-list-group>
            <v-list-tile slot="activator">
              <v-list-tile-action>
                <v-icon>favorites</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Favorites</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile
            v-for="(item, index) in getFavorite"
              :key="item.id"
              @click="page(`/subject/${item.subjectId}?subjectName=${favoriteSubject[index]}`)"
            >
                <v-list-tile-action>
                  <v-icon color="red">favorites</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{favoriteSubject[index]}}
                  </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </v-list>
        <v-subheader class="mt-1 grey--text text--darken-1">Curriculums</v-subheader>
        <v-list dense>
          <v-list-tile v-for="item in faculties" :key="item.program_id" 
              @click="pageFaculty(item.program_id); setHeaderContent(item.program_name)">
            <v-list-tile-action>
              <v-icon>layers</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{item.program_name}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          <v-text-field prepend-icon="search"  @keyup.enter="searchByCondition(facultyID)"
              placeholder="ลองหาวีดีโอดูสิ~" v-model="searchKeyword">

            <div ></div>
          </v-text-field>
        </v-card-title>
      </v-card>
    </v-dialog>

</div>
</template>
<script>
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ToolBar',
  components: {

  },
  mounted () {
    this.loadUserDetail()
    if(localStorage.getItem('jwtToken') != null){
      this.loadAllFavorite()
      this.loadAllFaculties()
    }
  },
  computed: {
    ...mapGetters(['getUser','getFavorite'])
  },
  data () {
    return {
      searchKeyword: '',
      drawer: true,
      dialog: false,
      faculties: [
        'Bachelor of Science Program in Information Technology',
        'Bachelor of Science Program in Computer Science',
        'Master of Science Program in Information Technology"'
      ],
      items: [
        { title: 'All Videos', icon: 'videocam', page: '/' },
        { title: 'Subject', icon: 'school', page: '/' }
      ],
      favoriteSubject:[]
    }
  },
  methods: {
    ...mapActions(['setFacultyID', 'setKeyword', 'setUser', 'setHeaderContent', 'setFavorite']),
    ...mapGetters(['getFacultyID']),
    loadUserDetail: function () {
      let jwtToken = localStorage.getItem('jwtToken')
      if (jwtToken != null) {
        this.alreadyLogin = true
        let user = jwtDecode(jwtToken).user
        this.setUser(user)
      }
    },
    loadAllFaculties: async function () {
      let jwtTokenLocalStorage = localStorage.getItem('jwtToken')
      let faculties = await axios.get(
        `${process.env.VUE_APP_PROGRAM_SERVICE_URL}/programs`,
        {
          headers: {
            'Authorization': `Bearer ${jwtTokenLocalStorage}`
          }
        }
      ).catch((response)=>{
        localStorage.removeItem('jwtToken')
        this.$swal('กรุณา login', 'หมดเวลาการใช้งาน', 'error');
        this.$router.push('/login')
      })
      faculties = faculties.data
      this.faculties = faculties
    },
    loadAllFavorite: async function(){
      let jwtTokenLocalStorage = localStorage.getItem('jwtToken')
      let favoriteDetail = await axios.get(
        `${process.env.VUE_APP_USER_SERVICE_URL}/favorites/user/${this.getUser.userId}`,
        {
          headers: {
            'Authorization': `Bearer ${jwtTokenLocalStorage}`
          }
        }).catch((response)=>{
          localStorage.removeItem('jwtToken')
          this.$swal('กรุณา login', 'หมดเวลาการใช้งาน', 'error');
          this.$router.push('/login')
        })
        let favorites = favoriteDetail.data
        this.setFavorite(favorites)
        for (let i = 0; i < favorites.length; i++) {
          this.findSubjectNameById(parseInt(favorites[i].subjectId))
        }
    },
    findSubjectNameById: async function(subjectId){
      let jwtTokenLocalStorage = localStorage.getItem('jwtToken')
      let subject = await axios.get(
          `${process.env.VUE_APP_PROGRAM_SERVICE_URL}/subject/${subjectId}`,{
            headers: {
              'Authorization': `Bearer ${jwtTokenLocalStorage}`
            }
          })
          this.favoriteSubject.push(subject.data.subject_name)
    },
    page (page) {
      this.$router.replace({ path: page })
    },
    pageFaculty (program_id) {
      this.$router.replace({ path: '/faculty/' + program_id })
      this.setFacultyID(program_id)
    },
    searchByCondition: function (facultyID){
      if(facultyID === 0){
        this.searchAllSubjects (this.searchKeyword)
      }else {
        this.searchSubjectByFacultyID(this.searchKeyword)
      }
    },
    searchSubjectByFacultyID (searchKeyword) {
      this.$router.replace({ path: '/faculty/' + this.getFacultyID() + '/' + searchKeyword })
      this.setKeyword(searchKeyword)
      this.dialog = false
    }, 
    searchAllSubjects (searchKeyword) {
      this.$router.replace({ path: '/subject/'+ searchKeyword})
      this.setKeyword(searchKeyword)
      this.dialog = false
    }
  }
}
</script>
