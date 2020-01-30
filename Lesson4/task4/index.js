const n = 5;
let sum = 1;

for (i=2; i<=n; i++) {
  sum += String(i);
}
console.log("Результат работы программы при n = "+ n + " это строка '" + sum +"'");