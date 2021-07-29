let pecaDeXadrez = 'BiSpO'

switch (pecaDeXadrez.toLocaleLowerCase()) {
  case 'cavalo':
    console.log('Cavalo: Anda em L')
    break

  case 'peão':
    console.log('Peão: Anda pra frente')
    break

  case 'bispo':
    console.log('Bispo: Anda somente na diagonal')
    break

  case 'torre':
    console.log('Torre: Anda na horizontal e vertical')
    break

  case 'rainha':
    console.log('Rainha: Anda em todas direções')
    break

  case 'rei':
    console.log('Rei: Anda em qualquer direção(uma casa por vez)')
    break

  case 'cachorro':
    console.log('Cachorro? Eu não sou cachorro não!')
    break

  default:
    console.log('Peça inválida!')
}
