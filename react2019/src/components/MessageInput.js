import React,{PureComponent} from 'react';

// 类组件
class MessageInput extends PureComponent {
    messageRef = React.createRef();
    handleClick = ()=>{
        this.props.addMessage(this.messageRef.current.value);
        this.messageRef.current.value = '';
    }
    render() {
        return (<>
            <div className="form-group">
                <input type="text" className="form-control" defaultValue="请留言" ref={this.messageRef} />
                
            </div>
            <div className="form-group">
                <button className="btn btn-danger" onClick={this.handleClick}>添加留言</button>
            </div>
        </>)
    }
}

export default MessageInput;
