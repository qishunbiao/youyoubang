<template>
  <view class="navBar">
      <button class="jobs" @click="handleShowJobs">兼职</button>
      <button class="lostThings" @click="handleShowLostThings">招领宝</button>
  </view>
</template>

<script>
export default {
  created () {
    console.log(this)
  },
  props: ['handleShowJobs', 'handleShowLostThings']
}
</script>

<style scoped>
.navBar {
    width: 100%;
    height: 100rpx;
    position: fixed;
    z-index: 10;
    bottom: 0;
    line-height: 100rpx;
    text-align: center;
}

.navBar button {
    color: #fff;
}

.jobs {
    display: inline-block;
    width: 49%;
    height: 100%;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0; 
    background-color: rgb(72,118,255);  
    border-right: 1rpx solid rgba(255,255,255,0.5)
}

.lostThings {
    display: inline-block;
     width: 50%;
      height: 100%;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    background-color: rgb(72,118,255);
}

</style>


