const campoTexto = document.getElementById("campoTexto")
const campoFecha = document.getElementById("campoFecha")
const guardar = document.getElementById("guardar")
const seleccionar = document.getElementById("seleccionar")
const contenedorEvento = document.getElementById("contenedorEvento")
const contenedorTarea = document.getElementById("contenedorTarea")

guardar.addEventListener("click", function () {
    if (seleccionar.value === "evento") {
        
        const textoEvento = document.createElement("p")
        const btnEliminar = document.createElement("button")
        const btnEditar = document.createElement("button")
        const btnGuardar = document.createElement("button")
        const modificarEvento = document.createElement("input")
        const divEvento = document.createElement("div")

        btnEliminar.innerHTML = "Eliminar"
        btnEditar.innerHTML = "Editar"
        btnGuardar.innerHTML = "Guardar"

        textoEvento.innerHTML = campoTexto.value
        contenedorEvento.appendChild(textoEvento)

        contenedorEvento.appendChild(divEvento)

        let conca1 = campoTexto.value + " " + campoFecha.value
        textoEvento.innerHTML = conca1

        divEvento.appendChild(textoEvento)
        divEvento.appendChild(btnEliminar)
        divEvento.appendChild(btnEditar)
        divEvento.appendChild(modificarEvento)

        btnEliminar.addEventListener("click", function () {
            divEvento.removeChild(textoEvento)
            divEvento.removeChild(btnEliminar)
            divEvento.removeChild(btnEditar)
            divEvento.removeChild(modificarEvento)
        })

        btnEditar.addEventListener("click", function () {
            textoEvento.innerHTML = modificarEvento.value

        })
    
    }

    else{

        if (seleccionar.value === "tarea") {
            const textoTarea = document.createElement("p")
            const btnEliminar = document.createElement("button")
            const btnEditar = document.createElement("button")
            const btnGuardar = document.createElement("button")
            const divTarea = document.createElement("div")

            btnEliminar.innerHTML = "Eliminar"
            btnEditar.innerHTML = "Editar"
            btnGuardar.innerHTML = "Guardar"

            textoTarea.innerHTML = campoTexto.value
            contenedorTarea.appendChild(textoTarea)

            contenedorTarea.appendChild(divTarea)

            let conca2 = campoTexto.value + " " + campoFecha.value
            textoTarea.innerHTML = conca2

            divTarea.appendChild(textoTarea)
            divTarea.appendChild(btnEliminar)
            divTarea.appendChild(btnEditar)

            btnEliminar.addEventListener("click", function () {
                divTarea.removeChild(textoTarea)
                divTarea.removeChild(btnEliminar)
                divTarea.removeChild(btnEditar)})

        }
    }
})