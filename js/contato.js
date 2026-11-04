/*
 * CONEXÃO TERRA — formulário de contato (simulação, nada é enviado).
 */
const formulario = document.getElementById("contact-form");
const retorno = document.getElementById("contact-feedback");
const botaoNovo = document.getElementById("contact-reset");

if (formulario && retorno && botaoNovo) {
    formulario.addEventListener("submit", evento => {
        evento.preventDefault();
        formulario.reset();
        formulario.hidden = true;
        retorno.hidden = false;
        retorno.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    botaoNovo.addEventListener("click", () => {
        retorno.hidden = true;
        formulario.hidden = false;
        formulario.reset();
        formulario.scrollIntoView({ behavior: "smooth", block: "start" });
        document.getElementById("nome")?.focus();
    });
}
