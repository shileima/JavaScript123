import React, { Component } from 'react'
import local from '../local';

export default class UserDetail extends Component {
    state = {user:{}}
  componentDidMount(){
    let user = this.props.location.state;
    if(!user){
        user = local.get(parseInt(this.props.match.params.id))        
    }
    this.setState({user})
  }
  render() {
    return (
      <table className="table table-bordered">
        <thead>
            <tr>
                <th>ID</th>
                <th>用户名</th>
                <th>邮箱</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{this.state.user.id}</td>
                <td>{this.state.user.username}</td>
                <td>{this.state.user.email}</td>
            </tr>
        </tbody>
      </table>
      
    )
  }
}
