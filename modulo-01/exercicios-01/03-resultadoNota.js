// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
const prompt = require('prompt-sync')()
const grade = Number(prompt('Digite uma nota: '))

if (isNaN(grade) || grade < 0 || grade > 10) {
    console.log('[ERRO] Digite um valor entre 0 e 10')    
} else if (grade >= 7) {
    console.log('Aprovado')
} else if (grade >= 5) {
    console.log('Recuperação')
} else {
    console.log('Reprovado')
}