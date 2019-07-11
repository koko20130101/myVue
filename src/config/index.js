/* 构建相关 */
export const ENV = process.env.VUE_APP_CONFIG_ENV // 当前环境
export const CONFIG_ENV_DEV = 'development' // 开发环境
export const CONFIG_ENV_TEST = 'testing' // 测试环境
export const CONFIG_ENV_PROD = 'production' // 生产环境
export const IS_DEV = ENV === CONFIG_ENV_DEV
export const IS_TEST = ENV === CONFIG_ENV_TEST
export const IS_PROD = ENV === CONFIG_ENV_PROD

/* API地址 */
// http://192.168.1.104:8082
export const API_ORIGIN_DEV = 'http://47.106.49.23:81' // 测试
// export const API_ORIGIN_DEV = 'http://47.106.49.23:8082' // 开发 服务器
// export const API_ORIGIN_DEV = 'http://192.168.104.37:8082' // 开发 志强
// export const API_ORIGIN_DEV = 'http://10.0.4.20:8082' // 开发 亚东
// export const API_ORIGIN_DEV = 'http://10.0.4.14:8082' // 开发 建龙
// export const API_ORIGIN_DEV = 'http://10.0.4.49:8082' // 开发 志敏
// export const API_ORIGIN_DEV = 'http://192.168.100.75:8082' // 开发 炜成
// export const API_ORIGIN_DEV = '47.106.49.23:36742' // mock
export const API_ORIGIN_TEST = 'http://47.106.49.23:81' // 测试
export const API_ORIGIN_PROD = '' // 线上

/* 响应 */
export const RES_SUC_CODE = 200 // 请求返回成功状态码
export const RES_FAIL_DATED_CODE = 10111 // 请求返回登录过期状态码
export const RES_FAIL_LOGIN_CODE = 10005 // 请求返回登录密码错误状态码

/* 请求 */
export const REQ_RETRY_TIME = 2000 // 请求失败重试时长 ms
