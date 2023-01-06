import { BASE_URL, TIME_OUT } from './config'
import HZYRequest from './request'

const hzyRequest = new HZYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {}
})

export default hzyRequest
