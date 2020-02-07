const getRandomNumbers = (numLength, start, end) => {
  if (start > end) {
    return null;
  }
  let arr = [];
  for (let i = 0; i < numLength; i++) {
    arr[i] = Math.round(Math.random() * (start - end + 1)) + end;
  }
  console.log(arr.length)
  return arr;
}

// console.log(getRandomNumbers(5, -5, 11))