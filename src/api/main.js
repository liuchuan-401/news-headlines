import request from '@/utils/request.js';

export const channel = () => {
  return request({
    path: '/channels',
    method: 'GET',

  })
}