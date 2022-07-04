export const instance = axios.create({
    baseURL: 'http://localhost',
    withCredentials: true
})

instance.interceptors.request.use(function (config) {
    config.headers.Authorization = 'Bearer ' + JSON.parse(localStorage.getItem('token'));
    return config;
}, function (error) {
    return Promise.reject(error);
})

instance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    error = error.response.data
    return Promise.reject(error);
});
