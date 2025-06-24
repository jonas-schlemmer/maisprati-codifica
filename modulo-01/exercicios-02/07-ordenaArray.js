// 7. Dado um array produtos = [{ nome, preco }, ...], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort.
function nomesOrdenadosPorPreco(produtos) {
    return produtos.slice().sort((a, b) => a.preco - b.preco).map(produto => produto.nome)
}

const produtos = [
    {nome: 'Teclado', preco: 120},
    {nome: 'Mouse', preco: 80},
    {nome: 'Monitor', preco: 900},
    {nome: 'Cabo HDMI', preco: 40}
]

const nomesOrdenados = nomesOrdenadosPorPreco(produtos)
console.log(nomesOrdenados)
// Saída: ['Cabo HDMI', 'Mouse', 'Teclado', 'Monitor']