import request from '@/utils/request';

export const getResult = (data, page) => {
  return request({
    method: "GET",
    url: `/search?q=${data}&page=${page}`
  })
}

export const getSuggest = (params) => {
  return request({
    method: "GET",
    url: `/suggestion?q=${params}`,
  })
}