//EXERCÍCIO 4
//Com o mesmo código do exercício 3, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

//EXERCÍCIO 3
//calcule e imprima a média aritmética dos valores contidos no array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

let sum = 0
let average = 0

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}

average = sum / numbers.length

if (average > 20) {
  console.log('Valor maior que 20')
} else {
  console.log('Valor menor ou igual a 20')
}
