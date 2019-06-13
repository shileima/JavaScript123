import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// 类组件
class Counter extends React.Component {

    /* 这个是es7语法，定义实例上的属性amount 可以被实例this.amount调用*/
    /* 如果 static amount = 1 这是类上的静态属性，只能被类调用 Counter.amount */
    amount = React.createRef();
    clickHandle = ()=>{
        /* ref操作dom三种方式 */
        console.log(this.refs.username.value)
        console.log(this.password.value)
        console.log(this.amount.current.value)

        console.log(this == Counter) // false
        console.log(typeof this) // object
        console.log(typeof Counter) // function
    }
    render() {
        
        return (<>
           <div>
            <input type="text" name="username" ref="username" />
            <input type="text" name="password" ref={(dom)=>this.password=dom} />
            <input type="text" name="amount" ref={this.amount} />
           </div>
           <div>
            <button onClick={this.clickHandle}>click</button>
           </div>
         </>)
    }
}
ReactDOM.render(<Counter />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
