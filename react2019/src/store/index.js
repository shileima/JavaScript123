import {createStore} from '../redux';
import reducer from './reducer/index';

let initState = {counter1:10,counter2:20};
let store = createStore(reducer,initState);
console.log('store:',store.getState())
export default store;