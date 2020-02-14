let memory = 0;
export function add(num) {
  memory = num + memory;
}
export function decrease(num) {
  memory = memory - num;
}

export function reset() {
  memory = 0;
}

export function getMemo() {
  return memory;
}