// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.
const prompt = require('prompt-sync')()
const weight = Number(prompt('Digite um peso: '))
const height = Number(prompt('Digite uma altura: '))

if (isNaN(weight) || weight <= 0 || isNaN(height) || height <= 0) {
    console.log('[ERRO] Digite somente números positivos')
} else {
    const imc = weight / (height * height)

    console.log(`Seu IMC é: ${imc.toFixed(2)}`)

    if (imc < 18.5) {
        console.log('Baixo peso')
    } else if (imc < 25) {
        console.log('Peso normal')
    } else if (imc < 30) {
        console.log('Sobrepeso')
    } else if (imc < 35) {
        console.log('Obesidade grau I')
    } else if (imc < 40) {
        console.log('Obesidade grau II')
    } else {
        console.log('Obesidade grau III')
    }
}