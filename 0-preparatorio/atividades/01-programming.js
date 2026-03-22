// Importa prompt-sync para receber entradas do usuário
const prompt = require('prompt-sync')()

function menu() {
    // Depois de 3 segundos, volta para o menu para que o usuário escolha novamente
    console.log(`====================\n [VOLTANDO AO MENU] \n====================`)
    setTimeout(() => {
        console.clear()
        main()
    }, 3000)
}

function main() {
    // Limpa o console
    console.clear()

    // Exibe o menu de opções
    console.log(` 1 - Par ou Ímpar\n 2 - Idade\n 3 - Nota\n 4 - IMC\n 5 - Maçãs\n 6 - Ordem crescente\n 7 - Contagem regressiva\n 8 - Repetir número\n 9 - Soma de 5 números\n10 - Tabuada\n11 - Média aritmética\n\n 0 - ENCERRAR PROGRAMA\n======================\n`)
    
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
        case 11: ex11()
        break
        case 0:
            console.clear()
            console.log(`====================\n PROGRAMA ENCERRADO \n====================`)
        break
        default: 
            console.clear()
            console.log(`\n=======================================\n [ERRO] Escolha um exercício de 1 a 11 \n=======================================`)
            menu()
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
        menu()
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

    if ((!Number.isInteger(age)) || (age < 0)) {
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
        console.log(`\n${age} anos, idoso`)
    }

    menu()
}
// =========================
// 3. Implemente um programa que recebe uma nota de 0 a 10 que classifique como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
// =========================
function ex3() {
    console.clear()

    let grade = Number(prompt(`Digite uma nota: `))

    if ((grade < 0) || (grade > 10) || (Number.isNaN(grade))) {
        console.log(`\n============================================\n [ERRO] Digite somente números entre 0 e 10\n============================================`)
        return setTimeout(() => {
            console.clear()
            ex3()
        }, 3000)
    }

    if (grade >= 7) {
        console.log(`\nNota ${grade} - Aprovado!`)
    } else if ((grade >= 5) && (grade <= 6.9)) {
        console.log(`\nNota ${grade} - Recuperação`)
    } else {
        console.log(`\nNota ${grade} - Reprovado...`)
    }

    menu()
}
// =========================
// 4. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.
// =========================
function ex4() {
    console.clear()

    let altura = Number(prompt(`Digite uma altura em metros: `).replace(',','.'))
    let peso = Number(prompt(`Digite um peso: `))
    const IMC = (peso / (altura * altura))
    
    if ((altura <= 0) || (peso <= 0) || (Number.isNaN(altura)) || (Number.isNaN(peso))) {
        console.log(`\n=========================================\n [ERRO] Digite somente números positivos \n=========================================`)
        return setTimeout(() => {
            console.clear()
            ex4()
        }, 3000)
    } else {
        if (IMC >= 30) {
            console.log(`\nIMC: ${IMC.toFixed(2)} - Obesidade`)
        } else if (IMC >= 25) {
            console.log(`\nIMC: ${IMC.toFixed(2)} - Sobrepeso`)
        } else if (IMC >= 18.5) {
            console.log(`\nIMC: ${IMC.toFixed(2)} - Peso normal`)
        } else {
            console.log(`\nIMC: ${IMC.toFixed(2)} - Baixo peso`)
        }
    }

    menu()
}
// =========================
// 5. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
// =========================
function ex5() {
    console.clear()
    
    let applePrice = 0.3
    let discount = 0.05
    let amount = Number(prompt(`Digite a quantidade de maçãs: `))

    if ((!Number.isInteger(amount)) || amount <= 0) {
        console.log(`\n====================================================\n [ERRO] Digite somente números inteiros e positivos \n====================================================`)
        return setTimeout(() => {
            console.clear()
            ex5()
        }, 3000)
    }

    if (amount >= 12) {
        console.log(`\n${amount} maçãs - Total: R$ ${((amount * (applePrice - discount)).toFixed(2)).replace('.',',')}`)
    } else {
        console.log(`\n${amount} maçãs - Total: R$ ${((amount * applePrice).toFixed(2)).replace('.',',')}`)
    }

    menu()
}
// =========================
// 6. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.
// =========================
function ex6() {
    console.clear()
    
    let number1 = Number(prompt(`Digite um número: `))
    let number2 = Number(prompt(`Digite outro número diferente do anterior: `))

    if (Number.isNaN(number1) || Number.isNaN(number2)) {
        console.log(`\n===============================\n [ERRO] Digite somente números \n===============================`)
        return setTimeout(() => {
            console.clear()
            ex6()
        }, 3000)
    }

    if (number1 === number2) {
        console.log(`\n==================================\n [ERRO] Digite números diferentes \n==================================`)
        return setTimeout(() => {
            console.clear()
            ex6()
        }, 3000)
    } else {
        if (number1 > number2) {
            console.log(`\nValores: ${number2} e ${number1}`)
        } else {
            console.log(`\nValores: ${number1} e ${number2}`)
        }
    }

    menu()
}
// =========================
// 7. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.
// =========================
function ex7() {
    console.clear()
    
    for (let i = 10; i >= 1; i--) {
        console.log(i)
    }

    menu()
}
// =========================
// 8. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
// =========================
function ex8() {
    console.clear()
    
    let number = Number(prompt(`Digite um número inteiro: `))
    let counter = 1
    
    if (Number.isNaN(number) || (!Number.isInteger(number))) {
        console.log(`\n========================================\n [ERRO] Digite somente números inteiros \n========================================`)
        return setTimeout(() => {
            console.clear()
            ex8()
        }, 3000)
    }

    do {
        console.log(number)
        counter++
    } while (counter <= 10)

    menu()
}
// =========================
// 9. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.
// =========================
function ex9() {
    console.clear()
    
    let total = 0
    let value = 0

    for (let i = 1; i <= 5; i++) {
        value = Number(prompt(`Digite o ${i}º número: `))
        if (Number.isNaN(value)) {
            console.log(`\n===============================\n [ERRO] Digite somente números \n===============================`)
            return setTimeout(() => {
                console.clear()
                ex9()
            }, 3000)
        } else {
            total += value
        }
    }

    console.log(`\nTotal: ${total}`)

    menu()
}
// =========================
// 10. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.
// =========================
function ex10() {
    console.clear()
    
    const number = Number(prompt(`Digite um número de 1 a 10 para ver sua tabuada: `))

    if ((!Number.isInteger(number)) || (number < 1) || (number > 10)) {
        console.log(`\n=========================================================\n [ERRO] Digite somente números inteiros, positivos e de 1 a 10 \n============================================================`)
        return setTimeout(() => {
            console.clear()
            ex10()
        }, 3000)
    } else {
        console.log(``)
        for (let i = 1; i <= 10; i++) {
            console.log(`${number} X ${i} = ${number * i}`)
        }
    }

    menu()
}
// =========================
// 11. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
// =========================
function ex11() {
    console.clear()
    
    let total = 0
    let amount = 0
    let input

    do {
        input = prompt(`Digite um número decimal (0 para sair): `)

        input = input.replace(',', '.')

        let number = Number(input)

        if (isNaN(number)) {
            console.log(`\n=======================================\n [ERRO] Digite somente números válidos \n=======================================`)
            return setTimeout(() => {
                console.clear()
                ex11()
            }, 3000)
        }

        if (number === 0) {
            if (amount === 0) {
                console.log(`\n==========================================\n [ERRO] Nenhum número válido foi digitado \n==========================================`)
            } else {
                console.log(`\nMédia: ${(total / amount).toFixed(2)}`)
            }
            return menu()
        }

        if (!input.includes('.')) {
            console.log(`\n========================================\n [ERRO] Digite somente números decimais \n========================================`)
            return setTimeout(() => {
                console.clear()
                ex11()
            }, 3000)
        }

        total += number
        amount++

    } while (true)
}