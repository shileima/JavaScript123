import React from 'react';
import { Router, Route, Switch, Link } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Users from './routes/Users';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <div>
        {/* 
          <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
             <li>
              <Link to="/users">Users</Link>
            </li> 
            </ul>
        </nav>
         */}
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/products" component={Products} />
          <Route path="/users" component={Users} />
        </Switch>
      </div>    
    </Router>
  );
}

export default RouterConfig;
