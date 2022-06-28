import Vue from 'vue'
import VueRouter from 'vue-router'

// 注册为Vue全局组件
Vue.use(VueRouter)

// 引入组件
import Login from '@/pages/login/index.vue'

// 配置路由规则
const routes = [
  //登录页面
  {
    path: '/login',
    component: Login
  }
]

// 创建路由对象
const router = new VueRouter({ routes, mode: 'history' })

// 默认导出路由对象
export default router