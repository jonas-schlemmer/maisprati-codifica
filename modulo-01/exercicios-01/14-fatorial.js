// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
const prompt = require('prompt-sync')()
const number = Number(prompt('Digite um número positivo inteiro: '))

if (isNaN(number) || !Number.isInteger(number) || number <= 0) {
    console.log('[ERRO] Digite somente números positivos e inteiros')
} else {
    let factorial = 1
    for (let i = 1; i <= number; i++) {
        factorial *= i
    }
    console.log(`O fatorial de ${number} é: ${factorial}`)
}