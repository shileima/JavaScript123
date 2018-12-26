/* 封装events 函数的emitter */

function EventEmitter(){
  this.events = {};
  // 给一个事件类型增加的监听函数数量最多数量
  this._maxListeners = 10;
  this.maxWarn = true;
}

EventEmitter.prototype.addListner = 
EventEmitter.prototype.on = function(type,listner){
  if(this.events[type]){
      if(this.maxWarn && this._maxListeners !=0 && this.events[type].length > this._maxListeners){
          console.error(`MaxListenersExceededWarning: Possible EventEmitter memory leak detected. ${this.events[type].length} ${type} listeners added. Use emitter.setMaxListeners() to increase limit`)
          this.maxWarn = false;
      }
      this.events[type].push(listner)
  } else {
      this.events[type] = [listner]
  }
}

EventEmitter.prototype.once = function(type,listner){
  let wrapper = (...rest) => {
      listner.apply(this,rest)
      this.removeListener(type,wrapper)
  }
  this.on(type,wrapper)
}

EventEmitter.prototype.removeListener = function(type,listner){
    if(this.events[type]){
        this.events[type] = this.events[type].filter(item => {
            //console.log(item);
            return item != listner
        })
    }
}

EventEmitter.prototype.removeAllListeners = function(type){
  delete this.events[type]
}

EventEmitter.prototype.emit = function(type,...rest){
    if(this.events[type]){
        this.events[type].forEach(listner => {
            listner.apply(this,rest)
        });
    }
}

EventEmitter.prototype.setMaxListeners = function(n){
    this._maxListeners = n;
}

module.exports = EventEmitter;