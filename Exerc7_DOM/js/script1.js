function funcaoAluno() {
    const botao = document.createElement("button");
    const texto = document.createTextNode("CRIAR ALUNO");
    botao.appendChild(texto);
    const tela = document.getElementById("tela_aberta");
    tela.appendChild(botao);
    /*
    tela.style.border = "solid";
    botao.style.marginBottom = "500px";*/
    botao.onclick = function criaAluno() {
        const digiteNome = prompt("Digite o nome do aluno:");
        const nome = document.createElement("p");
        const textoNome = document.createTextNode(`Aluno ${digiteNome}`);
        nome.appendChild(textoNome);
        document.getElementById("tela_aberta").appendChild(nome);
    }
}

function funcaoProfessor() {
    const botao = document.createElement("button");
    const texto = document.createTextNode("CRIAR PROFESSOR");
    botao.appendChild(texto);
    const tela = document.getElementById("tela_aberta");
    tela.appendChild(botao);
    botao.onclick = function criarprofessor() {
        const digiteNome = prompt("Digite o nome do professor:");
        const nome = document.createElement("p");
        const textoNome = document.createTextNode(`Aluno ${digiteNome}`);
        nome.appendChild(textoNome);
        document.getElementById("tela_aberta").appendChild(nome);
    }    
}