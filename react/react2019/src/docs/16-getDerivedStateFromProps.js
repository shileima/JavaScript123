import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import DerivedStateFromProps from './16-getDerivedStateFromProps';

// 类组件
class App extends React.Component {
    /* ES7 写法 */
    state = {
        a: ''
    }
    dateRef = React.createRef();
    componentDidMount(){
        this.timerID = setInterval(()=>{
             this.setState({
                 a:this.dateRef.current.props.a
             })
        },2000)
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    render(){
        return (
            <DerivedStateFromProps a={Date.now()} ref={this.dateRef} />
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app-root'));