const reverseArray = arr => {
  let array = [...arr];
  if (!Array.isArray(arr)) {
    return null;
  }
  return array.reverse();
}