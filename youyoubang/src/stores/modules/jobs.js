import {get} from '@/utils'
import {FETCH_JOBS,
    baseHost} from '../mutations-type'

const state = {
  jobs: []
}

const actions = {
  [FETCH_JOBS] ({state, commit}) {
    get(`${baseHost}/job/findjob`).then((res) => {
      console.log(res.data)
      var joblist = res.data.list
      var jobs = []
      for (var i = 0; i < joblist.length; i++) {
        jobs.push(joblist[i])
      }
      commit(FETCH_JOBS, jobs)
    })
  }
}

const mutations = {
  [FETCH_JOBS] (state, payload) {
    console.log(payload)
    state.jobs = [...payload]
  }
}

export default {
  state,
  mutations,
  actions
}
