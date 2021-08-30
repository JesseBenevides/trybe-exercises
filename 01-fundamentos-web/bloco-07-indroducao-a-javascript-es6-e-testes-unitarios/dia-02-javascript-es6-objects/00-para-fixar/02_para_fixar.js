/* Tente criar uma função que exiba as habilidades do objeto student . Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade". */

const printObject = obj => {
  const objKeys = Object.keys(obj)

  for (let key of objKeys) {
    console.log(`${key}, Nível: ${obj[key]}`)
  }
}

function main() {
  const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo'
  }

  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom' // chave adicionada
  }

  printObject(student1)
}

main()
