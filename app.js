//Array para almacenar los nombres
let amigos = [];

//Funcion para agregar nombres
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigos");
    let nombreAmigo = inputAmigo.value.trim();

    //Validar que el campo no este vacio
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    //Validar que los nombres no esten duplicados
    if (amigos.includes(nombreAmigo)) {
        alert(`El nombre ${nombreAmigo} ya esta en la lista`);
        return;
    }

    //Agregar el nombre al array
    amigos.push(nombreAmigo);

    //Limpiar el campo de entrada
    inputAmigo.value = "";



}