import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

let user = {
    'firstname':'Loading',
    'lastname' :'Ma'
}
function formatUser(user){
    return user.firstname + ' ' + user.lastname;
}
let element = (
    <h1 id="myid" className="myclass">hello<span>123</span></h1>
)
console.log(element) // element 被 babel 转移成下面的代码，然后浏览器进行执行
let element2 = React.createElement("h1", null, formatUser(user), React.createElement("span", null, "123"));

ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
