import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

function Greeting(props){
    return <h1>hello {props.name}</h1>
}
let element = (
    <Greeting name="Sean"/>
)
console.log(element) // element 被 babel 转移成下面的代码，然后浏览器进行执行

ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
