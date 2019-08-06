import React from 'react';
import { connect } from 'dva';
/* import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
 */
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to mobile!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>Getting started, edit <code>src/index.js</code> and save to reload.</li>
        {/* <Router>
          <div>
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
          </div>
        </Router> */}
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
