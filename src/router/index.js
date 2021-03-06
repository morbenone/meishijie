import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home',
    component: () => import('../views/Home.vue'),
    meta:{needLogin:true}
  },
  {
    path:'/home',
    name:'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta:{needLogin:true}
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:"/login",
    name:"Login",
    component: () => import(/* webpackChunkName: "login" */ '@/components/userlogin/Login.vue')
  },
  {
    path:"/rego",
    name:"Rego",
    component: () => import(/* webpackChunkName: "rego" */ '@/components/userlogin/Rego.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
