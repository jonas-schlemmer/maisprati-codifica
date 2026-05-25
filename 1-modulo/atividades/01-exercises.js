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
    console.log(` 1 - Nota\n 2 - Idade\n 3 - PENDENTE\n 4 - PENDENTE\n 5 - PENDENTE\n 6 - PENDENTE\n 7 - PENDENTE\n 8 - PENDENTE\n 9 - PENDENTE\n10 - PENDENTE\n\n 0 - ENCERRAR PROGRAMA\n======================\n`)
    
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
// 1. Escreva um programa que pergunte a nota de um aluno (de 0 a 10). Exiba se o aluno foi Aprovado (nota maior ou igual a 7), em Recuperação (nota entre 5 e 6.9) ou Reprovado (nota menor que 5).
// =========================
function ex1() {
    console.clear()
    
    const GRADE = Number(prompt(`Digite uma nota entre 0 e 10: `).replace(',','.'))
    let status = ''

    if (isNaN(GRADE) || GRADE < 0 || GRADE > 10) {
        console.log(`\n=========================================\n [ERRO] Digite somente números positivos \n=========================================`)
        return setTimeout(() => {
            console.clear()
            ex1()
        }, 3000)
    }

    if (GRADE >= 7) {
        status = 'Aprovado'
    } else if (GRADE >= 5) {
        status = 'Recuperação'
    } else {
        status = 'Reprovado'
    }
    
    console.log(`\nNota ${GRADE} - ${status}`)
    menu()
}

// =========================
// 2. Crie um programa que pergunte o ano de nascimento de uma pessoa e calcule sua idade. Com base na idade, exiba se ela é criança (até 12 anos), adolescente (de 13 a 17 anos), adulta (de 18 a 59 anos) ou idosa (60 anos ou mais).
// =========================
function ex2() {
    console.clear()

    let birthYear = Number(prompt(`Digite um ano de nascimento: `))
    const CURRENT_YEAR = new Date().getFullYear()
    const AGE = CURRENT_YEAR - birthYear
    let status = ''

    if (!Number.isInteger(birthYear) || birthYear < 1900 || birthYear > CURRENT_YEAR) {
        console.log(`\n===========================================\n [ERRO] Digite um ano de nascimento válido \n===========================================`)
        return setTimeout(() => {
            console.clear()
            ex2()
        }, 3000)
    }

    if (AGE >= 60) {
        status = 'Idoso(a)'
    } else if (AGE >= 18) {
        status = 'Adulto(a)'
    } else if (AGE >= 13) {
        status = 'Adolescente'
    } else {
        status = 'Criança'
    }

    if (AGE == 0) {
        console.log(`\nRecém nascido(a)`) 
    } else if (AGE == 1) {
        console.log(`\n${AGE} ano - ${status}`) 
    } else {
        console.log(`\n${AGE} anos - ${status}`)
    }

    menu()
}