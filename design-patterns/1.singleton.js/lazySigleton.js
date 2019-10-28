/* 创建div元素 */
var createDiv = function () {
    console.log('create div...');
    var node = document.createElement('div');
    node.innerHTML = '我是登录框';
    node.style.display = 'none';
    console.log('node => ', node);
    document.body.appendChild(node)
    return node
}

/* 包装单例模式 */
var getSingle = function (fn) {
    var result;
    return function () {
        return result || (result = fn.apply(this, arguments))
    }
}

var createSingleFn = getSingle(createDiv)

var myBtn = document.getElementById('lazy_singleton_div');
myBtn.onclick = function () {
    console.log(createSingleFn);
    let layer = createSingleFn();

    if (layer) layer.style.display = 'block'
}

var createIframe = function () {
    console.log('create iframe...');
    let iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    return iframe;
}

var createIframeFn = getSingle(createIframe);
var myBtn2 = document.getElementById('lazy_singleton_iframe');
myBtn2.onclick = function () {
    let layer = createIframeFn();
    console.log(layer)
    layer.style.width = "100%";
    layer.style.height = "100vh";
    layer.src = "https://www.baidu.com/"
    if (layer) layer.style.display = 'block'
}
