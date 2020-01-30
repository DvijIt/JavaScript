let i = 1;

while (i <= 5 ) {
  console.log('=> ' + i + ' <=');
  for (j = 1; j <= 10; j++) {
    console.log(i + ' x ' + j + ' = ' + i * j)
  }
  i++;
}

// for (let i = 1; i <= 5; i++) {
//   console.log('=> ' + i + ' <=')
//   for (j = 1; j <= 10; j++) {
//     console.log(i + ' x ' + j + ' = ' + i * j)
//   }
// }