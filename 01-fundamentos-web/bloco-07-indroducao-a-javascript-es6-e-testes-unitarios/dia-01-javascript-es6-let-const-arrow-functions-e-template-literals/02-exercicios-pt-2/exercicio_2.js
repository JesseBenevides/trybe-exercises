const getBiggestWord = frase => {
  const splitedWords = frase.split(' ')
  let biggestWord = splitedWords[0]

  for (let word of splitedWords) {
    if (word.length > biggestWord.length) {
      biggestWord = word
    }
  }
  return biggestWord
}

function main() {
  const frase = 'Eu tropecei no paralelepípedo e caí'

  const biggestWord = getBiggestWord(frase)
  console.log(biggestWord)
}

main()
