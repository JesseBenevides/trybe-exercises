//EXERCÍCIO 9
//Utilizando o array criado no exercício 8 imprima o resultado da divisão de cada um dos elementos por 2 .

//Criando o Array do Exercício 8
let numbers = []
let arraySize = 25

for (let i = 0; i < arraySize; i++) {
  numbers[i] = i + 1
}

//Resosolução Exercício 9
for (let number of numbers) {
  console.log(number / 2)
}
