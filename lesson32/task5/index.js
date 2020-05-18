

export const delay = delay => new Promise((resolve) => {
    setTimeout(() => {
        resolve()
    }, delay)
})

// delay(300)
// .then(() => console.log('data'))
