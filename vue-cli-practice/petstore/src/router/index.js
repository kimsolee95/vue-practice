// import { MAX_SAFE_INTEGER } from 'core-js/core/number'
import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

import Form from '../components/Form.vue'
import Main from '../components/Main.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },

  {
    path: '/',
    name: 'iMain',
    component: Main,
    props: true
  },
  {
    path: '/form',
    name: 'Form',
    component: Form,
    props: true
  },
  // {
  //   path: '*',
  //   redirect: "/"
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
