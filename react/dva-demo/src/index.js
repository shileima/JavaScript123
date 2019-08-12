import React from 'react';
import dva,{connect} from 'dva';
import {Router,Route,routerRedux} from 'dva/router'

const app = dva();

const delay = (ms)=>new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(),ms)
})

app.model({
    namespace:'counter', 
    state:{number:0},
    reducers:{
        add(state,action){
            return {number:state.number + 1}
        }
    },
    // effects 函数内都是 generator 函数,此处不支持 async/awaite
    effects:{
        *asyncAdd(action,{put,call,select}){
            //console.log(action)
            yield call(delay,1000);
            yield put({type:'add'})
            let state = yield select(state=>state.counter);
            //console.log('state',state)
        },
        *goto(action,{put,call,select}){
            console.log(routerRedux)
            console.log(action)
            yield put(routerRedux.push(action.to))
        }
    }
});

const Counter = connect(
    state=>state.counter
)(props=>(
        <div>
            <p>{props.number}</p>
            <button onClick={()=>props.dispatch({type:'counter/add'})}>add</button>
            <button onClick={()=>props.dispatch({type:'counter/asyncAdd'})}>asyncAdd</button>
            <button onClick={()=>props.dispatch({type:'counter/goto',to:"/"})}>goto</button>
        </div>
    )
)
const Home = () => (
    <h1>Home</h1>
)

app.router(({history,app})=>(
    <Router history={history}>
        <>
            <Route path="/" exact component={Home} />
            <Route path="/counter" exact component={Counter} />
        </>
    </Router>
))

app.start('#root')