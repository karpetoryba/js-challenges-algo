// Trouver le premier nombre pair dans un tableau

const numbers = [1, 3, 7, 8, 10];
const findFirstEven = numbers.find((element) => element % 2 === 0);
console.log(findFirstEven);
// 8
