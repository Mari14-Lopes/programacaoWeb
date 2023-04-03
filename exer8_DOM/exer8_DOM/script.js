const botao = document.getElementById("botao");
botao.addEventListener("click", validar);

function validar(evento) {
    //impede que o evento padrão ocorra
    evento.preventDefault();

    const usuario = document.getElementById("usuario").value
    const senha = document.getElementById("senha").value;
    const valid = true;

    if(!usuario && !senha){
        const error = document.getElementById("alerta");
        const error_senha = document.getElementById("alerta_senha");
        error.classList.add("visible");
        error_senha.classList.add("visible");
        usuario.setAttribute("aria-hidden", false);
        usuario.setAttribute("aria-hidden", true);
        senha.setAttribute("aria-hidden", false);
        senha.setAttribute("aria-hidden", true);
    }

    if(!usuario) {
        const error = document.getElementById("alerta");
        error.classList.add("visible");
        usuario.setAttribute("aria-hidden", false);
        usuario.setAttribute("aria-hidden", true);
    }

    if(!senha) {
        const error_senha = document.getElementById("alerta_senha");
        error_senha.classList.add("visible");
        senha.setAttribute("aria-hidden", false);
        senha.setAttribute("aria-hidden", true);
    }

    return valid;
}