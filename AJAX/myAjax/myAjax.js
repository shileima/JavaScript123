function myAjax(opt) {
    opt = opt || {};
    opt.method = opt.method || 'POST';
    opt.data = opt.data || null;
    opt.url = opt.url || '';
    opt.async = opt.async || 'true';
    opt.success = opt.success || function () {}
    opt.error = opt.error || function () {}


    var xhr = new XMLHttpRequest();

    var params = []

    for(var key in opt.data){
        params.push(key + '=' + opt.data[key])
    }

    var sendData = params.join('&')

    if(opt.method.toUpperCase() === "POST"){
        xhr.open(opt.method,opt.url,opt.async);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded;charset=utf-8");
        xhr.send(sendData);

    }else {
        xhr.open(opt.method,opt.url+'?'+sendData,opt.async);
        xhr.send(null);
    }

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            opt.success && opt.success(xhr.responseText)
            return false;
        }else{
            opt.error && opt.error(status)
        }
    }
}
