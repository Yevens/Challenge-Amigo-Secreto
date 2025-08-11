// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//crea un array que almacena nombres
let nombresIngresados = [];

//Función que agrega los nombres de los amigos
function agregarAmigo() {
    let inputNombre = document.getElementById("amigo");
    let nombresAmigos = inputNombre.value.trim();

    //verificar que no esté vacío
    if (nombresAmigos === '') {
        alert ('Escribe los nombres de tus amigos.');
        return;
    } 

    // Agregar el nombre ingresado a la lista y actualiza
    nombresIngresados.push(nombresAmigos);
    actualizarGrupo();
    inputNombre.value = ''; //Limpiar

    //console.log (nombresAmigos)
    //console.log (nombresIngresados)
}

//Función que elige al amigo secreto
function sortearAmigo() {
    if (nombresIngresados.length === 0) {
        alert('Ingrese nombres para sortear.');
        return;
    }

    //Genera indice aleatorio
    const indicadorDeAzar = Math.floor(Math.random() * nombresIngresados.length);
    const amigoSecreto = nombresIngresados [indicadorDeAzar];

    //Mostrar el resultado
    document.getElementById('resultado').textContent =`¡El amigo secreto seleccionado es: ${amigoSecreto}!`;
}

//Función para actualizar la lista de amigos en el DOM
function actualizarGrupo() {
    let grupoDeAmigos = document.getElementById('listaAmigos');
    grupoDeAmigos.innerHTML = ''; //Limpia la lista existente

    //Crea elementos de lista para cada amigo
    nombresIngresados.forEach(nombres => {
        let li = document.createElement ('li');
        li.textContent = nombres;
        grupoDeAmigos.appendChild(li);
    });
}

//Función para rEiniciar el Juego
function reiniciarJuego() {
    nombresIngresados = []; //Vacía el arreglo de nombres
    document.getElementById ('listaAmigos').innerHTML = ''; //Limpia la lista de nombres de la página
    document.getElementById ('resultado').textContent = ''; // Borra el resultado
    document.getElementById ('amigo').value =''; //Limpia el input de texto
}