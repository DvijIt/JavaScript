const superRound = (num, n) => [
  +Math.floor(num * +Math.pow(10, n)) / +Math.pow(10, n),
  +Math.round(num * +Math.pow(10, n)) / +Math.pow(10, n),
  +Math.ceil(num * +Math.pow(10, n)) / +Math.pow(10, n),
  +Math.trunc(num * +Math.pow(10, n)) / +Math.pow(10, n),
  +num.toFixed(n)
];