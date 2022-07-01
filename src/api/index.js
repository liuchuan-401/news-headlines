// 统一导入、导出请求

// 登录页面
import { login, verify } from '@/api/login.js'
// 我的页面
import { uerInfo } from '@/api/my.js'
// 首页页面
import { getChannles, getChannlesList } from '@/api/main.js'

export const loginAPI = login
export const verifyAPI = verify

export const uerInfoAPI = uerInfo

export const getChannlesAPI = getChannles
export const getChannlesListAPI = getChannlesList