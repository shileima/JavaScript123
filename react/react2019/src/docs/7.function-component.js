import React from './react';
import ReactDOM from './react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

// 函数组件
function Welcome(props){
    return <h1>hello {props.name}</h1>
}
let element = (
    <Welcome name="Sean Ma" />
)

// function Welcome(props) {
//     return React.createElement("h1", null, "hello ", props.name);
// }
  
// var element = React.createElement(Welcome, {
//     name: "loading"
// });

console.log(element)
ReactDOM.render(element, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
