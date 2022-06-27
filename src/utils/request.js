import axios from 'axios'

// 创建axios对象并配置基本路径
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/'
})

export default request