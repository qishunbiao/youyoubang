<template>
  <swiper class="slider" model="scaleToFill"
  autoplay="autoplay" interval="3000" duration="1000" circular indicator-dots indicator-color="rgba(72,118,255,0.6)">
  <block v-for="(item,index) in sliders" :key="index">
    <swiper-item>
      <image  class="images" :src="item"/>
    </swiper-item>
  </block>
</swiper>
</template>

<script>
export default {
  props: {
    sliders: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style scoped>
.slider {
  width: 100%;
  height: 400rpx;
}

.images {
  width: 100%;
  height: 100%;
}
</style>



