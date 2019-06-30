import React from 'react';
import ReactDOM from 'react-dom';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';

let element = (<>
  <Counter1 />
  <Counter2 />
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