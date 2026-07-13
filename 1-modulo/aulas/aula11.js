// class Carro {
//     constructor(marca, modelo, ano) {
//         this.marca = marca
//         this.modelo = modelo
//         this.ano = ano
//     }

//     mostrarCaracteristicas() {
//         console.log(`O carro é um ${this.marca}, modelo ${this.modelo} do ano ${this.ano}`)
//     }
// }

// let fiatUno = new Carro('Fiat', 'Uno', '1992')

// fiatUno.mostrarCaracteristicas()

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    insertFirst(value) {
        let newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
    }

    insertTail(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
        } else {
            let actual = this.head

            while (actual.next) {
                actual = actual.next
            }

            actual.next = newNode
        }
        this.length++
    }
}

let list = new LinkedList()
list.insertFirst(10)
list.insertFirst(5)
list.insertTail(20)

console.log(list)