const countOccurrences = (fullStr, subStr) =>  typeof(subStr) === 'string' ? fullStr.match(RegExp(subStr, 'g')).length : null;

// const someText = 'text text text';
// const subStr = 'te';

// console.log(countOccurrences(someText, subStr));