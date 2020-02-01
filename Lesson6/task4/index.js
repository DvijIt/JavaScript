const numbers = [11, 22, 33, 55, 66];

function swap(arr) {
  const [start, ...rest] = arr;

  return [...rest, start];
}