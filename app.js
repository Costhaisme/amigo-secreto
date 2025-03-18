
let listaNomes = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome) {
        listaNomes.push(nome);
        atualizarListaAmigos();
        input.value = '';
    } else {
        alert('Por favor, digite um nome válido.');
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    listaNomes.forEach((nome) => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaNomes.length < 2) {
        alert('Adicione pelo menos dois nomes para sortear.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaNomes.length);
    const amigoSorteado = listaNomes[indiceSorteado];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo secreto: ${amigoSorteado}</li>`;
}

document.getElementById('adicionarAmigo').addEventListener('click', function() {
    const amigo = document.getElementById('amigo');
    const nome = amigo.value.trim();

    if(nome) {
        const listaAmigos = document.getElementById('listaAmigos');
        const li = document.createElement('li');
        li.textContent = nome;

        listaAmigos.appendChild(li);

        amigo.value = '';
    }else {
        alert('Por favor, digite um nome válido');
    }
})