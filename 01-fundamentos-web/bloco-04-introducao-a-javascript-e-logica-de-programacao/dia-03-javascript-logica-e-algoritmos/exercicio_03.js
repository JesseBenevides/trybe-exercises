//EXERCÍCIO 3
//Agora inverta o lado do triângulo

//RESOLUÇÃO USANDO FUNÇÃO REPEAT
// let n = 5
// let triangle = ''

// for (let i = 1; i <= n; i += 1) {
//   square = ' '.repeat(n - i)
//   square += '*'.repeat(i)
//   console.log(square)
// }

//RESOLUÇÃO SEM O REPEAT
let n = 5

for (let i = 1; i <= n; i++) {
  let triangle = ''
  for (let j = 0; j < n - i; j++) {
    triangle += ' '
  }
  for (let k = 0; k < i; k++) {
    triangle += '*'
  }
  console.log(triangle)
}
