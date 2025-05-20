// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.
const prompt = require('prompt-sync')()
const number = Number(prompt('Digite um número: '))

if (isNaN(number) || !Number.isInteger(number) || number <= 0) {
    console.log('[ERRO] Digite somente números positivos e inteiros')
} else {
    console.log(`\nTabuada do ${number}:\n`)

    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`)
    }
}