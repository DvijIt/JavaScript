

const compareSums = (a, b, c, d) => {
  let from = a + b;
  let to = c + d;
  if (from > to) {
    return true
  }
  else {
    return false
  }
}

compareSums(55, 2, 3, 4)