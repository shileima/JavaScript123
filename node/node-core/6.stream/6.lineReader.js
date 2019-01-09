/* 按行读取内容 */
let fs = require('fs');
let util = require('util');
let EventEmitter = require('events');

util.inherits(LineReader,EventEmitter)

const NEW_LINE = 0x0A
const RETURN = 0X0D

function LineReader(path,encoding){
    EventEmitter.call(this)
    this.encoding = encoding || 'utf8';
    this._reader = fs.createReadStream(path);

    this.on('newListener',(type,listener)=>{
        if(type === 'newLine'){
            let buffers = [];
            this._reader.on('readable',()=>{
                let char; // 1个字节 buffer
                while(null != (char = this._reader.read(1))){
                    switch (char[0]) {
                        case NEW_LINE:
                            this.emit('newLine',Buffer.from(buffers).toString(this.encoding));
                            break;
                        case RETURN:
                            this.emit('newLine',Buffer.from(buffers).toString(this.encoding));
                            buffers.length = 0;
                            // 多读一个字节，查看系统
                            let nChar = this._reader.read(1)
                            if(nChar[0] != NEW_LINE){
                                buffers.push(nChar[0])
                            }
                            break;
                        default:
                            buffers.push(char[0])
                            break;
                    }
                }
            })
            this._reader.on('end',()=>{
                this.emit('newLine',Buffer.from(buffers).toString(this.encoding));
                this.emit('end')
            })
        }
    })
}

module.exports = LineReader;