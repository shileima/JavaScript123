import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd-mobile';
const Item = List.Item;
/* const users2 = [
  {"id":10,"name":"jone"},
  {"id":11,"name":"wrer"},
]
const UserList = ({users}) => users.map(user=>(
  <List renderHeader={() => 'Basic Style' } key={user.id} className="my-list">
    <Item extra={'extra content'} key={user.id}>{user.name}</Item>
  </List>
)) */

class UserList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      users:props.users
    }
  }
  componentDidMount(){
    console.log('componentDidMount')
    console.log(this.state.users) // []
  }
  componentDidUpdate(){
    console.log('componentDidUpdate')
    console.log(this.state.users) // 非[] (2) [{…}, {…}]

  }
  static getDerivedStateFromProps(props,state){
    console.log('getDerivedStateFromProps')
    return {...state}
    
  }
  render(){
    console.log(this.state.users)
    const list = this.state.users.map(user=>(
      <List renderHeader={() => 'Basic Style' } key={user.id} className="my-list">
        <Item extra={'extra content'} key={user.id}>{user.name}</Item>
      </List>
    ))
    return (
      <div>{list}</div>
    )
  }
}

UserList.propTypes = {
  //onDelete: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

export default UserList;