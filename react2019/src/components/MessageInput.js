import React from 'react';

// 类组件
class MessageInput extends React.Component {
    render() {
        return (<>
            <div className="form-group">
                <input type="text" className="form-control" defaultValue="请留言" />
                
            </div>
            <div className="form-group">
                <button className="btn btn-danger ">添加留言</button>
            </div>
        </>)
    }
}

export default MessageInput;
