import {createStore} from './redux';

let initState = 0;
const INCREMENT = Symbol.for('INCREMENT');
const DECREMENT = Symbol.for('DECREMENT');

function reducer(state=initState,action){
    switch(action.type){
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

let store = createStore(reducer);
let unsubscribe = store.subscribe(render)
setTimeout(()=>{
    unsubscribe()
},5000)
render()
document.querySelector('#increment-btn').onclick=function(){
    store.dispatch({type:INCREMENT})
}
document.querySelector('#decrement-btn').onclick=function(){
    store.dispatch({type:DECREMENT})
}
function render(){
    document.querySelector('#counter-value').innerHTML = store.getState();
}