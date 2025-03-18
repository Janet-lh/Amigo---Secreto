let listaDeAmigos = [];
let amigoSecreto = 0;

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value.trim();

    if (amigo == "") {
        alert("Por favor, inserte un nombre");
    }if (listaDeAmigos.includes(amigo)) {
        alert("El nombre ya esta en la lista");
    } else {
        listaDeAmigos.push(amigo);
        limpiarCaja();
        mostrarLista();
    } 
    return;
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function mostrarLista() {
    
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < 4; i++) {
        let li = document.createElement("li");
        li.textContent = listaDeAmigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert('Debes ingresar al menos 2 nombres');
    } else {
        let index = Math.floor(Math.random() * listaDeAmigos.length);
        amigoSecreto = listaDeAmigos[index];
    }
    console.log(amigoSecreto);
    let elementoHTML = document.getElementById('resultado');
    elementoHTML.innerHTML = `<li>Tu amigo secreto es: ${amigoSecreto}!!</li>`
}

