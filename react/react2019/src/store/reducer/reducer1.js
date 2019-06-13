import * as types from '../action-types';

export default function reducer(state=1,action){
  switch(action.type){
      case types.INCREMENT1:
          return state + 1;
      case types.DECREMENT1:
          return state - 1;
      default:
          return state;
  }
}