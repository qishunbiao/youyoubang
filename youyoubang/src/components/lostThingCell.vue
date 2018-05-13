<template>
  <div class="lostThing">
      <div class="imageDescrition">
          <img mode="scaleToFill" @click="scaleImg(image,lostThing.images)"  v-for="(image, index) in lostThing.images" :key="index" :src="image"/>
      </div>
      <div class="detailDescrition">
          <span><span class="iconfont icon-xiaoxi icons"></span><span>{{lostThing.depict}}</span></span>
          <span class="release-date"><span class="iconfont icon-icon icons"/><span>{{createTime}}</span></span>
      </div>
  </div>
</template>
<script>
import { previewImage } from '@/utils'
export default {
  data () {
    return {
      createTime: this.format(this.lostThing.createTime)
    }
  },
  props: ['lostThing', 'list'],
  methods: {
    scaleImg: function (...args) {
      previewImage({
        currentUrl: args[0],
        imageList: args[1]
      })
    },
    format: function formatTime (date) {
      let DATE = new Date(date)
      function formatNumber (n) {
        const str = n.toString()
        return str[1] ? str : `0${str}`
      }

      const year = DATE.getFullYear()
      const month = DATE.getMonth() + 1
      const day = DATE.getDate()

      const t1 = [year, month, day].map(formatNumber).join('/')

      return `${t1}`
    }
  }
}
</script>
<style scoped>
@import url('../shared/iconfont.css');

.icons {
    padding-right: 10rpx;
}

.lostThing {
    width: 100%;
    box-sizing: border-box;
    padding: 50rpx;
    background-color: #f1eff1;
    margin: 20rpx 0 20rpx 0;
}

.lostThing:last-child {
    margin-bottom: 100px;
}

.imageDescrition {
    display: flex;
    justify-content: space-between;
   
}  

.imageDescrition>img {
    width: 150rpx;
    height: 75rpx;
}

.detailDescrition {
  display: flex;
  color: #5b5b5b;
  justify-content: space-between;
  margin-top: 50rpx;
}

    .release-date {
    display: block;
    white-space: nowrap;
}
</style>

