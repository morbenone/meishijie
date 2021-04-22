import axios from "axios";
axios.default.timeout = 5000;
axios.default.baseURL = '';
axios.interceptors.request.use(
    config =>{
        config.data = JSON.stringify(config.data);
        config.header = {
            "Content-Type":"application/x-www-form-urlencoded"
        }
        return config;
    },
    error =>{
        return Promise.reject(err);
    }
);
ax