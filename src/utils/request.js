import axios from 'axios'
import { Toast } from 'vant';

import { getToken, getUser } from '@/utils/auth'
import store from '../store'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? process.env.BASE_API : null, // api的base_url
  timeout: 8000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 'A00000') {
      Toast.fail(res.msg)

      //  A00004:未登录或Token 过期了
      if (res.code === 'A00004') {
        store.dispatch('FedLogOut').then(() => {
          location.reload()
        })
      }
      // A00003:业务错误
      if (res.code === 'A00003') {
        Toast(res.msg)
      }
      return Promise.reject('error')
    } else {
      return response.data
    }
    // return response.data
  },
  error => {
    const msg = error.msg ? error.msg : '请求失败，请检查网络状况'
    Toast.fail(msg)
    return Promise.reject(error)
  }
)

export default service
