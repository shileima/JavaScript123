const obj = {
    a: 1
  }
  let b = 1
  setTimeout(() => {
    obj.a++
    b++
  });
  exports.obj = obj;
  exports.b = b;