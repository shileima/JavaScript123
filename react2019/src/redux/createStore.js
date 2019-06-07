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
      throw new Error('reducer must be a plain object')
    }
    if(typeof action.type == 'undefined'){
      throw new Error('the type of action can not be a undefined')
    }
    currentState = currentReducer(currentState,action)

    for(let i=0;i<currentListeners.length;i++){
      const listener = currentListeners[i];
      listener()
    }

    return action; // ???? 这里返回action是什么意思？预测可能后面代码会用到...
  }

  function subscribe(listener){
    let subscribed = true;
    currentListeners.push(listener)
    let index = currentListeners.indexOf(listener);
    return function(){
      if(!subscribed) return;
      currentListeners.splice(index,1)
      subscribed = false;
    }
  }
  dispatch({type:ActionTypes.INIT})
  return {
    getState,
    dispatch,
    subscribe
  }
}