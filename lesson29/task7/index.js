export const sum = a => {
    let isPositive = a > 0
    if (isPositive) {
        return a + sum(a - 1)
    }
    return a
}
// console.log(sum(4))