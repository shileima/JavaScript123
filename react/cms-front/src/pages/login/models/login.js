import * as service from '../services/login';
import {Message} from 'antd';

export default {
    namespace:'login',
    state:{
        isLogin:false, // 是否正在登录
        userInfo:null, // 登陆后用户信息
        errorInfor:null // 错误信息
    },
    effects:{
        * signup({payload},{call,put}){
            let {code,data} = yield call(service.signup,payload);
            if(code === 0){
                yield put({type:'save',payload:{isLogin:true}})
            }else{
                Message.error('注册失败,请重试！')
            }
        }
    },
    reducers:{
        save(state,action){
            return {...state,...action.payload}
        }
    }
}
