// 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula

const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha'
];

const countLetters = (word, letter) => {
  const lowerCaseWord = word.toLowerCase();
  let counter = lowerCaseWord.split(letter).length - 1;

  return counter;
};
function containsA() {
  const counterA = names.reduce((acc, name) => (acc += countLetters(name, 'a')),0);

  return counterA;
}

assert.deepStrictEqual(containsA(), 20);
