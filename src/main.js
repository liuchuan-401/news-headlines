import Vue from 'vue'
import Vant from 'vant'
import App from './App.vue'
import moment from 'moment'
import VueMoment from 'vue-moment'
import _ from 'lodash'

import '@/styles/theme.less'
import '@/styles/icon.less'
import 'vant/lib/index.css'

import router from '@/routers/index.js'
import store from '@/store/index.js'
import 'amfe-flexible'
import 'moment/locale/zh-cn'

// 从Vant组件库中引出组件
import { Uploader, DatetimePicker, ActionSheet, Popup, List, Dialog, Cell, Grid, GridItem, Button, NavBar, Form, Field, CellGroup, Icon, Toast, CountDown, Search, Tab, Tabs, Tabbar, TabbarItem, Image as VanImage } from 'vant';

// 将vant注册为全局组件
Vue.use(Vant)
Vue.use(Button)
Vue.use(NavBar)
Vue.use(Form)
Vue.use(Field)
Vue.use(CellGroup)
Vue.use(Icon)
Vue.use(Toast)
Vue.use(CountDown)
Vue.use(Search)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(VanImage)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Cell)
Vue.use(Dialog)
Vue.use(List)
Vue.use(Popup)
Vue.use(ActionSheet)
Vue.use(DatetimePicker)
Vue.use(Uploader)

Vue.use(VueMoment, { moment })
Vue.use(_)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
