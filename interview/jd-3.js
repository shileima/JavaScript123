Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let i = 0;
    let result = [];
    for (let i = 0, len = promises.length; i < len; i++) {
      let current = promises[i];
      if (typeof current.then !== "function") {
        current = Promise.resolve(current);
      }
      current.then((data) => {
        handlePromise(i, data);
      }, reject);
    }
    function handlePromise(index, data) {
      result[index] = data;
      if (++i === promises.length) {
        resolve(result);
      }
    }
  });
};

Promise.allSettled = function (promises) {
  return new Promise((resolve, reject) => {
    let i = 0;
    let result = [];
    for (let i = 0, len = promises.length; i < len; i++) {
      let current = promises[i];
      if (typeof current.then !== "function") {
        current = Promise.resolve(current);
      }
      current.then(
        (data) => {
          handlePromise(i, data, true);
        },
        (err) => {
          handlePromise(i, err, false);
        }
      );
    }
    function handlePromise(index, data, isResolved) {
      result[index] = isResolved
        ? { status: "fulfilled", value: data }
        : { status: "rejected", value: data };
      if (++i === promises.length) {
        resolve(result);
      }
    }
  });
};

let fs = require("fs").promises;
let path = require("path");

let getName = fs.readFile(path.resolve(__dirname, "./name.txt"), "utf8");
let getAge = fs.readFile(path.resolve(__dirname, "./age1.txt"), "utf8");

// Promise.allSettled([1, getName, getAge, 2]).then((data) => {
//   console.log(data); // [ 1, 'name', '11', 2 ]
// });
Promise.all([1, getName, getAge, 2]).then((data) => {
  console.log(data); // [ 1, 'name', '11', 2 ]
});


// Promise.finally
Promise.finally = function(callback){
    return this.then((data) => {
        return Promise.resolve(callback()).then(() => data)
    }, (err) => {
        return Promise.resolve(callback()).then(() => {
            throw err;
        })
    })
}

Promise.resolve(123)
  .finally((data) => {
    console.log(data); // undefined
  })
  .then((data) => {
    console.log(data); // 123
  });

Promise.resolve(123)
  .finally((data) => {
    console.log(data); // undefined
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("ok");
      }, 3000);
    });
  })
  .then(
    (data) => {
      console.log(data, "success"); // 123 success
    },
    (err) => {
      console.log(err, "err");
    }
  );

Promise.resolve(123)
  .finally((data) => {
    console.log(data); // undefined
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("rejected");
      }, 3000);
    });
  })
  .then(
    (data) => {
      console.log(data, "success");
    },
    (err) => {
      console.log(err, "err"); // rejected err
    }
  );

  Promise.resolve(2).then(() => {}, () => {}).then(data => console.log(data))
  Promise.resolve(2).finally(() => {}).then(data => console.log(data))
