// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.
const prompt = require('prompt-sync')()
const intNumber = parseInt(prompt('Digite um número inteiro: '))

if (isNaN(intNumber) || !Number.isInteger(intNumber)) {
    return console.log('[ERRO] Digite somente números inteiros')
}

if (intNumber % 2 == 0) {
    return console.log('Par')
}

return console.log('Ímpar')