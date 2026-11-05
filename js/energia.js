/*
 * CONEXÃO TERRA — comparações de energia
 * Transforma o consumo dos data centers em algo que dá para visualizar:
 * quantos habitantes (cidades, estados) consumiriam a mesma energia.
 * Todos os números-base vêm de fontes oficiais, citadas na própria página.
 */

/* ---------- Dados-base (com fonte) ---------- */

const REFERENCIAS = {
    dataCentersMundoTWh: 415,       // IEA, "Energy and AI" (2025): consumo dos data centers em 2024
    consumoBrasilTWh: 650.4,        // EPE, Balanço Energético Nacional 2025: consumo final de eletricidade em 2024
    populacaoBrasil: 212600000,     // IBGE: população estimada em 1º de julho de 2024
    populacaoSaoPaulo: 44420459,    // IBGE, Censo 2022: estado de São Paulo
    scalaBarueriMW: 2 * 60          // Scala, Barueri: duas subestações de 60 MW (capacidade publicada)
};

const HORAS_POR_ANO = 8760;

// Consumo médio de eletricidade por habitante no Brasil, em kWh por ano (todos os setores)
const KWH_POR_HABITANTE_ANO = (REFERENCIAS.consumoBrasilTWh * 1e9) / REFERENCIAS.populacaoBrasil;

/* ---------- Funções de cálculo e formatação ---------- */

// Quantos habitantes consumiriam, em média, a energia informada (kWh por ano)
function habitantesEquivalentes(kwhPorAno, kwhPorHabitante = KWH_POR_HABITANTE_ANO) {
    return kwhPorAno / kwhPorHabitante;
}

// Capacidade em MW funcionando o ano todo, convertida para kWh (cenário máximo)
function kwhAnoDeCapacidade(megawatts, horas = HORAS_POR_ANO) {
    return megawatts * 1000 * horas;
}

// 135.650.000 -> "136 milhões"; 343.615 -> "344 mil"; 200 -> "200"
function formatarPessoas(valor) {
    if (valor >= 1e6) return `${(valor / 1e6).toLocaleString("pt-BR", { maximumFractionDigits: 1 })} milhões`;
    if (valor >= 1e3) return `${Math.round(valor / 1e3).toLocaleString("pt-BR")} mil`;
    return Math.round(valor).toLocaleString("pt-BR");
}

// Frase completa com a concordância certa: "1,6 milhões de habitantes" / "344 mil habitantes"
function textoHabitantes(valor) {
    return valor >= 1e6 ? `${formatarPessoas(valor)} de habitantes` : `${formatarPessoas(valor)} habitantes`;
}

/* ---------- Comparações exibidas na página inicial ---------- */

function criarComparacoes() {
    const r = REFERENCIAS;
    const parteDoBrasil = (r.dataCentersMundoTWh / r.consumoBrasilTWh) * 100;
    const pessoasMundo = habitantesEquivalentes(r.dataCentersMundoTWh * 1e9);
    const vezesSaoPaulo = pessoasMundo / r.populacaoSaoPaulo;
    const pessoasBarueri = habitantesEquivalentes(kwhAnoDeCapacidade(r.scalaBarueriMW));

    return [
        {
            destaque: `${Math.round(parteDoBrasil)}%`,
            titulo: "de todo o consumo do Brasil",
            texto: `Os data centers do mundo consumiram ${r.dataCentersMundoTWh} TWh em 2024. É cerca de ${Math.round(parteDoBrasil)}% de toda a eletricidade usada no Brasil no mesmo ano (${r.consumoBrasilTWh.toLocaleString("pt-BR")} TWh).`
        },
        {
            destaque: `≈ ${formatarPessoas(pessoasMundo)}`,
            titulo: "de habitantes",
            texto: `Na média nacional (cerca de ${Math.round(KWH_POR_HABITANTE_ANO).toLocaleString("pt-BR")} kWh por pessoa por ano), essa energia abasteceria cerca de ${formatarPessoas(pessoasMundo)} de brasileiros: ${vezesSaoPaulo.toLocaleString("pt-BR", { maximumFractionDigits: 0 })} vezes a população do estado de São Paulo (${(r.populacaoSaoPaulo / 1e6).toLocaleString("pt-BR", { maximumFractionDigits: 1 })} milhões).`
        },
        {
            destaque: `≈ ${formatarPessoas(pessoasBarueri)}`,
            titulo: "de habitantes (cenário máximo)",
            texto: `As duas subestações de ${r.scalaBarueriMW / 2} MW do campus da Scala em Barueri, se operassem o ano inteiro em plena capacidade, equivaleriam ao consumo médio de cerca de ${textoHabitantes(pessoasBarueri)}, o porte de uma cidade média. É um limite máximo calculado sobre capacidade publicada, não consumo medido.`
        }
    ];
}

function iniciarComparacoes() {
    const destino = document.querySelector("#equivalencias-lista");
    if (!destino) return;

    destino.innerHTML = criarComparacoes().map(c => `
        <article class="equivalence-card">
            <p class="equivalence-number">${c.destaque}</p>
            <h4>${c.titulo}</h4>
            <p>${c.texto}</p>
        </article>`).join("");
}

document.addEventListener("DOMContentLoaded", iniciarComparacoes);
