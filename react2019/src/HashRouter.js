import React from 'react';
import './App.css';

class HashRouter extends React.Component {
  componentDidMount(){
    function h(){
      window.innerContent.innerHTML=window.location.hash
    }
    h()
    window.addEventListener('hashchange',h)
  }
  render() {
    return (<>
      <div className="hash-router container">
        <h4>HashRouter</h4>
        <hr></hr>
        <a href="#/a">Page a</a>
        &nbsp;&nbsp;&nbsp;
        <a href="#/b">Page b</a>
        <div id="innerContent"></div>
      </div>
    </>);
  }
}

export default HashRouter;
