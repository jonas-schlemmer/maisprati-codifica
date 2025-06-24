// 5. Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, retornando uma nova função que só executa fn se não for chamada novamente dentro do intervalo.
function debounce(fn, delay) {
    let timeoutId

    return function(...args) {
        // Limpa o timeout anterior, se houver
        clearTimeout(timeoutId)

        // Define um novo timeout para executar fn depois do delay
        timeoutId = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}