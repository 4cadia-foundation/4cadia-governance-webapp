import Vue from 'vue'
import Vuex from 'vuex'
import validation from './modules/validation'
import newsletter from './modules/newsletter'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const vuexStore = new Vuex.Store({
  modules: {
    validation,
    newsletter
  },
  strict: debug
})

export default vuexStore
