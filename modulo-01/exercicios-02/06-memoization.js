// 6. Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações. 
function memoize(fn) {
    const cache = new Map()

    return function(...args) {
        const key = JSON.stringify(args)  // Criar uma chave a partir dos argumentos

        if (cache.has(key)) {
            return cache.get(key)  // Retorna o resultado em cache
        }

        const result = fn.apply(this, args)  // Executa a função original
        cache.set(key, result)  // Salva no cache
        return result
    }
}

function soma(a, b) {
    console.log('Calculando soma...')
    return a + b
}

const somaMemo = memoize(soma)

console.log(somaMemo(2, 3))  // Calculando soma... \n 5
console.log(somaMemo(2, 3))  // 5 (retorna do cache, sem recalcular)
console.log(somaMemo(4, 5))  // Calculando soma... \n 9