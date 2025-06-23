// 2. Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.
const prompt = require('prompt-sync')()

const secretNumber = Math.floor(Math.random() * 100) + 1
let tries = 0
let guess

console.log("Tente adivinhar o número entre 1 e 100.")

while (true) {
    guess = parseInt(prompt("Digite seu palpite: "), 10)
    tries++
    
    if (isNaN(guess)) {
        console.log("Por favor, digite um número válido.")
        continue
    }

    if (guess < secretNumber) {
        console.log("Mais alto!")
    } else if (guess > secretNumber) {
        console.log("Mais baixo!")
    } else {
        console.log(`Parabéns! Você acertou em ${tries} tentativa(s)!`)
        break
    }
}