import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const sessionStore = new VuexPersistence({
  key: 'store',
  storage: window.sessionStorage,
  reducer: state => state
})

// const localStore = new VuexPersistence({
//   key: 'store',
//   storage: window.localStorage,
//   reducer: state => state
// })

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins: [sessionStore.plugin]
})
