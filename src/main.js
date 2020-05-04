import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from 'store'
import axios from 'utils/axios'
import 'components'
import plugins from '@/plugins'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(plugins)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
