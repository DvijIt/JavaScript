const transformToObject = arr => {
  obj = {};
  arr.forEach(el => {
    obj[el] = el;
  });
  return obj;
}