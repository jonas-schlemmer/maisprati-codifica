// Importa o prompt-sync para receber entradas do usuário
const prompt = require('prompt-sync')()

function menu() {
    // Depois de 3 segundos, volta para o menu para que o usuário escolha novamente
    console.log(`\n====================\n [VOLTANDO AO MENU] \n====================`)
    setTimeout(() => {
        console.clear()
        main()
    }, 3000)
}

function main() {
    // Limpa o console
    console.clear()

    // Exibe o menu de opções
    console.log(` 1 - Tabuada\n 2 - Dígitos\n 3 - Fibonacci\n 4 - Senha\n 5 - xxx\n 6 - xxx\n 7 - xxx\n 8 - xxx\n 9 - xxx\n10 - xxx\n\n 0 - ENCERRAR PROGRAMA\n======================\n`)
    
    let option = Number(prompt(`Digite sua escolha: `))
    switch (option) {
        case 1: ex1()
        break
        case 2: ex2()
        break
        case 3: ex3()
        break
        case 4: ex4()
        break
        case 5: ex5()
        break
        case 6: ex6()
        break
        case 7: ex7()
        break
        case 8: ex8()
        break
        case 9: ex9()
        break
        case 10: ex10()
        break
        case 0:
            console.clear()
            console.log(`====================\n PROGRAMA ENCERRADO \n====================`)
        break
        default: 
            console.clear()
            console.log(`\n=======================================\n [ERRO] Escolha um exercício de 1 a 10 \n=======================================`)
            menu()
        break
    }
}

// Chamada da função ao rodar o programa pela primeira vez
main()

// =========================
// 1. Peça ao usuário um número e exiba sua tabuada completa (de 1 a 10) usando um laço for. Em seguida, pergunte se ele deseja ver outra tabuada e repita enquanto a resposta for "sim".
// =========================
function ex1() {
    
    let answer = ''
    
    do {
        console.clear()

        let number = Number(prompt(`Digite um número para ver sua tabuada: `))

        if (isNaN(number)) {
            console.log(`\n===============================\n [ERRO] Digite somente números \n===============================`)
            return setTimeout(() => {
                console.clear()
                ex1()
            }, 3000)
        }

        console.log(`\nTabuada do ${number}:\n`)

        for (let i = 1; i <= 10; i++) {
            console.log(`${number} X ${i} = ${number * i}`)
        }

        console.log('\n')
        answer = prompt('Deseja ver outra tabuada? ').toUpperCase()

    } while (answer === 'SIM')
    
    menu()
}

// =========================
// 2. Leia um número inteiro positivo e, usando um laço while, calcule e exiba quantos dígitos ele possui. Trate o caso do número zero (que possui 1 dígito).
// =========================
function ex2() {
    
    console.clear()

    let number = Number(prompt(`Digite um número inteiro positivo: `))
    let total = 0

    if (!Number.isInteger(number) || number < 0) {
        console.log(`\n===============================\n [ERRO] Digite somente números inteiros e positivos\n===============================`)
        return setTimeout(() => {
            console.clear()
            ex2()
        }, 3000)
    }

    let status = number.toString().split('')
    while (total != status.length) { 
        total++
    }
    
    console.log(`Total de Dígitos: ${total}`)
    
    menu()
}

// =========================
// 3. Peça ao usuário quantos termos da sequência de Fibonacci deseja ver e exiba-os usando um laço for. Exemplo: 1, 1, 2, 3, 5, 8, 13...
// =========================
function ex3() {
    
    console.clear()

    let number = Number(prompt(`Digite quantos termos da sequência de Fibonacci deseja ver: `))
    let currentNumber = 1
    let previousNumber = 0
    let updatedNumber

    if (!Number.isInteger(number) || number < 0) {
        console.log(`\n===============================\n [ERRO] Digite somente números inteiros e positivos\n===============================`)
        return setTimeout(() => {
            console.clear()
            ex3()
        }, 3000)
    }

    for (let i = 1; i <= number; i++) {
        console.log(previousNumber)
        updatedNumber = currentNumber + previousNumber
        previousNumber = currentNumber
        currentNumber = updatedNumber
    }
    
    menu()
}

// =========================
// 4. Defina uma senha fixa no código. Peça ao usuário que a digite e, usando um laço do...while, permita no máximo 3 tentativas. Exiba se ele acertou ou se esgotou as tentativas.
// =========================
function ex4() {
    
    console.clear()

    let password = 'Inter1'
    let passwordInput
    let remainingAttempts = 3
    
    do {
        if (remainingAttempts === 0) {
            console.clear()
            console.log(`\nUsuário bloqueado!`)
            return menu()
        } else {
            passwordInput = prompt(`Digite a senha: `)

            if (password !== passwordInput) {
                --remainingAttempts
                console.clear()
                console.log(`\nSenha inválida\nTentativas restantes: ${remainingAttempts}\n`)
            } else {
                console.clear()
                console.log(`\nAcesso liberado!`)
                return menu()
            }
        }
    } while (password !== passwordInput)
}