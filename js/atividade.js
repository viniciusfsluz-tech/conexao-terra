
/* =====================================================
   CONEXÃO TERRA
   SIMULADOR DE CONSUMO DE UM DATA CENTER
===================================================== */

/* 1. CONFIGURAÇÕES */

const POTENCIA_SERVIDOR = 0.5;
const PERCENTUAL_INFRAESTRUTURA = 0.40;

const SERVIDORES_INICIAIS = 100;
const HORAS_INICIAIS = 24;


/* 2. INICIALIZAÇÃO */

document.addEventListener("DOMContentLoaded", () => {

    // Controles
    const controleServidores = document.getElementById("servers");
    const controleHoras = document.getElementById("hours");

    const valorServidores = document.getElementById("servers-value");
    const valorHoras = document.getElementById("hours-value");

    // Resultados
    const consumoServidores = document.getElementById("server-consumption");
    const consumoTotal = document.getElementById("total-consumption");
    const consumoInfraestrutura = document.getElementById("cooling-consumption");

    // Percentuais
    const percentualServidores = document.getElementById("server-percentage");
    const percentualInfraestrutura = document.getElementById("cooling-percentage");

    // Barras
    const barraServidores = document.getElementById("server-progress");
    const barraInfraestrutura = document.getElementById("cooling-progress");

    // Equivalência em habitantes (usa js/energia.js; opcional)
    const equivalencia = document.getElementById("equivalent-people");

    // Botão
    const botaoResetar = document.getElementById("reset-simulator");


    /* 3. VERIFICAÇÃO DOS ELEMENTOS */

    const elementos = [
        controleServidores,
        controleHoras,
        valorServidores,
        valorHoras,
        consumoServidores,
        consumoTotal,
        consumoInfraestrutura,
        percentualServidores,
        percentualInfraestrutura,
        barraServidores,
        barraInfraestrutura,
        botaoResetar
    ];

    if (elementos.some(elemento => elemento === null)) {
        console.error(
            "Erro no simulador: um ou mais elementos HTML não foram encontrados. Verifique os IDs da atividade.html."
        );
        return;
    }


    /* 4. FORMATAÇÃO DOS NÚMEROS */

    function formatarNumero(valor) {
        return valor.toLocaleString("pt-BR", {
            maximumFractionDigits: 2
        });
    }


    /* 5. CÁLCULO DO CONSUMO */

    function calcularConsumo() {

        const quantidadeServidores = Number(controleServidores.value);
        const horasFuncionamento = Number(controleHoras.value);

        // Atualiza os valores dos controles
        valorServidores.textContent = formatarNumero(quantidadeServidores);
        valorHoras.textContent = formatarNumero(horasFuncionamento);

        // Consumo dos servidores em kWh
        const energiaServidores =
            quantidadeServidores *
            POTENCIA_SERVIDOR *
            horasFuncionamento;

        // Consumo adicional da infraestrutura
        const energiaInfraestrutura =
            energiaServidores *
            PERCENTUAL_INFRAESTRUTURA;

        // Consumo total
        const energiaTotal =
            energiaServidores +
            energiaInfraestrutura;


        /* 6. PERCENTUAIS */

        const porcentagemServidores =
            energiaTotal > 0
                ? (energiaServidores / energiaTotal) * 100
                : 0;

        const porcentagemInfraestrutura =
            energiaTotal > 0
                ? (energiaInfraestrutura / energiaTotal) * 100
                : 0;


        /* 7. ATUALIZAÇÃO DOS RESULTADOS */

        consumoServidores.textContent =
            formatarNumero(energiaServidores);

        consumoTotal.textContent =
            formatarNumero(energiaTotal);

        consumoInfraestrutura.textContent =
            formatarNumero(energiaInfraestrutura);

        percentualServidores.textContent =
            formatarNumero(porcentagemServidores) + "%";

        percentualInfraestrutura.textContent =
            formatarNumero(porcentagemInfraestrutura) + "%";


        /* 8. ATUALIZAÇÃO DAS BARRAS */

        barraServidores.style.width =
            porcentagemServidores + "%";

        barraInfraestrutura.style.width =
            porcentagemInfraestrutura + "%";


        /* 8.1 EQUIVALÊNCIA EM HABITANTES */

        if (equivalencia && typeof habitantesEquivalentes === "function") {
            // energiaTotal é por dia; multiplicamos por 365 para comparar com o consumo anual por habitante
            const habitantes = habitantesEquivalentes(energiaTotal * 365);
            equivalencia.textContent =
                `Mantido assim o ano todo, esse consumo equivale ao de cerca de ${textoHabitantes(habitantes)} na média do Brasil.`;
        }

    }


    /* 9. EVENTOS DOS CONTROLES */

    controleServidores.addEventListener("input", calcularConsumo);

    controleHoras.addEventListener("input", calcularConsumo);


    /* 10. RESTAURAR VALORES INICIAIS */

    botaoResetar.addEventListener("click", () => {

        controleServidores.value = SERVIDORES_INICIAIS;
        controleHoras.value = HORAS_INICIAIS;

        calcularConsumo();

    });


    /* 11. EXECUÇÃO INICIAL */

    calcularConsumo();

    console.log("Simulador de consumo iniciado com sucesso!");

});
