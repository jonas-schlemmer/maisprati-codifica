// console.log("Hello World!");
// console.log('Hello World!');
// console.log('Shakespeare said, "To be or not to be"');
// console.log(`Hello World!`)

// console.log(20)
// console.log(4.5)
// console.log(8)

// let nome = 'Jonas'
// console.log(nome)

// Criar duas variáveis, que recebem dois valores numéricos e calcule a média.
let number1 = 3
let number2 = 5

console.log(`A média entre ${number1} e ${number2} é: ${(number1 + number2) / 2}`)

// Verificar login e senha, o usuário só entra se estiverem os dois corretos.
let login = 'jonas'
let senha = 12345

let autenticacao = login === 'jonas' && senha === 12345

console.log(autenticacao)

//Verificar se uma pessoa pode ou não tirar a CNH. Critério: Ter mais de 18 anos.
let idade = 18

if (idade >= 18) {
    console.log("Pode tirar a CNH.")
} else if (idade >= 17) {
    console.log("Ainda não, mas está quase!")
} else {
    console.log("Você ainda não tem idade ou não digitou uma idade válida.")
}