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
    console.log(` 1 - Nota\n 2 - Idade\n 3 - Salário\n 4 - Maior Número\n 5 - Desconto\n 6 - Caixa Eletrônico\n 7 - Calculadora\n 8 - Pizza\n 9 - PENDENTE\n10 - PENDENTE\n\n 0 - ENCERRAR PROGRAMA\n======================\n`)
    
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

// =========================
// 3. Escreva um programa que pergunte o salário mensal de um funcionário e o percentual de aumento concedido pela empresa. Caso o salário seja menor que R$ 1.500,00, o percentual de aumento deve ser dobrado automaticamente. Exiba o novo salário do funcionário.
// =========================
function ex3() {
    console.clear()
    
    let salary = Number(prompt(`Digite seu salário mensal: R$ `).replace(',','.'))
    let increasePercentage = Number(prompt('Digite o percentual de aumento: ').replace(',','.'))

    if (isNaN(salary) || isNaN(increasePercentage) || salary <= 0 || increasePercentage <= 0) {
        console.log(`\n=======================================\n [ERRO] Digite somente valores válidos \n=======================================`)
        return setTimeout(() => {
            console.clear()
            ex3()
        }, 3000)
    }

    if (salary < 1500) {
        increasePercentage *= 2
    }
    
    salary += salary * (increasePercentage / 100)
    
    console.log(`\nNovo salário: R$ ${salary.toFixed(2)}`)

    menu()
}

// =========================
// 4. Crie um programa que leia três números inteiros e exiba o maior deles, sem utilizar funções prontas como Math.max().
// =========================
function ex4() {
    console.clear()
    
    const NUMBER_1 = Number(prompt('Digite um número inteiro: '))
    const NUMBER_2 = Number(prompt('Digite outro número inteiro: '))
    const NUMBER_3 = Number(prompt('Digite o último número inteiro: '))
    let biggestNumber = NUMBER_1
    
    if (!Number.isInteger(NUMBER_1) || !Number.isInteger(NUMBER_2) || !Number.isInteger(NUMBER_3)) {
        console.log(`\n=======================================\n [ERRO] Digite somente valores válidos \n=======================================`)
        return setTimeout(() => {
            console.clear()
            ex4()
        }, 3000)
    }

    if (NUMBER_2 > biggestNumber) {
        biggestNumber = NUMBER_2
    }

    if (NUMBER_3 > biggestNumber) {
        biggestNumber = NUMBER_3
    }
 
    console.log(`\nMaior número: ${biggestNumber}`)

    menu()
}

// =========================
// 5. Uma loja oferece desconto progressivo conforme o valor da compra. Faça um programa que leia o valor total de uma compra e aplique as seguintes regras: compras abaixo de R$ 100,00 não têm desconto; compras entre R$ 100,00 e R$299,99 recebem 10% de desconto; compras entre R$ 300,00 e R$ 499,99 recebem 15% de desconto; compras acima de R$ 500,00 recebem 20% de desconto. Exiba o valor original, o desconto aplicado e o valor final a pagar.
// =========================
function ex5() {
    console.clear()
    
    const TOTAL = Number(prompt('Digite o total da compra: R$ ').replace(',', '.'))
    let discount = 0
    
    if (isNaN(TOTAL) || TOTAL <= 0) {
        console.log(`\n=======================================\n [ERRO] Digite somente valores válidos \n=======================================`)
        return setTimeout(() => {
            console.clear()
            ex5()
        }, 3000)
    }

    if (TOTAL >= 500) {
        discount = 0.2
    } else if (TOTAL >= 300) {
        discount = 0.15
    } else if (TOTAL >= 100) {
        discount = 0.1
    } else {
        discount = 0
    }
 
    console.log(`\nValor Original: R$ ${TOTAL.toFixed(2)}\nDesconto: ${discount * 100}%\nTOTAL: R$ ${(TOTAL - (TOTAL * discount)).toFixed(2)}`)

    menu()
}

