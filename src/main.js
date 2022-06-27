import Vue from 'vue'
import Vant from 'vant'
import App from './App.vue'

import '@/styles/theme.less'
import '@/styles/icon.less'
import 'vant/lib/index.css'

import router from '@/routers'
import 'amfe-flexible'

// 从Vant组件库中引出组件
import { Button } from 'vant';

// 将vant注册为全局组件
Vue.use(Vant)
Vue.use(Button)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
