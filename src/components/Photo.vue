<template>
  <!-- photo 负责照片的平移和旋转 -->
  <div class="photo" :class="{'photo-center': photoCenter}" @click="clickHandler">
    <!-- photo-wrap 负责照片的翻转 -->
    <div class="photo-wrap" :class="{'photo-back': photoBack}">
      <div class="side side-front">
        <p class="img-wrap"><img :src="photoInfos.img"></p>
        <p class="caption">{{photoInfos.caption}}</p>
      </div>
      <div class="side side-back">
        <p class="desc">{{photoInfos.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import TWEEN from '@tweenjs/tween.js'

export default {
  name: 'photo',
  data () {
    return {
      photoBack: false,
      photoCenter: false
    }
  },
  props: {
    photoInfos: {
      type: Object,
      default: {
        img: '',
        caption: '',
        desc: ''
      }
    },
    initPosition: {
      type: Object,
      default () {
        return {
          x: 100,
          y: 100
        }
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this._init()
    })
    
  },
  methods: {
    _animateLoop (time) { // make the animating smoothly
      let loop = function () {
        requestAnimationFrame(loop)
        TWEEN.update(time)
      }
      loop()
    },
    _init () {
      const HW = window.innerWidth / 2
      const HH = this.$parent.$el.clientHeight / 2
      let PW = this.x = this.$el.clientWidth / 2
      let PH = this.y = this.$el.clientHeight / 2
      this.centerPos = {
        x: HW - PW,
        y: HH - PH
      }
      // 照片初始化样式
      let elStyle = this.elStyle = this.$el.style
      elStyle.setProperty('transform', `translate3d(${this.initPosition.x}px, ${this.initPosition.y}px, 0px)`)

      this._animateLoop()
    },
    _goToCenter () {
      let cords = {x: this.initPosition.x, y: this.initPosition.y}
      let gotoCenterAnimation = new TWEEN.Tween(cords) 
                                          .to({x: this.centerPos.x, y: this.centerPos.y}, 2000)
                                          .easing(TWEEN.Easing.Quartic.Out)
                                          .onUpdate(() => {
                                            this.elStyle.setProperty('transform', `translate3d(${cords.x}px, ${cords.y}px, 0px)`)
                                          })
                                          .start()
    },
    goToPosFromCenter (pos) {
      let cords = {x: this.centerPos.x, y: this.centerPos.y}
      let gotoPosAnimation = new TWEEN.Tween(cords)
                                      .to({x: pos.x, y: pos.y})
                                      .easing(TWEEN.Easing.Quartic.in)
                                      .onUpdate(() => {
                                        this.elStyle.setProperty('transform', `translate3d(${cords.x}px, ${cords.y}px, 0px)`)
                                      })
                                      .start()
    },
    clickHandler () {
      if (!this.photoCenter) {
        this.photoCenter = !this.photoCenter
        this._goToCenter()
      } else {
        this.photoBack = !this.photoBack
      }
    }
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
  .photo
    position absolute
    width 260px
    height 320px
    // margin -160px 0 0 -130px  
    cursor pointer
    -moz-cursor pointer
    -webkit-cursor pointer
    // transition all .6s ease-in-out
    // -moz-transition all .6s ease-in-out
    // -webkit-transition all .6s ease-in-out
    .photo-wrap
      position absolute
      width 100%
      height 100%
      tranform-style preserve-3d
      -moz-transform-style preserve-3d
      -webkit-transform-style preserve-3d
      transition all .6s ease-in-out
      -moz-transition all .6s ease-in-out
      -webkit-transition all .6s ease-in-out
      transform rotateY(0) translate3d(0, 0, 0)
      -moz-transform rotateY(0) translate3d(0, 0, 0)
      -webkit-transform rotateY(0) translate3d(0, 0, 0)
      .side
        position absolute
        width 100%
        height 100%
        padding 20px
        box-sizing border-box
        border-radius 10px
        background #eee
        -webkit-backface-visibility hidden
        &.side-front
          transform rotateY(0deg)
          -moz-transform rotateY(0deg)
          -webkit-transform rotateY(0deg)
          .img-wrap
            width 100%
            height 260px
            line-height 260px
            img
              width 100%
              height 100%
          .caption
            height 40px
            line-height 40px
            font-size 16px
        &.side-back
          transform rotateY(180deg)
          -moz-transform rotateY(180deg)
          -webkit-transform rotateY(180deg)
          font-size 16px
          line-height 1.5em
          color #666
          text-align left
      &.photo-back
        transform rotateY(180deg) translate3d(-10%, 0, 0)
        -moz-transform rotateY(180deg) translate3d(-10%, 0, 0)
        -webkit-transform rotateY(180deg) translate3d(-10%, 0, 0)
</style>
