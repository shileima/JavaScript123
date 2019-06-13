import counter1 from './reducer1';
import counter2 from './reducer2';
import {combineReducers} from 'redux';

let reducers = combineReducers({
    counter1,
    counter2
})
console.log(reducers)
export default reducers;