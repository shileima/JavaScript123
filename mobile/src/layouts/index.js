import { Link } from 'dva/router';
import styles from './index.less';

const Layout = (props) => {
  return (
    <div className={styles.normal}>
      <div className={styles.header}>
        <div className={styles.inner}>
            <nav>
            <ul>
                <li>
                <a href="/">首页</a>
                </li>
                <li>
                {/* <a href="/course/1336">课程详情</a> */}
                <Link to="/course/1336">课程详情</Link>
                </li>
                <li>
                <Link to="/my/orders">我的订单</Link>
                </li> 
                </ul>
            </nav>
        </div>
      </div>
      <div className={styles.view}>
        { props.children }
      </div>
    </div>
  );
};

export default Layout;
