const getPrimes = num => {
  for (let i = 2; i <= num; i++) {
    let count = 0;
    for (let j = 2; j <= i; j++) {
      if (i % j) {
        continue;
      }
      count += 1;
    }
    if (count == 1) console.log(i);
  }

}
getPrimes(19)