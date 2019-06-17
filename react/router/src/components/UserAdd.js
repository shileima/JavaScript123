import React, { Component } from 'react';
import local from '../local';

export default class UserAdd extends Component {
  constructor(){
    super();
    this.usernameRef = React.createRef();
    this.emailRef = React.createRef();
  }
  handleSubmit = (event)=>{
    event.preventDefault();
    
    let username = this.usernameRef.current.value;
    let email = this.emailRef.current.value;
    let user = {id:Date.now(),username,email};
    console.log(user);
    local.add(user);
    console.log(this.props)
    this.props.history.push('/user/list');
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="control-label">用户名</label>
          <input className="form-control" type="text" ref={this.usernameRef} />
        </div>
        <div className="form-group">
          <label className="control-label">邮箱</label>
          <input className="form-control" type="text" ref={this.emailRef} />
        </div>
        <div className="form-group">
          <button type="submit">提交</button>
        </div>
      </form>
    )
  }
}
