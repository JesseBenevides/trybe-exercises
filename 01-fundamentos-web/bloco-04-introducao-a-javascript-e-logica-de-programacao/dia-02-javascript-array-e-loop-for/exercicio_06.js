//EXERCÍCIO 6
//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

let oddsCount = 0

for (let number of numbers) {
  if (number % 2 == 1) {
    oddsCount += 1
  }
}

if (oddsCount === 0) {
  console.log('Nenhum valor ímpar foi encontrado')
} else {
  console.log(oddsCount)
}
