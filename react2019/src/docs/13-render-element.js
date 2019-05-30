import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import HashRouter from './HashRouter';
import HistoryRouter from './HistoryRouter'; */

import MessageBox from './components/MessageBox';
import MessageInput from './components/MessageInput';

import 'bootstrap/dist/css/bootstrap.css';
import axios from './axios'

import {Provider} from './context';

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
            messageList,
            agreeNum:0
        },()=>{
            //console.log(this.state)
        })
    }
    addMessage = (value)=>{
        let m = {
            "avatar":"https://user-gold-cdn.xitu.io/2018/10/28/166ba2d8e7a8cf9e?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
            "message":value,
            "time":Date.now()
        }
        this.setState({
            messageList:[...this.state.messageList,m]
        })
    }
    add = ()=>{
        this.setState({
            agreeNum:this.state.agreeNum+1
        })
    }
    shouldComponentUpdate(nextProps,nextState){
        //console.log(nextProps,nextState)
        return true;
    }
    render() {
        return (
            <Provider value={{add:this.add,a:1}}>
                <div className="container">
                    <div className="panel panel-primary">
                        <div className="panel-heading">留言信息</div>
                        <div className="panel-body">
                            <MessageBox messageList={this.state.messageList}/>
                        </div>
                        <div className="panel-footer">
                            <MessageInput a={123} addMessage={this.addMessage}/>
                        </div>
                    </div>
                    <h3 className="text-center">总点赞数:{this.state.agreeNum}</h3>
                </div>
            </Provider>
        )
    }
}


/* let element = (<>
    <HistoryRouter />
    <HashRouter/>
</>) */

/* ReactDOM.render(<h1>123</h1>, document.getElementById('root'));
ReactDOM.render([1,2,3].map(item=>{
    return item + '00 ';
}), document.getElementById('root'));
ReactDOM.render(null, document.getElementById('root')); */

/* let child = (<span>this is portal child</span>);

// 如果有portal，则元素会被渲染到portal里面
// render 里的target是任意一个真实元素即可
let portal = ReactDOM.createPortal(child, document.getElementById('root')) */

ReactDOM.render(<App/>, document.getElementById('app-root'));

