function getArrayBounds(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return [arr.lenght, arr[1], arr[arr.lenght - 1]];
}