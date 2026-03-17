// console.log(10 < 5)
// console.log(10 > 5)
// console.log(10 >= 5)
// console.log(10 <= 5)
// console.log(10 == "10")
// console.log(10 === "10")
// console.log(10 != "10")
// console.log(10 !== "10")

// Ponto Flutuante
// console.log(0.2 + 0.7)

// console.log((10 > 5) && (10 > 2))
// console.log((4 > 2) || (1 > 1))
// console.log((10 > 2 ) && !(1 > 0))

/* Criar 2 variáveis (Login e Senha) e printem na tela se um usuário está ou não autenticado. */

// let login = 'jonas'
// let senha = 12345

// let autenticacao = login === 'jonas' && senha === 12345

// console.log(autenticacao)

// let nota = 10

// if (nota > 6) {
//     console.log("APROVADO!")
// }

// console.log("Programa finalizado.")

// let nota = 4

// if (nota >= 6) {
//     console.log("APROVADO!")
// } else {
//     console.log("Reprovado!")
// }

// console.log("Programa finalizado.")

// let nota = 2

// if (nota >= 6) {
//     console.log("APROVADO!")
// } else if (nota >= 4) {
//     console.log("Exame!")
// } else {
//     console.log("Reprovado!")
// }

// console.log("Programa finalizado.")

/* Façam um programa que avalie se uma pessoa está apta a tirar a carta de motorista. */

// let idade = 17

// if (idade >= 18) {
//     console.log("Você está apto a fazer a prova da CNH")
// } else {
//     console.log("Você ainda não está apto.")
// }

{/* <condicao> ? <verdadeiro> : <falso> */}
// let idade = 20

// let ternario = (idade >= 18) ? "Você está apto a fazer a prova da CNH" : "Você ainda não está apto."

// console.log(ternario)

// Exerício 1: Verificar se um número é par ou ímpar.
// function evenOrOdd(number) {
//     return console.log(number % 2 == 0 ? 'Par' : 'Ímpar')
// }

// evenOrOdd(3)

// // Exercício 2: Encontrar o maior de três números.
// function biggestOfThreeNumbers(n1, n2, n3) {
//     if (n1 > n2 && n1 > n3) {
//         return console.log(`${n1} é o maior`)
//     } else if (n2 > n1 && n2 > n3) {
//         return console.log(`${n2} é o maior`)
//     } else {
//         return console.log(`${n3} é o maior`)
//     }
// }

// biggestOfThreeNumbers(-50, 2, 38)

// Exercício 3: Calculadora Simples.
// function calculate(n1, n2) {
//     return console.log(`${n1} + ${n2} = ${n1 + n2}\n${n1} - ${n2} = ${n1 - n2}\n${n1} X ${n2} = ${n1 * n2}\n${n1} / ${n2} = ${n1 / n2}`)
// }

// calculate(10, 2)

// function calculate() {
//     const prompt = require('prompt-sync')()
//     let valor1 = Number(prompt("Digite o primeiro valor: "))
//     let operacao = prompt("Informe a operação desejada ( + - * / )")
//     let valor2 = Number(prompt("Digite o segundo valor: "))
//     let resultado = 0

//     if (operacao === "+") {
//         resultado = valor1 + valor2
//     } else if (operacao === "-") {
//         resultado = valor1 - valor2
//     } else if (operacao === "*") {
//         resultado = valor1 * valor2
//     } else if (operacao === "/") {
//         if (valor2 !== 0) {
//             resultado = valor1 / valor2
//         } else {
//             resultado = undefined
//             console.log("Erro, divisão por zero.")
//         }
//     } else {
//         console.log("Erro, operação inválida.")
//         resultado = undefined
//     }

//     if (resultado !== undefined) {
//         console.log("Resultado: ", resultado)
//     }
// }

// calculate()

// let contador = 0

// while (contador <= 10) {
//     console.log(`2 X ${contador} = ${2 * contador}`)
//     contador++
// }

// Exercício 4: Encontrem valores pares de 0 a 20.
// let contador = 0

// while (contador <= 20) {
//     if (contador % 2 === 0) console.log(contador)
//     contador++
// }

// Exercício 5: Peça que o usuário digite um número, e se ele quiser parar que ele digite um valor negativo.
// const prompt = require('prompt-sync')()

// let numero = 0

// do {
//     numero = Number(prompt("Digite um número (digite um número negativo para parar): "))
//     console.log(`Valor digitado foi: ${numero}`)
// } while (numero >= 0)

// console.log("Parou")

// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }

// Exercício 6: Façam a tabuada até 10 com o for.
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} X ${j} = ${i * j}`)
    }
    console.log("")
}