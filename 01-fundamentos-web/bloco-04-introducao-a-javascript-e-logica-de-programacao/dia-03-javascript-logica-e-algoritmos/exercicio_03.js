//EXERCÍCIO 3
//Agora inverta o lado do triângulo

let n = 5
let square = ''

// for (let i = n - 1; i > 0; i -= 1) {
//   square += ' '
// }
// square += '*'
// console.log(square)

for (let i = 1; i <= n; i += 1) {
  square = ' '.repeat(n - i)
  square += '*'.repeat(i)
  console.log(square)
}
