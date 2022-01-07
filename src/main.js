import Vue from 'vue'
import App from './App.vue'
import VueSession from 'vue-session'

import {router} from './router'

Vue.use(VueSession)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
