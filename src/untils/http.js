import axios from 'axios'

const http = axios.create({
  baseURL: 'http://www.ixingmei.com/',
  timeout: 10000
})

http.interceptors.response.use(res => {
  return res.data
})

export default http
