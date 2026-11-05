# Conexão Terra — Geografia (grupo Royal Code)

Pesquisa de Geografia sobre os **impactos da computação no meio ambiente** (data centers, energia, água, território), para o Projeto Final Integrador **Portal da Turma** (PL1).
Feito somente com HTML, CSS e JavaScript puro, sem frameworks nem bibliotecas. A única fonte externa é o Google Fonts (Inter), permitida pelo enunciado.

## Integrantes e papéis

| Integrante | Papel | Grupo que representa |
|---|---|---|
| Vinícius Ferreira | Programação do site (HTML, JS e CSS) e representante na Equipe do Portal | Royal Code |
| Luis Gustavo | Imagens e confirmação das fontes | Royal Code |
| Ruan Silva | Parte visual (CSS) | Royal Code |
| Gabriel Mariano | Pesquisa geral dos temas e imagens | Royal Code |

## Turma e campus

IFSP — Campus Cubatão · Turma 148 · ano letivo 2026 · Geografia (prof. Augusto) e Práticas de Laboratório (prof. Nelson).

## Link do site publicado (GitHub Pages)

https://viniciusfsluz-tech.github.io/conexao-terra/ *(confirmar se o Pages está ativado: Settings → Pages → branch `main`, pasta `/ (root)`)*

## Como abrir

Dê um duplo clique em `index.html`. Não precisa de servidor.

## Estrutura de pastas

```
index.html          Início
conteudos.html      Explorar temas (infraestrutura, impactos, soluções, fontes de pesquisa)
trabalhos.html      Lista de trabalhos com busca e filtros (gerada por JS)
trabalho.html       Detalhe de qualquer trabalho (?area=geografia&id=...)
atividade.html      Atividade interativa: simulador de consumo de um data center
sobre.html          O projeto e a equipe
contato.html        Contato (formulário apenas demonstrativo, nada é enviado)
css/style.css       Paleta (variáveis em :root), tipografia e layout
js/config.js        Dados do site e itens do menu
js/dados.js         Array com todos os trabalhos de Geografia
js/menu.js          Menu gerado a partir de itensMenu
js/trabalhos.js     Cartões, filtros, busca e página de detalhe
js/atividade.js     Simulador de consumo (com equivalência em habitantes)
js/energia.js       Comparações de energia: dados-base com fonte e cálculo de habitantes equivalentes
js/contato.js       Formulário de contato (simulação)
js/script.js        Menu móvel, animações de entrada, barra de leitura
img/                Imagens (favicon.png é o ícone das abas)
video/              (opcional) vídeos pequenos em .mp4; hoje os vídeos são do YouTube ou links externos
```

## Como cadastrar um trabalho (`js/dados.js`)

```js
{
    id: "geo-agua-refrigeracao",   // único, minúsculo, sem espaços
    titulo: "Título do trabalho",
    tema: "Água",                  // Geografia usa "tema" no lugar de "tipo"
    modo: "grupo",
    autores: ["Nome 1", "Nome 2"],
    grupo: "Royal Code",
    data: "2026-10-29",            // ano-mês-dia
    resumo: "Uma ou duas frases.",
    texto: ["Parágrafo 1", "### Subtítulo", "- item de lista", ">> Destaque", "> texto do destaque", "![descrição](img/arquivo.png) legenda"],
    imagem: { src: "img/arquivo.jpeg", alt: "Descrição da imagem", legenda: "Legenda", credito: "Fonte (opcional)" },
    video: null,                   // ou { tipo: "youtube", id: "CODIGO" }, { tipo: "externo", url: "https://...", titulo: "..." } ou { tipo: "arquivo", src: "video/x.mp4" }
    links: [{ texto: "Fonte consultada", url: "https://..." }]
}
```

## Trabalhos publicados

| id | Título | Tema |
|---|---|---|
| `geo-metabolismo-nuvem` | Quando a nuvem encontra os limites do território | Território |
| `geo-localizacao-sp` | Por que os data centers se concentram em São Paulo? | Território |
| `geo-paisagem` | Como a infraestrutura transforma a paisagem? | Território |
| `geo-agua-refrigeracao` | Água para resfriar servidores | Água |
| `geo-energia` | Energia contínua, redes e expansão | Energia |
| `geo-economia` | Investimentos, empregos e retorno local | Economia |
| `geo-licenciamento` | Licenciamento ambiental: o que está sendo questionado? | Política ambiental |
| `geo-sustentabilidade` | O que significa um data center sustentável? | Sustentabilidade |
| `geo-sintese` | Desenvolvimento para quem e a que custo? | Síntese |

