const readline = require('readline-sync');

const weight = readline.questionFloat('Qual seu peso? ');
const height = readline.questionFloat('Qual sua altura? ');

function getIMC(height, weight) {
  return weight / (height * height);
}

function getCategory(imc) {
  let category;
  if (imc < 18.5 ) category = 'Abaixo do peso (magreza)';
  else if (imc <= 24.9) category = 'Peso normal';
  else if (imc <= 29.9) category = 'Acima do peso (sobrepeso)';
  else if (imc <= 34.9) category = 'Obesidade grau I';
  else if (imc <= 39.9) category = 'Obesidade grau II';
  else category = 'Obesidade graus III e IV';

  return category;
}

function main() {
  const imc = getIMC(height, weight).toFixed(2);
  const category = getCategory(imc);
  console.log(`Seu IMC é ${imc}`);
  console.log(`Sua  situação é ${category}`);
}

main();
