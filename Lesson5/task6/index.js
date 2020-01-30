const getPrimes = num => {
  let i = 1;
  while (i <= num) {
    if (i % 1 === 0 && i % i === 0) {
      console.log(i);
      i++;
    } else {
      i++;
    }
  }
}
getPrimes(5);