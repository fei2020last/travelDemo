/*
 * @Project: APM
 * @version: v1.0 r
 * @Author: mayf
 * @Description: 
 * @Date: 2023-03-08 12:37:28
 * @LastEditors: mayf
 * @LastEditTime: 2023-03-09 20:38:27
 * @FilePath: \travelDemo\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import 'amfe-flexible' //引入px自动转化rem工具
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.scss' // global css
import './styles/app.scss' // global css

Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
