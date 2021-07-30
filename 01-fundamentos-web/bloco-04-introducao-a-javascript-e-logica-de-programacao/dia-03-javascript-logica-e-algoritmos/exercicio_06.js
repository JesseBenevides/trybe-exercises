//EXERCÍCIO 6 - BONUS
//Faça um programa que diz se um número definido numa variável é primo ou não.

let number = 29
let count = 0

for (let i = 1; i < number; i += 1) {
  if (number % i === 0) {
    count += 1
  }
}

if (count > 1) {
  console.log(number + ' não é primo')
} else {
  console.log(number + ' é primo')
}
