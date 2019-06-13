import React from 'react';
import ReactDOM from 'react-dom';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';

let element = (<>
  <Counter1 />
  <Counter2 />
</>)
ReactDOM.render(element, document.querySelector('#counter'));