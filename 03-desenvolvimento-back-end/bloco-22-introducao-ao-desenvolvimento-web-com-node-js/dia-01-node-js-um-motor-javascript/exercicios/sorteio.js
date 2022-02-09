const readline = require('readline-sync');

function getImputNumber(min, max) {
  const imputNumber = readline.questionInt(`Digite um número de ${min} a ${max}: `);
  return imputNumber;
}

function generateRandomNumber(min, max) {
  const randomNumber = Math.trunc(Math.random() * (max - min)) + min;
  return randomNumber;
}

function checkSorteio(imputNumber, randomNumber) {
  if (imputNumber === randomNumber) console.log('Parabéns, número correto!');
  else console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`);
}

function main() {
  const maxNumber = 10;
  const minNumber = 1;

  let x=1;
  while(x) {
    const imputNumber = getImputNumber(minNumber, maxNumber);
    const randomNumber = generateRandomNumber(minNumber, maxNumber);
    checkSorteio(imputNumber, randomNumber);

    x = readline.questionInt('Digite 1 para jogar novamente e 0 para sair: ');
  }
}

main();

module.exports = main;
