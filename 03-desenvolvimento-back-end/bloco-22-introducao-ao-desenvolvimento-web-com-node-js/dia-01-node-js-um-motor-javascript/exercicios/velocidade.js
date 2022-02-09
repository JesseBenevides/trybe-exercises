const readline = require('readline-sync');

function getDistance() {
  const distance = readline.questionInt('Qual a distância percorrida(em metros)? ');
  return distance;
}

function getTime() {
  const time = readline.questionInt('Quanto tempo dutou o percurso(em segundos)? ');
  return time;
}
function calculateSpeed(distance, time) {
  return distance / time;
}

function main() {
  const distance = getDistance();
  const time = getTime();
  const speed = calculateSpeed(distance, time).toFixed(2);

  console.log(`A velocidade média do carro é ${speed}m/s`);
}

main();

module.exports = main;
