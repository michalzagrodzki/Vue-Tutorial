import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// We want to apply VueResource and VueRouter
// to our Vue instance
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/',
      component: App,
      children: [
        { path: '', component: Home }
      ]
    },
    { path: '/home', component: Home },
    { path: '*', component: Home }
  ]
})

new Vue({
  router
}).$mount('#app')
