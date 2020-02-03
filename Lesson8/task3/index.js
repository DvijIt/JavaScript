const pickProps = (obj, arr) => {
  obj1 = {};
  arr.forEach(el => {
    obj1[el] = obj[el]
  });
  return obj1;
}

// const obj$ = { a: 1, b: 2, c: 3 };
// const array = ['a', 'c'];

// console.log(pickProps(obj$, array));