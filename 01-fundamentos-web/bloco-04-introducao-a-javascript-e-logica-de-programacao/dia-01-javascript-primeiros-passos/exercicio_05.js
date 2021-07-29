let x = 45
let y = 45
let z = 90

if (x < 1 || y < 1 || z < 1) {
  console.log('Erro!! Os angulos devem possuir valor positivo!')
} else if (x + y + z === 180) {
  console.log('true')
} else {
  console.log(false)
}
