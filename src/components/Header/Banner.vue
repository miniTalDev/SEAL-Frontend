<template>
    <v-carousel hide-controls width="5">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  name: 'Banner',
  components: {

  },
  mounted () {

  },
  props: {
    msg: String
  },
  data () {
    return {
      items: [
        {
          src: 'https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.0-9/44190230_1600685520036865_4372677590985474048_o.jpg?_nc_cat=104&_nc_ht=scontent.fbkk12-2.fna&oh=c2feebf32444c6547f8d7038f09e7bcc&oe=5C4AB8F8'
        },
        {
          src: 'https://www.sit.kmutt.ac.th/wp-content/uploads/2018/02/banner-onfront02_03.jpg'
        },
        {
          src: 'https://www.bhubeth.com/wp-content/uploads/2013/04/sit-kmutt.jpg'
        },
        {
          src: 'https://www.camphub.in.th/wp-content/uploads/2016/08/110642007.jpg'
        }
      ]

    }
  },
  methods: {

  }
}
</script>
