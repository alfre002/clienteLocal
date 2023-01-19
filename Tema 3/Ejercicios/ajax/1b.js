/* Obtén el email, first_name, last_name y avatar (la imagen, no la URL) para un id de
usuario seleccionado por el usuario. */

// selecciono input
let input = document.querySelector('input')

input.addEventListener("blur", function(e) {
    let id = input.value

    if(id > 0 && id < 13) {
        fetch(`https://reqres.in/api/users/${id}`)
        .then((response) => response.json())
        .then((miembro) => mostrar(miembro))
        .catch((ex) => console.log(ex))
    } else {
        ponerMensaje("El id debe estar entre 1 y 12,", input)
    }
})

// funcion para mostrar los datos del usuario escogidos
function mostrar(jsonObj) {
    let usuario = jsonObj['data']
    let body = document.querySelector('body')
    // creo un div para el usuario
    let div = document.createElement('div')
}