import axios from 'axios'
import { store } from '@/store'

const service = axios.create({
  baseURL: process.env.baseURL, // url = base url + request url
  timeout: 60000
  // withCredentials: true // send cookies when cross-domain requests
})

service.interceptors.request.use(function (config) {
  // config.headers = {
  //   'Authorization': `Bearer ${store.getters.accessToken}`
  // }
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
service.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default service
