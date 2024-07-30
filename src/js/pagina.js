const btn1 = document.getElementById("btn1"),
      btn2 = document.getElementById("btn2"),
      formRegister = document.querySelector(".register"),
      formLogin = document.querySelector(".login");

btn1.addEventListener("click", e=>{
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide");
})

btn2.addEventListener("click", e=>{
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide");
})


const btnRegistro = document.getElementById("btnRegistro");
const btnInicio = document.getElementById("btnInicio");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const contraseña = document.getElementById("contraseña");

const listaUsuario = JSON.parse(localStorage.getItem("listaUsuario")) || [];

btnIni.addEventListener("click", function () {
    const validarCorreo = correo.value;
    const validarContraseña = contraseña.value;
   
    if (!validarCorreo || !validarContraseña) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    let encontrarUsuario = false;

    for (let index = 0; index < listaUsuario.length; index++) {
        const usuario = listaUsuario[index];
        if (usuario.correo === validarCorreo && usuario.contraseña === validarContraseña) {
            encontrarUsuario = true;
            break;
        }
    }

    if (encontrarUsuario) {
        window.location = "http://127.0.0.1:5500/Proyecto/proyecto.html";
    } else {
        alert("Nombre, correo o contraseña incorrectos.");
    }
})



