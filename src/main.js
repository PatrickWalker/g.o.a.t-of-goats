// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'

import App from './App'
import router from './router'
import './firebase-init'
import VueFire from 'vuefire'
import 'vuetify/dist/vuetify.min.css'
var StarRating = require('vue-star-rating')

Vue.component('star-rating', StarRating)
Vue.component('nav-bar', {
  template: `<v-toolbar>
    <v-toolbar-title>Goat Rating</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/Home">Home</v-btn>
      <v-btn flat to="/Upload">Upload</v-btn>
      <v-btn flat to="/Rate">Rate some Goats</v-btn>
    </v-toolbar-items>
  </v-toolbar>`
})
Vue.config.productionTip = false
Vue.use(VueFire)
Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
