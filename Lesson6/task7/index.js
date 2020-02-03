const array = [4, 5, 3, 6, 2, 1, 10];

const sortAsc = array => {
  array.sort((a, b) => a - b);
  return array;
}

const sortDesc = array => {
  array.sort((a, b) => b - a);
  return array;
}

let a = [3, 2, 1, 1, 5, 4],
c = [];
for (; a.length;)  { c.push(a.splice(a.indexOf(Math.min(...a)),1)[0])}
console.log(c)