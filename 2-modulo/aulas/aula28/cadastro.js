import { registrar } from "./autenticador.js"

const aviso = document.querySelector('#aviso')

const formCadastro = document.querySelector('#form-cadastro')
formCadastro.addEventListener('submit', (e) => {
    e.preventDefault()

    const usuario = {
        email: document.querySelector('#email').value,
        senha: document.querySelector('#senha').value
    }

    try {
        registrar(usuario)
        alert('Cadastro realizado! Faça login para continuar.')
        location.href = 'index.html'
    } catch (err) {
        aviso.textContent = err.message
    }
})