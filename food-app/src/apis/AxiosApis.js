import axios from 'axios'

const AxiosAPis = axios.create({
    baseURL: 'https://ig-food-menus.herokuapp.com/',
    headers: {
        'content-type': 'application/json',
    }
})
// Add a request interceptor
axios.interceptors.request.use((config) => {
    // Do something before request is sent
    return config;
  }, (error) => {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use((response) => {
    // Do something with response data
    return response;
  }, (error) => {
    // Do something with response error
    return Promise.reject(error);
  });

  export default AxiosAPis