import {getUserInfo} from '@/utils'
import {FETCH_USERINFO} from '../mutations-type'

const state = {
  userInfo: {}
}

const actions = {
  [FETCH_USERINFO] ({state, commit}) {
    getUserInfo(state, commit)
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
