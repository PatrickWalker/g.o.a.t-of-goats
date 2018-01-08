// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './firebase-init'
import VueFire from 'vuefire'
var StarRating = require('vue-star-rating')

Vue.component('star-rating', StarRating)

Vue.component('nav-bar', {
  template: `<div><router-link v-bind:to="'/Home'">Home</router-link> <router-link v-bind:to="'/Upload'">Upload</router-link>
    <router-link v-bind:to="'/Rate'">Rate Some Goats</router-link></div>`
})
Vue.config.productionTip = false
Vue.use(VueFire)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
