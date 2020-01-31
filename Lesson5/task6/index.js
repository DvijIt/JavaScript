const getPrimes = num => {
  for (var i = 2; i <= num; i++) {
    var count = 0;
    for (var j = 1; j <= i; j++) {
      if (i % j) {
        continue;
      }
      count += 1;
    }
    if (count == 2) console.log(i);
  }
}
getPrimes(19)