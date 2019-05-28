import React from 'react';

// 类组件
export default class MessageBox extends React.Component {
  componentDidMount(){
    console.log('messageBox DidMount')
    console.log(this.props)
  }
    render() {
      console.log(this.props.messageList)
        return (<div>
          列表信息
         </div>)
    }
}
