import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home' // 导入home组件
import Login from '@/views/login' // 导入login组件

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeIndex',
      component: Home
    },
    {
      path: '/login',
      name: 'LoginIndex',
      component: Login
    }
  ]
})
