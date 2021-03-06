import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
Vue.use(VueRouter)

const routes = [
  {
    path:'*',
    name: 'Error',
    component: () => import('@/views/Error')
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About')
  },
  {
    path: '/facts/:id',
    name: 'Facts',
    component: () => import('@/views/Fact')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
