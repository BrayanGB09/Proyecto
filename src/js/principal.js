const campoTexto = document.getElementById("campoTexto")
const campoFecha = document.getElementById("campoFecha")
const btnGuardar = document.getElementById("btnGuardar")
const seleccionar = document.getElementById("seleccionar")
const contenedorEvento = document.getElementById("contenedorEvento")
const contenedorTarea = document.getElementById("contenedorTarea")

btnGuardar.addEventListener("click", function () {   
    
    if (seleccionar.value === "evento") {

        const textoEvento = document.createElement("p")
        const btnEliminar = document.createElement("button")
        const btnEditar = document.createElement("button")
        const modificarEvento = document.createElement("input")
        const divEvento = document.createElement("div")

        btnEliminar.innerHTML = "Eliminar"
        btnEditar.innerHTML = "Editar"

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
            const btnEliminar2 = document.createElement("button")
            const btnEditar2 = document.createElement("button")
            const modificarTarea = document.createElement("input")
            const divTarea = document.createElement("div")

            btnEliminar2.innerHTML = "Eliminar"
            btnEditar2.innerHTML = "Editar"

            textoTarea.innerHTML = campoTexto.value
            contenedorTarea.appendChild(textoTarea)

            contenedorTarea.appendChild(divTarea)

            let conca2 = campoTexto.value + " " + campoFecha.value
            textoTarea.innerHTML = conca2

            divTarea.appendChild(textoTarea)
            divTarea.appendChild(btnEliminar2)
            divTarea.appendChild(btnEditar2)
            divTarea.appendChild(modificarTarea)

            btnEliminar2.addEventListener("click", function () {
                divTarea.removeChild(textoTarea)
                divTarea.removeChild(btnEliminar2)
                divTarea.removeChild(btnEditar2)
                divTarea.removeChild(modificarTarea)

            })

            btnEditar2.addEventListener("click", function () {
                textoTarea.innerHTML = modificarTarea.value
    
            })

        }
    }
})