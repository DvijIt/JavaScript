const getRandomNumbers = (numLength, start, end) => {
  if (start > end) {
    return null;
  }
  let arr = [];
  start = Math.ceil(start);
  end = Math.floor(end);

  for (let i = 0; i < numLength; i++) {
    arr[i] = parseInt(Math.random() * (start - end + 1)) + end; //Максимум и минимум включаются
  }
  if ((arr.find(el => Number.isInteger(el))) === undefined) {
    return null
  }
  else {
    return arr;
  }
}


// const getRandomNumber = arr => {
//   for ( let i = 0; i < 10; i++) {
//     arr[i] = parseInt(Math.random());
//   }
//   return arr;
// }
// console.log(getRandomNumber([]))

console.log(getRandomNumbers(5, -5, 11))