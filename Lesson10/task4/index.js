const getMaxAbsoluteNumber = arr => {
  const absoluteValue = arr.map(el => Math.abs(el));
  return Array.isArray(arr) || arr.length == 0 ? Math.max(...absoluteValue) : null
}