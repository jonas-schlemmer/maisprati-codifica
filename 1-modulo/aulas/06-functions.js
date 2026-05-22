/*
    Escreva uma função para cada operação onde o array será percorrido e calcule:
    A soma de todos os elementos
    A média dos elementos
    O maior valor encontrado
    O menor valor encontrado
*/
const arr = [2, 1, 6, 4, 7, 8]

function somar(somarArr) {
    let soma = 0
    somarArr.forEach(n => {
        soma += n
    })
    return soma
}
console.log(somar(arr))

function media() {
    return Number((somar(arr) / arr.length).toFixed(2))
}
console.log(media())

function menor(arr) {
    let menor
    arr.forEach(n => {
        if (n < arr[0]) {
            menor = n
        }
    })
    return menor
}
console.log(menor(arr))

function maior(arr) {
    let maior
    arr.forEach(n => {
        if (n > arr[0]) {
            maior = n
        }
    })
    return maior
}
console.log(maior(arr))