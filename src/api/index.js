// 统一导入、导出请求

// 登录页面
import { login, verify } from '@/api/login.js'
// 我的页面
import { uerInfo } from '@/api/my.js'
// 首页页面
import { getChannles, getChannlesList, getRedChannelsList } from '@/api/main.js'
//搜索页面
import { getSuggest, getResult } from '@/api/sreach.js'

export const loginAPI = login
export const verifyAPI = verify

export const uerInfoAPI = uerInfo

export const getChannlesAPI = getChannles
export const getChannlesListAPI = getChannlesList
export const getRedChannelsListAPI = getRedChannelsList

export const getSuggestAPI = getSuggest
export const getResultAPI = getResult