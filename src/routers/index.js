//引入组件
import Vue from 'vue'
import VueRouter from 'vue-router'

// 注册为Vue全局组件
Vue.use(VueRouter)

// 配置路由规则
const routers = []

// 创建路由对象
const router = new VueRouter(routers)

// 默认导出路由对象
export default router