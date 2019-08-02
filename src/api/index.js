import axios from 'axios'

import { Toast } from 'vant'

const service = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 5000
})

// request 拦截器
service.interceptors.request.use(config => {
  // 这里可以自定义一些config 配置
  return config
},
error => {
  //  这里处理一些请求出错的情况
  Promise.reject(error)
}
)

// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data

    // 这里处理一些response 正常放回时的逻辑
    return res
  },
  error => {
    // 这里处理一些response 出错时的逻辑
    if (!error.response) {
      Toast('世界上最遥远的距离就是没网')
      return Promise.reject(error)
    }
    if (error.response && error.response.status === 500) {
      Toast('服务器内部错误')
      return Promise.reject(error)
    }
    Toast('哦，出了点小问题~')
  }
)

export default service
