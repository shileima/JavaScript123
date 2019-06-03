import isPlainObject from './utils/isPlainObject';
import ActionTypes from './utils/actionTypes';

export default function createStore(reducer,preloadedState){
  if(typeof reducer != 'function'){
    throw new Error('reducer must be a function');
  }
  let currentReducer = reducer;
  let currentState = preloadedState;
  let currentListeners = [];

  function getState(){
    return currentState;
  }
  function dispatch(action){
    if(!isPlainObject(action)){
      throw new Error('reducer must be a pure object')
    }
    if(typeof action.type == 'undefined'){
      throw new Error('the type of action can not be a undefined')
    }
    currentState = currentReducer(currentState,action)

    for(let i=0;i<currentListeners.length;i++){
      const listener = currentListeners[i];
      listener()
    }

    return action; // ????
  }

  function subscribe(listener){
    currentListeners.push(listener)
  }
  dispatch({type:ActionTypes.INIT})
  return {
    getState,
    dispatch,
    subscribe
  }
}