import Vue from 'vue'
import BaseService from '../service/services/BaseService'

class Service {
  constructor() {
    this.base = new BaseService()
  }
}
const services = {
  install(Vue) {
    Vue.prototype.$service = new Service()
  }
}

export default () => {
  Vue.use(services)
}
