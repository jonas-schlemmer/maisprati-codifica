let listaFrutas = Array()

listaFrutas[0] = 'maca'
listaFrutas[1] = 'morango'
listaFrutas['adocicadas'] = 'pera'

for (let i = 0; i < listaFrutas.length; i++) {
    console.log(listaFrutas[i])    
}

listaFrutas.push('melancia')
listaFrutas.unshift('Laranja')
listaFrutas.pop()
listaFrutas.shift()

console.table(listaFrutas)