// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.
let a = 0
let b = 1

console.log('Sequência de Fibonacci (10 primeiros números):')
console.log(a)
console.log(b)

for (let i = 3; i <= 10; i++) {
    let c = a + b
    console.log(c)
    a = b
    b = c
}