const readline = require('readline-sync');

const weight = readline.question('Qual seu peso? ');
const height = readline.question('Qual sua altura? ');

function getIMC(height, weight) {
  return weight / (height * height);
}

const imc = getIMC(height, weight);
console.log(`Seu IMC é ${imc}`);
