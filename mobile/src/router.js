import React from 'react';
import { Router, Route, Switch, Link } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import ProductsDetail from './routes/ProductsDetail';
import Users from './routes/Users';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/courses">courses</Link>
            </li>
             <li>
              <Link to="/course/1234">details</Link>
            </li> 
            </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/courses" exact component={Products} />
          <Route path="/course/:id" component={ProductsDetail} />
          <Route path="/users" exact component={Users} />
        </Switch>
      </div>    
    </Router>
  );
}

export default RouterConfig;