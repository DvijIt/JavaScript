export const delay = (delay, callback, context, arg1, arg2, arg3) => {
    setTimeout(() => {
        callback(context)
    }, delay)
}