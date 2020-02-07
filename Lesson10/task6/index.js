const getRandomNumbers = (numLength, start, end) => {
  let arr = [];
  for (let i = 0; i <= numLength; i++) {
    arr[i] = Math.round(Math.random() * (start - end + 1)) + end;
  }
  return arr;
}

// console.log(getRandomNumbers(5, -5, 11))