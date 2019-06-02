import React from './react';
import ReactDOM from './react-dom';
import './index.css';

// These two containers are siblings in the DOM
const appRoot = document.getElementById('app-root');

function Button(props){
    return <h1>hello {props.name} {props.age}</h1>
}

ReactDOM.render(<Button name="loading" age={19} />, appRoot);

