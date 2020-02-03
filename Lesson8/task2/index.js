const concatProps = obj => {
  let arr = [];
  for (let key in obj) {
    arr.push(obj[key]);
  }
  return arr;
}
// const obj = {
//   name: 'John Doe',
//   age: 17,
//   interest: 'football'
// }
// const obj2 = {};
// console.log(concatProps(obj2))