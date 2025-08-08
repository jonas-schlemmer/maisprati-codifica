// console.log("Hello World!")
// console.log('A gíria "mané" é muito utilizada no RJ')

// let emocao = "feliz"
// console.log(`Jonas Schlemmer é ${emocao}`)

// console.log(typeof("Eu sou uma String!"))
// console.log(typeof(1.5))

//////

// let name = 'Jonas'
// console.log(name)

// let anothername = "Schlemmer"
// console.log(anothername)

// const CITY = "Sapiranga"
// console.log(CITY)

// let test = null
// console.log(test)

//////

// let num1 = 9, num2 = 3
// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)

//////

// let counter = 1
// counter+= 2
// console.log(counter)

// 60 <= 60 ? console.log("SIM") : console.log("NÃO")

//////

// Exercício 1: Verificar se um número é par ou ímpar
// let numeroParImpar = 3
// numeroParImpar % 2 === 0 ? console.log("Par") : console.log("Ímpar") 

// Exercício 2: Encontrar o maior entre três números
// let num1 = 6, num2 = 5, num3 = 7, maiorNumero

// if ((num1 >= num2) && (num1 >= num3)) {
//     maiorNumero = num1
// } else if ((num2 >= num1) && (num2 >= num3)) {
//     maiorNumero = num2
// } else {
//     maiorNumero = num3
// }

// console.log(`O número ${maiorNumero} é o maior!`)

// Exercício 3: Faça uma calculadora simples utilizando a entrada do usuário
const prompt = require('prompt-sync')()

let valor1 = Number(prompt("Insira o primeiro valor: "))
let op = prompt("Informe a operação desejada (+ - * /): ")
let valor2 = Number(prompt("Insira o segundo valor: "))
let resultado = 0

// if (op === '+') {
//     resultado = valor1 + valor2
// } else if (op === '-') {
//     resultado = valor1 - valor2
// } else if (op === '*') {
//     resultado = valor1 * valor2
// } else if (op === '/') {
//     if (valor2 !== 0) {
//         resultado = valor1 / valor2
//     } else {
//         console.log("Erro: Divisão por zero")
//         resultado = undefined
//     }
// } else {
//     console.log("Operação Inválida!")
//     resultado = undefined
// }

// if (resultado !== undefined) {
//     console.log("Resultado: ", resultado)
// }

//////

// let opcao = 'opcao1'

// switch(opcao) {
//     case 'opcao1':
//         console.log('Você selecionou a primeira opção');
//         break
//     case 2:
//         console.log('Você selecionou a segunda opção');
//         break
//     default:
//         console.log('Você não escolheu nenhuma opção válida!');
//         break
// }

switch(op) {
    case '+':
        resultado = valor1 + valor2
        break
    case '-':
        resultado = valor1 - valor2
        break
    case '*':
        resultado = valor1 * valor2
        break
    case (op == '/' && valor2 == 0):
        console.log('Erro: divisão por zero');
        resultado = undefined
        break
    case '/':
        resultado = valor1 / valor2
        break
    default:
        console.log('Opção inválida!');
        break       
}

if (resultado !== undefined) {
    console.log("Resultado: ", resultado)
}

// Exercício 2: Verificar se um número é positivo, negativo ou zero

let valor = Number(prompt("Digite um valor: "))

if (valor < 0) {
    console.log('Número negativo');
} else if (valor > 0) {
    console.log('Número positivo');
} else {
    console.log('Zero!');
}

// Exercício 3: Verificar se um ano é bissexto


// Exercício 4: Definir faixas etárias para crianças, adultos e adolescentes com switch e apresentar na tela se a pessoa que informou a idade está em uma e qual a faixa etária

// 0 - 11 crianca / 12 - 19 adolescente / 20+ adulto

