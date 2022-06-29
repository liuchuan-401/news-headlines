// 统一导入、导出请求

import { login, verify } from '@/api/login.js'
import { channel } from '@/api/main.js'

export const loginAPI = login
export const verifyAPI = verify

export const channelAPI = channel