// Exercício 2
// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Verifique se o array passado por parâmetro não sofreu alterações
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
// const assert = require('assert');

const assert = require('assert')
function myRemove(arr, item) {
  let newArr = []
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index])
    }
  }
  return newArr
}

// 1) Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado

const actualOne = myRemove([1, 2, 3, 4], 3)
assert.deepStrictEqual(actualOne, [1, 2, 4], 'O item 3 não foi removido')

// 2) Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]

const actualTwo = myRemove([1, 2, 3, 4], 3)
assert.notDeepStrictEqual(actualTwo, [1, 2, 3, 4], 'O array não foi alterado')
