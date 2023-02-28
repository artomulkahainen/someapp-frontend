import axios from 'axios';

axios.interceptors.request.use(
    (config) => {
        if (config.headers) {
            const token = sessionStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);
