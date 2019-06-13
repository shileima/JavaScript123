import React from './react';
import ReactDOM from './react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

let element = (
    <h1 className="myclass" style={{'color':'red','fontSize':'50px'}}>
        hello
        <span className="title">world</span>
    </h1>
)

let ele = React.createElement("h1", {
    className: "myclass",
    style: {
      'color': 'red',
      'fontSize': '50px'
    }
  }, "hello", React.createElement("span", {className: "title"}, "world"));
console.log(ele)
ReactDOM.render(ele, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
