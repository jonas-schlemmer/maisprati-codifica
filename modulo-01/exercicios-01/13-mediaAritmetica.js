// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
const prompt = require('prompt-sync')()
let sum = 0
let count = 0

while (true) {
    const number = Number(prompt('Digite um número decimal (0 para sair): '))

    if (isNaN(number)) {
        console.log('[ERRO] Digite um número válido')
        continue
    }

    if (number === 0) {
        break
    }

    sum += number
    count++
}

if (count === 0) {
    console.log('Nenhum número válido foi digitado.')
} else {
    const media = sum / count
    console.log(`A média dos ${count} números digitados é: ${media.toFixed(2)}`)
}