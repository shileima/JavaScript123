/* 1、普通方式创建单例 */
var createDiv = (function () {
    var instance;
    var createDiv = function (html) {
        if (instance) {
            return instance
        }
        this.html = html;
        this.init()
        return instance = this;
    }
    createDiv.prototype.init = function () {
        var node = document.createElement('div');
        node.innerHTML = this.html;
        document.body.appendChild(node);
    }
    return createDiv;
})()

/* 2、引入代理类，划分职责更清晰 */

var createDiv2 = function (html) {
    this.html = html;
    this.init()
}
createDiv2.prototype.init = function () {
    var node = document.createElement('div');
    node.innerHTML = this.html;
    document.body.appendChild(node);
}
var ProxySingletonCreateDiv = (function () {
    var instance;
    return function (html) {
        /* if (!instance) {
            instance = new createDiv2(html)
        } */
        instance = new createDiv2(html) // 这里必须加 new 返回一个新对象赋值给instance

        console.log(1, instance);
        // console.log(2, createDiv2(html));
        return instance;
    }
})()

let node1 = new ProxySingletonCreateDiv('James');
let node2 = new ProxySingletonCreateDiv('Harden');
console.log(node1);
console.log(node2);
console.log(node1 === node2);

/* 闭包创建，给外界访问提供接口，避免定义全局变量被全局污染 */
var user = (function () {
    let _name = "loading";
    let _age = 24;
    return {
        getUserInfo() {
            return _name + _age
        }
    }
})()

setTimeout(() => {
    /* let userNode = document.createElement('h2')
    userNode.innerHTML = user.getUserInfo()
    document.body.appendChild(userNode) */

    new ProxySingletonCreateDiv(user.getUserInfo());
}, 1000)
