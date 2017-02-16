import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'

import router from './router'
import store from './store'
import App from './App.vue'

Vue.use(VueResource)
Vue.use(Vuex)

const app = new Vue({
  router,
  render: h => h(App)
})

sync(store, router)

app.$mount('#app')
