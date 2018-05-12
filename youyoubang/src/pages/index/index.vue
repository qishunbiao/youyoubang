<template>
  <div class="container">
    <div class="userInfo">
      <div class="iconfont .icon-iconfonticozhuce userInfoBtn" @touchstart="handleShowUserInfoStart" @touchend="handleShowUserInfoEnd"/>
        <div class="user-face" v-if="showUserInfo">
          <img :src="sliders.sliders[0]" alt="">
        </div>
        <div class="integralContainer" v-if="showUserInfo">
            <div class="integral">100</div>
        </div>    
    </div>
    <sliders :sliders="sliders.sliders"/>
    <navbar :handleShowLostThings="handleShowLostThings" :handleShowJobs="handleShowJobs"/>
    <jobsList v-if="showList==='jobs'" :jobs="jobs.jobs" />
    <lostThingList v-if="showList==='lostThings'" :lostThings="lostThings.lostThings"/>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import {FETCH_SLIDERS,
        FETCH_JOBS,
        FETCH_LOSTTHING,
        FETCH_USERINFO} from '@/stores/mutations-type'
import sliders from '@/components/sliders'
import navbar from '@/components/navBar'
import jobsList from '@/components/jobList'
import {postUserInfo} from '@/utils/index'
import lostThingList from '@/components/lostThingList'

export default {
  created () {
    postUserInfo()
    this.fetchUserInfo()
    this.fetchSliders()
    this.fetchJobs()
    this.fetchLostTings()
  },
  data () {
    return {
      showList: 'jobs',
      showUserInfo: false
    }
  },
  computed: {
    ...mapState({
      sliders: state => state.sliders,
      jobs: state => state.jobs,
      lostThings: state => state.lostThings,
      userInfo: state => state.userInfo
    })
  },
  methods: {
    ...mapActions({
      fetchSliders: FETCH_SLIDERS,
      fetchJobs: FETCH_JOBS,
      fetchLostTings: FETCH_LOSTTHING,
      fetchUserInfo: FETCH_USERINFO
    }),
    handleShowJobs: function () {
      const self = this
      self.showList = 'jobs'
    },
    handleShowLostThings: function () {
      const self = this
      console.log('lostThings')
      self.showList = 'lostThings'
    },
    handleShowUserInfoStart: function () {
      const self = this
      self.showUserInfo = !self.showUserInfo
    },
    handleShowUserInfoEnd: function () {
      const self = this
      self.showUserInfo = !self.showUserInfo
    }
  },
  components: {
    sliders,
    navbar,
    jobsList,
    lostThingList
  }
}
</script>

<style scoped>
@import url('../../shared/iconfont.css');

.container {
  padding: 0;
}
.userInfo {
  position: fixed;
  top: 40%;
  left: 2%;
  width: 300rpx;
  height: 350rpx;
}

.userInfoBtn {
  position: absolute;
  bottom: 0;
  width: 80rpx;
  height: 80rpx;
  line-height: 80rpx;
  border-radius: 50%;
  background-color: #F5F5DC;
  text-align: center;
  opacity: 0.85;
  color: royalblue;
  font-size: 20px;
}

.user-face {
  width: 100%;
  background-color: rgba(255,255,255,.6);
  height: 150rpx;
  border-bottom: 2rpx solid #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;

}

.user-face img {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
}

.integralContainer {
  height: 100rpx;
  background: rgba(255,255,255,.6);
  display: flex;
  justify-content: center;
  align-content: center;
}

.integral {
  line-height: 100rpx;
}

</style>
