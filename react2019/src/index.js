import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MessageBox from './components/MessageBox';
import MessageInput from './components/MessageInput';

import 'bootstrap/dist/css/bootstrap.css';
import axios from './axios'

// 类组件
class App extends React.Component {
    /* ES7 写法 */
    state = {
        messageList: []
    }
    async componentDidMount(){
        /* axios.get('/user.json').then(res=>{
            let userInfo = res.data;
            console.log(userInfo)
        },err=>{console.log(err)}) */
        let messageList = await axios.get('/user.json');
        this.setState({
            messageList
        })
    }
    render() {
        return (
        <div className="container">
            
            <div className="panel panel-primary">
                <div className="panel-heading">
                    留言信息
                </div>
                <div className="panel-body">
                    <MessageBox messageList={this.state.messageList}/>
                </div>
                <div className="panel-footer">
                    <MessageInput/>
                </div>
            </div>
        </div>)
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
