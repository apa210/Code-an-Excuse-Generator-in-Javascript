/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Se agrega al evento onclick la funcion MostrarExcusa, esto ya ejecuta dicha funcion al cargar la pagina
  document.getElementById("btn-Mostrar").onclick = MostrarExcusa;
};

function MostrarExcusa() {
  //Se encarga de generar la excusa y modificar el html para mostrarla en pantalla

  //Declaracion de los arrays
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  //Se selecciona de forma random un item de cada array y se asigna a una variable
  let itemWho = who[Math.floor(Math.random() * who.length)];
  let itemWhat = what[Math.floor(Math.random() * what.length)];
  let itemWhen = when[Math.floor(Math.random() * when.length)];

  //Se concatena cada variable y se asigna a cadena
  let cadena = itemWho + " " + itemWhat + " " + itemWhen;

  //Se asigna la variable cadena al elemento parrafo con id excuse en el html
  document.getElementById("excuse").innerHTML = cadena;
}
