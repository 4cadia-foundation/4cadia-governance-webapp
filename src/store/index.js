import Vue from 'vue'
import Vuex from 'vuex'
import validation from './modules/validation'
import registerWeb3 from 'vuex-web3'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const vuexStore = new Vuex.Store({
  modules: {
    validation
  },
  strict: debug
})

registerWeb3(vuexStore, 'w3')

export default vuexStore
