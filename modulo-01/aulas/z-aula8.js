// let pares = []
// Crie um array chamado 'numeros' contendo 10 valores numéricos à sua escolha.
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0)
let pares = numeros.filter((num => num % 2 === 0))
console.table(soma)
console.table(pares)
// Use métodos de array para calcular:
// A soma de todos os elementos.
// let soma = 0

// for(let i = 0; i< numeros.length; i++) {
//     soma += numeros[i]
//     if (numeros[i] % 2 == 0) {
//         pares.push(numeros[i])
//     }
// }

// console.log(soma);

// A média dos elementos.
console.log(soma / numeros.length)

// Gere um novo array chamado pares que contenha apenas os números pares de números.
// console.log(pares)

// Imprima no console:
// O array original 'numeros'

// A soma

// A média

// Os arrays pares

let nums = [3, 6, 1, 2, -3]
let n = nums.length
for(let i = 0; i < n; i++) {
    for(let j = 0; j < n - i; j++) {
        if (nums[j] > nums[j + 1]) {
            let temp = nums[j]
            nums[j] = nums[j + 1]
            nums[j + 1] = temp
        }
    }
}

console.log(nums)


let matriz = []
let somas = 0
for (let i = 0; i < 3; i++){
    matriz[i] = []
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = 10
        if (i == j) {
            somas += matriz[i][j]
        }
    }
}
console.log(somas)
console.table(matriz)