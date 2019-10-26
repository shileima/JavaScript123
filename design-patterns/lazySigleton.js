/* 创建div元素 */
var createDiv = function (html) {
    console.log('create node...');
    var node = document.createElement('div');
    node.innerHTML = this.html;
    node.style.display = 'none';
    console.log('node => ', node);
    return node
}
/* 包装单例模式 */
var getSingle = function (fn) {
    var result;
    return function () {
        return result || (result = fn.apply(this, arguments))
    }
}

var createSingleFn = getSingle(createDiv('我是登录框'))

var myBtn = document.getElementById('lazy_singleton');
myBtn.onclick = function () {
    createSingleFn.style.display = 'block'
}

