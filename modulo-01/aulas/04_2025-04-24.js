const prompt = require('prompt-sync')()

let numero = Number(prompt("Digite um número: "))
let contador = 1

while(contador <= 10) {
    console.log(`${numero} X ${contador} = ${numero * contador}`);
    contador++
}

// Calcular a média aritmética de número inseridos até que o usuário digite 0

let resposta = null
let soma = 0
let contadorr = -1

while (resposta != 0) {
   resposta = Number(prompt('Informe as médias: (Para calcular a média final digite 0: '))

   soma += resposta
   contadorr++
}

let mediaFinal = soma / contadorr
console.log(`A média final é: ${mediaFinal}`)