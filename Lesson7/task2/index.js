const numbers = [11, 22, 33, 55, 66];

function getSum(numbers) {
  let sumOfNumbers = 0;
  if (!Array.isArray(numbers)) {
    return null;
  }
  for (let i = 0; i < numbers.length; i++) {
    sumOfNumbers += numbers[i];
  }
 
  return sumOfNumbers;
  
}
