// let livro = {
//     nome: 'Marley e Eu',
//     anoLancamento: '2024',
//     autor: 'Will Smith',
//     nrPaginas: 12,
//     genero: 'Comédia',
//     atores: ['Scooby', 'Super Cão', 'Batcão'],

//     mostrarCaracteristicas: function() {
//         return `${this.nome} é um livro para ficar alegre.`
//     }
// }

// console.log(livro.mostrarCaracteristicas())

// let livro2 = livro
// livro2.nrPaginas = 50
// console.log(livro2)

// let filme = {
//     titulo: 'High School Musical',
//     anoLancamento: 2007,
//     atores: ['Zac Efron', 'Arthur Morgan', 'Cloud Strife'],
//     genero: 'Guerra',
//     teste() {
//         return console.log('oi')
//     }
// }

// filme.teste()

// function anime(nome, maisForte, maisFraco, nota) {
//     return {
//         nome,
//         maisForte,
//         maisFraco,
//         nota
//     }
// }

// let anime1 = anime('Naruto', 'Genma', 'Konohamaru', 5)

// console.log(anime1)

// let jogadores = ['Caça Rato', 'Ganso', 'Pato']

// for (let jogador in jogadores) {
//     console.log(jogadores[jogador])
// }

// let palavra = 'Grêmio'

// for (let char of palavra) {
//     console.log(char)
// }

// Calcular as médias das notas dos alunos de um professor e digam se a turma do Professor está na média.

// let professor = {
//     nome: 'Stark Parker',
//     materia: 'Física',
//     notas: {
//         aluno1: [5, 2],
//         aluno2: [3, 7]
//     }
// }

// let somaNotas = 0
// let numeroAlunos = 0

// for (let aluno in professor.notas) {
//     somaNotas += Array.isArray(professor.notas[aluno]) ? 
//     professor.notas[aluno].reduce((acc, nota) => acc + nota, 0) / professor.notas[aluno].length : 
//     professor.notas[aluno]

//     numeroAlunos++
// }

// let media = somaNotas / numeroAlunos

// let res = 'abaixo'
// if (media >= 6) {
//     res = 'acima'
// }

// console.log(`A média da turma é ${media} e está ${res} do padrão.`)

// let livraria = [
//     {titulo: "1984", autor: "George Orwell", ano: 1984},
//     {titulo: "O Profeta", autor: "Endrew Berthold", ano: 2001},
//     {titulo: "Código Limpo", autor: "Martin", ano: 2010},
//     {titulo: "O Velho e o Mar", autor: "Hemmingway", ano: 1910},
//     {titulo: "O Príncipe", autor: "Maquiável", ano: 2002}
// ]

// // for of para iterar e verificar os livros publicados antes do ano 2000.
// for (const livro of livraria) {
//     if (livro.ano < 2000) {
//         console.log(livro.titulo)
//     }
// }

// let filmes = [
//     {titulo: 'Sempre ao seu lado', genero: 'De chorar'},
//     {titulo: 'Massacre da Serra Elétrica', genero: 'Terror'},
//     {titulo: 'Minha Mãe é uma Peça', genero: 'Comédia'},
//     {titulo: 'Tarzan', genero: 'Aventura'},
//     {titulo: 'Como Eu Era Antes de Você', genero: 'De chorar'},
//     {titulo: 'Jogo da Imitação', genero: 'Histórico'},
//     {titulo: 'Top Gun', genero: 'Guerra'},
//     {titulo: 'Your Name', genero: 'Romance'},
//     {titulo: 'Deadpool', genero: 'Herói'},
//     {titulo: 'Batman Forever', genero: 'Herói'},
// ]

// Listar a contagem de gênero dos filmes
// let deChorar = 0
// let terror = 0
// let comedia = 0
// let aventura = 0
// let historico = 0
// let guerra = 0
// let romance = 0
// let heroi = 0
// for (let filme of filmes) {
//     if (filme.genero == 'De chorar') deChorar++
//     if (filme.genero == 'Terror') terror++
//     if (filme.genero == 'Comédia') comedia++
//     if (filme.genero == 'Aventura') aventura++
//     if (filme.genero == 'Histórico') historico++
//     if (filme.genero == 'Guerra') guerra++
//     if (filme.genero == 'Romance') romance++
//     if (filme.genero == 'Herói') heroi++
// }

// console.log(`De chorar: ${deChorar}\nTerror: ${terror}\n`)

// let contagemFilmes = {}
// filmes.forEach((filme) => {
//     if (contagemFilmes[filme.genero]) {
//         contagemFilmes[filme.genero]++
//     } else {
//         contagemFilmes[filme.genero] = 1
//     }
// })

// console.table(contagemFilmes)

// Construam uma função que calcule o fatorial de um número 5 = 120

// function fat(num) {
//     let numFat = 1
//     for(let i = num; i > 0; i--) {
//         numFat *= i
//     }
//     return numFat
// }

// console.log(fat(5))
// console.log(fat(13))

// Imprimam os primeiros 10 números da sequência de Fibonacci
// let count = 1
// let n1 = 1
// let n2 = 1
// let total = 0
// do {
//     total = n1 + n2
//     n1 = n2
//     n2 = total
//     console.log(total)
//     count++
// } while (count <= 10)

// função de PA - progressão aritmética
// function pa(primeiroTermo, razao) {
//     let soma = 0
//     for (let i = 0; i < 10; i++) {
//         let term = primeiroTermo + i * razao
//         console.log(term)
//         soma += term
//     }
//     console.log(`A soma dos termos é ${soma}`)
// }

// pa(1,3)

// function somaA() {
//     return 1+1
// }

// function somaB() {
//     return 2+2
// }

// function somaC() {
//     return somaA() + somaB()
// }

// console.log(somaA())
// console.log(somaB())
// console.log(somaC())

// Recursividade
// function fatorial(n) {
//     if (n === 0) {
//         return 1
//     } else {
//         return n * fatorial (n-1)
//     }
    
// }
// console.log(fatorial(5))

// Soma dos números de 1 até N

// function somaNumeros(n) {
//     if (n === 1) {
//         return 1
//     } else {
//         return n + somaNumeros(n - 1)
//     }
// }

// console.log(somaNumeros(5))

// Fibonacci

// function fibo (n) {
//     if (n === 0) {
//         return 0
//     } else if (n === 1) {
//         return 1
//     } else {
//         return fibo (n - 1) + fibo(n - 2)
//     }
// }

// console.log(fibo(8))

// let categorias = [
//     {
//         id: 1,
//         nome: 'Eletrônicos',
//         filhos: [
//             {id: 2, nome: 'Celulares', filhos: []},
//             {id: 3, nome: 'Computadores', filhos: [
//                 {id: 4, nome: 'Tablets', filhos: []},
//             ]}
//         ]
//     },
//     {
//         id: 5,
//         nome: 'Louças',
//         filhos: []
//     }
// ]

// function imprimirCategorias(lista, nivel = 0) {
//     for (let categoria of lista) {
//         console.log("   ".repeat(nivel * 2) + categoria.nome)
//         if (categoria.filhos.length > 0) {
//             imprimirCategorias(categoria.filhos, nivel + 1)
//         }
//     }
// }
// // console.log("oi".repeat(50))
// imprimirCategorias(categorias)