let fs = require('fs');
let EventEmitter = require('events');
class WriteStream extends EventEmitter {
    constructor(path,options){
        super(path,options)

        this.path = path;
        this.flags = options.flags || 'w';
        this.mode = options.mode || 0o666;
        this.start = options.start || 0;
        this.pos = this.start;
        this.encoding = options.encoding || 'utf8';
        this.autoClose = options.autoClose || true;
        this.highWaterMark = options.highWaterMark || 16384;
        this.buffers = [];  // 缓存区
        this.writing = false;// 内部正在写入...
        this.length = 0;// 缓冲区字节的长度
        this.open()
    }

    open(){
        fs.open(this.path,this.flags,this.mode,(err,fd)=>{
            if(err){
                if(this.autoClose){
                    this.destroy(); // 内部api销毁流
                }
                this.emit('error',err)
            }
            this.fd = fd;
            this.emit('open') // 为什么需要发射 open 事件？
        })
    }

    write(chunk,encoding,cb){
        // Convert chunk to Buffer if not
        chunk = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk,this.encoding)
        // 计算读取到的chunk长度，设置缓冲区长度
        let len = chunk.length;
        this.length += len;

        // 返回值 ret 返回true 则缓冲区未满
        let ret = this.length < this.highWaterMark;

        if(this.writing){ // 正在写数据时候，先放缓冲区储存起来
            this.buffers.push({
                chunk,
                encoding,
                cb
            })
        } else {
            this.writing = true;
            this._write(chunk,this.encoding,()=>{
                this.clearBuffer()
            })
        }
        return ret;
    }

    destroy(){
        fs.close(this.fd, ()=>{
            this.emit('close')
        })
    }

    clearBuffer(){

    }

    _write(chunk,encoding,cb){

    }


}