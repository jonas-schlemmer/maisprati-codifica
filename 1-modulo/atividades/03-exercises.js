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
    console.log(` 1 - Produto\n 2 - Personagens\n 3 - Funcionário\n 4 - Inventário\n 5 - Orçamento\n 6 - Músicas\n 7 - Notas\n 8 - Estoque\n 9 - Contato\n10 - Histórico\n11 - Clínica\n12 - Lista\n\n 0 - ENCERRAR PROGRAMA\n======================\n`)
    
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

// =========================
// 5. Crie um objeto representando o orçamento mensal de uma pessoa, com categorias como alimentação, transporte, lazer e saúde, cada uma com valor planejado e valor gasto. Use for...in para percorrer as categorias e exibir se cada uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês.
// =========================
function ex5() {

    console.clear()

    const budget = {
        food: {
            planned: 800,
            spent: 750
        },
        transport: {
            planned: 300,
            spent: 350
        },
        leisure: {
            planned: 500,
            spent: 400
        },
        health: {
            planned: 200,
            spent: 250
        }
    }

    let totalPlanned = 0
    let totalSpent = 0

    for (const b in budget) {

        const planned = budget[b].planned
        const spent = budget[b].spent

        totalPlanned += planned
        totalSpent += spent

        console.log(`${b}: Planejado R$ ${planned} | Gasto R$ ${spent}`)

        if (spent <= planned) {
            console.log(`${b}: Planejado R$ ${planned} | Gasto R$ ${spent} | Dentro do orçamento`)
        } else {
            console.log(`${b}: Planejado R$ ${planned} | Gasto R$ ${spent} | Acima do orçamento`)
        }
    }

    const balance = totalPlanned - totalSpent

    console.log(`\nTotal planejado: R$ ${totalPlanned}`)
    console.log(`Total gasto: R$ ${totalSpent}`)
    console.log(`Saldo do mês: R$ ${balance}`)

    menu()
}

