function sumOfSquares() {
  return [...arguments].reduce((acc, el) => acc + Math.pow(el, 2), 0)
}