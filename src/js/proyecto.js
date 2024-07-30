const btnGuardar = document.getElementById("btnGuardar")
const campoTexto = document.getElementById("campoTexto")
const contenedorPrincipal = document.getElementById("contenedorPrincipal")
const seleccionar = document.getElementById("seleccionar")

btnGuardar.addEventListener("click", function () {

if (seleccionar.value) {
    const textoEvento = document.createElement("p")
    const btnEliminar = document.createElement("button")
    const btnEditar = document.createElement("button")
    const divEvento = document.createElement("div")
    const campoEvento = document.createElement("input")

    textoEvento.innerHTML = campoEvento.value
    contenedorPrincipal.appendChild(textoEvento)

    contenedorPrincipal.appendChild(divEvento)

    btnEditar.innerHTML = "Eliminar"
    divEvento.appendChild(btnEliminar)

    btnEliminar.addEventListener("click", function () {
        divEvento.removeChild
    })
}

})

