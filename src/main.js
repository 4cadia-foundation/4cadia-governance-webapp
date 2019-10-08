// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Vuex)

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
