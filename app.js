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

    //Actualizar lista
    actualizarLista();


}

//Funcion para actualizar la lista
function actualizarLista(){
    let listaAmigos = document.getElementById('listaAmigos');

    //Limpiar el contenido de la lista
    listaAmigos.innerHTML = "";

    //Recorrido con ciclo for
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }

}

//Funcion para seleccionar amigo aleatoriamente
function sortearAmigo() {
    //Validar que existan nombres disponibles
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear. Coloca al menos dos amigos.")
        return;
    }

    //Agrega un indice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); 

    //Resultado del amigo secreto
    let amigoSorteado = amigos[indiceAleatorio];

    //Visializar el resultado en el HTML
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
