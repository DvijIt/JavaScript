export function createArrayOfFunctions(num) {
  let arr = [];
  if (Number.isInteger(num)) {
    for (let i = 0; i <= num; i++) {
      arr[i] = () => i;
    }
  } else if (num === undefined) {
    return arr;
  } else {
    return null;
  }
  
}
