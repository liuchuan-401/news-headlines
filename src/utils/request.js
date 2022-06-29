import axios from 'axios'
import { getKey } from '@/utils/local.js'

const token = getKey('userKey')

// 创建axios对象并配置基本路径
const request = axios.create({
  baseURL: 'http://toutiao.itheima.net/v1_0',
})

// 设置请求拦截器
request.interceptors.request.use(
  function (config) {
    if (token) {
      config.headers = {
        Authorization: 'Bearer ' + token.token
      }
    }
    return config
  }, function (error) {
    console.log('启动拦截器');
  }
)

export default request