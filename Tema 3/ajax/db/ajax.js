/* 1. Usa el fichero randomuser.me.100.json para “levantar” un 
JSON Server y obtener 10 imágenes de hombres o de mujeres 
(elige una opción en el selector) y muéstralas en el navegador 
(no hace falta que borres las anteriores). Debes tener control de errores 
mediante catch. [2p] */

// variables
const d = document
const $divUsuarios = d.querySelector(".contenedor")
const $btnMostrar = d.getElementById("mostrarBtn")

// funcion para obtener los usuarios
const obtenerUsuarios = (json) => {
    // recoger sexo seleccionado
    let sexo = d.querySelector("#usuarios").value
    // cambiar nombre a inglés
    if(sexo == 'mujeres') {
        sexo = 'female'
    } else {
        sexo = 'male'
    }
    let usuarios = json
    // creo variable para mostrar solo 10 imágenes
    let cont = 0
    // recorre un array y muestra la imagen de personas de ese sexo
    usuarios.forEach(el => {
        if(el.gender == sexo && cont < 10) {
            let aux = parseInt(Math.random() * 2) // creo nº aleatorio, si es 1 pinta, si es 0 no pinta
            if(aux == 1) {
                // creo las etiquetas
                let img = d.createElement("img")
                let figure = d.createElement("figure")
                // añado los datos
                img.src = el.picture.large
                // añado la etiqueta al div principal
                figure.appendChild(img)
                $divUsuarios.appendChild(figure)
                // aumento el contador
                cont++
            }
        }
    })
}

/* 2. Usa el fichero reqres.in.users.json para “levantar” un 
JSON Server y crear un usuario con un nombre, correo y una url 
de una imagen (puedes inventarte los datos y que la URL, por
ejemplo no sea válida). Debes tener en cuenta que el id que le 
asigne el programa debe ser uno que no exista ya. Debes tener 
control de errores mediante catch. [2p] */

// variables
const $contenedor2 = d.querySelector(".contenedor2")
const $btnCrear = d.getElementById("crearBtn")

// funcion crear usuario
const crearUsuario = () => {
    // recojo los datos
    let nombre = d.getElementById("fName").value
    let apellido = d.getElementById("lName").value
    let email = d.getElementById("email").value
    let avatar = d.getElementById("avatar").value

    // añado el usuario
    fetch("http://localhost:3001/data", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({id: parseInt(Math.random() * 99999), email: email, first_name: nombre, last_name: apellido, avatar: avatar}),
    })
    .then(response => {
        console.log(response.status)
        return response
    })
    .then(response => response.json())
    .then(data => console.log(data));
}

// apartado 1
fetch("http://localhost:3000/results")
.then((responses) => responses.json())
.then((json) => {
    $btnMostrar.addEventListener("click", () => {
        obtenerUsuarios(json)
    })
})
.catch(error => console.error("Error: " + error))

// apartado 2
fetch("http://localhost:3001/data")
.then((responses) => responses.json())
.then((json) => {
    $btnCrear.addEventListener("click", crearUsuario)
    console.log(json)
})
.catch(error => console.error("Error: " + error))