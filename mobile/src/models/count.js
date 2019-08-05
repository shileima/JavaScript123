export default {
    namespace: 'count',
    state: {},
    reducers: {
      add(state, action) {
        return {count:state.count + 1};
      },
      getUser(state, action) {
        return {count:state.count + 1};
      },
    },
};