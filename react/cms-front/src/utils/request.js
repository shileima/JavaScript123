import fetch from 'dva/fetch';
const BASE_URL = 'http://127.0.0.1:7001';

export default function(url,options={}){
    options.headers = options.headers || {};
    options.method = options.method || 'GET';
    options.headers['Content-Type'] = 'application/json';
    options.headers['Accept'] = 'application/json'; // 告诉服务器我需要 json
    options.credentials = 'include'; // 跨域 传递 cookie，默认不传递

    return fetch(BASE_URL+url,options).then(res=>res.json());

}