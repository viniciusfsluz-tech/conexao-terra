/*
 * CONEXÃO TERRA — menu principal gerado a partir do array itensMenu (config.js).
 * A página atual é marcada com a classe "active" e aria-current="page".
 * A página de detalhe (trabalho.html) destaca o item "Trabalhos".
 */

function criarMenu(paginaAtual = "") {
    const nav = document.querySelector("#menu-principal");
    if (!nav) return;

    nav.innerHTML = itensMenu.map(item => {
        const atual = item.pagina === paginaAtual;
        return `<a href="${item.href}"${atual ? ' class="active" aria-current="page"' : ""}>${item.texto}</a>`;
    }).join("");
}

criarMenu(document.body.dataset.page);
