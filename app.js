//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];
const lista = document.getElementById("listaAmigos");
const inputNome = document.getElementById("amigo");
const resultado = document.getElementById("resultado");

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const nomeAmigo = inputNome.value.trim();

    if (!nomeAmigo) {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (listaDeAmigos.includes(nomeAmigo)) {
        alert("Amigo já adicionado.");
        return;
    }

    listaDeAmigos.push(nomeAmigo);
    atualizarLista();
    inputNome.value = ""; // Limpa o campo de entrada
}

// Função para atualizar a lista exibida na interface
function atualizarLista() {
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    listaDeAmigos.forEach((amigo, index) => {
        const item = document.createElement("li");
        item.textContent = amigo;

        // Criar botão de remover
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.classList.add("button-remove"); // Adiciona a classe button-remove
        botaoRemover.onclick = () => removerAmigo(index);

        item.appendChild(botaoRemover);
        lista.appendChild(item);
    });
}

// Função para remover um amigo da lista 
function removerAmigo(index) {
    listaDeAmigos.splice(index, 1);
    atualizarLista();
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortear.");
        return;
    }

    const amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}

// Função para limpar a lista e o resultado do sorteio
function limparLista() {
    listaDeAmigos = [];
    atualizarLista();
    resultado.innerHTML = "";
}