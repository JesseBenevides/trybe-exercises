// Faça uma função que some todos os números pares do array:
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getSum = (result, number) => (number % 2 === 0) ? (result + number) : result;

const sumNumbers = numbers.reduce(getSum, 0);
console.log(sumNumbers);