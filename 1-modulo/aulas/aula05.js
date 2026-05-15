/*
    Faça um programa que solicite ao usuário a inserção de dois valores (um de cada vez).
    E mostre pra ele duas opções: 1 - Somar ou 2 - Subtrair
*/
const PROMPT = require('prompt-sync')()
const NUMBER_1 = Number(PROMPT('Digite o primeiro número: '))
const NUMBER_2 = Number(PROMPT('Digite o segundo número: '))
console.log('\n1 - Somar\n2 - Subtrair\n3 - Multiplicar\n4 - Dividir\n\n')
const OPCAO = Number(PROMPT('Escolha uma opção: '))

switch (OPCAO) {
    case 1:
        return console.log(`${NUMBER_1} + ${NUMBER_2} = ${NUMBER_1 + NUMBER_2}`)
        break
    case 2:
        return console.log(`${NUMBER_1} - ${NUMBER_2} = ${NUMBER_1 - NUMBER_2}`)
        break
    case 3:
        return console.log(`${NUMBER_1} X ${NUMBER_2} = ${NUMBER_1 * NUMBER_2}`)
        break
    case 4:
        if (NUMBER_2 == 0) {
            return console.log('[ERRO] Divisão por zero!')
        }
        return console.log(`${NUMBER_1} / ${NUMBER_2} = ${(NUMBER_1 / NUMBER_2).toFixed(2)}`)
        break
    default:
        return console.log('[ERRO] Número inválido!')
        break
}