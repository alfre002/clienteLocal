/* 1. Las siguientes verificaciones se realizarán al perder el foco del campo del formulario:
a. El campo Nombre y apellidos no puede tener números. [2p]
b. El campo Fecha de nacimiento debe ser anterior a 2010. [2p]
2. Las siguientes verificaciones se realizarán al enviar el formulario:
a. Todas las anteriores. [1p]
b. Todos los campos deben tener contenido y/o haber seleccionado una opción. [3p]
3. Los mensajes de error de las verificaciones durarán 5 segundos y estarán debajo del
campo en cuestión con un formato proporcionado por una clase CSS (color rojo). [2p] */

const d = document

// selecciono input nombre
const campoNombre = d.querySelector(".nombreApellidos")

// funcion validar nombre
const validarNombre = (nombre) => {
    // expresion regular
    const exp = new RegExp(/[ a-zA-Z]/)
    if(!exp.test(nombre)) {
        return false
    } else {
        return true
    }
}

// funcion error nombre
const errorNombre = (nombre) => {
    if(!validarNombre(nombre)) {
        // creo mensaje de error y lo meto debajo del div de nombre
        const divNombre = d.querySelector(".divNombre")
        const error = d.createElement("label")
        error.textContent = "Nombre incorrecto."
        error.className = "error"
        divNombre.insertAdjacentElement("afterend", error)
        // se borra a los 5 segundos
        setInterval(function () {error.remove()}, 5000)
    } 
}

// evento nombre
campoNombre.addEventListener("blur", function(e) {
    // recojo nombre
    let nombre = d.querySelector(".nombreApellidos")
    if(!errorNombre(nombre.value)) {
        // no se envia el formulario
        e.preventDefault()
    }
})

// selecciono campo fecha
const campoFecha = d.querySelector(".fecha")

// funcion validar fecha
const validarFecha = (fecha) => {
    if(fecha.split('-')[0] > 2010) {
        return false
    } else {
        return true
    }
}

// funcion error fecha
const errorFecha = (fecha) => {
    if(!validarFecha(fecha)) {
        // creo mensaje de error y lo meto debajo del div de fecha
        const divFecha = d.querySelector(".divFecha")
        const error = d.createElement("label")
        error.textContent = "Fecha incorrecta."
        error.className = "error"
        divFecha.insertAdjacentElement("afterend", error)
        // se borra a los 5 segundos
        setInterval(function () {error.remove()}, 5000)
    }
}

// evento fecha
campoFecha.addEventListener("blur", function(e) {
    // recojo fecha
    let fecha = d.querySelector(".fecha")
    if(!errorFecha(fecha.value)) {
        // no se envia el formulario
        e.preventDefault()
    }
})

// selecciono boton enviar
const btnEnviar = d.querySelector(".enviar")

// evento enviar
btnEnviar.addEventListener("click", function(e) {
    // recojo valores de todos los campos
    let nombre = d.querySelector(".nombreApellidos")
    let longCorreo = d.querySelector(".correo").value.length
    let fecha = d.querySelector(".fecha")
    let longMensaje = d.querySelector(".textarea").value.length

    // comprobar que todos los campos son válidos y no están vacíos
    if(!errorNombre(nombre.value) || !errorFecha(fecha.value) || !errorMensaje(longMensaje) || !errorCorreo(longCorreo)) {
        e.preventDefault()
    }  
    if(!validarCorreo(longCorreo)) {
        // creo mensaje de error y lo meto debajo del div de fecha
        const divCorreo = d.querySelector(".divCorreo")
        const error = d.createElement("label")
        error.textContent = "Correo vacío."
        error.className = "error"
        divCorreo.insertAdjacentElement("afterend", error)
        // se borra a los 5 segundos
        setInterval(function () {error.remove()}, 5000)
    }
})

// funcion validar mensaje
const validarMensaje = (mensaje) => {
    if(mensaje == 0) {
        return false
    } else {
        return true
    }
}

// error mensaje
const errorMensaje = (mensaje) => {
    if(!validarMensaje(mensaje)) {
        // creo mensaje de error y lo meto debajo del div de fecha
        const divMensaje = d.querySelector(".divMensaje")
        const error = d.createElement("label")
        error.textContent = "Mensaje vacío."
        error.className = "error"
        divMensaje.insertAdjacentElement("afterend", error)
        // se borra a los 5 segundos
        setInterval(function () {error.remove()}, 5000)
    }
}

// funcion error correo
const errorCorreo = (longCorreo) => {
    if(!validarCorreo(longCorreo)) {
        // creo mensaje de error y lo meto debajo del div de fecha
        const divCorreo = d.querySelector(".divCorreo")
        const error = d.createElement("label")
        error.textContent = "Correo vacío."
        error.className = "error"
        divCorreo.insertAdjacentElement("afterend", error)
        // se borra a los 5 segundos
        setInterval(function () {error.remove()}, 5000)
    }
}

// funcion validar correo
const validarCorreo = (longCorreo) => {
    if(longCorreo == 0) {
        return false
    } else {
        return true
    }
}