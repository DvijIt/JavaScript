const transformToObject = arr => {
  obj = {};
  arr.forEach(el => {
    obj[el] = el;
  });
  if (arr.leght = 0) {
    return obj;
  }
  return obj;
}

// const arr = ['a', 17.1, 'John Doe'];
// console.log(transformToObject(arr))