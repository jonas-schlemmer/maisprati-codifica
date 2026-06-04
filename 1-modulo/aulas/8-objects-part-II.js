console.clear()
// let livro = {
//     titulo: 'A Montanha Mágica',
//     autor: 'Thomas Mann',
//     tema: 'Clássico'
// }

// console.table(livro)

// FOR IN, ideal para objetos
// FOR OF, ideal para arrays
// for (const chave in livro) {
//     console.log(`${chave}: ${livro[chave]}`)
// }

// let frutas = ['Maçã', 'Uva', 'Banana']

// for (const [indice, fruta] of frutas.entries()) {
//     console.log(indice, fruta)
// }

// let livros = [
//     {titulo: 'O Hobbit', autor: 'J. R. R. Tolkin'},
//     {titulo: '1984', autor: 'Geroge Orwell'},
//     {titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry'},
//     {titulo: 'Nárnia', autor: 'C. S. Lewis'},
//     {titulo: 'Drácula', autor: 'Bram Stoker'},
// ]

// console.table(livros)

// for (const {titulo, autor} of livros) {
//     // console.log(livro.titulo, livro.autor)
//     console.log(titulo, autor)
// }

// const notas = [9, 8.5, 5, 6]

// notas.forEach((nota) => {
//     console.log(nota)
// })

// Criem um objeto carro - usem for in para imprimir cada propriedade no formato: "chave: valor"
// let carro = {
//     cor: 'Preto',
//     portas: '4',
//     marca: 'Hyundai',
//     modelo: 'HB20',
// }

// for (const chave in carro) {
//     console.log(`${chave}: ${carro[chave]}`)
// }

// Criem um array de cidades, imprimam apenas as cidades que começam com a letra 's'. Usando for of
let cities = ['Esteio', 'Sapiranga', 'Campo Bom', 'Canoas', 'Salvador', 'Sergipe']
let citiesStartsWithAnS = []

// cities.forEach((city) => {
//     if (city[0] == 'S') {
//         citiesStartsWithAnS.push(city)
//     }
// })

// for (const city of cities) {
//     // if (city[0] == 'S') {
//     if (city.startsWith('S')) {
//         citiesStartsWithAnS.push(city)
//     }
// }

// console.log(citiesStartsWithAnS)

// let numbers = [9, 1, 3, 6, 4, 2, 5, 7, 8]
// let total = 0

// numbers.forEach(n => {
//     total += n
// })

// console.log(total)

// Dado o array de alunos abaixo, use os loops que preferir para gerar um relatório com três informações: lista de aprovados, lista de reprovados e a média geral da turma:

const turma = [
    { nome: 'Alice',  nota: 9.0 },
    { nome: 'Bruno',  nota: 5.5 },
    { nome: 'Carla',  nota: 7.0 },
    { nome: 'Daniel', nota: 3.8 },
    { nome: 'Elisa',  nota: 8.2 },
]

let arrAprovados = []
let arrReprovados = []
let mediaGeralDaTurma = 0

turma.forEach((a => {
    if (a.nota >= 7) {
        arrAprovados.push(a)
    } else {
        arrReprovados.push(a)
    }

    mediaGeralDaTurma += a.nota
}))

mediaGeralDaTurma /= turma.length

console.log('Aprovados: ', arrAprovados)
console.log('Reprovados: ', arrReprovados)
console.log('Média Geral da turma: ', mediaGeralDaTurma.toFixed(2))