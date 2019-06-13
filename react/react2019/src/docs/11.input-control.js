import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// 类组件
class Counter extends React.Component {
    state = {
        username:"loading",
        password:12345
    }

    changeHandle = e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        return (<>
           <div>
            <input type="text" name="username" value={this.state.username} onChange={this.changeHandle}/>
            {this.state.username}
           </div>
           <div>
            <input type="password" name="password" value={this.state.password} onChange={this.changeHandle}/>
            {this.state.password}
           </div>
         </>)
    }
}
let data = {
    name:'loading',
    age:18,
    city:'Beijing',
    hobby:['游泳','篮球']
}
ReactDOM.render(<Counter {...data} />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
