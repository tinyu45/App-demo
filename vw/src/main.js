// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//全局引入
import Vue from 'vue'
import App from './App'
import router from './router'
import 'font-awesome/css/font-awesome.css'

import {test} from './assets/method'    //引入外部js文件

Vue.config.productionTip = false
Vue.prototype.$getCss=test             //定义全局使用
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
