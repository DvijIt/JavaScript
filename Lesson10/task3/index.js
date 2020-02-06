const multiRound = num => [+Math.floor(num), +Math.round(num), +Math.ceil(num), +Math.trunc(num), num.toFixed(3)]
console.log(multiRound(-Math.PI))