## Fontes e licenças de imagens e textos de terceiros

**Textos:** escritos pelo grupo a partir das fontes listadas em cada trabalho (seção "Para saber mais") e na página `conteudos.html` (IEA, Lawrence Berkeley National Laboratory, Folha de S.Paulo, MPC-SP, Planalto, Microsoft, Scala e artigos acadêmicos).

**Imagens** (todas em `img/`). Confirme a licença de cada uma antes da entrega:

| Arquivo | Origem / licença |
|---|---|
| `ComoFuncionaUmDataCenter.jpeg` | Infográfico com crédito "System ITs" indicado na imagem. Licença: **confirmar** |
| `MapaDataCentersNoBrasil.jpeg` | Mapa com fonte "Ceará Tech Hub" indicada na imagem. Licença: **confirmar** |
| `data-center-aereo.jpeg` | The New York Times, interativo "Data center scale" (nytimes.com/interactive/2026/10/05/upshot/data-center-scale.html). Direitos reservados: **confirmar uso**, ou trocar |
| `data-center.jpeg` | iStock, busca "futuristic modern server room in data center" (istockphoto.com). Banco pago: **confirmar licença**, ou trocar |
| `energia-renovavel.jpeg` | Adobe Stock, busca "solar wind farm" (stock.adobe.com). Banco pago: **confirmar licença**, ou trocar |
| `escassez-agua.jpeg` | Associada ao artigo da Nature "Brazil is in water crisis" (nature.com/articles/d41586-021-03625-w); a página não mostra imagem nem crédito: **confirmar autor/agência** |
| `limeira.jpeg` | Wikipédia, verbete Limeira (pt.wikipedia.org/wiki/Limeira). **Conferir autor e licença na página do arquivo** (Wikimedia Commons) |
| `refrigeracao.jpeg` | Airedale (airedale.com/2024/07/30/airedale_launches_data_center_cooling_controls_system_in_u-s/). **Confirmar uso** |
| `resfriamento-diagrama.jpeg` | ISS Mechanical (issmechanical.com/data-center-cooling-strategies/). **Confirmar uso** |
| `subestacao-eletrica.jpeg` | Hartek (hartek.com/post/why-substation-projects-are-the-backbone-of-indias-power-grid-infrastructure/). **Confirmar uso** |
| `terreno-impacto.jpeg` | Evergreen Site Works (evergreensiteworks.com/land-clearing-services/). **Confirmar uso** |
| `favicon.png` | Ícone da aba, feito pelo grupo |

## Dados de energia (página inicial e simulador)

Os cartões "Quanto isso representa?" e a frase "equivale a N habitantes" do simulador usam estas fontes (valores em `js/energia.js`):

| Dado | Valor | Fonte |
|---|---|---|
| Consumo dos data centers no mundo, 2024 | 415 TWh | IEA, *Energy and AI* (2025) |
| Consumo final de eletricidade no Brasil, 2024 | 650,4 TWh | EPE, Balanço Energético Nacional 2025 |
| População do Brasil, 1º/jul/2024 | 212,6 milhões | IBGE (estimativa) |
| População do estado de São Paulo | 44.420.459 | IBGE, Censo 2022 |
| Subestações do campus Barueri (Scala) | 2 × 60 MW | Scala Data Centers |

Cálculo: consumo por habitante = 650,4 TWh ÷ 212,6 milhões ≈ 3.059 kWh por ano (todos os setores, não só residências). O cenário de Barueri é um **limite máximo** (capacidade publicada funcionando 8.760 h no ano), não consumo medido.

## Pendências antes da entrega

- Confirmar a licença de cada imagem (tabela acima) e, se possível, trocar por imagens de licença livre (Wikimedia Commons, Unsplash) ou próprias.
- Adicionar um vídeo na página inicial: preencher `videoInicio` em `js/config.js` (YouTube "não listado" ou `.mp4` em `video/`).
- Conferir a data dos trabalhos em `js/dados.js` (usamos 2026-10-29, data do primeiro commit).
- Os commits são feitos pelo líder do grupo; os demais integrantes constam na tabela de integrantes.