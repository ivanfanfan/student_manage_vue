import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element'
import './assets/css/globel.css'
import 'element-ui/lib/theme-chalk/index.css'
import elementUI from 'element-ui'
import axios from 'axios'

axios.defaults.baseURL = ''
Vue.prototype.$http = axios
Vue.use(elementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
