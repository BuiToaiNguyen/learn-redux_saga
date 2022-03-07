import axios, { AxiosRequestConfig, AxiosResponse } from "axios";


export const axiosClient = axios.create(
    {baseURL : 'https://jsonplaceholder.typicode.com/',
    headers : {
        "content-type":'app/json'
    }
    
    }
)
export const axiosClientGitHub = axios.create(
    {baseURL : 'https://jsonplaceholder.typicode.com',
    
    }
)
axiosClient.interceptors.request.use(function (config:AxiosRequestConfig) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosClient.interceptors.response.use(function (response:AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
