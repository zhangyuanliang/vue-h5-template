import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Vant from 'vant';
import 'vant/lib/index.css';
import { Toast } from 'vant';
import 'amfe-flexible';
import Http from './api/index'

Vue.use(Vant);
Vue.use(Toast);
Toast.setDefaultOptions({
  duration: 1000
})

Vue.config.productionTip = false
Vue.prototype.$http = Http

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
