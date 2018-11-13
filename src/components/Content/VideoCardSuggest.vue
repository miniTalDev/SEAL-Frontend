<template>
	<v-hover>
		<v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`"
		class="mx-auto card-color">
			<div class="row space-of-suggest">
				<div class="col-4">
					<v-img class="thumbnail-suggest"
					:src="imgURL"
					aspect-ratio="2.75"
					></v-img>
				</div>
				<div class="col-8">
					<div class="row">
						<div class="col-12 text-left">
							<span class="subject-name">{{subjectName}}</span>
						</div>
						<div class="col-12 text-left">
							<span class="description-suggest-video-text">{{teacherName}}</span>
						</div>
						<div class="col-12 text-left">
							<span class="description-suggest-video-text">{{videoDate}}</span>
						</div>
					</div>
				</div>
			</div>
		</v-card>
	</v-hover>
</template>

<script>
export default {
  name: 'VideoCardSuggest',
  components: {},
  mounted () {},
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
  methods: {}
}
</script>

<style>
.card-color {
  background-color: #191919 !important;
}

.thumbnail-suggest {
  width: 150px !important;
  height: 100px !important;
  margin: 0px;
}

.subject-name {
  font-size: 16px;
  font-weight: 300;
  color: #fff;
}

.description-suggest-video-text {
  font-size: 12px;
  font-weight: 200;
  color: #fff;
}

.space-of-suggest {
  margin-bottom: 20px;
}
</style>
