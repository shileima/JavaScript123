import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
class Counter extends React.Component{
    state = {number:0}
    add = () => {
        this.setState({number:this.state.number+1})
    }
    componentDidMount(){
        document.title = `您已经点击了${this.state.number}`;
    }
    componentDidUpdate(){
        document.title = `您已经点击了${this.state.number}`;
    }
    render(){
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.add}> + </button>
            </div>
        )
    }
}
function Counter2() {
    let [number,setNumber] = useState(0);
    function add(){
        setNumber(number => number+1)
    }
    // useEffect 会在第一次渲染后和更新完完成
    useEffect(()=>{
        document.title = `您已经点击了${number}`;
    })
    return (
        <div>
            <p>{number}</p>
            <button onClick={add}> + </button>
        </div>
    )
}  
function Counter3() {
    const [number,setNumber] = useState(0);
    function add(){
        //The setState function is used to update the state. 
        //It accepts a new state value and enqueues a re-render of the component.
        setNumber(number+1)
    }
    // useEffect 会在第一次渲染后和更新完完成
    useEffect(()=>{
        let $timer = setInterval(()=>{
            console.log('use Effetct')
            setNumber(number+1)
        },1000);
        return () => {
            console.log('clear Effect')
            clearInterval($timer)
        };
    })
    return (
        <div>
            <p>{number}</p>
            <button> + </button>
        </div>
    )
}  

ReactDOM.render(<Counter3 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
