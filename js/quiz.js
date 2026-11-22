// Quiz da página Atividade: 6 perguntas sobre o conteúdo do site.
// Para mudar uma pergunta, edite o array "perguntas" abaixo.
(function () {
  const perguntas = [
    {
      texto: "Segundo a estimativa da IEA citada no site, quanto os data centers consumiram de eletricidade no mundo em 2024?",
      opcoes: ["41,5 TWh", "415 TWh", "4.150 TWh", "65 TWh"],
      correta: 1,
      explicacao: "A estimativa é de 415 TWh, do relatório Energy and AI da Agência Internacional de Energia (IEA, 2025)."
    },
    {
      texto: "Por que os data centers precisam de sistemas de refrigeração?",
      opcoes: [
        "Porque os equipamentos produzem calor ao funcionar",
        "Porque os servidores só funcionam em locais gelados por natureza",
        "Para gerar energia elétrica",
        "Para diminuir o ruído dos cabos"
      ],
      correta: 0,
      explicacao: "Os equipamentos esquentam durante o funcionamento, e a refrigeração controla a temperatura."
    },
    {
      texto: "O que é um data center?",
      opcoes: [
        "Um programa que protege senhas",
        "Um tipo de satélite de comunicação",
        "Uma instalação que armazena dados e executa os serviços digitais usados no dia a dia",
        "Um aplicativo de mapas"
      ],
      correta: 2,
      explicacao: "Data centers são instalações físicas com equipamentos, energia e refrigeração. Por isso dizemos que a nuvem tem endereço."
    },
    {
      texto: "Qual destes é um exemplo de tecnologia a favor do território, citado no site?",
      opcoes: [
        "Extração de matérias-primas para eletrônicos",
        "Resíduos eletrônicos descartados",
        "Satélites e imagens para monitorar o desmatamento",
        "Ocupação de terrenos para novas instalações"
      ],
      correta: 2,
      explicacao: "Satélites, mapas digitais, sensores e modelos computacionais ajudam a monitorar e planejar. As outras opções são desafios do mundo digital."
    },
    {
      texto: "Quais fatores influenciam onde os data centers são instalados no Brasil, segundo o site?",
      opcoes: [
        "Apenas a cor das fachadas e o tamanho da cidade",
        "Disponibilidade de energia, acesso à água e infraestrutura de telecomunicações",
        "Somente a distância até o litoral",
        "Apenas o clima do dia da inauguração"
      ],
      correta: 1,
      explicacao: "Energia, água e telecomunicações pesam na decisão, e isso pode distribuir benefícios e custos de forma desigual entre os territórios."
    },
    {
      texto: "Qual é a ideia central do projeto Conexão Terra?",
      opcoes: [
        "A tecnologia é imaterial e não afeta a natureza",
        "A tecnologia deve ser evitada em qualquer situação",
        "O digital depende de recursos do mundo real, e entender isso ajuda a reduzir impactos",
        "Só a Geografia estuda o espaço, a informática não tem relação com ele"
      ],
      correta: 2,
      explicacao: "A tecnologia não existe fora do espaço geográfico: depende de energia, água, minerais e território, e também pode ajudar a cuidar do ambiente."
    }
  ];

  const caixa = document.getElementById("quiz");
  if (!caixa) return;

  let atual = 0;
  let acertos = 0;

  function mostrarPergunta() {
    const p = perguntas[atual];
    caixa.innerHTML = "";

    const topo = document.createElement("p");
    topo.className = "quiz-progress";
    topo.textContent = "Pergunta " + (atual + 1) + " de " + perguntas.length;

    const barra = document.createElement("div");
    barra.className = "quiz-bar";
    const preenchido = document.createElement("span");
    preenchido.style.width = (atual / perguntas.length) * 100 + "%";
    barra.appendChild(preenchido);

    const titulo = document.createElement("h3");
    titulo.className = "quiz-question";
    titulo.textContent = p.texto;

    const lista = document.createElement("div");
    lista.className = "quiz-options";

    const feedback = document.createElement("p");
    feedback.className = "quiz-feedback";
    feedback.hidden = true;

    const proxima = document.createElement("button");
    proxima.type = "button";
    proxima.className = "button button-primary quiz-next";
    proxima.hidden = true;
    proxima.textContent = atual === perguntas.length - 1 ? "Ver resultado" : "Próxima pergunta";
    proxima.addEventListener("click", function () {
      atual++;
      if (atual < perguntas.length) mostrarPergunta();
      else mostrarResultado();
    });

    p.opcoes.forEach(function (texto, i) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "quiz-option";
      b.textContent = texto;
      b.addEventListener("click", function () {
        const botoes = lista.querySelectorAll(".quiz-option");
        botoes.forEach(function (x, j) {
          x.disabled = true;
          if (j === p.correta) x.classList.add("correta");
        });
        if (i === p.correta) {
          acertos++;
          feedback.textContent = "Correto! " + p.explicacao;
          feedback.className = "quiz-feedback ok";
        } else {
          b.classList.add("errada");
          feedback.textContent = "Não foi dessa vez. " + p.explicacao;
          feedback.className = "quiz-feedback erro";
        }
        feedback.hidden = false;
        proxima.hidden = false;
        proxima.focus();
      });
      lista.appendChild(b);
    });

    caixa.append(topo, barra, titulo, lista, feedback, proxima);
  }

  function mostrarResultado() {
    let mensagem;
    if (acertos === perguntas.length) mensagem = "Excelente! Você entendeu bem como o digital ocupa espaço real.";
    else if (acertos >= 4) mensagem = "Muito bem! Revise os conteúdos para fechar as dúvidas que sobraram.";
    else mensagem = "Vale explorar os conteúdos do site e tentar de novo.";

    caixa.innerHTML = "";

    const rotulo = document.createElement("p");
    rotulo.className = "quiz-progress";
    rotulo.textContent = "Resultado";

    const nota = document.createElement("p");
    nota.className = "quiz-score";
    nota.textContent = acertos + " de " + perguntas.length;

    const texto = document.createElement("p");
    texto.className = "quiz-message";
    texto.textContent = mensagem;

    const refazer = document.createElement("button");
    refazer.type = "button";
    refazer.className = "button button-primary quiz-next";
    refazer.textContent = "Refazer o quiz";
    refazer.addEventListener("click", function () {
      atual = 0;
      acertos = 0;
      mostrarPergunta();
    });

    caixa.append(rotulo, nota, texto, refazer);
  }

  mostrarPergunta();
})();