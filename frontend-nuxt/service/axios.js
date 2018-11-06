import axios from 'axios'

let instance = axios.create({
  baseURL: 'https://xinapi.csmc-cloud.com',
  responseType: 'json' // 默认的
})

export default instance
