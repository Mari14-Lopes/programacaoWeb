//selecionando item com nome "secao"
const cabecalho = document.querySelectorAll(".accordion-cabecalho");

//ao clicar em "secao" chamamos o metodo "toggleAccordion"
cabecalho.forEach((cabecalho) => {
    cabecalho.addEventListener("click", toggleAccordion);
});

//metodo para mostrar o conteudo da secao
function toggleAccordion(event) {
    const cabecalho = event.target;
    const conteudo = cabecalho.nextElementSibling;

    if(conteudo.style.display === "none" || conteudo.style.display === "") {
        fecharAccordion();
        conteudo.style.display = "block";
    } else {
        conteudo.style.display = "none";
    }
}

//metodo para a secao voltar para o estado inicial, fechada
function fecharAccordion(){
    const conteudo = document.querySelectorAll(".accordion-conteudo");

    conteudo.forEach((content) => {
        content.style.display = "none";
    });
}