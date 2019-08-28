import Vue from 'vue'
import 'amfe-flexible'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

Vue.config.productionTip = false

import { Button } from 'vant';
Vue.use(Button)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
