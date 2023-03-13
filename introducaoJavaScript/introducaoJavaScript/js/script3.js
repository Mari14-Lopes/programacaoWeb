function traduz(){
    let pais = document.getElementById("idioma").value;
    if(pais == "fr") {
        alert("Bonjour tout le monde!")
    } else if(pais == "es") {
        alert("Hola, Mundo!")
    } else {
        alert("Hello World!")
    }
}