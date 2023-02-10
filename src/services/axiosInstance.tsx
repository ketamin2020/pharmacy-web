import axios from 'axios'

import moment from 'moment-timezone'

const axiosInstance = (() => {
  const params = {}
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
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
    const auth = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : null

    if (auth) config.headers.Authorization = `Bearer ${auth.token}`

    return config
  },
  error => Promise.reject(error),
)

export default axiosInstance
