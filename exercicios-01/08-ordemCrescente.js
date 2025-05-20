// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.
const prompt = require('prompt-sync')()
const number1 = Number(prompt('Digite um número: '))
let number2

if (isNaN(number1)) {
    console.log('[ERRO] Digite somente números')
} else {
    do {
        number2 = Number(prompt('Digite um segundo número (diferente do primeiro): '))

        if (isNaN(number2)) {
            console.log('[ERRO] Digite somente números')
        } else if (number2 === number1) {
            console.log('[ERRO] Os números não podem ser iguais')
        }
    } while (isNaN(number2) || number2 === number1)
}

number1 > number2 ? console.log(`${number2}\n${number1}`) : console.log(`${number1}\n${number2}`)