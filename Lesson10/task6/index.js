const getRandomNumbers = (numLength, start, end) => {
  if (start > end) {
    return null;
  }
  let arr = [];
  if (end - start < 1) {
    return null;
  }
start = Math.ceil(start)
  // console.log(start, end)

  for (let i = 0; i < numLength; i++) {
    arr[i] = parseInt(Math.random() * (start - end) + end);
  }
  return arr;
}


// const getRandomNumber = arr => {
//   for ( let i = 0; i < 10; i++) {
//     arr[i] = parseInt(Math.random() * (5 - 7) + 7);
//   }
//   return arr;
// }
// console.log(getRandomNumber([]))

console.log(getRandomNumbers(5, -4.2, -3.2))