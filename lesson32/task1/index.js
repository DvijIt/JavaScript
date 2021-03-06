const getValueWithDelay = (value, delay) => new Promise(resolve => {
    setTimeout(() => {
        resolve(value)
    }, delay);
})

const asyncNum1 = getValueWithDelay(56, 1000)
const asyncNum2 = getValueWithDelay(4, 2000)
const asyncNum3 = getValueWithDelay(10, 2000)

const getSum = numbers => numbers.filter(value => !isNaN(value)).reduce((acc, num) => acc + +num, 0)

const asyncSum = (...asyncNumbs) => Promise.all(asyncNumbs).then(numbers => getSum(numbers)).catch(() => Promise.reject(new Error('Can\'t calculate')))

asyncSum(asyncNum1, asyncNum2, asyncNum3).then(result => console.log(result))