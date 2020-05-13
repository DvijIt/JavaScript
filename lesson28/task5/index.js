export const shmoment = initValue => {
    let result = new Date(initValue);

    const calculator = {
        add(date, value) {
            switch (date) {
                case ('years'):
                    result.setFullYear(result.getFullYear() + value);
                    return this
                case ('months'):
                    result.setMonth(result.getMonth() + value);
                    return this
                case ('days'):
                    result.setDate(result.getDate() + value);
                    return this
                case ('hours'):
                    result.setHours(result.getHours() + value);
                    return this
                case ('minutes'):
                    result.setMinutes(result.getMinutes() + value);
                    return this
                case ('seconds'):
                    result.setSeconds(result.getSeconds() + value);
                    return this
                case ('milliseconds'):
                    result.setMilliseconds(result.getMilliseconds() + value);
                    return this
                default:
                    return
            }
        },

        subtract(date, value) {
            switch (date) {
                case ('years'):
                    result.setFullYear(result.getFullYear() - value);
                    return this
                case ('months'):
                    result.setMonth(result.getMonth() - value);
                    return this
                case ('days'):
                    result.setDate(result.getDate() - value);
                    return this
                case ('hours'):
                    result.setHours(result.getHours() - value);
                    return this
                case ('minutes'):
                    result.setMinutes(result.getMinutes() - value);
                    return this
                case ('seconds'):
                    result.setSeconds(result.getSeconds() - value);
                    return this
                case ('milliseconds'):
                    result.setMilliseconds(result.getMilliseconds() - value);
                    return this
                default:
                    return
            }
        },

        result() {
            return result
        }
    }
    return calculator;
}
