import axios from 'axios';
import store from '../store/index'
axios.defaults.timeout = 5000;
axios.defaults.baseURL = '/api/v1';
axios.interceptors.request.use(config => {
  // Do something before request is sent
  if (store.state.authentication.token) {
    config.headers.Authorization = `bearer ${store.state.authentication.token}`
  }
  return config;
}, error => {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(response => {
  // Do something with response data
  return response;
}, error => {
  // Do something with response error
  return Promise.reject(error);
});
export default axios;