// =========================
// 6. Crie um programa de caixa eletrônico simplificado. O usuário informa o valor que deseja sacar (múltiplo de 10). O programa deve calcular e exibir a menor quantidade possível de cédulas de R$ 100, R$ 50, R$ 20 e R$ 10 necessárias para compor o saque.
// =========================
function ex6() {
    console.clear()
    
    const VALUE = Number(prompt('Digite o valor que deseja sacar: R$ ').replace(',', '.'))
    const NOTE_100 = 100
    const NOTE_50 = 50
    const NOTE_20 = 20
    const NOTE_10 = 10
    let remainingValue = VALUE

    if (!Number.isInteger(VALUE) || VALUE <= 0 || VALUE % 10 !== 0) {
        console.log(`\n=======================================\n [ERRO] Digite somente valores válidos \n=======================================`)
        return setTimeout(() => {
            console.clear()
            ex6()
        }, 3000)
    }

    const amountNote100 = Math.floor(remainingValue / NOTE_100)
    remainingValue %= NOTE_100

    const amountNote50 = Math.floor(remainingValue / NOTE_50)
    remainingValue %= NOTE_50

    const amountNote20 = Math.floor(remainingValue / NOTE_20)
    remainingValue %= NOTE_20

    const amountNote10 = Math.floor(remainingValue / NOTE_10)

    console.log(`\nValor do Saque: R$ ${VALUE}`)
    
    if (amountNote100 > 0) {
        console.log(`${amountNote100} nota(s) de R$ 100`)
    }

    if (amountNote50 > 0) {
        console.log(`${amountNote50} nota(s) de R$ 50`)
    }

    if (amountNote20 > 0) {
        console.log(`${amountNote20} nota(s) de R$ 20`)
    }

    if (amountNote10 > 0) {
        console.log(`${amountNote10} nota(s) de R$ 10`)
    }

    menu()
}

// =========================
// 7. Faça um programa que funcione como uma calculadora básica. Leia dois números e uma operação desejada (+, -, *, /). Usando switch case, realize a operação correspondente e exiba o resultado. Trate o caso de divisão por zero e de operação inválida.
// =========================
function ex7() {
    console.clear()
    
    const VALUE_1 = Number(prompt('Digite o primeiro valor: '))
    const OP = prompt('Digite a operação (+ - * /): ')
    const VALUE_2 = Number(prompt('Digite o segundo valor: '))

    if (isNaN(VALUE_1) || isNaN(VALUE_2)) {
        console.log(`\n=======================================\n [ERRO] Digite somente valores válidos \n=======================================`)
        return setTimeout(() => {
            console.clear()
            ex7()
        }, 3000)
    }

    switch (OP) {
        case '+':
            console.log(`\n${VALUE_1} + ${VALUE_2} = ${VALUE_1 + VALUE_2}`)
        break

        case '-':
            console.log(`\n${VALUE_1} - ${VALUE_2} = ${VALUE_1 - VALUE_2}`)
        break

        case '*':
            console.log(`\n${VALUE_1} * ${VALUE_2} = ${VALUE_1 * VALUE_2}`)
        break

        case '/':
            if (VALUE_2 == 0) {
                console.log(`\n=========================\n [ERRO] Divisão por zero \n=========================`)
                return setTimeout(() => {
                    console.clear()
                    ex7()
                }, 3000)
            }
            console.log(`\n${VALUE_1} / ${VALUE_2} = ${VALUE_1 / VALUE_2}`)
        break

        default:
            console.log(`\n==================================\n [ERRO] Digite um operador válido \n==================================`)
            return setTimeout(() => {
                console.clear()
                ex7()
            }, 3000)
        break
    }
   
    menu()
}

// =========================
// 8. Uma pizzaria cobra por tamanho e tipo de borda. Faça um programa que leia o tamanho da pizza (P, M ou G) e o tipo de borda (tradicional ou recheada) usando switch case. Os preços base são: P = R$ 25,00, M = R$ 35,00, G = R$ 45,00. A borda recheada acrescenta R$ 8,00 em qualquer tamanho. Exiba o valor total do pedido.
// =========================
function ex8() {
    console.clear()
    
    const PIZZA_SIZE = prompt('Digite o tamanho da pizza (P M G): ').toUpperCase()
    const PIZZA_CRUST = prompt('Digite o tipo de borda (Tradicional ou Recheada): ').toUpperCase()
    let total = 0
    
    switch (PIZZA_SIZE) {
        case 'P':
            total = 25
        break

        case 'M':
            total = 35
        break

        case 'G':
            total = 45
        break

        default:
            console.log(`\n=======================================\n [ERRO] Digite somente valores válidos \n=======================================`)
            return setTimeout(() => {
                console.clear()
                ex8()
            }, 3000)
        break
    }

    switch (PIZZA_CRUST) {
        case 'TRADICIONAL':
        break

        case 'RECHEADA':
            total += 8
        break

        default:
            console.log(`\n=======================================\n [ERRO] Digite somente valores válidos \n=======================================`)
            return setTimeout(() => {
                console.clear()
                ex8()
            }, 3000)
        break
    }
 
    console.log(`\nTamanho: ${PIZZA_SIZE}\nBorda: ${PIZZA_CRUST}\nTotal: R$ ${total.toFixed(2)}`)

    menu()
}