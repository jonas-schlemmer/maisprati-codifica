let listaFrutas = Array()

listaFrutas[0] = 'Maçã'
listaFrutas[1] = 'Morango'
listaFrutas['Adocicadas'] = 'Pera'

for (let i = 0; i < listaFrutas.length; i++) {
    console.table(listaFrutas[i])    
}

listaFrutas.push('Melância') // Adiciona no final do array
listaFrutas.unshift('Laranja') // Adiciona no início do array

listaFrutas.pop() // Remove no final do array
listaFrutas.shift() // Remove no início do array

console.table(listaFrutas)