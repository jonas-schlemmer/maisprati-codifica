// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
const prompt = require('prompt-sync')()
const aSide = Number(prompt('Digite o lado A: '))
const bSide = Number(prompt('Digite o lado B: '))
const cSide = Number(prompt('Digite o lado C: '))

if (isNaN(aSide) || isNaN(bSide) || isNaN(cSide) || aSide <= 0 || bSide <= 0 || cSide <= 0) {
    console.log('[ERRO] Digite apenas valores numéricos e positivos')
} else if ((aSide < bSide + cSide) && (bSide < aSide + cSide) && (cSide < aSide + bSide)) {
    if (aSide === bSide && bSide === cSide) {
        console.log('Tipo: Triângulo equilátero')
    } else if (aSide === bSide || aSide === cSide || bSide === cSide) {
        console.log('Tipo: Triângulo isósceles')
    } else {
        console.log('Tipo: Triângulo escaleno')
    }
} else {
    console.log('[ERRO] Não forma um triângulo')
}