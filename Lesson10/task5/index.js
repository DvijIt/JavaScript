const getTotalPrice = arr => {
  let sum = arr.reduce((a, b) => a + b);
  +Math.floor(sum * 100 ) / 100;
  return `$${+Math.floor(sum * 100 ) / 100}`
}

// console.log(getTotalPrice([2.245, 3.54456, 3]))