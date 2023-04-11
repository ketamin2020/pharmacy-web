import axios from 'axios'

import moment from 'moment-timezone'

const axiosInstance = (() => {
  const params = {}
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',

    'X-timezone': moment.tz.guess(), // Custom header with current user's timezone
  }

  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    params,
    headers,
  })
})()

axiosInstance.interceptors.request.use(
  config => {
    const auth = JSON.parse(localStorage.getItem('persist:auth'))
    const trimmedToken = auth?.token?.slice(1, -1).replace(/\\/g, '')

    if (trimmedToken) config.headers.Authorization = `Bearer ${trimmedToken}`

    return config
  },
  error => Promise.reject(error),
)

export default axiosInstance
