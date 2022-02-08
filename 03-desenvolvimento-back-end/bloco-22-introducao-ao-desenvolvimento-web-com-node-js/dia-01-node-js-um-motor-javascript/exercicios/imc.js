const height = 1.7;
const weight = 70;

function getIMC(height, weight) {
  return weight / (height * height);
}

const imc = getIMC(height, weight);
console.log(`Seu IMC é ${imc}`);
