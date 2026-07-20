const btn_register = document.getElementById('btn_register')
btn_register.addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({
        behavior: "smooth"
    })
})

const cepInput = document.getElementById('cep')
cepInput.addEventListener('blur', searchCEP)

async function searchCEP() {
    const cep = cepInput.value.replace(/\D/g, "")

    if (cep.length !== 8) {
        return
    }

    try {
        const answer = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data = await answer.json()

        if (data.erro) {
            alert('CEP não encontrado.')
            return
        }

        document.getElementById('street').value = data.logradouro
        document.getElementById('city').value = data.localidade
        document.getElementById('state').value = data.uf
    } catch (erro) {
        alert('Erro ao consultar o CEP.')
        console.error(erro)
    }
}

const form = document.getElementById('form-contact')
form.addEventListener('submit', sendForm)

function sendForm(e) {
    e.preventDefault()

    alert('Obrigado pela sua inscrição!\n\nEm breve entraremos em contato pelo e-mail informado.')

    form.reset()

    document.getElementById('street').value = ''
    document.getElementById('city').value = ''
    document.getElementById('state').value = ''
}

cepInput.addEventListener('input', () => {
    let value = cepInput.value.replace(/\D/g, "")

    if (value.length > 5) {
        value = value.replace(/^(\d{5})(\d)/, "$1-$2")
    }

    cepInput.value = value
})