import Vue from 'vue'
import API from '../api'
import axios from '../index'

export default class BaseService {
  constructor() {
    this.API = API
  }

  // post 方法
  async post(url, data = {}) {
    let result = await axios.post(url, { params: data })
    return result
  }

  // get 方法
  async get(url, data) {
    const result = await axios.get(url, { params: data })
    return result
  }
}
