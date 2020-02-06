const getFiniteNubmers = arr => arr.filter(el => Number.isFinite(el));
const getFiniteNubmersV2 = arr => arr.filter(el => isFinite(el));

const getNaN = arr => arr.filter(el => Number.isNaN(el));
const getNaNV2 = arr => arr.filter(el => isNaN(el));

const getIntegers = arr => arr.filter(el => Number.isInteger(el));

// const array = [17, 18, '19', '20', 21.2, 22.4, NaN, 'NaN'];

// console.log(getFiniteNubmers(array))
// console.log(getFiniteNubmersV2(array))
// console.log(getNaN(array))
// console.log(getNaNV2(array))
// console.log(getIntegers(array))
