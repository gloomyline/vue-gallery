<template>
  <div id="app">
    <photo-wall></photo-wall>
  </div>
</template>

<script>
import photoWall from './components/PhotoWall.vue'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    photoWall
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
#app 
  height 100%
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>
