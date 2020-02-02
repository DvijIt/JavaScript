const array = [4, 5, 3, 6, 2, 1, 10];

const sortAsc = array => {
  array.sort((a, b) => a - b);
  return array;
}

const sortDesc = array => {
  array.sort((a, b) => b - a);
  return array;
}