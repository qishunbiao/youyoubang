import Vue from 'vue'
import Vuex from 'vuex'
import sliders from './modules/sliders'
import jobs from './modules/jobs'
import lostThings from './modules/lostThing'
import userInfo from './modules/userInfo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sliders,
    jobs,
    lostThings,
    userInfo
  }
})
