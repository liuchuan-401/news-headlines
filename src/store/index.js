import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLoacl = new VuexPersistence({
  storage: window.localStorage
})
// 注册为全局使用
Vue.use(Vuex)

// 创建Store对象
export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {},
  modules: {
  },
  getters: {},
  Plugin: [vuexLoacl.Plugin]
})


