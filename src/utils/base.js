export default {
  install (Vue, options) {
    Vue.prototype.prototypeFunc = function (money) {
      alert('通过 this 访问')
    }
  }
}
