import React from 'react';
import {render} from 'react-dom';

function withCounter(Component){
    return class extends React.Component {
        state = { number:0 }
        componentDidMount(){
            console.log('conponentDidMount')
            setInterval(() => {
                this.setState({number:this.state.number + 1})
            },1000)
        }
        render() {
            return (
                <Component number={this.state.number} />
            )
        }     
    }
}

class App1 extends React.Component {
    render(){
        return (
            <button>{this.props.number}</button>
        )
    }
}

App1 = withCounter(App1);

class App2 extends React.Component {
    render(){
        return (
            <button>{this.props.number}</button>
        )
    }
}

App2 = withCounter(App2);
render(<><App1 /><App2 /></>,window.root)  