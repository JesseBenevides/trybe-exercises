function divideComPromise(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 === 0) reject(Error('Não é possível fazer divisão por 0!'));

    const resultado = num1 / num2;
    resolve(resultado);
  });

  return promise;
}

async function main(num1, num2) {
  try {
    const resultado = await divideComPromise(num1, num2);
    console.log(resultado);
  } catch (err) {
    console.log(`erro: ${err.message}`);
  }
}

module.exports = main;
