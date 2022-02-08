import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts',
    name: 'Posts',
    component: () => import('../views/Posts/Posts.vue')
  },

  {
    path: '/posts/:id',
    name: 'PostDetail',
    component: () => import('../views/Posts/PostDetail.vue')
  },

  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Setting/Settings.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/Users/Users.vue')
  },
  {
    path: '/my_profile',
    name: 'MyProfile',
    component: () => import('../views/Users/MyProfile.vue')
  },
  {
    path: '/change_password',
    name: 'ChangePassword',
    component: () => import('../views/Users/ChangePassword.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
