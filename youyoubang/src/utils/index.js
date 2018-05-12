import {FETCH_USERINFO, ApID, AppSecret, baseHost} from '../stores/mutations-type'

function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export const getUserInfo = function (state, commit) {
  wx.login({
    success: function ({errMsg}) {
      wx.getUserInfo({
        withCredentials: true,
        lang: 'zh_CN 简体中文',
        timeout: 2000,
        success: function ({userInfo}) {
          commit(FETCH_USERINFO, userInfo)
        }
      })
    }
  })
}

export const previewImage = ({currentUrl, imageList}) => {
  wx.previewImage({
    current: currentUrl,
    urls: imageList
  })
}

export const post = (url, data = {}) => {
  console.log(data)
  let contentType = 'application/json'
  return new Promise((resolve, reject) => {
    try {
      wx.request({
        url: url,
        data: data,
        method: 'POST',
        header: {'content-type': contentType},
        success (res) {
          console.log(res)
          resolve(res.data)
        },
        fail (e) {
          resolve(e)
        }
      })
    } catch (e) {
      console.error('网络异步请求出错,', e)
      resolve(e)
    }
  })
}

export const postUserInfo = () => {
  wx.login({
    success: function (resLogin) {
      console.log('successLogin')
      if (resLogin.code) {
        var requestUrl = `${baseHost}/getopendid`
        var data = {
          code: resLogin.code,
          appsecret: AppSecret,
          appid: ApID
        }
        post(requestUrl, data)
      }
    }
  })
}

export const get = (url) => {
  return new Promise((resolve, reject) => {
    try {
      wx.request({
        url: url,
        method: 'GET',
        success (res) {
          resolve(res.data)
        },
        fail (e) {
          resolve(e)
        }
      })
    } catch (e) {
      console.error('网络请求出错', e)
      resolve(e)
    }
  })
}
