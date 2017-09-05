<template>
  <div class="photo-wall">
    <photo v-for="(item, index) in photoData" :key="'img_' + index" :photoInfos="item" :initPosition="initPositionsArr[index]"></photo>      
  </div>
</template>

<script>
import photo from './Photo.vue'
import photoData from '../assets/photoData.js'

export default {
  name: 'photo-wall',
  data () {
    return {
      photoData,
      initPositionsArr: []
    }
  },
  created () {
    let data = this.photoData
    for (let i = 0, l = data.length; i < l; ++i) {
      let item = data[i]
      item.img = '../assets/imgs/' + item.img
    }

    this.initPositionsArr = [
      {x: 100, y: 200},
      {x: 200, y: 100}
    ]
  },
  mounted () {
    // console.log('11', this.photoData)
  },
  methods: {
    _getRandomPos (range) {

    }
  },
  components: {
    photo
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
  .photo-wall
    position absolute
    left 0
    top 50%
    width 100%
    height 720px
    margin-top -360px
    overflow hidden
    background #111
    user-select none
    perspective 800px
    -moz-perspective 800px
    -webkit-perspective 800px
</style>
