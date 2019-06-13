import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let user = {
    'firstname':'Loading',
    'lastname' :'Ma'
}
function formatUser(user){
    return user.firstname + ' ' + user.lastname;
}
let element = (
    <h1>{formatUser(user)}<span>123</span></h1>
)

ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
