import Vue from 'vue'
import App from './App.vue'
import VueSession from 'vue-session'
import vuejquery from 'vue-jquery'

import {router} from './router'

Vue.use(VueSession)
Vue.use(vuejquery)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
