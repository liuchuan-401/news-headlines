import axios from 'axios'

// 创建axios对象并配置基本路径
const request = axios.create({
  baseURL: 'http://toutiao.itheima.net/v1_0',
  headers: {
  }
})

export default request