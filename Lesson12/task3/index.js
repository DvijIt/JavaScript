const cleanTransactionsList = expression => expression.filter(el => isFinite(el)).map(el => `$${parseFloat(el).toFixed(2)}`);


// const arr = ['  1.9 ', '16.4', 17, ' 1 dollar '];
// console.log(cleanTransactionsList(arr))