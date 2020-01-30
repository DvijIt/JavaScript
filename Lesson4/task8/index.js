let sum = 0;
let wholePart = 0;
let endPart = 0;
for(let i = 1; i<=1000; i++) {
  sum += i;
  wholePart = Math.floor(sum / 1234);
  endPart = sum % 1234;
}
console.log(wholePart>endPart ? true : false);