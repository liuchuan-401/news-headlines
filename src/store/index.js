import Vue from 'vue'
import Vuex from 'vuex'
import { setKey } from '@/utils/local.js'

// 定义local存储的属性名
const USER_KEY = 'userKey'

// 注册为全局使用
Vue.use(Vuex)

// 创建Store对象
const store = new Vuex.Store({
  state: {
    user: {},
    userInfo: {}
  },
  mutations: {
    setUser (state, payload) {
      // 将token存储到state
      state.user = payload
      // 将token存储到本地
      setKey(USER_KEY, payload)
    },
    setUserInfo (state, payload) {
      state.userInfo = payload
    }
  },
  actions: {},
  modules: {
  },
  getters: {},
  Plugin: []
})

export default store
