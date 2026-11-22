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

https://viniciusfsluz-tech.github.io/conexao-terra/

## QR Code

Fica no fim da página inicial e abre o site publicado (link acima). A imagem é `img/qrcode.png`.

## Como abrir

Dê um duplo clique em `index.html`. Não precisa de servidor.

## Guia de estilo

- **Paleta (variáveis em `:root` no `css/style.css`):** fundo `#0a100e`, cartões `#111b16`, cartões secundários `#18261e`, texto `#e6ebdf`, texto secundário `#a6b2a5`, destaque `#83bd8b`, destaque forte `#3e8058` e linhas `#2b4033`.
- **Tipografia:** Inter (Google Fonts) para textos e botões; Georgia (serifada) para os títulos `h1` e `h2`.
- **Tema:** escuro, com tons de verde ligados a Geografia e meio ambiente.
- **Componentes:** botões (`.button`), cartões, seções com título em destaque, formulário de contato (demonstrativo), cartões de trabalho, simulador e quiz.
- **Logo:** `img/logo-mark.png` (planeta com órbita e servidor, unindo Terra e data centers).
- **Justificativa:** o verde remete ao meio ambiente; o fundo escuro e o contraste alto destacam números e textos; a fonte serifada nos títulos dá um ar de revista de pesquisa.

## Estrutura de pastas

```
index.html          Início (com QR Code no fim da página)
conteudos.html      Explorar temas (infraestrutura, impactos, soluções, fontes de pesquisa)
trabalhos.html      Lista de trabalhos com busca e filtros (gerada por JS)
trabalho.html       Detalhe de qualquer trabalho (?area=geografia&id=...)
atividade.html      Atividade interativa: simulador de consumo de um data center e quiz de 6 perguntas
sobre.html          O projeto e a equipe
contato.html        Contato (formulário apenas demonstrativo, nada é enviado)
css/style.css       Paleta (variáveis em :root), tipografia e layout
js/config.js        Dados do site e itens do menu
js/dados.js         Array com todos os trabalhos de Geografia
js/menu.js          Menu gerado a partir de itensMenu
js/trabalhos.js     Cartões, filtros, busca e página de detalhe
js/atividade.js     Simulador de consumo (com equivalência em habitantes)
js/quiz.js          Quiz da página Atividade (perguntas em um array)
js/energia.js       Comparações de energia: dados-base com fonte e cálculo de habitantes equivalentes
js/contato.js       Formulário de contato (simulação)
js/script.js        Menu móvel, animações de entrada, barra de leitura
img/                Imagens (favicon.png, logo-mark.png, equipe.png, qrcode.png e as imagens dos temas)
```

## Recursos de interatividade

- **Simulador de consumo** (`atividade.html`): o visitante escolhe a quantidade de servidores e as horas de funcionamento e vê o consumo estimado, a distribuição e a equivalência em habitantes.
- **Quiz** (`atividade.html`): 6 perguntas de múltipla escolha sobre o conteúdo do site, com feedback a cada resposta, pontuação final e botão para refazer. As perguntas ficam em `js/quiz.js`.
- **Trabalhos com busca e filtros** (`trabalhos.html`): lista gerada por JavaScript a partir de `js/dados.js`.
- **Modal da equipe** (`index.html`): ao clicar no logo-mark, abre a foto dos integrantes.
- **Menu responsivo**, animações de entrada e barra de leitura (`js/script.js`).

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

**Imagens** (todas em `img/`). As imagens de terceiros abaixo pertencem aos seus respectivos autores e titulares. Elas são usadas **exclusivamente para fins acadêmicos, em um trabalho escolar sem qualquer finalidade comercial ou lucrativa**, com o crédito da origem indicado.

| Arquivo | Origem | Situação de uso |
|---|---|---|
| `ComoFuncionaUmDataCenter.jpeg` | Infográfico com crédito "System ITs" indicado na imagem | Uso acadêmico, sem fins lucrativos |
| `MapaDataCentersNoBrasil.jpeg` | Mapa com fonte "Ceará Tech Hub" indicada na imagem | Uso acadêmico, sem fins lucrativos |
| `data-center-aereo.jpeg` | The New York Times, interativo "Data center scale" (nytimes.com/interactive/2026/10/05/upshot/data-center-scale.html) | Uso acadêmico, sem fins lucrativos |
| `data-center.jpeg` | iStock, busca "futuristic modern server room in data center" (istockphoto.com) | Uso acadêmico, sem fins lucrativos |
| `energia-renovavel.jpeg` | Adobe Stock, busca "solar wind farm" (stock.adobe.com) | Uso acadêmico, sem fins lucrativos |
| `escassez-agua.jpeg` | Associada ao artigo da Nature "Brazil is in water crisis" (nature.com/articles/d41586-021-03625-w); a página não informa autor | Uso acadêmico, sem fins lucrativos |
| `limeira.jpeg` | Wikipédia, verbete Limeira (pt.wikipedia.org/wiki/Limeira) | Uso acadêmico, sem fins lucrativos (conferir licença na página do arquivo, no Wikimedia Commons) |
| `refrigeracao.jpeg` | Airedale (airedale.com/2024/07/30/airedale_launches_data_center_cooling_controls_system_in_u-s/) | Uso acadêmico, sem fins lucrativos |
| `resfriamento-diagrama.jpeg` | ISS Mechanical (issmechanical.com/data-center-cooling-strategies/) | Uso acadêmico, sem fins lucrativos |
| `subestacao-eletrica.jpeg` | Hartek (hartek.com/post/why-substation-projects-are-the-backbone-of-indias-power-grid-infrastructure/) | Uso acadêmico, sem fins lucrativos |
| `terreno-impacto.jpeg` | Evergreen Site Works (evergreensiteworks.com/land-clearing-services/) | Uso acadêmico, sem fins lucrativos |
| `equipe.png` | Foto da equipe | Feita pelo grupo |
| `favicon.png`, `logo-mark.png` | Ícone da aba e logo do site | Feitos para o grupo |
| `qrcode.png` | QR Code do site publicado | Gerado para o grupo |

Se algum titular não quiser que a imagem seja usada, ela será retirada ou trocada.

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
