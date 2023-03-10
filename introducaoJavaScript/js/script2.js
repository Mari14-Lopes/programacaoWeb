function calcularComprimento(){
    let raio = document.getElementById("raio").value;
    let comprimento = 2 * Math.PI * raio;
    let imprimeComprimento = `A circunferência tem ${comprimento}`;
    
    alert(imprimeComprimento);
    }

function calcularArea(){
    let raio = document.getElementById("raio").value;
    let area = (2 * Math.PI * raio)**2;
    let imprimeArea = `A área é ${area}`;

    alert(imprimeArea);
}
    
/*valores para teste:
raio = 4
comprimento = 25,12
area = 631,0144*/ 