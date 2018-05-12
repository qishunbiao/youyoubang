import {get} from '@/utils'
import {FETCH_SLIDERS, baseHost} from '../mutations-type'

const state = {
  sliders: []
}

const actions = {
  [FETCH_SLIDERS] ({state, commit}) {
    get(`${baseHost}/rotation/getRotaion`).then((res) => {
      var data = res.data
      var urls = []
      for (var i = 0; i < data.length; i++) {
        urls.push(data[i].url)
      }
      commit(FETCH_SLIDERS, urls)
    })
  }
}

const mutations = {
  [FETCH_SLIDERS] (state, payload) {
    console.log(payload)
    state.sliders = [...payload]
  }
}

export default {
  state,
  mutations,
  actions
}
