import Vue from 'vue'
import App from './App.vue'
import Hello from './components/Hello.vue'

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
    { path: '/', component: App },
    { path: '/hello', component: Hello }
  ]
})

new Vue({
  router
}).$mount('#app')
