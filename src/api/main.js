import request from '@/utils/request.js'

export const getChannles = () => {
  return request({
    method: "GET",
    url: "/user/channels"
  })
}

export const getChannlesList = (channel_id, timestamp) => {
  return request({
    method: "GET",
    url: "/articles",
    params: {
      channel_id,
      timestamp
    }
  })
}

export const getRedChannelsList = () => {
  return request({
    method: "GET",
    url: "/channels"
  })
}