//Array para almacenar los nombres
let amigos = [];

//Funcion para agregar nombres
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.ariaValueMax.trim();

    //Validar que el campo no este vacio
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    //Validar que los nombres no esten duplicados
    if (amigos.includes(nombreAmigo)) {
        alert(`El nombre ${nombreAmigo}` ya esta en la lista);
    }

    //Agregar el nombre al array
    amigos.push(nombreAmigo);

    //Limpiar el campo de entrada
    inputAmigo.ariaValueMax = "";

    //Actualizar lista
    actualizarLista();

}

//Funcion para actualizar la lista


//Funcion para seleccionar amigo aleatoriamente

