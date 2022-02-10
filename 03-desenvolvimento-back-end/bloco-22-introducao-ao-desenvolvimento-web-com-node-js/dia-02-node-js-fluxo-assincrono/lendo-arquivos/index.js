const fs = require('fs');

function readFilePromise(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  });
}

// Utilizando THEN / CATCH
// readFilePromise('./file.txt')
//   .then((content) => {
//     console.log(`Lido arquivo com ${content.byteLength} bytes`);
//   })
//   .catch((err) => {
//     console.error(`Erro ao ler arquivo: ${err.message}`);
//   });

// Utilizando ASYNC / AWAIT
async function main() {
  try {
    const content = await readFilePromise('./file.txt');
    console.log(`Lido arquivo com ${content.byteLength} bytes`);
  } catch (err) {
    console.log(err.message);
  }
}

main();
