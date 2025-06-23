// 1. Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário.
function ehDataValida(dia, mes, ano) {

    if (mes < 1 || mes > 12) return false
    if (ano < 1) return false

    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    // Verifica ano bissexto e ajusta fevereiro
    const ehBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)
    if (ehBissexto && mes === 2) {
        return dia >= 1 && dia <= 29
    }

    // Verifica se o dia está no intervalo válido do mês
    return dia >= 1 && dia <= diasPorMes[mes - 1]
}

console.log(ehDataValida(29, 2, 2024)) // true (bissexto)
console.log(ehDataValida(29, 2, 2023)) // false (não bissexto)
console.log(ehDataValida(31, 4, 2023)) // false (abril só vai até 30)
console.log(ehDataValida(31, 1, 2023)) // true
console.log(ehDataValida(0, 12, 2023)) // false (dia 0 não existe)