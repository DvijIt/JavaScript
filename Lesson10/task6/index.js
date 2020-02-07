const getRandomNumbers = (numLength, start, end) => {
  if (start > end) {
    return null;
  }
  let arr = [];
  for ( let i = start; i <= end; i++) {
    if (!(Number.isInteger(i))) {
      return null;
    }
  }

  for (let i = 0; i < numLength; i++) {
    arr[i] = Math.round(Math.random() * (start - end) + end);
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

console.log(getRandomNumbers(5, 5, 11))