import { query } from '../services/products';
export default {
  namespace: 'products',
  state: {
    list:[],
    loading:true
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      console.log('setup')
      console.log(history)
      //dispatch({type:'firstFetch'})
    },
  },

  effects: {
    *scrollFetch({ payload }, { put, call, select }) {  // eslint-disable-line
      const list = yield query(payload).then(res => {
        return res.data
      })

      //修改 page 的值 加 1
            
      yield put({ type: 'fetch' , payload: list});

      //yield put({type:'changePage',payload:page+1})
    },
    *firstFetch({ payload }, { put, call, select }) {
      console.log('firstFetch')
      //if(payload.page === 1){alert(1)}
      const list = yield query(1).then(res => {
        return res.data
      })
     
      yield put({ type: 'fetchHome' , payload: list});
    },
  },
  reducers: {
    'fetchHome'(state, { payload: list }) {
 
      return {...state,list};
    },
    'fetch'(state, { payload: list }) {

      return {...state,list};
    },
    /* 'changePage'(state,{payload}){
      return {...state, ...{page:payload}}
    } */
  },
};