// =========================
// 6. Crie um array de objetos representando músicas, cada uma com título, artista e duração em segundos. Use for...of para exibir cada música no formato "Artista —Título (mm:ss)". Ao final, use forEach para somar a duração total e exiba-a no mesmo formato.
// =========================
function ex6() {

    console.clear()

    const songs = [
        {
            title: 'Numb',
            artist: 'Linkin Park',
            duration: 185
        },
        {
            title: 'Believer',
            artist: 'Imagine Dragons',
            duration: 204
        },
        {
            title: 'The Scientist',
            artist: 'Coldplay',
            duration: 309
        }
    ]

    for (const song of songs) {

        const minutes = Math.floor(song.duration / 60)
        const seconds = song.duration % 60

        const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`

        console.log(`${song.artist} — ${song.title} (${formattedTime})`)
    }

    let totalDuration = 0

    songs.forEach(song => {
        totalDuration += song.duration
    })

    const totalMinutes = Math.floor(totalDuration / 60)
    const totalSeconds = totalDuration % 60

    const totalFormatted = `${String(totalMinutes).padStart(2, '0')}:${String(totalSeconds).padStart(2, '0')}`

    console.log(`\nDuração total: ${totalFormatted}`)

    menu()
}

// =========================
// 7. Crie um array de objetos com nome e nota de 6 alunos. Use for...of para classificar cada aluno (Aprovado, Recuperação ou Reprovado) e exibir o resultado. Use forEach para calcular e exibir separadamente a média dos aprovados e a média dos reprovados.
// =========================
function ex7() {

    console.clear()

    const students = [
        { name: 'João', grade: 8 },
        { name: 'Maria', grade: 4 },
        { name: 'Pedro', grade: 6 },
        { name: 'Ana', grade: 9 },
        { name: 'Lucas', grade: 3 },
        { name: 'Sara', grade: 7 }
    ]

    for (const student of students) {

        if (student.grade >= 7) {
            console.log(`${student.name}: Aprovado`)
        } else if (student.grade >= 5) {
            console.log(`${student.name}: Recuperação`)
        } else {
            console.log(`${student.name}: Reprovado`)
        }

    }

    let approvedTotal = 0
    let approvedCount = 0

    let failedTotal = 0
    let failedCount = 0

    students.forEach(student => {

        if (student.grade >= 7) {
            approvedTotal += student.grade
            approvedCount++
        }

        if (student.grade < 5) {
            failedTotal += student.grade
            failedCount++
        }

    })

    const approvedAverage = approvedCount > 0 ? approvedTotal / approvedCount : 0

    const failedAverage = failedCount > 0 ? failedTotal / failedCount : 0

    console.log(`\nMédia dos aprovados: ${approvedAverage.toFixed(2)}\nMédia dos reprovados: ${failedAverage.toFixed(2)}`)

    menu()
}

// =========================
// 8. Crie um array de objetos representando produtos com nome, preço e quantidade. Use forEach para calcular o valor total em estoque de cada produto (preço × quantidade) e exibir um relatório. Ao final, exiba o valor total geral de todo o estoque.
// =========================
function ex8() {

    console.clear()

    const products = [
        {
            name: 'Notebook',
            price: 3500,
            quantity: 3
        },
        {
            name: 'Mouse',
            price: 80,
            quantity: 10
        },
        {
            name: 'Teclado',
            price: 150,
            quantity: 5
        },
        {
            name: 'Monitor',
            price: 900,
            quantity: 2
        }
    ]

    let totalStockValue = 0

    products.forEach(product => {
        const stockValue = product.price * product.quantity

        totalStockValue += stockValue

        console.log(`${product.name} | Preço: R$ ${product.price} | Quantidade: ${product.quantity} | Total: R$ ${stockValue}`)
    })

    console.log(`\nValor total do estoque: R$ ${totalStockValue}`)

    menu()
}

// =========================
// 9. Crie um array de objetos onde cada objeto representa um contato com nome, telefone e e-mail. Use forEach para listar todos os contatos formatados. Permita buscar um contato pelo nome usando for...of e exiba os dados encontrados ou uma mensagem de "não encontrado".
// =========================
function ex9() {

    console.clear()

    const contacts = [
        {
            name: 'Pedro',
            phone: '(51) 99999-1111',
            email: 'pedro@email.com'
        },
        {
            name: 'Maria',
            phone: '(51) 99999-2222',
            email: 'maria@email.com'
        },
        {
            name: 'João',
            phone: '(51) 99999-3333',
            email: 'joao@email.com'
        }
    ]

    console.log('CONTATOS:')

    contacts.forEach(contact => {
        console.log(`${contact.name} | ${contact.phone} | ${contact.email}`)
    })

    const nameSearch = prompt('Digite o nome do contato: ')

    let found = false

    for (const contact of contacts) {
        if (contact.name === nameSearch) {
            found = true
            console.log(`\nCONTATO ENCONTRADO:\nNome: ${contact.name}\nTelefone: ${contact.phone}\nE-mail: ${contact.email}`)
            break
        }
    }

    if (!found) {
        console.log(`\n===============================\n [ERRO] Contato não encontrado \n===============================`)
        return setTimeout(() => {
            console.clear()
            ex9()
        }, 3000)
    }

    menu()
}

// =========================
// 10. Implemente uma pilha usando um array para simular o histórico de um navegador. Crie as funções visitar(pagina) (push), voltar() (pop) e paginaAtual() (peek). Simule uma sessão: visite 4 páginas, volte 2 vezes e exiba a página atual a cada operação.
// =========================
function ex10() {

    console.clear()

    const history = []

    function visit(page) {
        history.push(page)

        console.log(`Visitando: ${page}`)
        console.log(`Página atual: ${currentPage()}\n`)
    }

    function back() {
        const removedPage = history.pop()

        console.log(`Voltando da página: ${removedPage}`)
        console.log(`Página atual: ${currentPage()}\n`)
    }

    function currentPage() {
        return history[history.length - 1]
    }

    visit('google.com')
    visit('youtube.com')
    visit('github.com')
    visit('stackoverflow.com')

    back()
    back()

    menu()
}

// =========================
// 11. Implemente uma fila usando um array para simular o atendimento de uma clínica. Crie as funções chegarPaciente(nome) (enqueue), chamarProximo() (dequeue) e exibirFila(). Simule a chegada de 5 pacientes e o atendimento de 3, exibindo o estado da fila a cada operação.
// =========================
function ex11() {

    console.clear()

    const queue = []

    function arrivePatient(name) {

        queue.push(name)

        console.log(`Paciente chegou: ${name}`)
        displayQueue()
    }

    function callNext() {

        const patient = queue.shift()

        console.log(`Paciente chamado: ${patient}`)
        displayQueue()
    }

    function displayQueue() {

        console.log('Fila:')

        queue.forEach(patient => {
            console.log(patient)
        })

        console.log('')
    }

    arrivePatient('Pedro')
    arrivePatient('Maria')
    arrivePatient('João')
    arrivePatient('Ana')
    arrivePatient('Lucas')

    callNext()
    callNext()
    callNext()

    menu()
}

// =========================
// 12. Implemente uma lista ligada simples usando nós ({ valor, proximo }). Crie as funções adicionar(tarefa), remover(tarefa) e exibir() que percorre todos os nós. Simule um gerenciador de tarefas: adicione 4 tarefas, remova uma pelo nome e exiba a lista antes e depois.
// =========================
function ex12() {

    console.clear()

    let head = null

    function add(task) {
        const newNode = {
            value: task,
            next: null
        }

        if (head === null) {
            head = newNode
            return
        }

        let current = head

        while (current.next !== null) {
            current = current.next
        }

        current.next = newNode
    }

    function remove(task) {
        if (head === null) {
            return
        }

        if (head.value === task) {
            head = head.next
            return
        }

        let current = head

        while (current.next !== null) {

            if (current.next.value === task) {
                current.next = current.next.next
                return
            }

            current = current.next
        }
    }

    function display() {

        let current = head

        console.log('TAREFAS:')

        while (current !== null) {
            console.log(current.value)
            current = current.next
        }

        console.log('')
    }

    add('Estudar JavaScript')
    add('Fazer exercícios')
    add('Ler documentação')
    add('Enviar atividade')

    console.log('ANTES DA REMOÇÃO')
    display()

    remove('Ler documentação')

    console.log('DEPOIS DA REMOÇÃO')
    display()

    menu()
}