const prompt = require('prompt-sync')()

// Escreva um algoritmo que leia uma temperatura em graus Celsius e devolva em Fahrenheit
// let celsius = Number(prompt('Informe a temperatura em graus Celsius: '))
// let fahrenheit = celsius * (9/5) + 32
// console.log(`A temperatura em Fahrenheit é: ${fahrenheit}`)
///////////////////
// Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.
// let totalEleitores = Number(prompt('Digite a quantidade de eleitores em um MUNICÍPIO: '))
// let votosBrancos = Number(prompt('Digite a quantidade de votos em BRANCO: '))
// let votosNulos = Number(prompt('Digite a quantidade de votos NULOS: '))
// let votosValidos = Number(prompt('Digite a quantidade de votos VÁLIDOS: '))
// console.log(`\nTotal de Eleitores: ${totalEleitores}`)
// console.log(`Votos BRANCOS: ${(votosBrancos / totalEleitores) * 100}`)
// console.log(`Votos NULOS: ${(votosNulos / totalEleitores) * 100}`)
// console.log(`Votos VÁLIDOS: ${(votosValidos / totalEleitores) * 100}`)
///////////////////
// A turma C é composta de 60 alunos, e a turma D de 20 alunos. Escreva um algoritmo que leia o percentual de alunos reprovados na turma C, o percentual de aprovados na turma D, calcule e escreva:

// a) o número de alunos reprovados na turma C
// b) o número de alunos reprovados na turma D
// c) A porcentagem de alunos reprovados em relação ao total de alunos das duas turmas.

// [Exemplo de dados de entrada]
// 10 (percentual de alunos reprovados na turma C)
// 85 (percentual de alunos aprovados na turma D)

// [Saída para os dados de entrada acima]
// 6 (quantidade de alunos reprovados na turma C)
// 3 (quantidade de alunos reprovados na turma D)
// 11.25 (porcentual de alunos reprovados em relação ao total de alunos das duas turmas)

// const alunosTurmaC = 60
// const alunosTurmaD = 20
// let porcentagemAlunosReprovadosTurmaC = Number(prompt('Digite a % de alunos reprovados na turma C: '))
// let porcentagemAlunosAprovadosTurmaD = Number(prompt('Digite a % de alunos aprovados na turma D: '))

// let qtdReprovadosC = (alunosTurmaC * porcentagemAlunosReprovadosTurmaC) / 100
// let qtdReprovadosD = ((100 - porcentagemAlunosAprovadosTurmaD) * alunosTurmaD) / 100
// let reprovadosTotal = ((qtdReprovadosC + qtdReprovadosD) / (alunosTurmaC + alunosTurmaD)) * 100

// console.log(`Alunos reprovados na turma C: ${qtdReprovadosC}`)
// console.log(`Alunos aprovados na turma D: ${qtdReprovadosD}`)
// console.log(`Percentual de alunos reprovados ao TOTAL: ${reprovadosTotal}`)
///////////////////
// Faça um programa que leia o dia da semana (Domingo, Segunda, Terça, Quarta, Quinta, Sexta e Sábado). Esse dia deve ser um texto. Se for Sábado ou Domingo imprimir "Final de Semana", senão imprimir "Dia Útil".
// const diaDaSemana = prompt('Digite o dia da semana: ')

// switch(diaDaSemana) {
//     case 'Segunda':
//     case 'Terca':
//     case 'Quarta':
//     case 'Quinta':
//     case 'Sexta':
//         console.log('Dia Útil')
//         break
//     case 'Sabado':
//     case 'Domingo':
//         console.log('Final de Semana')
//         break
//     default:
//         console.log('Dia inválido!')        
//         break
// }

///////////////////
// Escreva um algoritmo para repetir a leitura de um número enquanto o valor fornecido for diferente de 0. Para cada número fornecido, imprimir se ele é negativo ou positivo. Quando o número 0 for fornecido a repetição deve ser encerrada sem imprimir mensagem alguma.

// let numeroInformado
// while (numeroInformado != 0) {
//     numeroInformado = Number(prompt('Digite um número: '))
//     if (numeroInformado == 0) {
//         break       
//     } else if (numeroInformado > 0) {
//         console.log('POSITIVO')
//     } else {
//         console.log('NEGATIVO')
//     }
// }

// Escreva um algoritmo para repetir a leitura de uma senha até que ela seja válida. Para cada leitura da senha incorreta informada escrever a mensagem "SENHA INVÁLIDA". Quando a senha for informada corretamente deve ser impressa a mensagem "ACESSO PERMITIDO" e o algoritmo encerrado. Considere que a senha correta é o valor 2007.

const senha = 2007
let senhaInformada

while (senhaInformada !== senha) {
    senhaInformada = Number(prompt('Digite a senha: '))
    senhaInformada == senha ? console.log('ACESSO PERMITIDO') : console.log('SENHA INVÁLIDA')
}