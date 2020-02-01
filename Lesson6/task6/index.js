const numbers = [11, 22, 33, 55, 66];

function reverseArray(numbers) {
  let arr = [];
  if (!Array.isArray(numbers)) {
    return null;
  }
  arr = numbers;
  return arr.reverse();
}