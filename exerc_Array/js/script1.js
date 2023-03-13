function imprimir() {
    let cores = ["Azul", "Amarelo", "Vermelho", "Verde", "Preto", "Branco"]
    let tamanho = cores.length;
    document.getElementById("escolha").innerHTML = "";
    for(i in cores) {
        let cor = cores[i];
        let imprima = "Minha escolha " + i + " é " + cor + "<br>";
        document.getElementById("escolha").innerHTML += imprima;
        i++;
    }
}