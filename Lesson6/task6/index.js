const numbers = [11, 22, 33, 55, 66];

function reverseArray(numbers) {
  let arr = [];
  if (!Array.isArray(numbers)) {
    return null;
  }
  for (let i = 0; i < numbers.length; i++) {
    arr.push(i);
  }
  return arr.reverse();
}