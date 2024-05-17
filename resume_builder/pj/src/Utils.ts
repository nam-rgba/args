// sum
const sum = (a: number,b: number)=> a+b;


// create array from 1 to n
const rangeUpTo = (end: number) => Array.from({ length: end }, (_, i) => i + 1);
console.log(rangeUpTo(10));





export {sum, rangeUpTo};