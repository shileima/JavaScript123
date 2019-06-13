import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';
/* 处理请求的拦截器 */
axios.interceptors.request.use((config)=>{
    config.headers.a = 1;
    return config;
})
/* 处理响应的拦截器 */
axios.interceptors.response.use(res=>{
    if(res.data.code === 0){
        return res.data.data;
    }else{
        /* 这里必须加return 返回一个错误才能走到下一个then的错误函数 */
        return Promise.reject(res)
    }
},err=>Promise.reject(err))

export default axios;