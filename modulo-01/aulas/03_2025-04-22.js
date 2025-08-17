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