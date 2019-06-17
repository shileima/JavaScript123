import React, { Component } from 'react';
import {Route,Link,Switch,Redirect} from '../react-router-dom';
import UserList from './UserList';
import UserAdd from './UserAdd';
import UserDetail from './UserDetail';

export default class User extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-2">
          <ul className="nav nav-stacked">
            <li><Link to="/user/list">用户列表</Link></li>
            <li><Link to="/user/add">用户添加</Link></li>
          </ul>
        </div>
        <div className="col-md-10">
          <Switch>
            <Route path="/user/list" component={UserList}/>
            <Route path="/user/add" component={UserAdd}/>
            <Route path="/user/detail/:id" component={UserDetail}/>
            <Redirect to="/user/list" />
          </Switch> 
        </div>
      </div>
    )
  }
}
