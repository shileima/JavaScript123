import { query } from '../services/products';
export default {
  namespace: 'products',
  state: {
    list:[],
    page:1
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      dispatch({type:'scrollFetch'})
    },
  },

  effects: {
    *scrollFetch({ payload }, { put, call, select }) {  // eslint-disable-line
      console.log('scrollFetch')
      let page = yield select(state=>state.products.page)
      //console.log('page:', page)
      const list = yield query(page).then(res => {
        //console.log(res.data)
        return res.data
      })
      //修改 page 的值 加 1
      yield put({type:'changePage',payload:page+1})
      yield put({ type: 'fetch' , payload: list});
    },
  },
  reducers: {
    'fetch'(state, { payload: list }) {
      //console.log(list)
      return {...state,list};
    },
    'changePage'(state,{payload}){
      //console.log(payload)
      return {...state, ...{page:payload}}
    }
  },
};