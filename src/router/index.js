import Vue from 'vue'
import Router from 'vue-router'
import FileUploader from '@/components/FileUploader'
import Home from '@/components/Home'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Upload',
      name: 'FileUploader',
      component: FileUploader
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
