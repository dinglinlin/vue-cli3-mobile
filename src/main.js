import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './registerServiceWorker'

import FastClick from 'fastclick'
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
  render: h => h(App)
}).$mount('#app')
