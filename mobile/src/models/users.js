export default {
  namespace: 'users',
  state: {},
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      console.log(payload)
      yield put({ type: 'getUser' });
    },
  },
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
    'getUser'(state, { payload }) {
      console.log('getUser')
      return state.users = payload;
    }

  },
};