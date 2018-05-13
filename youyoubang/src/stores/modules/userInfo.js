import {postUserInfo} from '@/utils'
import {FETCH_USERINFO} from '../mutations-type'

const state = {
  userInfo: {}
}

const actions = {
  [FETCH_USERINFO] ({state, commit}) {
    postUserInfo(state, commit)
  }
}

const mutations = {
  [FETCH_USERINFO] (state, payload) {
    console.log(payload)
    state.userInfo = {...payload}
  }
}

export default {
  state,
  mutations,
  actions
}
