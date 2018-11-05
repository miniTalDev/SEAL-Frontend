<template>
<div>
    <v-toolbar app fixed dark :clipped-left="$vuetify.breakpoint.lgAndUp">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <router-link to="/" style="">
          <img src="https://ar.sit.kmutt.ac.th/assets/img/logosit.png" height="30px"/>
        </router-link>
        <v-spacer></v-spacer>
        <b-dropdown id="ddown1" text="Subject By Faculty" class="m-md-2" >
            <b-dropdown-item v-for="faculty in faculties" :key="faculty.program_id" :to="`/faculty/${faculty.program_id}`" @click="setFacultyID(faculty.program_id)">
              {{faculty.program_name}}
            </b-dropdown-item>
        </b-dropdown>
        <v-btn icon @click.native="dialog = true">
            <v-icon>search</v-icon>
        </v-btn>
        <v-btn fab @click="Page('/login')">
        <v-avatar>
            <img :src="`${image}`"/>
        </v-avatar>
        </v-btn>
      </v-toolbar>
      <v-navigation-drawer app fixed dark :clipped="$vuetify.breakpoint.mdAndUp" v-model="drawer">
        <v-list dense>
        <v-list-tile
        v-for="item in items"
          :key="item.title"
          @click="Page(item.page)"
        >
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-subheader class="mt-1 grey--text text--darken-1">Favorite</v-subheader>
      <v-list dense>
        <v-list-tile
        v-for="item in favorite"
          :key="item.title"
          @click="Page(item.page)"
        >
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-subheader class="mt-1 grey--text text--darken-1">Curriculums</v-subheader>
      <v-list dense>
        <v-list-tile
        v-for="item in curriculums"
          :key="item.title"
          @click="Page(item.page)"
        >
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
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
          <v-text-field prepend-icon="search" placeholder="ลองหาวีดีโอดูสิ~"></v-text-field>
        </v-card-title>
      </v-card>
    </v-dialog>

</div>
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
      drawer: false,
      dialog: false,
      image: 'https://scontent.fbkk2-4.fna.fbcdn.net/v/t1.0-9/30726269_10215071824725078_6112983317628141762_n.jpg?_nc_cat=101&_nc_eui2=AeFegqDiTGYv1Ou0FUAj2uEAJ4F9EoP4AH3OrcsE5BHMbLhha6fB2sTkiagqxj93DPt1NwbE9W-JPe2_dec6iF-ATNlCYkm1m762xeHkLLcI0A&_nc_ht=scontent.fbkk2-4.fna&oh=d1959b535ba861c75e9195914b07b551&oe=5C742742',
      faculties: [
        'Bachelor of Science Program in Information Technology',
        'Bachelor of Science Program in Computer Science',
        'Master of Science Program in Information Technology"'
      ],
      items: [
        { title: 'All Videos', icon: 'videocam', page: '/' },
        { title: 'Subject', icon: 'school', page: '/' }
      ],
      favorite: [
        { title: 'xxxxx', icon: 'favorites', page: '/' },
        { title: 'xxxxx', icon: 'favorites', page: '/' },
        { title: 'xxxxx', icon: 'favorites', page: '/' }
      ],
      curriculums: [
        { title: 'xxxxx', icon: 'favorites', page: '/' },
        { title: 'xxxxx', icon: 'favorites', page: '/' },
        { title: 'xxxxx', icon: 'favorites', page: '/' },
        { title: 'xxxxx', icon: 'favorites', page: '/' },
        { title: 'xxxxx', icon: 'favorites', page: '/' },
        { title: 'xxxxx', icon: 'favorites', page: '/' },
        { title: 'xxxxx', icon: 'favorites', page: '/' },
        { title: 'xxxxx', icon: 'favorites', page: '/' }
      ]
    }
  },
  methods: {
    ...mapActions(['setFacultyID']),
    loadAllFaculties: async function () {
      let faculties = await axios.get(`${process.env.VUE_APP_PROGRAM_SERVICE_URL}/programs`)
      faculties = faculties.data
      this.faculties = faculties
    },
    Page (page) {
      this.$router.replace({ path: page })
    }
  }
}
</script>
