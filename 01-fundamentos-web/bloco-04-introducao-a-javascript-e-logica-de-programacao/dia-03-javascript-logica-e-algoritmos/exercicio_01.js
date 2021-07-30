//EXERCÍCIO 1
//Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n

let n = 5
let square = ''

for (let i = 0; i < n; i += 1) {
  square += '*'
}

for (let i = 0; i < n; i += 1) {
  console.log(square)
}
