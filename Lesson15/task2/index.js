export function createCalculator() {
  let memory = 0;

  function add(num) {
    memory = num + memory;
  }

  function decrease(num) {
    memory = memory - num;
  }

  function reset() {
    memory = 0;
  }

  function getMemo() {
    return memory;
  }
  return {
    add,
    decrease,
    reset,
    getMemo
  }
}