import request from '@/utils/request'

// 登录请求
export const login = (data) => {
  return request({
    method: "POST",
    url: '/authorizations',
    data: data
  })
}

// 验证请求
export const verify = (tel) => {
  return request({
    method: "GET",
    url: `/sms/codes/${tel}`
  })
}
