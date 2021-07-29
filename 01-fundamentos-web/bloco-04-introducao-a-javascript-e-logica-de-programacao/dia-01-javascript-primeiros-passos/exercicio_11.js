//Variáveis de salário
let salarioBruto = 3000
let salarioBase = salarioBruto
let salarioLiquido = 0

//Taxas de alíquotas do INSS
let aliquotaInss8 = 0.08
let aliquotaInss9 = 0.09
let aliquotaInss11 = 0.11
let aliquotaInssMax = 570.88

//Taxas de alíquotas do IR
let aliquotaIr7 = 0.075
let aliquotaIr15 = 0.15
let aliquotaIr22 = 0.225
let aliquotaIr27 = 0.275

//Valores das parcelas do INSS referente a cada alíquota
let parcelaIr7 = 142.8
let parcelaInss15 = 354.8
let parcelaIr22 = 636.13
let parcelaIr27 = 869.36

//Calculo do Salário Base descontando o INSS
if (salarioBruto <= 1556.94) {
  salarioBase -= salarioBruto * aliquotaInss8
} else if (salarioBruto <= 2594.92) {
  salarioBase -= salarioBruto * aliquotaInss9
} else if (salarioBruto <= 5189.82) {
  salarioBase -= salarioBruto * aliquotaInss11
} else {
  salarioBase -= 570.88
}

//Calculo do saário líquido descontando IR
if (salarioBase <= 1903.98) {
  salarioLiquido = salarioBase
} else if (salarioBase <= 2826.65) {
  salarioLiquido = salarioBase - (salarioBase * aliquotaIr7 - parcelaIr7)
} else if (salarioBase <= 3751.05) {
  salarioLiquido = salarioBase - (salarioBase * aliquotaIr15 - parcelaIr15)
} else if (salarioBase <= 4664.68) {
  salarioLiquido = salarioBase - (salarioBase * aliquotaIr22 - arcelaIr22)
} else {
  salarioLiquido = salarioBase - (salarioBase * aliquotaIr27 - parcelaIr27)
}

//Imprime o salário líquido
console.log(salarioLiquido)
