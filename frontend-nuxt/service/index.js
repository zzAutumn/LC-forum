import axios from './axios'

const $http = {
  async get(url, data = {}) {
    const result = await axios.get(url, { params: data })
    return result
  },

  async post(url, data = {}) {
    const result = await axios.post(url, data)
    return result.data
  }
}
export default $http
