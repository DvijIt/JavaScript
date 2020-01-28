const m = 10;
const n = 20;
let result = 1;
let i = m;

do {
  if ( i % 2 === 1 ) {
    result *= i;
  }
  i++;
} while ( i <= n );

console.log('Result: ' + result);