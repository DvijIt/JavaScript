const transformToObject = arr => {
  obj = {};
  arr.forEach(el => {
    obj[el] = el;
  });
  return obj;
}

const arr = ['a', 17.1, 'John Doe'];