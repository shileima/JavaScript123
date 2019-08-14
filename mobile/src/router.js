import React from 'react';
import { Router, Route, Switch } from 'dva/router';
//import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import ProductsDetail from './routes/ProductsDetail';
import Orders from './routes/Orders';
import Layouts from './layouts/index';

function RouterConfig({app,history}) {
  return (
    <Router history = {history}>
      <div>
        <Route path="/" component={Layouts} />
        <Switch>
          {/* <Route path="/" exact component={IndexPage} /> */}
          <Route path="/" exact component={Products} />
          <Route path="/course/:id" component={ProductsDetail} />
          <Route path="/my/orders" exact component={Orders} />
        </Switch>
      </div>    
    </Router>
  );
}

export default RouterConfig;