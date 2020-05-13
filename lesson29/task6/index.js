const isFibonachi = num => {
   if( num  <= 1 ) return 1;
   return isFibonachi(num - 1) + isFibonachi(num - 2)
}

export const maxFibonacci = num => {
    let value = 0;
    let max = 0;
    while (true) {
        if (isFibonachi(value) <= num) {
            max = isFibonachi(value);
            value++;
        } else return max;
    }
};


