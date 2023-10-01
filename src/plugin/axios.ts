import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_BE_URL
axios.defaults.withCredentials = true

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    return axios({
      method: 'post',
      url: '/refresh-token'
    })
      .then(function (response) {
        localStorage.setItem('access_token', response.data.data.access_token)
        error.config.headers['Authorization'] = 'Bearer ' + response.data.data.access_token

        return axios.request(error.config)
      })
      .catch(function (error) {
        console.log('axios-err')
      })

    return Promise.reject(error)
  }
)
