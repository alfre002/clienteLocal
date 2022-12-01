// 1. Dado un vector de objetos literales con el siguiente formato: {nombreCompleto:”Ana Pérez
//     Soler”, DNI: “21147465T”, edad: 21}:
//     a. Crea una función que reciba como parámetro el array original y devuelva un array
//     con los identificadores de los usuarios. Para ello debes coger la primera letra
//     (minúsculas y sin tildes) del nombre, las tres primeras letras del primer apellido
//     (minúsculas y sin tildes), las tres primeras del segundo apellido (minúsculas y sin
//     tildes) y los tres últimos dígitos del DNI. Usa la función map.(3p)
//     NOTA: Se entiende que los nombres y los apellidos no son compuestos y todos
//     tienen tres o más caracteres.
//     b. Crea una función que reciba como parámetro el array original y devuelva un array
//     con los DNI que sean válidos. NOTA: Los DNI pueden tener la letra en mayúscula o
//     minúscula pero no tienen un separador entre número y letra. Usa la función filter y
//     map. (3p)
//     c. Crea una función que reciba como parámetro el array original y devuelva un array
//     con los objetos ordenados por edad de mayor a menor. NOTA: Usar la función sort.
//     (2p)
//     d. Crea una función que reciba como parámetro el array original y devuelva un array
//     con las edades que sean números casi primos (es un número que solo es divisible
//     por sí mismo, la unidad y por un solo número que no sea ni la unidad ni si mismo).
//     Usa la función filter y map. (2p)

// vector de objetos literales
let persona = [{nombreCompleto:"Ana Pérez Soler", DNI: "21147465T", edad: 4},
    {nombreCompleto:"Álvaro García Castro", DNI: "24545535G", edad: 32},
    {nombreCompleto:"Paloma González Máxim", DNI: "45678912L", edad: 9},
    {nombreCompleto:"Alberto Alguacil Alcalde", DNI: "79753330W", edad: 17}
    ]
    

// funcion a - funciona bien si persona es un unico objeto literal y no es un array de objetos literales
const identificadores = (array) => {
  let nombres = array.nombreCompleto.toLowerCase().split(" ") // separo los nombres
  let aux = [];
  let final = ""
  aux = nombres.map(valor => valor[0] + valor[1] + valor[2]) // lo acorto en 3 caracteres
  final += aux[0][0] // sumo el 1er caracter del nombre
  final += aux[1] // sumo 3 caracteres del 1er apellido
  final += aux[2] // sumo 3 caracteres del 2o apellido

  aux = array.DNI.split().map(valor => valor[5] + valor[6] + valor[7]) // cojo 3 ultimos numeros dni
  final += aux // lo sumo al resultado final

  return final
};

// console.log(identificadores(persona));

// funcion b
// Crea una función que reciba como parámetro el array original y devuelva un array
// con los DNI que sean válidos. NOTA: Los DNI pueden tener la letra en mayúscula o
// minúscula pero no tienen un separador entre número y letra. Usa la función filter y
// map. (3p)

const dniValido = array => {
    let correcto = new RegExp(/[0-9]{8}[A-Z]{1}/)
    
    return array.filter(dni => correcto.test(dni))
}

// console.log(dniValido(persona))

// funcion c
// Crea una función que reciba como parámetro el array original y devuelva un array
// con los objetos ordenados por edad de mayor a menor. NOTA: Usar la función sort.
// (2p)

const ordenaEdad = array => {
    return array.sort((a, b) => (b.edad - a.edad))
}

// console.log(ordenaEdad(persona))

// funcion d 
// Crea una función que reciba como parámetro el array original y devuelva un array
// con las edades que sean números casi primos (es un número que solo es divisible
// por sí mismo, la unidad y por un solo número que no sea ni la unidad ni si mismo).
// Usa la función filter y map. (2p)

const primos = array => {
    if(typeof(array.edad) === 'number') {
        for (let i = array.edad - 1; i >= 2; i--) {
            if(array.edad % i === 0) return false
        }
        return true
    } else {
        return false
    }
}

let primo = persona.filter((valor) => primos(valor))
// console.log(primo)

