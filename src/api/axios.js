import axios from 'axios'
// import store from '../store/index'

import {
  RES_SUC_CODE,
  CONFIG_ENV_DEV,
  CONFIG_ENV_TEST,
  CONFIG_ENV_PROD,
  ENV,
  API_ORIGIN_DEV,
  API_ORIGIN_TEST,
  API_ORIGIN_PROD
} from '@/config'

// 设置api地址
switch (ENV) {
  case CONFIG_ENV_PROD:
    axios.defaults.baseURL = API_ORIGIN_PROD
    break
  case CONFIG_ENV_TEST:
    axios.defaults.baseURL = API_ORIGIN_TEST
    break
  case CONFIG_ENV_DEV:
    axios.defaults.baseURL = API_ORIGIN_DEV
    break
  default:
    axios.defaults.baseURL = API_ORIGIN_TEST
    break
}

// http request 拦截器
axios.interceptors.request.use(
  config => {
    // 权限认证
    // config.header.Authorization = store.state.app.token
    // post传参序列化
    if (config.method !== 'post') {
      config.data = JSON.stringify(config.data)
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    const res = response.data
    if (res.status !== RES_SUC_CODE) {
      console.log('成功！')
    }
    return response
  },
  error => {
    console.log('错误！' + error)
  }
)

export default axios
