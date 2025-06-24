// 8. Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total.
function somarVendasPorCliente(vendas) {
    return vendas.reduce((acc, venda) => {
        const {cliente, total} = venda
        acc[cliente] = (acc[cliente] || 0) + total
        return acc
    }, {})
}

const vendas = [
    {cliente: 'Alice', total: 100},
    {cliente: 'Bob', total: 200},
    {cliente: 'Alice', total: 150},
    {cliente: 'Carol', total: 80},
    {cliente: 'Bob', total: 50},
    {cliente: 'Danilo', total: 400},
    {cliente: 'Carol', total: 120},
    {cliente: 'Alice', total: 70},
    {cliente: 'Danilo', total: 100},
    {cliente: 'Evelyn', total: 60}
]

const totaisPorCliente = somarVendasPorCliente(vendas)
console.log(totaisPorCliente)