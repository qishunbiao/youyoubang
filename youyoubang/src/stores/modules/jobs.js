import {get} from '@/utils'
import {FETCH_JOBS, USER_APPLY, USER_UNAPPLY, baseHost} from '../mutations-type'

const state = {
  jobs: []
}
const userid = wx.getStorageSync('userid')

const actions = {
  [FETCH_JOBS] ({state, commit}) {
    get(`${baseHost}/job/findjob?userid=${userid}`).then((res) => {
      var joblist = res.data.list
      var jobs = []
      for (var i = 0; i < joblist.length; i++) {
        jobs.push(joblist[i])
      }
      commit(FETCH_JOBS, jobs)
    })
  },
  [USER_APPLY] ({state, commit}, ...ret) {
    get(`${baseHost}/jobrecord/addRecord?jobid=${ret[0].id}&userid=${userid}`).then(res => {
      if (res.status === 200) commit(USER_APPLY, {isApply: true, id: ret[0].id})
    })
  },
  [USER_UNAPPLY] ({state, commit}, ...ret) {
    get(`${baseHost}/jobrecord/cancelApply?jobid=${ret[0].id}&userid=${userid}`).then(res => {
      console.log(res)
      if (res.status === 200) commit(USER_UNAPPLY, {isApply: true, id: ret[0].id})
    })
  }
}

const mutations = {
  [FETCH_JOBS] (state, payload) {
    state.jobs = [...payload]
  },
  [USER_APPLY] (state, payload) {
    state.jobs = [...state.jobs.map((item, index) => { if (item.id === payload.id) item.isApply = true; return item })]
  },
  [USER_UNAPPLY] (state, payload) {
    state.jobs = [...state.jobs.map((item, index) => { if (item.id === payload.id) item.isApply = false; return item })]
  }
}

export default {
  state,
  mutations,
  actions
}
