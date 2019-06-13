import React from 'react';

class HistoryRouter2 extends React.Component {
  componentDidMount(){

    window.onpopstate = function(event){
      console.log(event)
    }

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
        <button onClick={()=>this.go('/a')}>Page a</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={()=>this.go('/b')}>Page b</button>
        <div id="innerContent"></div>
      </div>
    </>);
  }
}

export default HistoryRouter2;