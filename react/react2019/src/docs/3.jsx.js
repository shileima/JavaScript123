import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

let user = {
    'firstname':'Loading',
    'lastname' :'Ma'
}
function greeting(user){
    if(user){
        return <h1>hello {user.firstname}</h1>
    } else {
        return <h1>hello stranger~</h1>
    }
}
let element = (
    <h1 id="myid" className="myclass">{greeting(user)}</h1>
)
console.log(element) // element 被 babel 转移成下面的代码，然后浏览器进行执行

ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
