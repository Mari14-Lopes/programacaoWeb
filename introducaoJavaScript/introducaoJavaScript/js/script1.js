/*Variavel:
        cons(valor nao muda, usar sempre por padrão)
        let(quando o valor pode mudar)
        usar nada(variavel global,evitar usar)*/
/*
let idade = prompt("Digite sua idade:");
let idadeMaxima = prompt("Digite sua idade máxima de vida:");
let quantidade = prompt("Digte a quantidade de lanches por dia");
let calculo = (idadeMaxima - idade) * quantidade;
let imprime = `Você precisará de ${calculo} laches para durar até a velhice de ${idadeMaxima} anos.`;

document.getElementById("lanche").innerHTML = imprime;
*/

function funcaoCalcular(){
        let idade = document.getElementById("idade").value;
        let idadeMaxima = document.getElementById("idade_maxima").value;
        let quantidade = document.getElementById("quantidade").value;
        let calculo = (idadeMaxima - idade) * (quantidade * 365);
        let imprime = `Você precisará de ${calculo} laches para durar até a velhice de ${idadeMaxima} anos.`;

        alert(imprime);
}
