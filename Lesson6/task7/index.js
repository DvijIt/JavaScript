const array = [4, 5, 3, 6, 2, 1, 10];

const sortAsc = array => {
  array.sort((a, b) => b - a);
}

const sortAsc = array => {
  array.sort((a, b) => a - b);
}

sortAsc(array);
sortDesc(array);


// const array = [4, 5, 3, 6, 2, 1, 10];

// const sortAsc = array => {
//   arr = [];
//   for (; array.length;) {
//     arr.push(array.splice(array.indexOf(Math.min(...array)), 1)[0])
//   }
//   return arr;
// }

// const sortDesc = array => {
//   arr = [];
//   for (; array.length;) {
//     arr.push(array.splice(array.indexOf(Math.max(...array)), 1)[0])
//   }
//   return arr;
// }