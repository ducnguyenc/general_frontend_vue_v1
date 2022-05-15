import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000/',
})

instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    const ACCESS_TOKEN = localStorage.getItem('access_token');
    config.headers['x-token-access'] = ACCESS_TOKEN;
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
})

export const abc = { instance };