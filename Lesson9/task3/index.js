const pickProps = (obj, arr) => {
  let obj1 = {};
  arr.forEach(el => {
    for (let key in obj) {
      if (key == el) {
        obj1[el] = obj[key]
      }
    }
  });
  return obj1;
}