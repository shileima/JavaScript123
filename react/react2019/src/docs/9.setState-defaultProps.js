import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// 类组件
class Counter extends React.Component {
    /* constructor(props){
        super(props)
        this.state = {
            num:this.props.start
        }
    } */
    static defaultProps = {
        age:30
    }
    state = {
        num:this.props.start
    }
    onClickHandle = ()=>{

        /* 一次更新1个 */
        /* this.setState({num:this.state.num+1}) 
        this.setState({num:this.state.num+1})
        this.setState({num:this.state.num+1}) */
     
        /* 一次更新3个 */
        this.setState((prev)=>({num:prev.num+1}))
        this.setState((prev)=>({num:prev.num+1}))
        this.setState((prev)=>({num:prev.num+1}))

        /* 回调方式实现同步一次更新3个 */
        this.setState({num:this.state.num+1},()=>{
            this.setState({num:this.state.num+1},()=>{
                this.setState({num:this.state.num+1},()=>{
                    alert('ok!')
                })
            })
        })
        
    }
    // this -> undefined
    onClickHandle2(){ console.log(this)  }
    render() {
        return (<>
            <span>{this.state.num}</span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={this.onClickHandle}>+</button>
            {/* 这样的写法也对，表达式里是一个函数，
            使用this(counter)来调用，this就是Counter组件 */}
            {/* <button onClick={()=>this.onClickHandle2()}>+</button> */}
            <h5>defaultProps.age is {this.props.age}</h5>
         </>)
    }
}

ReactDOM.render(<Counter start={100} />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
