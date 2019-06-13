import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import PropTypes from 'prop-types';

// 类组件
class Counter extends React.Component {
    /* constructor(props){
        super(props)
        this.state = {
            num:this.props.start
        }
    } */
    state = {
        num:this.props.start
    }
    static defaultProps = {
        age:30
    }
    static propTypes = {
        name:PropTypes.string,
        age:PropTypes.number,
        hobby:PropTypes.array
    }
    onClickHandle = ()=>{
        
    }
    // this -> undefined
    onClickHandle2(){ console.log(this)  }

    render() {
        let {age,city} = this.props;
        return (<>
            <h4>我今年{age}岁，来自{city}</h4>
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
