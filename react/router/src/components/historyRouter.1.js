import React from 'react';

class HistoryRouter2 extends React.Component {
  componentDidMount(){
    //重写 pushState 方法
    let oldPushState = window.history.pushState;
    window.history.pushState = (state,title,url)=>{
      this.onpushstate(state,title,url)
      oldPushState.call(window.history,state,title,url)
    }
    // 这是原生实现
    window.onpopstate = function(event){
      window.innerContent.innerHTML = event.state.value;
    }
  }
  // 原生没有 onpushstate 方法，所以自己实现劫持
  onpushstate = (state,title,url)=>{
    window.innerContent.innerHTML = state.value;
  }
  go = (value)=>{
    window.history.pushState({value},null,value)
  }
  render() {
    return (<>
      <div className="hash-router container">
        <h4>HistoryRouter</h4>
        <hr></hr>
        <button onClick={()=>this.go('/a')}>Page a</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={()=>this.go('/b')}>Page b</button>
        <div id="innerContent"></div>
      </div>
    </>);
  }
}

export default HistoryRouter2;