import React from 'react';

import {createStore,bindActionCreators} from '../redux';
import ActionTypes from '../redux/utils/actionTypes';

let initState = 0;
const INCREMENT = Symbol.for('INCREMENT');
const DECREMENT = Symbol.for('DECREMENT');

let store = createStore(reducer,initState);

let actions = {
  increment(){
    // return store.dispatch({type:INCREMENT})
    return {type:INCREMENT}
  },
  decrement(){
    return {type:DECREMENT}
  }
}
let bindActions = bindActionCreators(actions,store.dispatch);
console.log(bindActions)

function reducer(state=initState,action){
    switch(action.type){
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

store.dispatch({type:ActionTypes.INIT})

export default class Counter extends React.Component {
  state = {
    num:store.getState()
  }
  componentDidMount(){
    this.unsubscribe = store.subscribe(()=>{
      this.setState({
        num:store.getState()
      })
    })
  }
  componentWillUnmount(){
    this.unsubscribe()
  }

  render(){
    return (<>
        <div id="counter-value">{this.state.num}</div>
        <button id="increment-btn" onClick={bindActions.increment}>+</button>
        <button id="decrement-btn" onClick={bindActions.decrement}>-</button>
    </>)
  }
}

