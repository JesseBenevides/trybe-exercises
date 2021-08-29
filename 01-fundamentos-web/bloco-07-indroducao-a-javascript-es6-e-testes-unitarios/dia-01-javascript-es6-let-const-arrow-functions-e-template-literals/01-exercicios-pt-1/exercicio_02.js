const sortArrayNumbers = array => {
  const sortedNumbers = array.sort((a, b) => a - b)
  return sortedNumbers
}

function main() {
  const oddsAndEvens = [13, 3, 4, 10, 7, 2]
  const sortedNumbers = sortArrayNumbers(oddsAndEvens)
  console.log(
    `"Os números ${sortedNumbers} se encontram ordenados de forma crescente!"`
  )
}

main()
