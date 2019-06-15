import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Link} from './react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Profile from './components/Profile';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <Router>
    <>
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-heading">
          <div className="navbar-brand">珠峰架构</div>
        </div>
        <ul className="nav navbar-nav">
          <li><Link to={{pathname:'/',state:{title:'首页'}}}>首页</Link></li>
          <li><Link to={{pathname:'/user',state:{title:'用户'}}}>用户</Link></li>
          <li><Link to={{pathname:'/profile',state:{title:'详情'}}}>详情</Link></li>
        </ul>
      </div>
    </nav>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Route path="/" exact component={Home} />
          <Route path="/user" component={User} />
          <Route path="/profile" component={Profile} />
        </div>
      </div>
    </div>
    
    </>
  </Router>, document.getElementById('root'));
