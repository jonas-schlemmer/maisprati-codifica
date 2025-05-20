// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
const prompt = require('prompt-sync')()
let applePriceUnit = 0.30
const amount = Number(prompt('Digite quantas maçãs deseja: '))

if (isNaN(amount) || !Number.isInteger(amount) || amount <= 0) {
    console.log('[ERRO] Digite somente números positivos e inteiros')
} else {
    if (amount >= 12) {
        applePriceUnit = 0.25
    }

    const total = applePriceUnit * amount

    console.log(`Valor unitário: R$ ${applePriceUnit.toFixed(2)}`)
    console.log(`Quantidade: ${amount}`)
    console.log(`Valor total: R$ ${total.toFixed(2)}`)
}