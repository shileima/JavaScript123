(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
    factory();
}((function () {
  'use strict';

  var version = "1.0.0";

  const a = 122;
  const getVersion = function () {
    console.log('version-' + version);
  };

  var index = 42;

  // require('./exporter.js')

  console.log(a);
  getVersion();

  console.log('the answer is ' + index);

  console.log(Array.prototype.isPrototypeOf({}));

  console.log("2018-10-07T11:48:47 Asia/zh-cn".match(/\d{1,}/g));


})));
