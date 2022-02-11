function divideSemPromise(num1, num2) {
  if (num2 === 0) throw new Error('Não é possível fazer divisão por 0!');

  return num1 / num2;
}

function main() {
  try {
    const resultado = divideSemPromise(4, 0);
    console.log(resultado);
  } catch (err) {
    console.log(`erro: ${err.message}`);
  }
}

module.exports = main;
