/* En la siguiente web de ejemplo implementa el método de almacenamiento de LocalStorage para
poder almacenar un nombre y una puntuación asociada y mostrar una “tabla” con las 3 mejores
puntuaciones (aunque se guardan todas) y poder eliminarlas. */

const d = document
const btnGuardar = d.getElementById("guardarBtn")
let cont = 0
let alumnos = [
    nombre = {},
    puntos = {}
]

// funcion guardar
const guardar = () => {
    /* alumnos.nombre.push(d.getElementById("nombre").value)
    alumnos.puntos.push(d.getElementById("puntos").value) */
    alumnos[nombre] = d.getElementById("nombre").value
    alumnos[puntos] = d.getElementById("puntos").value
    console.log(alumnos[nombre])
    console.log(alumnos[puntos])

    localStorage.setItem('alumnos', alumnos)
    console.log(alumnos)

    // mostrar top 3 puntuaciones
    // añado las 3 primeras y a partir de la 4ª compruebo si es mayor que el top3, si es correcto, la añado por la nota más baja del top3
    let tabla = d.querySelector("table")
    if(cont < 3) {
        let alumnosRec = localStorage.getItem("alumnos")
        console.log(alumnosRec.nombre)

        // creo una fila
        let fila = d.createElement("tr")

        // creo las celdas y añado los valores correspondientes
        let celdaNombre = d.createElement("td")
        celdaNombre.textContent = localStorage.getItem("alumnos").nombre
        let celdaPuntos = d.createElement("td")
        celdaPuntos.textContent = localStorage.getItem("alumnos").puntos
        let btnBorrar = d.createElement("button")
        btnBorrar.textContent = "X"

        // añado las celdas a la fila y la fila a la tabla
        fila.appendChild(celdaNombre)
        fila.appendChild(celdaPuntos)
        fila.appendChild(btnBorrar)
        tabla.appendChild(fila)

        cont++
        
    }


}

// evento para el boton guardar
btnGuardar.addEventListener("click", guardar)