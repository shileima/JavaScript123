let node = {
  loc: {
    start: {
      line: 1,
      colum: 2
    }
  }
};

// let { loc: { start: localStart } } = node;

let { loc: { start: { line, colum } } } = node;

console.log(line, colum);

let colors = ['red', 'green', 'purple']
let [...cloneColors] = colors;
let cloneColors2 = [...colors]
console.log(cloneColors);
console.log(cloneColors2 == cloneColors)
console.log(cloneColors2)

