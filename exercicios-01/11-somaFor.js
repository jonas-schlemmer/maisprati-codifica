// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.
const prompt = require('prompt-sync')()
let sum = 0

for (let i = 1; i <= 5; i++) {
    const number = Number(prompt(`Digite o ${i}º número: `))

    if (isNaN(number)) {
        console.log('[ERRO] Digite um número válido')
        i--
        continue
    }
    sum += number
}

console.log(`A soma total é: ${sum}`)