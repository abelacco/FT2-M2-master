const { createStore } = require('redux');
const reducer = require('./reducer');
const { incremento, decremento , impar, async } = require('./actions');

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
var store = createStore(reducer);

// Obtenemos el elemento con el id `valor`.
var valor = document.querySelector("#valor");

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  let actualValue = store.getState().contador;
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
  valor.innerText = actualValue;
}

// Ejecutamos la funcion 'renderContador':

renderContador()

// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:

store.subscribe(renderContador)

// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:
let btnPlus = document.querySelector("#incremento");
btnPlus.onclick = ()  => store.dispatch(incremento())

let btnMinus = document.querySelector("#decremento");
btnMinus.onclick = ()  => store.dispatch(decremento())

let btnImpar = document.querySelector("#incrementoImpar");
btnImpar.onclick = ()  => store.dispatch(impar())



let btnAsync = document.querySelector("#incrementoAsync");
btnAsync.onclick = ()  => {
  setTimeout(() => {
    store.dispatch(incremento())
  }, 1000)
}
