// Importa o prompt-sync para receber entradas do usuário
const prompt = require('prompt-sync')()

function menu() {
    // Depois de 5 segundos, volta para o menu para que o usuário escolha novamente
    console.log(`\n====================\n [VOLTANDO AO MENU] \n====================`)
    setTimeout(() => {
        console.clear()
        main()
    }, 5000)
}

function main() {
    // Limpa o console
    console.clear()

    // Exibe o menu de opções
    console.log(` 1 - Produto\n 2 - Personagens\n 3 - Funcionário\n 4 - Inventário\n 5 - xxx\n 6 - xxx\n 7 - xxx\n 8 - xxx\n 9 - xxx\n10 - xxx\n11 - xxx\n12 - xxx\n\n 0 - ENCERRAR PROGRAMA\n======================\n`)
    
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
        case 12: ex12()
        break
        case 0:
            console.clear()
            console.log(`====================\n PROGRAMA ENCERRADO \n====================`)
        break
        default: 
            console.clear()
            console.log(`\n=======================================\n [ERRO] Escolha um exercício de 1 a 12 \n=======================================`)
            menu()
        break
    }
}

// Chamada da função ao rodar o programa pela primeira vez
main()

// =========================
// 1. Crie um objeto representando um produto com as propriedades: nome, preço, categoria e quantidade em estoque. Use for...in para percorrer e exibir todas as propriedades e seus valores. Em seguida, adicione uma nova propriedade desconto ao objeto e exiba o preço final calculado.
// =========================
function ex1() {
    
    console.clear()
    
    const product = {
        name: 'Notebook',
        price: 3500,
        category: 'Eletrônicos',
        stockQuantity: 10
    }

    for (const p in product) {
        console.log(`${p}: ${product[p]}`)
    }

    product.discount = 10

    const finalPrice = product.price - (product.price * product.discount / 100)

    console.log(`\nPreço original: R$ ${product.price}\nDesconto: ${product.discount}%\nPreço final: R$ ${finalPrice}`)

    menu()
}

// =========================
// 2. Crie dois objetos representando personagens de um jogo, cada um com as propriedades: nome, vida, ataque e defesa. Use for...in para exibir os atributos de cada personagem lado a lado e determine qual deles tem maior poder total (soma de vida + ataque + defesa).
// =========================
function ex2() {
    
    console.clear()

    const characterA = {
        name: 'Draven',
        health: 200,
        attack: 70,
        defense: 30
    }

    const characterB = {
        name: 'Darius',
        health: 300,
        attack: 50,
        defense: 50
    }

    console.log('PERSONAGEM A | PERSONAGEM B')
    for (const c in characterA) {
        console.log(`${c}: ${characterA[c]} | ${c}: ${characterB[c]}`)
    }
    
    const totalPowerA = characterA.health + characterA.attack + characterA.defense
    const totalPowerB = characterB.health + characterB.attack + characterB.defense

    console.log(`\nPoder total de ${characterA.name}: ${totalPowerA}\nPoder total de ${characterB.name}: ${totalPowerB}\n`)

    if (totalPowerA > totalPowerB) {
        console.log(`${characterA.name} possui o maior poder total`)
    } else if (totalPowerB > totalPowerA) {
        console.log(`${characterB.name} possui o maior poder total`)
    } else {
        console.log('Os personagens possuem o mesmo poder total')
    }

    menu()
}

// =========================
// 3. Crie um objeto representando um funcionário com nome, cargo, salário e anos de experiência. Use for...in para listar todos os dados. Com base nos anos de experiência, calcule e exiba o bônus anual: até 2 anos = 5% do salário, de 3 a 5 anos = 10%, acima de 5 anos = 15%.
// =========================
function ex3() {
    
    console.clear()

    const employee = {
        name: 'Pedro',
        role: 'Desenvolvedor',
        wage: 5000,
        experienceYears: 2
    }

    for (const e in employee) {
        console.log(`${e}: ${employee[e]}`)
    }

    let bonusPercentage = 0

    if (employee.experienceYears > 5) {
        bonusPercentage = 15
    } else if (employee.experienceYears >= 3) {
        bonusPercentage = 10
    } else {
        bonusPercentage = 5
    }

    let bonusValue = employee.wage * (bonusPercentage / 100)
    let total = employee.wage + bonusValue

    console.log(`Bônus: ${bonusPercentage}% - R$ ${bonusValue}\nTotal: ${total}`)

    menu()
}

// =========================
// 4. Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade no inventário do jogador (ex: { espada: 1, poção: 5, escudo: 2 }). Use for...in para listar o inventário completo. Permita que o usuário informe um item para usar: reduza a quantidade em 1 ou exiba "item esgotado" se for zero.
// =========================
function ex4() {
    
    console.clear()

    const item = {
        sword: 1,
        potion: 5,
        shield: 2,
        arrow: 0
    }

    for (const i in item) {
        console.log(`${i}: ${item[i]}`)
    }

    let itemChoice = prompt('Digite um item para usar: ')
    let itemFound = false

    for (const i in item) {
        if (i === itemChoice) {
            itemFound = true
            if (item[i] > 0) {
                item[i]--
                console.log(`\n${i} utilizado\n${item[i]} restante(s)`)
            } else {
                console.log(`\n======================\n [ERRO] Item esgotado \n======================`)
                return setTimeout(() => {
                    console.clear()
                    ex4()
                }, 3000)
            }
            break
        }
    }

    if (!itemFound) {
        console.log(`\n============================\n [ERRO] Item não encontrado \n============================`)
        return setTimeout(() => {
            console.clear()
            ex4()
        }, 3000)
    }

    menu()
}