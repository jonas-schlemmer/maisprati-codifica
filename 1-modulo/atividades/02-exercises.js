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
    console.log(` 1 - Tabuada\n 2 - Dígitos\n 3 - xxx\n 4 - xxx\n 5 - xxx\n 6 - xxx\n 7 - xxx\n 8 - xxx\n 9 - xxx\n10 - xxx\n\n 0 - ENCERRAR PROGRAMA\n======================\n`)
    
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