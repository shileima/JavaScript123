import request from '@/utils/request';

export function signup(payload){
    return request('/api/signup',{
        method:'POST',
        body:JSON.stringify(payload)
    })
}