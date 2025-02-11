//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let participantes = [];

function adicionarAmigo() {
    let nomeInput = document.getElementById("amigo");
    let nome = nomeInput.value.trim();
    
    if (nome && !participantes.includes(nome)) {
        participantes.push(nome);
        atualizarLista();
        nomeInput.value = "";
        
        // viz
        nomeInput.classList.add("added");
        setTimeout(() => nomeInput.classList.remove("added"), 500);
    }
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    participantes.forEach(nome => {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (participantes.length < 2) {
        alert("É necessário pelo menos 2 participantes para o sorteio.");
        return;
    }
    
    let sorteadoIndex = Math.floor(Math.random() * participantes.length);
    let sorteado = participantes[sorteadoIndex];
    
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";
    
    let mensagem = document.createElement("p");
    mensagem.textContent = "Sorteando...";
    mensagem.classList.add("suspense");
    resultadoDiv.appendChild(mensagem);
    
    setTimeout(() => {
        mensagem.textContent = `Seu amigo secreto é: ${sorteado}`;
        mensagem.classList.remove("suspense");
        mensagem.classList.add("revelado");
    }, 2000);
}

// style
document.head.insertAdjacentHTML("beforeend", `
    <style>
        .added {
            background-color: #d4edda;
            transition: background-color 0.5s ease;
        }
        .suspense {
            font-size: 1.5rem;
            color: gray;
            animation: blink 1s infinite alternate;
        }
        .revelado {
            font-size: 1.8rem;
            font-weight: bold;
            color: #28a745;
        }
        @keyframes blink {
            from { opacity: 0.4; }
            to { opacity: 1; }
        }
    </style>
`);
