/*
Obtén el email, first_name, last_name y avatar (la imagen, no la URL) para un id de
usuario seleccionado por el usuario.
*/

fetch('https://reqres.in/api/users?page=1')
.then(response => {
    response = response.json()
    fetch('https://reqres.in/api/users?page=2')
    .then(response2 => {
        response2 = response2.json()
        return response2
    })
    .then(console.log)
    return response
})
.then(console.log)
.catch(error=>console.error(error))