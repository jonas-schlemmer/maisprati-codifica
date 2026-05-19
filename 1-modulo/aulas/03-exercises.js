const PROMPT = require('prompt-sync')()
/*
    Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.
*/
// const celsius = Number(PROMPT('Digite uma temperatura em ºC: '))
// const fahrenheit = (celsius * 1.8) + 32
// console.log(fahrenheit)

/*
    Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.
*/
// const totalEleitores = Number(PROMPT('Digite o total de eleitores: '))
// const votosBrancos = Number(PROMPT('Digite o total de votos brancos: '))
// const votosNulos = Number(PROMPT('Digite o total de votos nulos: '))
// const votosValidos = Number(PROMPT('Digite o total de votos válidos: '))

// if ((votosBrancos + votosNulos + votosValidos) > totalEleitores) {
//     return console.error('\n[ERRO] Total de votos maior que total de eleitores')
// }

// console.log(`\n\nTotal de Eleitores: ${totalEleitores}`)
// console.log(`Votos Brancos: ${((votosBrancos / totalEleitores) * 100).toFixed(2)}%`)
// console.log(`Votos Nulos: ${((votosNulos / totalEleitores) * 100).toFixed(2)}%`)
// console.log(`Votos Válidos: ${((votosValidos / totalEleitores) * 100).toFixed(2)}%`)

/*
    Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que, divididos por 11, dão resto igual a 5.
*/
// let totalEncontrado = 0
// for (let i = 1000; i < 2000; i++) {
//     if (i % 11 == 5) {
//         totalEncontrado++
//         console.log(i)
//     }
// }
// console.log('\nTotal de Números: ', totalEncontrado)

/*
    Escreva um programa para calcular a redução do tempo de vida de um fumante.
    Pergunte a quantidade de cigarros fumados por dia e quantos anos ele já fumou.
    Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
    vida um fumante perderá e exiba o total em dias.
*/

// let fumadosPorDia = Number(PROMPT('Quantos cigarros por dia? '))
// let anosFumando = Number(PROMPT('Há quantos anos você já fuma? '))

// let diasFumando = anosFumando * 365
// let totalCigarros = fumadosPorDia * diasFumando
// let minutosPerdidos = totalCigarros * 10
// let horasPerdidas = minutosPerdidos / 60
// let diasPerdidos = horasPerdidas / 24
// let anosPerdidos = diasPerdidos / 365

// console.log('\nRedução do tempo de vida')

// console.log('Cigarros fumados por dia:', fumadosPorDia)
// console.log('Anos fumando: ', anosFumando)
// console.log('Dias fumando: ', diasFumando)
// console.log('____________________________')
// console.log('Total de cigarros: ', totalCigarros)
// console.log('Minutos Perdidos: ', minutosPerdidos)
// console.log('Horas Perdidos: ', horasPerdidas.toFixed(2))
// console.log('Dias Perdidos: ', diasPerdidos.toFixed(2))
// console.log('Anos fumando: ', anosFumando.toFixed(2))

/*
    As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se 
    forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
    compradas, calcule e escreva o valor total da compra.
// */
// const quantidade = Number(PROMPT('Quantas maçãs? '))
// let valorMaca = 0.30

// if (quantidade >= 12) {
//     valorMaca = 0.25
// }

// return console.log('Total: R$ ' + (valorMaca * quantidade).toFixed(2))

/*
    Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
    e escreve-los em ordem crescente
*/
// const n1 = Number(PROMPT('Digite o primeiro número: '))
// const n2 = Number(PROMPT('Digite o segundo número: '))

// if (n1 == n2) {
//     return console.error('[ERRO] Números iguais')
// } else if (n1 < n2) {
//     return console.log(n1, n2)
// } else {
//     return console.log(n2, n1)
// }

/*
    Escreva um algoritmo que percorra o array e calcule:

    A soma de todos os elementos
    A média dos elementos
    O maior valor encontrado
    O menor valor encontrado
*/

const arr = [2, 1, 6, 4, 7, 8]
let soma = 0
let media
let maior
let menor

arr.forEach(e => {
    soma += e
    media = soma / arr.length
    
    if (e > arr[0]) {
        maior = e
    } else {
        menor = e
    }
})

console.log(`
    Soma: ${soma}
    Média: ${media.toFixed(2)}
    Maior: ${maior}
    Menor: ${menor}
`)