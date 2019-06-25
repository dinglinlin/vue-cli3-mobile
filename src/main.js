import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './registerServiceWorker'
import base from '@/utils/base'
import { Toast } from 'vant'
import FastClick from 'fastclick'
Vue.use(base)
Vue.use(Toast)
Vue.config.productionTip = false

if ('addEventListener' in document && 'ontouchstart' in window) {
  FastClick.prototype.focus = function (targetElement) {
    targetElement.focus()
  }
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
