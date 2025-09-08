let nome = 'Julio César'
console.log(nome.charAt(0))
console.log(nome.indexOf('C'))
console.log(nome.replace('Julio', 'Cleyton'))
console.log(nome.substr(6, 5))
console.log(nome.toUpperCase())
console.log(nome.toLowerCase())
console.log('-  Wesley'.trim())

// Fazer uma função que inverta uma string.
function inverteString(str) {
    // let virado = ''
    // for (let i = str.length -1; i >= 0; i--) {
    //     virado += str[i]
    // }
    // return virado
    return str.split('').reverse().join('')
}

console.log(inverteString('Olá Mundo!'))

// Encontrar o número de vogais em uma string

// function encontraVogais(str) {
//     // let numeroVogais = 0
//     // for (let i = 0; i < str.length; i++) {
//     //     if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
//     //         numeroVogais++
//     //     }
//     // }
//     // return numeroVogais
//     let vowels = str.match(/[aeiou]/gi)
//     return vowels ? vowels.length : o
// }

// console.log(encontraVogais('AEIOU'))

// console.log(Math.ceil(100.2))
// console.log(Math.floor(100.2))
// console.log(Math.round(100.2))

// console.log(Math.sqrt(81))
// console.log(Math.cbrt(81))
// console.log(Math.pow(9, 2))

// console.log(Math.abs(-100.2))

// console.log(Math.random() * 100)

// Gerar um número aleatório entre dois valores
// function aleatorioEntreDois(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min
// }

// console.log(aleatorioEntreDois(1, 5))

let date = new Date()

// console.log(date.getDate())
// console.log(date.getMonth() + 1)
// console.log(date.getFullYear())
// console.log(date.toString())

let date1 = new Date(2015, 7, 7)
let date2 = new Date(2025, 7, 7)
let date3 = new Date(2025, 5, 31)

// console.log(date1.getTime())
// console.log(date2.getTime())

// let milissegundosEntreDatas = Math.abs(date1.getTime() - date2.getTime())

// console.log(milissegundosEntreDatas)

// let milissegundosPorDia = (1 * 24 * 60 * 60 * 1000)

// console.log(`A diferença entre as datas é de ${milissegundosEntreDatas / milissegundosPorDia} dias.`)

// Formatar uma data.
// function formatDate(date) {
//     let day = date.getDate().toString().padStart(2, '0')
//     let month = (date.getMonth()).toString().padStart(2, '0')
//     let year = date.getFullYear()

//     return `${day}/${month}/${year}`
// }

// console.log(formatDate(date3))

// A soma de duas matrizes.
