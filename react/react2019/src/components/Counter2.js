import React from 'react';
import {bindActionCreators} from 'redux';
import ActionTypes from '../redux/utils/actionTypes';
import store from '../store';
import actions from '../store/action/action2';

let bindActions = bindActionCreators(actions,store.dispatch);

store.dispatch({type:ActionTypes.INIT})

export default class Counter extends React.Component {
  state = {
    num:store.getState().counter2
  }
  componentDidMount(){
    this.unsubscribe = store.subscribe(()=>{
      this.setState({
        num:store.getState().counter2
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

