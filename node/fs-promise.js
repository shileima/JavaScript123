/**
 * Created by Loading on 2018/9/6.
 */

const fs = require('fs');
const util = require('util');

util.promisify(fs.readFile)('./package.json','utf8')
    .then(JSON.parse)  //.then(data=>JSON.parse(data))
    .then(data => {
        console.log(data.name)
    })
    .catch(err => {
        console.log(err)
    })
