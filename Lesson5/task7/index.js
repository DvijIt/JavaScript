const increaser = (a, index) => {
  let sum = 0;
  if (a > index) {
    sum = a * index;
  } else {
    sum = a;
  }
  return sum;
}

increaser(8, 6)