/*
 * CONEXÃO TERRA — configurações do site
 * Tudo que muda de uma turma/grupo para outro fica aqui.
 */

const config = {
    projeto: "Conexão Terra",
    grupo: "Royal Code",
    campus: "IFSP — Campus Cubatão",
    turma: "148",
    anoLetivo: 2026,

    // Vídeo da página inicial. Use null para ocultar a seção ou:
    //   { tipo: "youtube", id: "CODIGO_DO_VIDEO", titulo: "Descrição do vídeo" }
    //   { tipo: "arquivo", src: "video/apresentacao.mp4", titulo: "Descrição do vídeo" }
    videoInicio: { tipo: "youtube", id: "in9edgvFaC0", titulo: "O Lado Sombrio da Explosão dos Data Centers de IA nos Estados Unidos  Visão Aérea" }
};

// Itens do menu. A chave "pagina" deve ser igual ao data-page do <body>.
const itensMenu = [
    { texto: "Início",         href: "index.html",     pagina: "inicio" },
    { texto: "Explorar temas", href: "conteudos.html", pagina: "conteudos" },
    { texto: "Trabalhos",      href: "trabalhos.html", pagina: "trabalhos" },
    { texto: "O projeto",      href: "sobre.html",     pagina: "sobre" },
    { texto: "Contato",        href: "contato.html",   pagina: "contato" },
    { texto: "Atividade",      href: "atividade.html", pagina: "atividade" }
];
