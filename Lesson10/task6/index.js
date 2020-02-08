const getRandomNumbers = (numLength, start, end) => {
  if (start > end) {
    return null;
  }
  let arr = [];
  
  start = Math.ceil(start);
  end = Math.ceil(end);
  if (end - start < 1) {
    return null
  }
console.log(start, end)
  for (let i = 0; i < numLength; i++) {
    arr[i] = Math.floor(Math.random() * (start - end) + end);
  }
  return arr;
}

// console.log(getRandomNumbers(5, 0.3, 0.5));
// console.log(getRandomNumbers(5, 4.2, 7.2));