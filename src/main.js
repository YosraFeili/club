import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import './css/theme.scss'
import VueGlobalEmitter from 'vue-global-emitter'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  VueGlobalEmitter,
  render: h => h(App)
}).$mount('#app')
