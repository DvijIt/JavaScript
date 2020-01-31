const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

const getPrimes = num => {
  for ( let i = 2; i <= num; i++ ) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}
getPrimes(20)