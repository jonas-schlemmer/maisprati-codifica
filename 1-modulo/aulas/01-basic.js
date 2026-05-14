// console.log("Hello, World!")
// console.log('Hello, World!')
// console.log('Shakespeare said, "To be or not to be"')
// console.log(`Hello World!`)
// console.log('Meu nome é Jonas e eu tenho', 27, 'anos.')

// console.log(20)
// console.log(4.5)
// console.log(8)

// console.log(false)
// console.log(null)
// console.log(undefined)
// console.log(typeof "olá")
// console.log(typeof 40)
// console.log(typeof true)

// let nome = 'Jonas'
// console.log(nome)
// nome = 'Schlemmer'
// console.log(nome)

// console.log("Meu nome é " + nome)
// console.log(`Meu nome é ${nome}`)

// const localNascimento = 'Esteio'

// let a = 10
// let b = 5

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(a % b)
// console.log(a ** b)
// console.log((a + b) / 2)
// console.log("10" + b)

// let placar = 0
// placar += 2
// console.log(placar)

// let numero = "10"
// console.log(Number("abc") + 5)

/*
    Criar duas variáveis, que recebem dois valores numéricos e calcule a média.
*/
// let number1 = 3
// let number2 = 5

// console.log(`A média entre ${number1} e ${number2} é: ${(number1 + number2) / 2}`)

// console.log(Math.floor(Math.random() * 10)) // Arredonda pra baixo
// console.log(Math.round(Math.random() * 10)) // Arredonda pro número inteiro mais próximo
// console.log(Math.ceil(Math.random() * 10)) // Arredonda pra cima
// console.log(Math.pow(2, 8)) // Exponenciação
// console.log(Math.abs(-50)) // Remove o sinal negativo
// console.log(Math.sqrt(81)) // Raiz quadrada

// const agora = new Date()
// console.log(agora.toString())
// console.log("Ano: " + agora.getFullYear())
// console.log("Mês: " + agora.getMonth()) // Começa em zero
// console.log("Dia: " + agora.getDate())
// console.log("Horas: " + agora.getHours())
// console.log("Minutos: " + agora.getMinutes())
// console.log("Segundos: " + agora.getSeconds())
// console.log(agora.toLocaleDateString("pt-BR"))

// let frase = "Senhor dos Anéis é fantástico"
// console.log(frase.toUpperCase())
// console.log(frase.toLowerCase())

// let a = 10
// let b = 5
// console.log((a > b) || (b == a))

/*
    Verificar Login e Senha, o usuário só entra se estiverem os dois corretos.
*/
// let login = 'jonas'
// let senha = 12345

// let autenticacao = login === 'jonas' && senha === 12345

// console.log(autenticacao)

/*
    Verificar se uma pessoa pode ou não tirar a CNH. Critério: Ter mais de 18 anos.
*/
// let idade = 18

// if (idade >= 18) {
//     console.log("Pode tirar a CNH.")
// } else if (idade >= 17) {
//     console.log("Ainda não, mas está quase!")
// } else {
//     console.log("Você ainda não tem idade ou não digitou uma idade válida.")
// }

// const prompt = require('prompt-sync')()

// let nome = prompt('Informe seu nome: ')
// console.log('Seu nome é', nome)