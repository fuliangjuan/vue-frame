import Vue from 'vue'
import 'amfe-flexible'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

Vue.config.productionTip = false

import { Button, Tabbar, TabbarItem, Tab, Tabs, Swipe, SwipeItem, Grid, GridItem,Card } from 'vant';
Vue.use(Button)
    .use(Tabbar)
    .use(TabbarItem)
    .use(Tab)
    .use(Tabs)
    .use(Swipe)
    .use(SwipeItem)
    .use(Grid)
    .use(GridItem)
    .use(Card )

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
