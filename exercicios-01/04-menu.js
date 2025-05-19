// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.
const prompt = require('prompt-sync')()
let option = undefined
let goalsInt = 0
let goalsGre = 0

do {    
    console.log('\n1 - Internacional\n2 - Grêmio\n3 - Sair do Programa')
    option = parseInt(prompt('Quem fez gol? '))
    
    if (isNaN(option) || !Number.isInteger(option) || option <= 0) {
        console.log('\n[ERRO] Digite somente números positivos e inteiros')
        continue
    }

    switch(option) {
        case 1: 
            console.log('\nGlória do desporto nacional!')
            goalsInt++
            break
        case 2:
            console.log('\nAté a pé nós iremos!')
            goalsGre++
            break
        case 3:
            console.log(`\n\nINT ${goalsInt} X ${goalsGre} GRE\n`)   
            break                
        default:
            console.log('\n[ERRO] Opção inválida')
    }
} while (option != 3)