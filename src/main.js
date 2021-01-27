/*
 * @Description: 
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2021-01-25 09:51:40
 * @LastEditors: MoXu
 * @LastEditTime: 2021-01-27 10:09:46
 */
// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import i18n from './locales'
import {
  VueAxios
} from './utils/request'
import ProLayout, {
  PageHeaderWrapper
} from '@ant-design-vue/pro-layout'
import themePluginConfig from '../config/themePluginConfig'
//echarts
import * as echarts from 'echarts';
// 挂载echarts
Vue.prototype.$echarts = echarts 
// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
import './mock'

import bootstrap from './core/bootstrap'
import './core/lazy_use' // use lazy load components

import './permission' // permission control

import './utils/filter' // global filter
import './global.less' // global style
Vue.config.productionTip = false

// mount axios to `Vue.$http` and `this.$http`
Vue.use(VueAxios)
// 滚动条
import vuescroll from 'vuescroll';
Vue.use(vuescroll, {
  ops: {}, // 在这里设置全局默认配置
});
//注入vxe-table https://xuliangzhan_admin.gitee.io/vxe-table/v3/#/grid/api
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
Vue.use(VXETable)
// use pro-layout components
Vue.component('pro-layout', ProLayout)
Vue.component('page-container', PageHeaderWrapper)
Vue.component('page-header-wrapper', PageHeaderWrapper)
window.umi_plugin_ant_themeVar = themePluginConfig.theme

new Vue({
  router,
  store,
  i18n,
  // init localstorage, vuex
  created: bootstrap,
  render: h => h(App)
}).$mount('#app')