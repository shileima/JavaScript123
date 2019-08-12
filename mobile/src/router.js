import React from 'react';
import { Router, Route, Switch, Link } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import ProductsDetail from './routes/ProductsDetail';
import Users from './routes/Users';
import Layouts from './layouts/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <div>
        <Route path="/" component={Layouts} />
        <Switch>
          {/* <Route path="/" exact component={IndexPage} /> */}
          <Route path="/" exact component={Products} />
          <Route path="/course/:id" component={ProductsDetail} />
          <Route path="/users" exact component={Users} />
        </Switch>
      </div>    
    </Router>
  );
}

export default RouterConfig;