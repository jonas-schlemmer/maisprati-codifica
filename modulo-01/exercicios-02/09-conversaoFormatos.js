// 9. Escreva duas funções: 
// paresParaObjeto(pares) recebe um array de pares [ [chave, valor], ... ] e retorna o objeto equivalente.
// objetoParaPares(obj) faz o inverso, retornando um array de pares. 

function paresParaObjeto(pares) {
    return Object.fromEntries(pares)
}

function objetoParaPares(obj) {
    return Object.entries(obj)
}

const pares = [
    ['nome', 'João'],
    ['idade', 30],
    ['cidade', 'São Paulo'],
    ['profissao', 'Desenvolvedor']
]

console.log('Array de pares:', pares)

const obj = paresParaObjeto(pares)
console.log('Convertido para objeto:', obj)

const paresDeNovo = objetoParaPares(obj)
console.log('Objeto convertido de volta para pares:', paresDeNovo)