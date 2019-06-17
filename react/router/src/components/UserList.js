import React, { Component } from 'react'
import local from '../local';

export default class UserList extends Component {
  state = {users:[]}
  componentDidMount(){
    let users = local.getList();
    this.setState({users})
  }
  render() {
    return (
      <ul>
        {
          this.state.users.map(item=>(<>
            <li className="list-group-item" key={item.id}>{item.username}</li>
          </>))
        }
      </ul>
    )
  }
}
