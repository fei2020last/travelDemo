/*
 * @Project: APM
 * @version: v1.0 r
 * @Author: mayf
 * @Description: 
 * @Date: 2023-03-08 12:37:28
 * @LastEditors: mayf
 * @LastEditTime: 2023-03-08 13:06:06
 * @FilePath: \travelDemo\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const  routes = [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // {
    //   path: '/websocket',
    //   name: 'Websocket',
    //   component: () => import( '../views/Websocket.vue')
    // },
  ]
const router = new Router({
  mode: 'history',
  routes
})
export default router
