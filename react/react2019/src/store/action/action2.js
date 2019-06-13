import * as types from '../action-types';

export default {
  increment(){
    // return store.dispatch({type:INCREMENT})
    return {type:types.INCREMENT2}
  },
  decrement(){
    return {type:types.DECREMENT2}
  }
}