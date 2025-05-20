// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.
const prompt = require('prompt-sync')()
const age = Number(prompt('Digite uma idade: '))

if (isNaN(age) || !Number.isInteger(age) || age <= 0) {
    console.log('[ERRO] Digite somente números positivos e inteiros')
} else if (age >= 60) {
    console.log('Idoso')    
} else if (age >= 18 && age <= 59) {
    console.log('Adulto')    
} else if (age >= 13 && age <= 17) {
    console.log('Adolescente')
} else {
    console.log('Criança')
}