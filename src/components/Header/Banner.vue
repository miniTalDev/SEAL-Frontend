<template>
<v-content>
    <v-carousel hide-controls width="5" delimiter-icon="school">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</v-content>
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
          src: 'https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.0-9/43534328_2303477516338898_1061947946884399104_o.jpg?_nc_cat=104&_nc_eui2=AeF_ZLIdaNS-U2OF9O789NIVuYdc8iYxMnTuKK4FIjv7I48-iWUZtJ8CpK7SNtHh0ds6ztF0RYa0KXnDC1MDle4aKK3vOJ5Dp0p-1oZq1ukvAw&_nc_ht=scontent.fbkk12-2.fna&oh=7441c7aa8fa626e2edea4b0637103185&oe=5CB0F203'
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
