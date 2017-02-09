import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import TimeEntries from './components/TimeEntries.vue'
import LogTime from './components/LogTime.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// Add Vue-resource and Vue-router to Vue
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/',
      component: App,
      children: [
        { path: '', component: Home },
        { path: '/home', name: 'home', component: Home },
        { path: '/time-entries',
          name: 'timeentries',
          component: TimeEntries,
          children:
          [
            { path: '/log-time', name: 'logtime', component: LogTime }
          ]
        }
      ]
    },
    { path: '*', component: App }
  ]
})

new Vue({
  router
}).$mount('#app')
