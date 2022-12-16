/* 1. Al marcar el checkbox Colores, crea un select justo debajo con una primera opción llamada
“Selecciona color” y después 10 opciones con 10 colores de fondo diferentes y aleatorios.
[1,5 p]
Al desmarcar este checkbox el select se elimina, el fondo se pone de un color aleatorio y
se puede volver a marcar el checkbox Colores para volver a seleccionar un color. [1p]
Al seleccionar un color en el select el fondo de la página cambiará de color. [2,5p] */

const d = document;

// selecciono checkbox
const checkbox = d.getElementById("colores");

// funcion crear select
const crearSelect = (checkbox) => {
  // CHECKBOX PASA A TRUE
  // crear select
  const select = d.createElement("select");
  if (checkbox.checked == true) {
    // le añado un id al select para borrarlo luego si hace falta
    select.id = "select"
    // creo las options
    const option1 = d.createElement("option");
    option1.textContent = "Selecciona una opción";
    select.appendChild(option1);
    for (let i = 0; i < 10; i++) {
      // creo 10 options con colores aleatorios
      const option = d.createElement("option");
      const colorAle =
        "rgb(" +
        parseInt(Math.random() * 256) +
        "," +
        parseInt(Math.random() * 256) +
        "," +
        parseInt(Math.random() * 256) +
        ")";
      option.textContent = colorAle;
      option.style.backgroundColor = colorAle;
      // meto las options en el select
      select.appendChild(option);
    }
    // meto el select debajo del div
    const colores = d.querySelector(".colores");
    colores.insertAdjacentElement("afterend", select);

    // cambio color de fondo dependiendo del valor del select
    select.addEventListener("change", function () {
      d.body.style.backgroundColor = select.value;
    });
  }

  // CHECKBOX PASA A FALSE
  if (checkbox.checked == false) {
    // borrar select
    const select = d.getElementById("select")
    select.remove()
    // color de fondo aleatorio
    d.body.style.backgroundColor =
      "rgb(" +
      parseInt(Math.random() * 256) +
      "," +
      parseInt(Math.random() * 256) +
      "," +
      parseInt(Math.random() * 256) +
      ")";
  }
};

// evento checkbox
checkbox.addEventListener("change", function () {
  crearSelect(checkbox);
});

/* 2. Valida al enviar el formulario (si las validaciones son correctas debe enviar el formulario):
[3,5p]
a. El usuario no puede tener espacios ni estar vacío, ni tener más de 5 caracteres.
[1p]
b. El mensaje no puede tener los caracteres: “¡,¿”, ni estar vacío. [1p]
c. Debe haber marcado, al menos, 2 colores. [1,5p]
Los mensajes de error se mostrarán debajo de cada elemento que lo haya producido,
durante 3 segundos de color rojo (mediante una clase CSS). El mensaje puede ser
genérico para cada elemento (por ejemplo, tienes que indicar que el elemento del error es
el usuario, pero no que es por no tener espacios o estar vacío). Deben mostrarse todos los
errores que se produzcan al enviar al formulario. [1,5p] */

// selecciono formulario
const formulario = d.querySelector(".formulario");

// funcion validar campos
const validarCampos = () => {
  // selecciono los campos
  let usuario = d.querySelector(".campo_usuario");
  let mensaje = d.querySelector(".campo_mensaje");
  let listaColores = d.querySelectorAll("[name='color_preferido']");

  // comprobar colores marcados
  let coloresMarcados = (Array.from(listaColores).filter(item=>item.checked)).length

  // variable para no enviar el formulario si no es correcto
  let esOk = true;

  // validar campo usuario
  if (usuario.value == "" || !validarUsuario(usuario.value) || usuario.value.length > 5) {
    mensajeError("Usuario incorrecto.", usuario);
    esOk = false;
  }

  // validar campo mensaje
  if (mensaje.value == "" || !validarMensaje(mensaje.value)) {
    mensajeError("Mensaje incorrecto.", mensaje);
    esOk = false;
  }

  // validar colores
  const divColores = d.querySelector(".divColores")
  if(coloresMarcados < 2) {
    mensajeError("No has seleccionado al menos 2 colores", divColores)
    esOk = false
  }

  return esOk

};

// evento enviar formulario
formulario.addEventListener("submit", function (e) {
  if (!validarCampos()) {
    e.preventDefault();
    return false;
  }
});

// funcion mensaje de error
const mensajeError = (mensaje, elemento) => {
  // el mensaje de error va a tener un estilo marcado por una clase y se va a situar debajo de su correspondiente elemento
  let error = d.createElement("p");
  error.className = "error";
  error.textContent = mensaje;
  elemento.insertAdjacentElement("afterend", error);
  setTimeout(() => {
    error.remove();
  }, 3000);
};

// funcion validar nombre
const validarUsuario = (usuario) => {
  // expresion regular
  const exp = new RegExp(/^[a-zA-Z0-9]+$/);
  if (!exp.test(usuario)) {
    return false;
  } else {
    return true;
  }
};

// funcion validar mensaje
const validarMensaje = (mensaje) => {
  // expresion regular
  const exp = new RegExp(/[^¡]+[^¿]+.+$/);
  if (!exp.test(mensaje)) {
    return false;
  } else {
    return true;
  }
};