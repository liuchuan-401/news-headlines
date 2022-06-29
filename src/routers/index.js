import Vue from 'vue'
import VueRouter from 'vue-router'

// 注册为Vue全局组件
Vue.use(VueRouter)

// 引入组件
import H from '@/pages/h1/index.vue'
import Layout from '@/pages/layout/index.vue'
import Login from '@/pages/login/index.vue'
import Main from '@/pages/main/index.vue'
import Question from '@/pages/question/index.vue'
import Viode from '@/pages/viode/index.vue'
import My from '@/pages/my/index.vue'

// 配置路由规则
const routes = [
  // 访问页面
  {
    path: '/',
    component: H
  },

  // 框架页面
  {
    path: '/layout',
    redirect: '/layout/main',
    component: Layout,
    children: [
      // 主页面
      {
        path: '/layout/main',
        component: Main
      },
      // 问答页面
      {
        path: '/layout/question',
        component: Question
      },
      // 视频页面
      {
        path: '/layout/viode',
        component: Viode
      },
      // 我的页面
      {
        path: '/layout/my',
        component: My
      }
    ]
  },

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