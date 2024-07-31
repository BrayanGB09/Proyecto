const Guardar = document.getElementById("Guardar")
const campoTexto = document.getElementById("campoTexto")

const fecha = document.getElementById("fecha")
const contenedorEvento = document.getElementById("contenedorEvento")
const contenedorTarea = document.getElementById("contenedorTarea")
const seleccionar = document.getElementById("seleccionar")
const evento = document.getElementById("evento")
const tarea = document.getElementById("tarea")


Guardar.addEventListener("click", function () {
  
  if (seleccionar.value === "evento") {
    const textoEvento = document.createElement("p")
    const btnEliminar = document.createElement("button")
    const btnEditar = document.createElement("button")
    const btnGuardar = document.createElement("button")
    const divEvento = document.createElement("div")
     
    contenedorEvento.appendChild(divEvento)

    btnEditar.innerHTML = "Eliminar"
    btnEliminar.innerHTML = "Editar"
    btnGuardar.innerHTML = "Guardar"

    let concatenacion = campoTexto.value + " " + fecha.value
    textoEvento.innerHTML = concatenacion

    divEvento.appendChild(textoEvento)
    divEvento.appendChild(btnEliminar)
    divEvento.appendChild(btnEditar)

    divEvento.appendChild(evento)               

  } 
   
  if (seleccionar.value === "tarea") {
    const textoTarea = document.createElement("p")
    const btnEliminar = document.createElement("button")
    const btnEditar = document.createElement("button")
    const btnGuardar = document.createElement("button")
    const divTarea = document.createElement("div")
     
    contenedorTarea.appendChild(divTarea)

    btnEditar.innerHTML = "Eliminar"
    btnEliminar.innerHTML = "Editar"
    btnGuardar.innerHTML = "Guardar"

    let concatenacion = campoTexto.value + " " + fecha.value
    textoTarea.innerHTML = concatenacion

    divTarea.appendChild(textoTarea)
    divTarea.appendChild(btnEliminar)
    divTarea.appendChild(btnEditar)

    tarea.appendChild(divTarea)               

  }
})
