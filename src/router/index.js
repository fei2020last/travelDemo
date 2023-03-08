/*
 * @Project: APM
 * @version: v1.0 r
 * @Author: mayf
 * @Description: 
 * @Date: 2023-03-08 12:37:28
 * @LastEditors: mayf
 * @LastEditTime: 2023-03-08 19:54:51
 * @FilePath: \travelDemo\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const  routes = [
    {
      path: '/',
      redirect: '/index',
      
    },
    {
      path: '/index',
      name: 'index',
      component: () => import( '../views/index.vue')
    },
    
  ]
const router = new Router({
  mode: 'history',
  routes
})
export default router
