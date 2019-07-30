import React from 'react';

export default class Counter3 extends React.Component {
  state = {
    num:0
  }
  handleClick = () => {
    // 强制更新组件，不推荐
    /* this.state.num = this.state.num + 1;
    this.forceUpdate() */

    // 非批量更新 + 3
    this.setState((preState) => ({num:preState.num + 1}));
    this.setState((preState) => ({num:preState.num + 1})); 
    this.setState((preState) => ({num:preState.num}));

    // 是批量更新 + 1
    /* this.setState({num:this.state.num + 1});
    this.setState({num:this.state.num + 1});
    this.setState({num:this.state.num + 1}); */

    // 回调方式 + 3
    /* this.setState({num:this.state.num + 1},()=>{
      this.setState({num:this.state.num + 1},()=>{
        this.setState({num:this.state.num + 1})
      })
    }) */

  }

  render(){
    console.log("render");
    
    return (<>
        <div id="counter-value">{this.state.num}</div>
        <button id="increment-btn" onClick={this.handleClick}>+</button>
    </>)
  }
}

