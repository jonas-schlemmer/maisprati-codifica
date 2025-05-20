// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
const prompt = require('prompt-sync')()
const number = Number(prompt('Digite um número inteiro: '))

if (isNaN(number) || !Number.isInteger(number)) {
    console.log('[ERRO] Digite somente números e inteiros')
} else {
    for (let i = 0; i < 10; i++) {
        console.log(`${i + 1}: ${number}`)
    }
}