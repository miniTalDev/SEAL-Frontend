<template>
  <v-hover>
    <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto card-size">
      <div class="row">
        <div class="col-12">
          <v-img class="thumbnail"
            :src="imgURL"
            aspect-ratio="2.75"
          ></v-img>
        </div>
      </div>
      <div class="row description-block">
        <div class="col-12 text-left">
          <span class="subject-name">{{subjectName}}</span>
        </div>
        <div class="col-12 text-left space-top-teacher-name">
          <v-icon class="icon">person</v-icon>
          <span class="description-text">{{teacherName}}</span>
        </div>
      </div>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'VideoCard',
  components: {

  },
  mounted () {

  },
  props: {
    imgURL: String,
    teacherName: String,
    subjectName: String,
    videoDate: String,
    videoID: String
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

<style scoped>
  .card-size {
    width: auto;
    height: 260px;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 10px;
    background-color: #303030;
  }

  .thumbnail {
    width: 100%;
    height: 150px;
  }

  .description-block {
    margin: 15px 2px;
  }

  .subject-name {
    font-size: 14px;
    font-weight: 500;
    color: #fff;
  }

  .space-top-teacher-name {
    margin-top: 10px;
  }

  .description-text {
    margin-left: 10px;
    font-size: 12px;
    font-weight: 200;
    color: #fff;
  }

  .icon {
    color: #fff;
  }
</style>
