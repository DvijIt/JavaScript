const arr = [22, 4, 7];
const checker = arr => (Math.min(...arr) + Math.max(...arr)) > 1000 ? true : false;