import dva from 'dva';
import createHistory from 'history/createBrowserHistory';
import './index.css';
import createLoading from 'dva-loading';
//import 'antd-mobile/dist/antd-mobile.css';

// 1. Initialize
const app = dva({
    history: createHistory(),
    // initialState 里每一个键值必须对应 models 里的相应文件名
    initialState: {
        //products: []
    },
    /* onEffect:()=>{
        console.log('onEffect')
    }, */
    /* onAction:()=>{
        console.log('onAction')
    }, */
    /* onError:(e)=>{
        console.log(e)
    } */
});

// 2. Plugins
app.use(createLoading());

// 3. Model
/* app.model(require('./models/counter').default); */
app.model(require('./models/products').default);
/* app.model(require('./models/count').default);
app.model(require('./models/users').default); */

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');