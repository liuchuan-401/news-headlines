import request from '@/utils/request.js';

export const uerInfo = () => {
  return request({
    url: '/user',
    method:'GET'
  })
}