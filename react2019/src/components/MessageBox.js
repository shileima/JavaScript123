import React from 'react';
import MessageItem from './MessageItem';

// 类组件
export default class MessageBox extends React.Component {
    componentDidMount(){
      //console.log('messageBox DidMount')
    }
    render() {
        return (<>
            {
              this.props.messageList.map((item,key)=>(
                <MessageItem {...item} key={key} index={key}/> 
                )
              )
            }
        </>)
    }
}


