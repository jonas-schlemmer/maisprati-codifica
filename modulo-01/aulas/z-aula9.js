// let listaCoisas = Array()
// listaCoisas['Hardware'] = ['Placa de Vídeo']
// listaCoisas['Hardware'][1] = 'Smartphone'
// listaCoisas['Hardware'][2] = 'TV'
// listaCoisas['Games'] = ['GTA VI']
// listaCoisas['Games'][1] = 'The Witcher'
// console.table(listaCoisas)

////////////////////////////////////////////////
// function retornaParOuImpar(valor) {
//     return console.log(valor % 2 == 0 ? 'Par' : 'Impar')
// }

// retornaParOuImpar(2)
// retornaParOuImpar(3)

////////////////////////////////////////////////
// Ex: Função que retorna um array ordenado
// function ordenaArray(arr) {
//     return arr.sort((a, b) => a - b)
// }

// console.log(ordenaArray([2, 3, 1, 5, 4]))
////////////////////////////////////////////////

// let exibeNome = function(nome) {
//     console.log(nome)
// }
// exibeNome('Jonas')
////////////////////////////////////////////////
// Ex: Criar uma função que retorna a soma dos elementos de um array
// function somarArray(arr) {
//     let total = 0
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i]
//     }
//     return total
// }

// console.log(somarArray([1, 2, 3, 4, 5]))

// Ex: Retorna o maior número em um array
function maiorNumero(arr) {
    let maiorNumero = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maiorNumero) {
            maiorNumero = arr[i]
        }
    }
    return maiorNumero
}

console.log(maiorNumero([1, 2, 3, 10, 4, 5]))