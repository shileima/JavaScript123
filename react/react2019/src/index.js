import React from 'react';
import ReactDOM from 'react-dom';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';
import Types from './components/Types';

let person = {
  name:'loading',
  age: '18',
  hobby:['吃饭','睡觉'],
  
}

let element = (<>
  <Counter1 />
  <Counter2 />
  <Counter3 />
  <Types {...person} />
</>);



class A {
  a(){
    console.log(this)
  }
}
let a = new A();
let fn = a.a;
fn()



ReactDOM.render(element, document.querySelector('#counter'));