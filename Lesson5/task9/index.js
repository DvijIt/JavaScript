 export const findDivCount = (a, b, n) => {
   let count = 0;
   while (a <= b) {
     if (a % n === 0) {
       count++;
       a++;
     } else {
       a++
     }
   }
   return count;
 }