console.log('A gíria "mané" é muito utilizada no RJ')

let emocao = "feliz"
console.log(`Jonas Schlemmer é ${emocao}`)

console.log(typeof("Eu sou uma String!"))
console.log(typeof(1.5))

let name = 'Jonas'
console.log(name)

var anothername = "Schlemmer"
console.log(anothername)

const CITY = "Sapiranga"
console.log(CITY)

let test = null
console.log(test)

let counter = 1
counter++
console.log(counter)

// Exercício 1: Verificar se um número é par ou ímpar
let numeroParImpar = 3
numeroParImpar % 2 === 0 ? console.log("Par") : console.log("Ímpar")

// Exercício 2: Encontrar o maior entre três números
let num1 = 6, num2 = 5, num3 = 7, maiorNumero

if ((num1 >= num2) && (num1 >= num3)) {
    maiorNumero = num1
} else if ((num2 >= num1) && (num2 >= num3)) {
    maiorNumero = num2
} else {
    maiorNumero = num3
}

console.log(`O número ${maiorNumero} é o maior!`)