//Array para almacenar los nombres
let amigos = [];

//Funcion para agregar nombres
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
