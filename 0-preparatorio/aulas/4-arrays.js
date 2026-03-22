// let listaCompras = []

// listaCompras[0] = "Pão"
// listaCompras[1] = "Refrigerante"
// listaCompras['Frutas'] = "Laranja"

// console.table(listaCompras["Frutas"])

// let listaCoisas = []
// listaCoisas["Hardware"] = Array()
// listaCoisas["Hardware"][0] = "Joystick"
// listaCoisas["Hardware"][1] = "Headphone"
// listaCoisas["Ferramentas"] = Array()
// listaCoisas["Ferramentas"] = Array()
// listaCoisas["Ferramentas"][0] = "Furadeira"

// console.table(listaCoisas)
// console.log(listaCoisas['hardware'].indexOf('Headphone'))

// let livros = ["Senhor dos Anéis", "O Hobbit", "Pequeno Princípe", "Emma", "Dom Quixote", "Orgulho e Preconceito", "O Monge e o Executivo", "Quem é Você Alasca", "Como Fazer Amigos e Influenciar Pessoas", "Bíblia", "Código Limpo"]

// console.table(livros)
// <inicialização / <condição> / <Passo/iteração>
// for (let i = 0; i <= livros.length - 1; i++) {
//     console.log(`${livros[i]}`)
// }

// livros.push('Nárnia')
// console.table(livros)

// livros.pop()
// console.table(livros)

// let numeros = [10, 20, 1, 5, 2, -1]

// numeros.sort((a, b) => a - b)

// console.log(numeros)

/* Some Os elementos do Array */

// let total = 0
// let numeros = [10, 20, 1, 5, 2, -1]

// numeros.forEach(e => {
//     total += e
// })

// console.log(total)

/* Encontre o maior valor em um Array */
// let numeros = [10, 20, 1, 5, 2, -1]
// let maiorElemento = numeros [0]
// numeros.forEach(e => {
//     if ((e > maiorElemento)) {
//         maiorElemento = e
//     }
// })

// console.log(maiorElemento)

/* Reverter um Array */
// let numeros = [10, 20, 1, 5, 2, -1]
// let arrayReverso = []

// for (let i = numeros.length - 1; i >= 0; i--) {
//     arrayReverso.push(numeros[i])
// }

// console.log(arrayReverso)
// console.log(numeros.reverse())

/* Ordenar um array em ordem crescente sem sort()*/
// let numeros = [4, 2, 5, 1, 3, 6]
// let aux = 0

// for (let i = 0; i < numeros.length; i++) {
//     for (let j = 0; j < numeros.length; j++) {
//         if (numeros[i] < numeros [j]) {
//             aux = numeros[i]
//             numeros[i] = numeros[j]
//             numeros[j] = aux
//         }
//     }
// }

// console.log(numeros)