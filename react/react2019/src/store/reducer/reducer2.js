import * as types from '../action-types';

export default function reducer(state=2,action){
  switch(action.type){
      case types.INCREMENT2:
          return state + 2;
      case types.DECREMENT2:
          return state - 2;
      default:
          return state;
  }
}