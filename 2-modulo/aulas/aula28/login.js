import { login } from "./autenticador.js"

const aviso = document.querySelector('#aviso')

const formLogin = document.querySelector('#form-login')
formLogin.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = document.querySelector('#email').value
    const senha = document.querySelector('#senha').value

    try {
        const usuario = login(email, senha)
        alert(`Bem-vindo, ${usuario.email}!`)
    } catch (err) {
        aviso.textContent = err.message
    }
})