/*
 * CONEXÃO TERRA — lista, filtros, busca e página de detalhe dos trabalhos.
 * Os dados vêm de js/dados.js (array "trabalhos").
 */

/* ---------- Funções de apoio ---------- */

// Tira acentos e maiúsculas para a busca ("agua" encontra "Água")
const normalizar = (valor = "") => valor
    .toLocaleLowerCase("pt-BR")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

// Evita que texto vire HTML por acidente
function escaparHTML(valor = "") {
    return String(valor).replace(/[&<>"']/g, caractere => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[caractere]);
}

// "2026-10-29" (ano-mês-dia) -> "29/10/2026"
function formatarData(data = null) {
    if (!data) return "Não informada";
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
}

const urlDoTrabalho = trabalho => `trabalho.html?area=geografia&id=${encodeURIComponent(trabalho.id)}`;

// Texto puro do trabalho (sem marcadores), usado na busca
const textoPuro = trabalho => trabalho.texto
    .map(bloco => bloco.replace(/^(###|>>|>|-)\s*/, ""))
    .join(" ");

/* ---------- Texto do trabalho: array de blocos -> HTML ---------- */
/*
 * Convenções dos blocos (veja dados.js):
 *   "### Título"  subtítulo      "- item"  item de lista (itens seguidos viram <ul>)
 *   ">> Título"   título de destaque; as linhas "> texto" seguintes formam o destaque
 *   qualquer outro texto é um parágrafo
 */
function renderizarTexto(blocos) {
    let html = "";
    let lista = [];
    let destaque = null;

    const fecharLista = () => {
        if (lista.length) html += `<ul>${lista.map(item => `<li>${escaparHTML(item)}</li>`).join("")}</ul>`;
        lista = [];
    };
    const fecharDestaque = () => {
        if (destaque) html += `<aside class="question-box">${destaque.titulo ? `<strong>${escaparHTML(destaque.titulo)}</strong>` : ""}${destaque.linhas.map(l => `<p>${escaparHTML(l)}</p>`).join("")}</aside>`;
        destaque = null;
    };

    blocos.forEach(bloco => {
        if (bloco.startsWith(">> ")) {
            fecharLista(); fecharDestaque();
            destaque = { titulo: bloco.slice(3), linhas: [] };
        } else if (bloco.startsWith("> ")) {
            fecharLista();
            if (!destaque) destaque = { titulo: "", linhas: [] };
            destaque.linhas.push(bloco.slice(2));
        } else {
            fecharDestaque();
            if (bloco.startsWith("- ")) {
                lista.push(bloco.slice(2));
            } else {
                fecharLista();
                html += bloco.startsWith("### ")
                    ? `<h3>${escaparHTML(bloco.slice(4))}</h3>`
                    : `<p>${escaparHTML(bloco)}</p>`;
            }
        }
    });
    fecharLista(); fecharDestaque();
    return html;
}

/* ---------- Cartão da lista ---------- */

function criarCard(trabalho) {
    const modalidade = trabalho.modo === "grupo" ? "Em grupo" : "Individual";
    return `
        <article class="work-card">
            <a class="work-card-image" href="${urlDoTrabalho(trabalho)}" tabindex="-1" aria-hidden="true">
                <img src="${escaparHTML(trabalho.imagem.src)}" alt="" loading="lazy">
            </a>
            <div class="work-card-body">
                <p class="work-card-tags"><span>${escaparHTML(trabalho.tema)}</span><span>${modalidade}</span></p>
                <h3><a href="${urlDoTrabalho(trabalho)}">${escaparHTML(trabalho.titulo)}</a></h3>
                <p>${escaparHTML(trabalho.resumo)}</p>
                <p class="work-card-meta">${escaparHTML(trabalho.grupo)} · ${formatarData(trabalho.data)}</p>
                <a class="text-link" href="${urlDoTrabalho(trabalho)}">Ler o trabalho <span aria-hidden="true">↗</span></a>
            </div>
        </article>`;
}

/* ---------- Lista com filtros e busca ---------- */

function preencherSelect(select, rotuloTodos, valores) {
    const unicos = [...new Set(valores)].sort((a, b) => a.localeCompare(b, "pt-BR"));
    select.innerHTML = `<option value="todos">${rotuloTodos}</option>` +
        unicos.map(valor => `<option value="${escaparHTML(valor)}">${escaparHTML(valor)}</option>`).join("");
}

function iniciarLista() {
    const lista = document.querySelector("#lista-trabalhos");
    if (!lista) return;

    const busca = document.querySelector("#busca-trabalhos");
    const filtroTema = document.querySelector("#filtro-tema");
    const filtroGrupo = document.querySelector("#filtro-grupo");
    const contador = document.querySelector("#contador-trabalhos");
    const vazio = document.querySelector("#mensagem-vazia");

    preencherSelect(filtroTema, "Todos os temas", trabalhos.map(t => t.tema));
    preencherSelect(filtroGrupo, "Todos os grupos", trabalhos.map(t => t.grupo));

    // Permite abrir a lista já filtrada: trabalhos.html?tema=Água
    const temaInicial = new URLSearchParams(window.location.search).get("tema");
    if ([...filtroTema.options].some(o => o.value === temaInicial)) filtroTema.value = temaInicial;

    function filtrar() {
        const termo = normalizar(busca.value.trim());

        const resultados = trabalhos.filter(trabalho => {
            const conteudo = normalizar([
                trabalho.titulo, trabalho.resumo, textoPuro(trabalho),
                trabalho.tema, trabalho.grupo, ...trabalho.autores
            ].join(" "));
            return conteudo.includes(termo)
                && (filtroTema.value === "todos" || trabalho.tema === filtroTema.value)
                && (filtroGrupo.value === "todos" || trabalho.grupo === filtroGrupo.value);
        });

        lista.innerHTML = resultados.map(criarCard).join("");
        contador.textContent = `${resultados.length} de ${trabalhos.length} trabalho(s) exibido(s)`;
        vazio.hidden = resultados.length !== 0;
    }

    // Enter dentro do formulário não deve recarregar a página
    document.querySelector(".filters").addEventListener("submit", evento => evento.preventDefault());

    [busca, filtroTema, filtroGrupo].forEach(controle =>
        controle.addEventListener(controle === busca ? "input" : "change", filtrar));
    document.querySelector("#limpar-filtros")?.addEventListener("click", () => {
        busca.value = ""; filtroTema.value = "todos"; filtroGrupo.value = "todos";
        filtrar(); busca.focus();
    });
    filtrar();
}

/* ---------- Página de detalhe (trabalho.html?area=geografia&id=...) ---------- */

// Player de vídeo: YouTube (nocookie) ou arquivo .mp4 local
function criarPlayer(video, titulo) {
    // Vídeo do YouTube
    if (video.tipo === "youtube") {
        return `
            <iframe
                src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(video.id)}"
                title="${escaparHTML(video.titulo || titulo)}"
                loading="lazy"
                allowfullscreen>
            </iframe>
        `;
    }

    // Vídeo hospedado em uma página externa
    if (video.tipo === "externo") {
        return `
            <a
                class="video-external-link"
                href="${escaparHTML(video.url)}"
                target="_blank"
                rel="noopener noreferrer">
                <span class="video-external-icon">▶</span>
                <strong>${escaparHTML(video.titulo || titulo)}</strong>
                <span>Assistir no site oficial ↗</span>
            </a>
        `;
    }

    // Vídeo local (.mp4)
    return `
        <video controls preload="metadata" src="${escaparHTML(video.src)}">
            Seu navegador não reproduz este vídeo.
        </video>
    `;
}

function criarVideo(video, titulo) {
    if (!video) return "";
    return `<section class="detail-video"><h2>Vídeo</h2><div class="video-frame">${criarPlayer(video, titulo)}</div></section>`;
}

function iniciarDetalhe() {
    const destino = document.querySelector("#detalhe-trabalho");
    if (!destino) return;

    const id = new URLSearchParams(window.location.search).get("id");
    const trabalho = trabalhos.find(item => item.id === id);

    if (!trabalho) {
        destino.innerHTML = `<h1>Trabalho não encontrado</h1>
            <p>Confira o endereço ou volte à lista para escolher outro trabalho.</p>
            <a class="button button-primary" href="trabalhos.html">Voltar à lista</a>`;
        document.title = "Trabalho não encontrado | Conexão Terra";
        return;
    }

    const modalidade = trabalho.modo === "grupo" ? "Em grupo" : "Individual";
    const { imagem } = trabalho;
    const links = trabalho.links.length ? `
        <section class="detail-links">
            <h2>Para saber mais</h2>
            <ul>${trabalho.links.map(l => `<li><a href="${escaparHTML(l.url)}" target="_blank" rel="noopener noreferrer">${escaparHTML(l.texto)} <span aria-hidden="true">↗</span></a></li>`).join("")}</ul>
        </section>` : "";

    destino.innerHTML = `
        <a class="back-link" href="trabalhos.html">← Voltar para a lista</a>
        <p class="eyebrow">${escaparHTML(trabalho.tema)} · ${modalidade}</p>
        <h1>${escaparHTML(trabalho.titulo)}</h1>
        <p class="detail-meta">
            <span><strong>Autoria:</strong> ${escaparHTML(trabalho.autores.join(", "))}</span>
            <span><strong>Grupo:</strong> ${escaparHTML(trabalho.grupo)}</span>
            <span><strong>Data:</strong> ${formatarData(trabalho.data)}</span>
        </p>
        <p class="detail-resumo">${escaparHTML(trabalho.resumo)}</p>
        <figure class="detail-figure">
            <img src="${escaparHTML(imagem.src)}" alt="${escaparHTML(imagem.alt)}">
            <figcaption>${escaparHTML(imagem.legenda || "")}${imagem.credito ? ` Crédito: ${escaparHTML(imagem.credito)}.` : ""}</figcaption>
        </figure>
        <div class="detail-texto">${renderizarTexto(trabalho.texto)}</div>
        ${criarVideo(trabalho.video, trabalho.titulo)}
        ${links}`;
    document.title = `${trabalho.titulo} | Conexão Terra`;
}

/* ---------- Vídeo da página inicial (config.videoInicio) ---------- */

function iniciarVideoInicio() {
    const secao = document.querySelector("#video-inicio");
    if (!secao) return;
    if (!config.videoInicio) { secao.hidden = true; return; }
    secao.querySelector("#video-inicio-corpo").innerHTML = criarPlayer(config.videoInicio, "Vídeo do projeto");
}

document.addEventListener("DOMContentLoaded", () => {
    iniciarLista();
    iniciarDetalhe();
    iniciarVideoInicio();
});
