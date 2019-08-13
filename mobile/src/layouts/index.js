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
                <Link to="/">首页</Link>
                </li>
                <li>
                <Link to="/my/courses">我的课程</Link>
                </li>
                <li>
                <Link to="/my/orders">我的订单</Link>
                </li> 
                </ul>
            </nav>
            <span className={styles.github}>
                Built with <a rel="noopener noreferrer" href="https://github.com/umijs/umi" target="_blank">Umi</a> and <a rel="noopener noreferrer" href="https://github.com/dvajs/dva" target="_blank">Dva</a>
            </span>
        </div>
      </div>
      <div className={styles.view}>
        { props.children }
      </div>
    </div>
  );
};

export default Layout;
