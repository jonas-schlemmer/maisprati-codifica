// 3. Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array
const prompt = require('prompt-sync')()

const text = prompt("Digite uma frase: ")
const words = text.split(" ")
const unique = []

for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase()
    let found = false

    // Verifica se a palavra já está no array de únicas
    for (let j = 0; j < unique.length; j++) {
        if (word === unique[j]) {
        found = true
        break
    }
  }

    if (!found) {
        unique.push(word)
    }
}

console.log("Palavras únicas:", unique)