function imprimir(){
    let numeros = [1, 2, 3, 4, 5];
    let retorno = numeros.map(function(numeroQuadrado) {
        return numeroQuadrado ** 2;
    });
    document.getElementById("imprimir").innerHTML = retorno; 
}