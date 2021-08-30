/* Crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele. */

const appendNewProperty = (object, newKey, newValue) => {
  object[newKey] = newValue
  return object
}

function main() {
  const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher'
  }

  const newKey = 'lastName'
  const newValue = 'Silva'
  const customer2 = appendNewProperty(customer, newKey, newValue)

  console.log(customer2)
}

main()
