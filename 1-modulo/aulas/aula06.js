/*
    Enquanto meu número não for 10, some um a ele.
*/
// let myNumber = 10

// while (myNumber > 0) {
//     console.log(myNumber--)
// }

/*
    Somar os números de 1 até 10
*/
// let total = 0
// let n = 10

// while (n > 0) {
//     total += n
//     n--
// }

// console.log(total)

/*
    Solicitem ao usuário um número e mostrem a tabuada desse número.

    Exemplo:
    1 X Número = x
    2 X Número = x
*/
// const PROMPT = require('prompt-sync')()
// let number = Number(PROMPT('Digite um número para a tabuada: '))
// let cont = 1

// while (cont <= 10) {
//     console.log(`${cont} X ${number} = ${cont * number}`)
//     cont++
// }

/*
    Solicite ao usuário que digite um valor, quando ele digitar 0, some todos os valores digitados por ele.
*/
// const prompt = require('prompt-sync')()
// let total = 0
// let numero

// do {
//     let numero = Number(prompt('Digite um número (0 para somar todos os demais): '))
//     if (numero != 0) {
//         total += numero
//     } else {
//         return console.log('Total:', total)
//     }
// } while (numero != 0)