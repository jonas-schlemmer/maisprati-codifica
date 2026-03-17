function ex4() {
    console.clear()

    let altura = Number(prompt(`Digite uma altura em metros: `).replace(',','.'))
    let peso = Number(prompt(`Digite um peso: `))
    const IMC = (peso / (altura * altura))
    
    if ((altura <= 0) || (peso <= 0)) {
        console.log(`\n=========================================\n [ERRO] Digite somente números positivos \n=========================================`)
        return setTimeout(() => {
            console.clear()
            ex4()
        }, 3000)
    } else {
        if (IMC >= 30) {
            console.log(`\nIMC: ${IMC.toFixed(2)} - Obesidade`)
        } else if (IMC >= 25) {
            console.log(`\nIMC: ${IMC.toFixed(2)} - Sobrepeso`)
        } else if (IMC >= 18.5) {
            console.log(`\nIMC: ${IMC.toFixed(2)} - Peso normal`)
        } else {
            console.log(`\nIMC: ${IMC.toFixed(2)} - Baixo peso`)
        }
    }

    console.log(`\n====================\n [VOLTANDO AO MENU] \n====================`)
    setTimeout(() => {
        console.clear()
        main()
    }, 3000)
}