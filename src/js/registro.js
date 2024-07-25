const form = document.getElementById("form") 
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const fecha = document.getElementById("fecha")
const btnR = document.getElementById("btnR")
const correo = document.getElementById("correo")
const password = document.getElementById("password")

const lista = []

form.addEventListener("submit", e=>{

    const listaDatos =
        nombre = nombre.value
        apellido = apellido.value
        fecha = fecha.value
        correo = correo.value
        password = password.value
   
    listaDatos = lista.value

    localStorage.setItem("registro", lista)

    e.preventDefault()
    const entrar = false
    const validarEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    
    if (!validarEmail.test(correo.value)) {
        alert("El correo no es válido")
        entrar = true

    }

    if (password.value.lenght < 8) {
        alert("La contraseña debe tener al menos 8 digitos")
        entrar = true
        
    }

})
 
