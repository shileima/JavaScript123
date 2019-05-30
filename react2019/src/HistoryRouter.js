import React from 'react';
import './App.css';

class HistoryRouter extends React.Component {
  componentDidMount(){
    window.innerContent.innerHTML=window.location.pathname
    window.addEventListener('popstate',()=>{
      window.innerContent.innerHTML=window.location.pathname
    })
  }
  go = (value)=>{
    window.history.pushState({},null,value)
    window.innerContent.innerHTML=value
  }
  render() {
    return (<>
      <div className="hash-router container">
        <h4>HistoryRouter</h4>
        <hr></hr>
        <a href="javascript:;" onClick={()=>this.go('/a')}>Page a</a>
        &nbsp;&nbsp;&nbsp;
        <a href="javascript:;" onClick={()=>this.go('/b')}>Page b</a>
        <div id="innerContent"></div>
      </div>
    </>);
  }
}

export default HistoryRouter;
