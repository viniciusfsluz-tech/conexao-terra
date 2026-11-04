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

## Link do portal publicado (GitHub Pages)

https://viniciusfsluz-tech.github.io/conexao-terra/ *(confirmar se o Pages está ativado: Settings → Pages → branch `main`, pasta `/root`)*

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
js/atividade.js     Simulador de consumo
js/contato.js       Formulário de contato (simulação)
js/script.js        Menu móvel, animações de entrada, barra de leitura
img/                Imagens
video/              Vídeos pequenos (ainda vazio — veja "Pendências")
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
    texto: ["Parágrafo 1", "### Subtítulo", "- item de lista", ">> Destaque", "> texto do destaque"],
    imagem: { src: "img/arquivo.jpeg", alt: "Descrição da imagem", legenda: "Legenda", credito: "Fonte (opcional)" },
    video: null,                   // ou { tipo: "youtube", id: "CODIGO" } ou { tipo: "arquivo", src: "video/x.mp4" }
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

**Imagens** (todas em `img/`). Preencha a coluna "Origem / licença" antes da entrega:

| Arquivo | Origem / licença |
|---|---|
| `ComoFuncionaUmDataCenter.jpeg` | Infográfico com crédito "System ITs" indicado na imagem. Licença: **confirmar** |
| `MapaDataCentersNoBrasil.jpeg` | Mapa com fonte "Ceará Tech Hub" indicada na imagem. Licença: **confirmar** |
| `data-center-aereo.jpeg` | **preencher** (site/autor, licença) |
| `data-center.jpeg` | **preencher** |
| `energia-renovavel.jpeg` | **preencher** |
| `escassez-agua.jpeg` | **preencher** |
| `limeira.jpeg` | **preencher** |
| `refrigeracao.jpeg` | **preencher** |
| `resfriamento-diagrama.jpeg` | **preencher** |
| `subestacao-eletrica.jpeg` | **preencher** |
| `terreno-impacto.jpeg` | **preencher** |

## Pendências antes da entrega

- Informar origem e licença de cada imagem (tabela acima) e, se possível, trocar por imagens de licença livre (Wikimedia Commons, Unsplash) ou próprias.
- Adicionar um vídeo na página inicial: preencher `videoInicio` em `js/config.js` (YouTube "não listado" ou `.mp4` em `video/`).
- Conferir a data dos trabalhos em `js/dados.js` (usamos 2026-10-29, data do primeiro commit).
- Todos os integrantes da Equipe do Portal devem ter commits no repositório.
