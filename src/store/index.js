import Vue from 'vue'
import Vuex from 'vuex'
import validation from './modules/validation'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const vuexStore = new Vuex.Store({
  modules: {
    validation
  },
  strict: debug
})

export default vuexStore
