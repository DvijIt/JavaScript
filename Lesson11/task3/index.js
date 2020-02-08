const splitString = (text, len = 10) => {
  if (typeof(text) !== 'string') {
    return null
  }
  const strArr = [];
  let startPosition = 0;
  while (true) {
    let chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk.slice());
    startPosition += len;
  }
  for (let i = strArr[strArr.length-1].length; i < len; i++) {
    strArr[strArr.length-1] += '.'
  }

  return strArr;
}
// console.log(splitString('seseheertdrhddhdrhdrhdrhdrddh', 4));