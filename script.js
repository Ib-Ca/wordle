const adivina_boton = document.getElementById("adivina_boton");
const palabra_recibida = document.getElementById("adivina");
const grid = document.getElementById("grid");
const row = document.createElement("div");
row.className = "row";

let total_intentos = 6;
let palabras = ["PERRO", "BARCO", "MESAS", "PATIO"];
const palabra = palabras[Math.floor(Math.random() * palabras.length)];
window.addEventListener("load", carga);

function carga() {
  console.log("Esto se ejecuta solo cuando se carga la pagina web");
}

adivina_boton.addEventListener("click", intentar);
function intentar() {
  const intento = leer();
  if (intento === palabras) {
    final("<h1>GANASTE!:DD</h1>");
    return;
  }
  for (let i in palabra) {
    const span = document.createElement("span");
    span.className = "letter";
    if (intento[i] === palabra[i]) {
      //VERDE
      span.innerHTML = intento[i];
      span.style.backgroundColor = "#79b851";
    } else if (palabra.includes(intento[i])) {
      //AMARILLO
      span.innerHTML = intento[i];
      span.style.backgroundColor = "#f3c237";
    } else {
      //GRIS
      span.innerHTML = intento[i];
      span.style.backgroundColor = "#a4aec4";
    }
    row.appendChild(span);
  }
  grid.appendChild(row);
  total_intentos--;
  if (total_intentos == 0) {
    final("<h1>PERDISTE!:((</h1>");
  }
}
function final(mensaje) {
  palabra_recibida.disabled = true;
  adivina_boton.disabled = true;
  let contenedor = document.getElementById("intentos");
  contenedor.innerHTML = mensaje;
}

function leer() {
  let palabra_recibida = document.getElementById("adivina");
  palabra_recibida = palabra_recibida.value;
  palabra_recibida = palabra_recibida.toUpperCase();
  return palabra_recibida;
}
