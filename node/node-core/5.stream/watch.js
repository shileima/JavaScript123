let fs = require('fs')

fs.watch('a.txt',(preState,nextState)=>{
    console.log('preState:',preState);
    console.log('nextState:',nextState);

})