export default arr => 
arr.length > 0 && Array.isArray(arr) ? 
Math.pow(Math.min(...arr.map(el => Math.abs(el))), 2) :
null;