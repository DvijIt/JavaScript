const numbers = [11, 22, 33, 55, 66];

function squareArray(numbers) {
  let arr = [];
  if (!Array.isArray(numbers)) {
    return null;
  }
  for (let i = 0; i < numbers.length; i++) {
    arr.push(Math.pow(numbers[i], 2));
  }
  return arr;
}