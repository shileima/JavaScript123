/*
* node里模块有三种
* 1、js模块通过require加载
*    加载顺序是先找 ./user.js -> user.json ->  ./user/index.js
* 2、json模块通过JSON.Parse() 返回对象
* 3、node模块 C++扩展二进制模块
* */