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
axios.interceptors.response.use(
    response=>{
        if(response.data.errCode == 2){
            router.push({
                path:'/login',
                querry:{
                    redirect:router.currentRoute.fullPath                
                }
            })
        }
        return response
    },
    error =>{
        return Promise.reject(error)
    }
);
export function get(url,params={}){
    return new Promise((resolve,reject)=>{
        axios.get(url,{
                params:params
            }).then(
            response=>{
                resolve(response.data)
            }).catch(err=>{
                reject(err)
            })
    })
}