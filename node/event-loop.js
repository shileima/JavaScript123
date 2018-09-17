const fs = require('fs');

fs.readFile('test.js', () => {
  setTimeout(() => console.log(1));
  setImmediate(() => console.log(2));
});
/* 上面代码会先进入 I/O callbacks 阶段，然后是 check 阶段，最后才是 timers 阶段。
因此，setImmediate才会早于setTimeout执行。 */