import {get} from '@/utils'
import {FETCH_LOSTTHING, baseHost} from '../mutations-type'

const state = {
  lostThings: []
}

const actions = {
  [FETCH_LOSTTHING] ({state, commit}) {
    get(`${baseHost}/lost/findLost`).then((res) => {
      console.log(res)
      var losts = res.data.list
      commit(FETCH_LOSTTHING, losts)
    })
  }
}

const mutations = {
  [FETCH_LOSTTHING] (state, payload) {
    state.lostThings = [...payload]
  }
}

export default {
  state,
  mutations,
  actions
}
