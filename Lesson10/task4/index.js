const getMaxAbsoluteNumber = arr => {
  if ((!Array.isArray(arr)) || arr.length == 0) {
    return null;
  } else {
    const absoluteValue = arr.map(el => Math.abs(el));
    return Math.max(...absoluteValue)
  }
}