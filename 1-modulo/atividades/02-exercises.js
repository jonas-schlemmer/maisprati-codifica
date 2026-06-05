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
    console.log(` 1 - Tabuada\n 2 - Dígitos\n 3 - Fibonacci\n 4 - Senha\n 5 - Números Primos\n 6 - Notas\n 7 - Carrinho de Compras\n 8 - Palavra Invertida\n 9 - xxx\n10 - xxx\n\n 0 - ENCERRAR PROGRAMA\n======================\n`)
    
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

    const PASSWORD = 'Inter1'
    let passwordInput
    let remainingAttempts = 3
    
    do {
        if (remainingAttempts === 0) {
            console.clear()
            console.log(`\nUsuário bloqueado!`)
            return menu()
        } else {
            passwordInput = prompt(`Digite a senha: `)

            if (PASSWORD !== passwordInput) {
                --remainingAttempts
                console.clear()
                console.log(`\nSenha inválida\nTentativas restantes: ${remainingAttempts}\n`)
            } else {
                console.clear()
                console.log(`\nAcesso liberado!`)
                return menu()
            }
        }
    } while (PASSWORD !== passwordInput)
}

// =========================
// 5. Leia um número N e exiba todos os números primos entre 2 e N usando laços aninhados (for dentro de for). Exiba também a quantidade total de primos encontrados.
// =========================
function ex5() {
    
    console.clear()

    let number = Number(prompt(`Digite um número inteiro e positivo maior ou igual a 2: `))
    let totalPrimeNumbers = 0

    if (!Number.isInteger(number) || number < 2) {
        console.log(`\n==========================================================================\n [ERRO] Digite somente números inteiros e positivos maiores ou iguais a 2\n==========================================================================`)
        return setTimeout(() => {
            console.clear()
            ex5()
        }, 3000)
    }

    console.log(`\nNúmeros primos entre 2 e ${number}:\n`)

    for (let i = 2; i <= number; i++) {
        let divisors = 0

        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                divisors++
            }
        }

        if (divisors == 2) {
            console.log(`Número Primo: ${i}`)
            totalPrimeNumbers++
        }
    }

    console.log(`\nTotal de Números Primos: ${totalPrimeNumbers}`)
    
    menu()
}

// =========================
// 6. Crie um array e leia via laço o nome e a nota de 5 alunos. Ao final, exiba: a média da turma, o nome do aluno com maior nota e o nome do aluno com menor nota. Não use funções prontas como Math.max().
// =========================
function ex6() {
    
    console.clear()

    let arrayStudents = []
    let classAverage = 0
    let highestGrade
    let lowestGrade

    for (let i = 0; i < 5; i++) {
        let name = prompt(`Digite o nome do aluno: `)
        let grade = Number(prompt('Digite sua nota: '))

        if (isNaN(grade) || grade < 0 || grade > 10) {
            console.log(`\n=======================================\n [ERRO] Digite somente valores válidos \n=======================================`)
            return setTimeout(() => {
                console.clear()
                ex6()
            }, 3000)
        }

        arrayStudents.push([name, grade])

        classAverage += grade

        if (highestGrade == undefined || lowestGrade == undefined) {
            highestGrade = arrayStudents[0]
            lowestGrade = arrayStudents[0]
        }

        if (grade > highestGrade[1]) {
            highestGrade = arrayStudents[i]
        }

        if (grade < lowestGrade[1]) {
            lowestGrade = arrayStudents[i]
        }
    }

    classAverage /= arrayStudents.length

    console.log(`\nMédia da turma: ${classAverage.toFixed(2)}\nAluno com maior nota: ${highestGrade[0]}\nAluno com menor nota: ${lowestGrade[0]}`)

    menu()
}

// =========================
// 7. Simule um carrinho de compras: leia nomes e preços de produtos em um laço até o usuário digitar "sair". Armazene em arrays. Ao final, liste todos os itens, exiba o subtotal, aplique 10% de desconto se houver mais de 3 itens e mostre o total a pagar.
// =========================
function ex7() {
    
    console.clear()
    
    let cartProducts = []
    let product
    let cartPrices = []
    let price
    let subtotal = 0
    let total = 0
    let discount = 0

    do {
        product = prompt('Digite o nome do produto: ').toUpperCase()

        if (product === 'SAIR') break

        price = Number(prompt('Digite o valor: R$ '))

        if (!isNaN(product) || isNaN(price) || price < 0) {
            console.log(`\n=======================================\n [ERRO] Digite somente valores válidos \n=======================================`)
            return setTimeout(() => {
                console.clear()
                ex7()
            }, 3000)
        }
       
        cartProducts.push(product)
        cartPrices.push(price)
    
    } while (product !== 'SAIR')
    
    console.log('\n')

    cartProducts.forEach((product) => {
        console.log(product)
    })

    cartPrices.forEach((price) => {
        subtotal += price
    })

    if (cartProducts.length > 3) {
        discount = subtotal * 0.1
    }

    total = subtotal - discount

    console.log(`\n=====================\n SUBTOTAL: R$ ${subtotal.toFixed(2)}\n DESCONTO: R$ ${discount.toFixed(2)}\n TOTAL:    R$ ${total.toFixed(2)}\n=====================`)

    menu()
}

// =========================
// 8. Leia uma palavra, armazene seus caracteres em um array e, percorrendo-o de trás para frente com um laço for, monte a palavra invertida. Exiba a palavra original, a invertida e informe se ela é um palíndromo.
// =========================
function ex8() {
    
    console.clear()

    const WORD = prompt('Digite uma palavra: ').toUpperCase()

    if (!WORD) {
        console.log(`\n=======================================\n [ERRO] Digite somente valores válidos \n=======================================`)
        return setTimeout(() => {
            console.clear()
            ex8()
        }, 3000)
    }
   
    let chars = WORD.split('')
    let reverseWord = ''

    for (let i = chars.length - 1; i >= 0; i--) {
        reverseWord += chars[i]
    }

    console.log(`\nPalavra original: ${WORD}`)
    console.log(`Palavra invertida: ${reverseWord}`)

    if (WORD === reverseWord) {
        console.log('\nÉ um palíndromo!')
    } else {
        console.log('\nNão é um palíndromo!')
    }

    menu()
}