import { query } from '../services/products';
export default {
  namespace: 'products',
  state: {
    list:[],
    index:2
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      dispatch({type:'scrollFetch'})
    },
  },

  effects: {
    *scrollFetch({ payload }, { call, put, select }) {  // eslint-disable-line
      console.log('scrollFetch')
      let index = yield select(state => state.index);
      console.log('index:', index)
      const list = yield query(index++).then(res => {
        //console.log(res.data)
        return res.data
      })
      console.log(list)
      yield put({ type: 'fetch' , payload: list});
    },
  },
  reducers: {
    'fetch'(state, { payload: list }) {
      console.log(list)
      
      return {...state,list};
    }
  },
};