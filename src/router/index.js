import Vue from 'vue'
import Router from 'vue-router'
import FileUploader from '@/components/FileUploader'
import Home from '@/components/Home'
import Login from '@/components/Login'
import {auth} from '../firebase-init'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Upload',
      name: 'FileUploader',
      component: FileUploader,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Root',
      component: Home
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = auth.currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) next('Login')
  else next()
})

export default router
