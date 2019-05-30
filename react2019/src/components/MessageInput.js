import React,{PureComponent} from 'react';

// 类组件
class MessageInput extends PureComponent {
    state = {
        a:0,
        b:10
    }
    messageRef = React.createRef();
    handleClick = ()=>{
        this.props.addMessage(this.messageRef.current.value);
        this.messageRef.current.value = '';
    }
    
    //getDerivedStateFromProps is invoked right before 
    //calling the render method, both on the initial mount 
    //and on subsequent updates. It should return an object 
    //to update the state, or null to update nothing.
    static getDerivedStateFromProps(props,state){
      console.log('getDerivedStateFromProps')
      console.log(props)
      console.log(state)
      //这里返回的对象里可以直接设置当前 state 的值
      return {
          ...state,
          aa:props.a
      }
    }
    render() {
        return (<>
            <div className="form-group">
                <input type="text" className="form-control" 
                    defaultValue="请留言" ref={this.messageRef} />
                
            </div>
            <div className="form-group">
                <button className="btn btn-danger" 
                onClick={this.handleClick}>添加留言</button>
            </div>
        </>)
    }
}

export default MessageInput;
