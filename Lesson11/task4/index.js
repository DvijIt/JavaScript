const countOccurrences = (fullStr, subStr) =>  subStr.length > 0 ? fullStr.match(RegExp(subStr, 'g')).length : null;

// const someText = 'text text text';
// const subStr = 'te';

// console.log(countOccurrences(someText, subStr));