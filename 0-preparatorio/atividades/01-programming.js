// Importa prompt-sync para receber entradas do usuário
const prompt = require('prompt-sync')()

function main() {
    // Limpa o console
    console.clear()

    // Exibe o menu de opções
    console.log(` 1 - Par ou Ímpar\n 2 - Idade\n 3 - xxx\n 4 - xxx\n 5 - xxx\n 6 - xxx\n 7 - xxx\n 8 - xxx\n 9 - xxx\n10 - xxx\n11 - xxx\n\n 0 - ENCERRAR PROGRAMA\n======================\n`)

    option = Number(prompt(`Digite sua escolha: `))
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
        case 11: ex11()
        break
        case 0:
            console.clear()
            console.log(`====================\n PROGRAMA ENCERRADO \n====================`)
        break
        default: 
            console.clear()
            console.log(`\n=======================================\n [ERRO] Escolha um exercício de 1 a 11 \n=======================================`)
            // Depois de 4 segundos, volta para o menu para que o usuário escolha novamente
            setTimeout(() => {
                main()
            }, 3000)
        break
    }
}

// Chamada da função ao rodar o programa pela primeira vez
main()

// =========================
// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.
// =========================
function ex1() {
    console.clear()
    
    let number = Number(prompt(`Digite um número inteiro: `))

    if (Number.isInteger(number)) {
        number % 2 == 0 ? console.log(`\n${number} é par!\n`) : console.log(`\n${number} é ímpar!\n`)
            
        console.log(`====================\n [VOLTANDO AO MENU] \n====================`)
        setTimeout(() => {
            console.clear()
            main()
        }, 3000)
    } else {
        console.log(`\n========================================\n [ERRO] Digite somente números inteiros \n========================================`)
        setTimeout(() => {
            console.clear()
            ex1()
        }, 3000)
    }
}
// =========================
// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.
// =========================
function ex2() {
    console.clear()

    let age = Number(prompt(`Digite uma idade: `))

    if ((!Number.isInteger(age)) || age < 0) {
        console.log(`\n====================================================\n [ERRO] Digite somente números inteiros e positivos \n====================================================`)
        return setTimeout(() => {
            console.clear()
            ex2()
        }, 3000)
    }

    if (age >= 0 && age <= 12) {
        console.log(`\n${age} anos, criança`)
    } else if (age >= 13 && age <= 17) {
        console.log(`\n${age} anos, adolescente`)
    } else if (age >= 18 && age <= 59) {
        console.log(`\n${age} anos, adulto`)
    } else {
        console.log(`${age} anos, idoso`)
    }

    console.log(`\n====================\n [VOLTANDO AO MENU] \n====================`)
    setTimeout(() => {
        console.clear()
        main()
    }, 3000)
}
// =========================
// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
// =========================
function ex3() {
    console.clear()
    console.log("IN DEV")
    console.log("Voltando pro menu...")
    setTimeout(() => {
        main()
    }, 3000)
}
// =========================
// 4. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.
// =========================
function ex4() {
    console.clear()
    console.log("IN DEV")
    console.log("Voltando pro menu...")
    setTimeout(() => {
        main()
    }, 3000)
}
// =========================
// 5. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
// =========================
function ex5() {
    console.clear()
    console.log("IN DEV")
    console.log("Voltando pro menu...")
    setTimeout(() => {
        main()
    }, 3000)
}
// =========================
// 6. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.
// =========================
function ex6() {
    console.clear()
    console.log("IN DEV")
    console.log("Voltando pro menu...")
    setTimeout(() => {
        main()
    }, 3000)
}
// =========================
// 7. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.
// =========================
function ex7() {
    console.clear()
    console.log("IN DEV")
    console.log("Voltando pro menu...")
    setTimeout(() => {
        main()
    }, 3000)
}
// =========================
// 8. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
// =========================
function ex8() {
    console.clear()
    console.log("IN DEV")
    console.log("Voltando pro menu...")
    setTimeout(() => {
        main()
    }, 3000)
}
// =========================
// 9. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.
// =========================
function ex9() {
    console.clear()
    console.log("IN DEV")
    console.log("Voltando pro menu...")
    setTimeout(() => {
        main()
    }, 3000)
}
// =========================
// 10. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.
// =========================
function ex10() {
    console.clear()
    console.log("IN DEV")
    console.log("Voltando pro menu...")
    setTimeout(() => {
        main()
    }, 3000)
}
// =========================
// 11. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
// =========================
function ex11() {
    console.clear()
    console.log("IN DEV")
    console.log("Voltando pro menu...")
    setTimeout(() => {
        main()
    }, 3000)
}