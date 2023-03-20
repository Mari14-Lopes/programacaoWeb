function imprimir(){
    let numeros = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let romano = "";
    let numero = document.getElementById("numero").value;
    for (i in numeros) {
        if(numero == numeros[i]){
            romano += romanos[i];
            document.getElementById("imprimir").innerHTML = romano;
        }
    }
    
}

