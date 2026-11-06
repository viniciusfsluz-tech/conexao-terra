/*
 * CONEXÃO TERRA — GEOGRAFIA (grupo Royal Code)
 * Dados centralizados das pesquisas. Nenhum trabalho é escrito à mão no HTML:
 * a lista, os filtros e a página de detalhe são montados a partir deste array.
 *
 * Como cadastrar um trabalho: copie um objeto e troque os campos.
 *  - id: único, minúsculo, sem espaços
 *  - tema: usado no filtro (Geografia usa "tema" no lugar de "tipo")
 *  - texto: lista de blocos. Convenções:
 *      "### Título"  -> subtítulo      "- item"   -> item de lista
 *      ">> Título"   -> título de um destaque, seguido de linhas "> texto"
 *      "![descrição](img/arquivo.png) legenda"  -> imagem com texto alternativo e legenda
 *  - video: null, ou { tipo: "youtube", id: "CODIGO_DO_VIDEO" }, ou { tipo: "arquivo", src: "video/arquivo.mp4" }
 */

const trabalhos = [
    {
        "id": "geo-metabolismo-nuvem",
        "titulo": "Quando a nuvem encontra os limites do território",
        "tema": "Território",
        "modo": "grupo",
        "autores": [
            "Vinícius Ferreira",
            "Luis Gustavo",
            "Ruan Silva",
            "Gabriel Mariano"
        ],
        "grupo": "Royal Code",
        "data": "2026-10-29",
        "resumo": "A computação em nuvem depende de edifícios, energia, água e redes. O estudo propõe o “metabolismo urbano” como ferramenta para investigar quem recebe os benefícios e quem arca com os custos da infraestrutura digital.",
        "texto": [
            "A chamada computação em nuvem parece acontecer em um espaço virtual. Na realidade, ela depende de edifícios, servidores, cabos, redes elétricas e sistemas de refrigeração. Quanto maior a demanda por processamento e inteligência artificial, maior pode ser a pressão sobre a infraestrutura que sustenta esses serviços.",
            "Na Região Metropolitana de Campinas e na Grande São Paulo, os empreendimentos de Hortolândia, Sumaré e Barueri permitem investigar uma questão geográfica central: como conciliar a atração de investimentos tecnológicos com a disponibilidade de recursos naturais e a qualidade de vida das comunidades?",
            ">> Conceito-chave — metabolismo urbano:",
            "> neste estudo, o termo descreve os fluxos de recursos que entram em uma atividade urbana, como água, eletricidade, materiais e equipamentos, e os resultados que saem dela, como serviços digitais, empregos, tributos, calor e resíduos. É uma ferramenta de análise, não uma afirmação de que todos os empreendimentos apresentam os mesmos impactos.",
            ">> Pergunta principal da pesquisa",
            "> Quem recebe os benefícios da infraestrutura digital e quem assume os custos territoriais, ambientais e econômicos necessários para mantê-la funcionando?",
            "O esquema a seguir organiza os principais fluxos que precisam ser investigados. Ele é um modelo conceitual: não representa medições de uma instalação específica.",
            "### Recursos e infraestrutura",
            "Água, eletricidade, terrenos, equipamentos eletrônicos, materiais de construção, redes de comunicação e trabalho humano.",
            "### Operação digital",
            "Servidores armazenam e processam informações, executam aplicações, hospedam serviços e atendem solicitações de usuários.",
            "### Benefícios e pressões",
            "Serviços digitais, investimentos, empregos e tributos; também calor, consumo de recursos, resíduos e possíveis pressões sobre a infraestrutura local.",
            "### Benefícios a investigar",
            "- Investimentos em construção e equipamentos.",
            "- Arrecadação tributária efetivamente recebida.",
            "- Empregos criados durante as obras e na operação.",
            "- Ampliação da infraestrutura digital.",
            "- Possíveis oportunidades para empresas e profissionais locais.",
            "### Custos a investigar",
            "- Consumo de eletricidade e água.",
            "- Ocupação do solo e alterações na drenagem.",
            "- Necessidade de redes, subestações e obras de apoio.",
            "- Geração de calor, ruído e resíduos.",
            "- Distribuição dos benefícios e dos custos entre os grupos sociais.",
            ">> Como transformar o esquema em uma análise real?",
            "> Para cada entrada ou saída, procure um indicador verificável: metros cúbicos de água consumidos, energia utilizada, área ocupada, número de empregos, arrecadação municipal ou medidas de mitigação ambiental. Quando um dado não estiver disponível, registre a lacuna em vez de estimar um valor sem base."
        ],
        "imagem": {
            "src": "img/data-center-aereo.jpeg",
            "alt": "Vista aérea de uma instalação de data center, com grandes edifícios, estacionamento e subestação ao redor.",
            "legenda": "Vista aérea de uma instalação de data center."
        },
        "video": {
        "tipo": "youtube",
        "id": "tnpxN_uEbbM",
        "titulo": "Especialistas alertam para impactos de data centers de inteligência artificial",
        "credito": "The New York Times, “Data center scale” (2026)",
        },
        "links": [
            {
                "texto": "FURTADO; CUNHA. Inteligência artificial, data centers e colonialismo digital (Liinc em Revista, 2024)",
                "url": "https://doi.org/10.18617/liinc.v20i2.7272"
            },
            {
                "texto": "IEA — Energy and AI: Energy demand from AI",
                "url": "https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai"
            }
        ]
    },
    {
        "id": "geo-localizacao-sp",
        "titulo": "Por que os data centers se concentram em São Paulo?",
        "tema": "Território",
        "modo": "grupo",
        "autores": [
            "Vinícius Ferreira",
            "Luis Gustavo",
            "Ruan Silva",
            "Gabriel Mariano"
        ],
        "grupo": "Royal Code",
        "data": "2026-10-29",
        "resumo": "Mercado consumidor, redes de energia e telecomunicações ajudam a explicar a escolha de Hortolândia, Sumaré e Barueri para novos data centers de grandes empresas.",
        "texto": [
            "A Macrometrópole Paulista reúne mercados consumidores, infraestrutura de telecomunicações, redes de energia, atividades econômicas e conexões com outros centros urbanos. Esses fatores podem tornar a região atrativa para a instalação de infraestrutura digital.",
            "A localização de um data center, entretanto, não depende apenas da proximidade com clientes. A disponibilidade de energia, as condições de conexão, o custo do terreno, o planejamento urbano e a oferta de água também podem influenciar as decisões.",
            ">> Limite do mapa:",
            "> a imagem disponibilizada no projeto apresenta números sem indicar claramente a data de referência e a metodologia de contagem. Ela pode ser utilizada para contextualizar a distribuição territorial, mas seus valores não devem ser tratados como um levantamento atual confirmado.",
            "### Microsoft — Hortolândia e Sumaré",
            "A Microsoft divulga projetos de data centers voltados a serviços de nuvem e inteligência artificial na região. Em Hortolândia, os registros públicos da empresa identificam instalações no eixo da Avenida Thereza Anna Cecon Breda e da Estrada Municipal Pedrina Guilherme.",
            "As atualizações de obras da empresa permitem acompanhar o cronograma de implantação e as atividades anunciadas para os locais.",
            "### Scala Data Centers — Barueri",
            "O campus Tamboré, em Barueri, integra a expansão da infraestrutura de data centers da Scala. A empresa publica informações sobre instalações em operação, projetos planejados e subestações de energia.",
            "Segundo a página institucional consultada, duas subestações de 60 MW cada são indicadas como em operação no campus, enquanto outra instalação é listada como em construção, com capacidade de TI anunciada de 560 MW. Esses números descrevem capacidades publicadas pela empresa, não o consumo elétrico contínuo medido de todo o campus.",
            ">> Questão geográfica",
            "> Quais características de Hortolândia, Sumaré e Barueri ajudam a explicar a escolha desses locais? Quais dados seriam necessários para testar essa hipótese?"
        ],
        "imagem": {
            "src": "img/MapaDataCentersNoBrasil.jpeg",
            "alt": "Mapa do Brasil com a distribuição regional de data centers por região.",
            "legenda": "Mapa regional de data centers no Brasil. Os números não trazem data nem metodologia, por isso servem só como contexto.",
            "credito": "Ceará Tech Hub (identificado na própria imagem)"
        },
        "video": null,
        "links": [
            {
                "texto": "atualização do projeto Noroeste de Hortolândia",
                "url": "https://local.microsoft.com/br/blog/northwest-hortolandia-datacenter-construction-update/"
            },
            {
                "texto": "atualização do projeto Sudoeste de Hortolândia",
                "url": "https://local.microsoft.com/br/blog/southwest-hortolandia-datacenter-construction-update/"
            },
            {
                "texto": "atualização do projeto de Sumaré",
                "url": "https://local.microsoft.com/blog/sumare-east-datacenter-construction-update/"
            },
            {
                "texto": "instalações e subestações da Scala",
                "url": "https://scaladatacenters.com/data-centers/"
            }
        ]
    },
    {
        "id": "geo-paisagem",
        "titulo": "Como a infraestrutura transforma a paisagem?",
        "tema": "Território",
        "modo": "grupo",
        "autores": [
            "Vinícius Ferreira",
            "Luis Gustavo",
            "Ruan Silva",
            "Gabriel Mariano"
        ],
        "grupo": "Royal Code",
        "data": "2026-10-29",
        "resumo": "Terraplenagem, pavimentação e subestações alteram o terreno e a drenagem. O trabalho mostra como investigar essas mudanças sem presumir desmatamento ou dano antes de verificar o local.",
        "texto": [
            "A implantação de um data center pode envolver terraplenagem, fundações, grandes edifícios, pavimentação, áreas de estacionamento, equipamentos de refrigeração e infraestrutura elétrica. A extensão e a intensidade dessas mudanças dependem do terreno e do projeto.",
            "A substituição de superfícies vegetadas por edifícios e pavimentos pode alterar a infiltração da água da chuva, o escoamento superficial e as condições térmicas locais. Esses efeitos devem ser avaliados a partir das características do terreno, do projeto e das medidas de drenagem.",
            "Subestações, geradores de emergência e redes elétricas também fazem parte da infraestrutura de apoio. A presença e a dimensão de cada elemento precisam ser verificadas em documentos ou registros da instalação estudada.",
            "### Como investigar",
            "- Comparar imagens históricas e atuais do terreno.",
            "- Consultar mapas de uso e cobertura da terra.",
            "- Identificar cursos d'água, áreas verdes e vias próximas.",
            "- Consultar documentos de planejamento e licenciamento.",
            "### O que não presumir",
            "- Que o terreno era necessariamente degradado.",
            "- Que houve desmatamento sem verificar o local.",
            "- Que toda pavimentação provoca os mesmos efeitos.",
            "- Que a alteração da paisagem, sozinha, comprova dano ambiental."
        ],
        "imagem": {
            "src": "img/terreno-impacto.jpeg",
            "alt": "Terreno aberto relacionado ao planejamento e à ocupação do espaço.",
            "legenda": "Terreno em transformação: o uso do solo é um dos pontos da investigação.",
            "credito": "Evergreen Site Works (evergreensiteworks.com)"
        },
        "video": null,
        "links": [
            {
                "texto": "FURTADO; CUNHA. Inteligência artificial, data centers e colonialismo digital (Liinc em Revista, 2024)",
                "url": "https://doi.org/10.18617/liinc.v20i2.7272"
            }
        ]
    },
    {
        "id": "geo-agua-refrigeracao",
        "titulo": "Água para resfriar servidores",
        "tema": "Água",
        "modo": "grupo",
        "autores": [
            "Vinícius Ferreira",
            "Luis Gustavo",
            "Ruan Silva",
            "Gabriel Mariano"
        ],
        "grupo": "Royal Code",
        "data": "2026-10-29",
        "resumo": "Alguns sistemas de refrigeração usam água. O estudo discute bacias hidrográficas, o consumo de data centers em Hortolândia e Sumaré e o reuso de água em Barueri.",
        "texto": [
            "Os servidores liberam calor durante o funcionamento. Alguns data centers utilizam sistemas de refrigeração evaporativa, nos quais a evaporação da água ajuda a retirar calor do ambiente. Outras tecnologias utilizam diferentes combinações de ar, circuitos de líquido e equipamentos de rejeição de calor.",
            "No caso dos projetos da Microsoft em Hortolândia e Sumaré, o tipo de refrigeração e a frequência de utilização de sistemas evaporativos se tornaram parte de um debate público sobre a relação entre a infraestrutura de inteligência artificial e a disponibilidade hídrica regional.",
            "Uma reportagem da Folha de S.Paulo, publicada em março de 2026, abordou o consumo de água associado à tecnologia de resfriamento desses empreendimentos. A estimativa de até 3,24 milhões de litros por dia mencionada no debate deve ser tratada com cuidado: antes de atribuí-la a uma instalação específica, é necessário conferir a metodologia, as condições consideradas e se o número representa consumo real, demanda projetada ou um cenário de operação.",
            "### Por que as bacias hidrográficas importam?",
            "Hortolândia e Sumaré estão inseridas na região de influência das bacias dos rios Piracicaba, Capivari e Jundiaí (PCJ). A avaliação de um empreendimento deve considerar a disponibilidade de água, os usos concorrentes, as condições de estiagem e a infraestrutura de abastecimento.",
            "A questão geográfica não é apenas saber quanta água um empreendimento utiliza, mas também de qual sistema de abastecimento ela vem, em que períodos é demandada e quais outros usuários dependem do mesmo recurso.",
            ">> Perguntas para investigar",
            "> • O volume divulgado corresponde a consumo medido ou a uma projeção?",
            "> • Qual é a origem da água usada na instalação?",
            "> • Há dados públicos sobre consumo anual e sazonal?",
            "> • Que medidas de reuso ou redução do consumo foram anunciadas?",
            "> • Como o abastecimento é planejado em períodos de estiagem?",
            "### Barueri e o reuso de água",
            "O fornecimento de água para grandes instalações também envolve decisões sobre a origem do recurso e as redes de abastecimento disponíveis. O uso de água de reuso, quando tecnicamente adequado, pode reduzir a dependência de água potável em determinadas aplicações.",
            "Entretanto, a existência de um acordo, anúncio ou projeto não comprova, por si só, que todo o consumo já seja atendido por água de reuso. Para avaliar o resultado, é necessário verificar a implantação, a qualidade exigida para cada uso e os volumes efetivamente fornecidos."
        ],
        "imagem": {
            "src": "img/escassez-agua.jpeg",
            "alt": "Água como recurso natural essencial ao abastecimento e à atividade humana.",
            "legenda": "A origem da água e a disponibilidade local importam tanto quanto o volume consumido.",
            "credito": "Imagem associada ao artigo da Nature “Brazil is in water crisis” (2021)"
        },
        "video": {
        "tipo": "externo",
        "titulo": "Reduzindo o impacto do uso da água nos data centers",
        "url": "https://jornal.unicamp.br/video/2026/04/07/reduzindo-o-impacto-do-uso-da-agua-nos-data-centers/"
        },
        "links": [
            {
                "texto": "Reportagem: Microsoft, refrigeração e consumo de água",
                "url": "https://www1.folha.uol.com.br/mercado/2026/03/microsoft-traz-tecnologia-antiga-a-data-centers-de-ia-em-sp-com-maior-consumo-de-agua.shtml"
            },
            {
                "texto": "Análise setorial: utilização de água nos data centers",
                "url": "https://www.datacenterdynamics.com/br/not%C3%ADcias/data-centers-da-microsoft-no-brasil-t%C3%AAm-utiliza%C3%A7%C3%A3o-maior-de-%C3%A1gua/"
            },
            {
                "texto": "Reportagem: Sabesp e água de reuso para data centers",
                "url": "https://www.cnnbrasil.com.br/infra/buscando-mitigar-crise-hidrica-sabesp-usa-agua-de-reuso-em-data-centers/"
            },
            {
                "texto": "Lawrence Berkeley National Laboratory — relatório de 2024 sobre uso de energia em data centers",
                "url": "https://eta-publications.lbl.gov/publications/2024-lbnl-data-center-energy-usage-report"
            }
        ]
    },
    {
        "id": "geo-energia",
        "titulo": "Energia contínua, redes e expansão",
        "tema": "Energia",
        "modo": "grupo",
        "autores": [
            "Vinícius Ferreira",
            "Luis Gustavo",
            "Ruan Silva",
            "Gabriel Mariano"
        ],
        "grupo": "Royal Code",
        "data": "2026-10-29",
        "resumo": "Servidores funcionam sem parar e dependem de subestações e redes elétricas. O trabalho separa o que os dados já mostram (capacidade instalada) do que ainda precisa ser demonstrado (efeitos sobre a rede e as tarifas).",
        "texto": [
            "Os data centers precisam manter servidores, equipamentos de rede e sistemas de suporte em funcionamento. A expansão de instalações de grande porte pode exigir novas conexões elétricas, subestações e investimentos na infraestrutura de transmissão e distribuição.",
            "No campus Tamboré, a Scala divulga informações sobre subestações existentes e projetos de expansão. Esses dados ajudam a compreender a escala da infraestrutura necessária, mas não devem ser confundidos com o consumo real em cada hora do dia.",
            "### Energia renovável e contratos de fornecimento",
            "Empresas podem contratar eletricidade de fontes renováveis por meio de diferentes mecanismos comerciais. Esses contratos e certificados são relevantes para analisar compromissos climáticos, mas não demonstram, isoladamente, que toda a energia consumida por uma instalação seja entregue fisicamente por uma usina específica em cada momento.",
            "Para avaliar os efeitos sobre a rede elétrica, é necessário considerar a demanda adicional, a localização da geração, a capacidade de transmissão, os investimentos necessários e as regras de financiamento desses investimentos.",
            "### O que os dados podem mostrar",
            "- Capacidade elétrica instalada e planejada.",
            "- Consumo efetivo em MWh ou GWh.",
            "- Fontes de eletricidade contratadas.",
            "- Obras de conexão e reforço da rede.",
            "### O que precisa ser demonstrado",
            "- Se existe sobrecarga em um trecho específico da rede.",
            "- Quem financia cada obra de infraestrutura.",
            "- Como custos e encargos são distribuídos.",
            "- Se há efeitos comprovados sobre as tarifas residenciais.",
            ">> Distinção importante:",
            "> uma grande capacidade elétrica pode indicar a escala do empreendimento, mas não comprova automaticamente que a rede esteja sobrecarregada nem que as tarifas residenciais aumentarão. Essas conclusões exigem dados do sistema elétrico e análise dos mecanismos tarifários."
        ],
        "imagem": {
            "src": "img/subestacao-eletrica.jpeg",
            "alt": "Subestação elétrica com torres e equipamentos de transmissão de energia.",
            "legenda": "Subestações fazem parte da infraestrutura de apoio dos data centers.",
            "credito": "Hartek (hartek.com)"
        },
        "video": null,
        "links": [
            {
                "texto": "IEA — Energy and AI: Energy demand from AI",
                "url": "https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai"
            }
        ]
    },
    {
        "id": "geo-economia",
        "titulo": "Investimentos, empregos e retorno local",
        "tema": "Economia",
        "modo": "grupo",
        "autores": [
            "Vinícius Ferreira",
            "Luis Gustavo",
            "Ruan Silva",
            "Gabriel Mariano"
        ],
        "grupo": "Royal Code",
        "data": "2026-10-29",
        "resumo": "Obras e operação geram empregos, tributos e contratos, mas a relação entre o que é anunciado e o retorno efetivo ao município precisa ser verificada. O trabalho cita o regime Redata (Lei nº 15.504/2026).",
        "texto": [
            "Grandes obras podem mobilizar empresas de construção, fornecedores, serviços de engenharia e trabalhadores. A operação também demanda profissionais especializados em tecnologia, manutenção, segurança e gestão.",
            "Entretanto, a quantidade de empregos gerados durante a construção não corresponde necessariamente ao número de postos de trabalho permanentes após a inauguração. Para avaliar os efeitos locais, é necessário separar as etapas de implantação e operação.",
            "### Construção",
            "Obras civis, montagem, instalações elétricas, sistemas de refrigeração e serviços contratados. A duração e o número de empregos precisam ser verificados para cada projeto.",
            "### Operação",
            "Monitoramento de servidores, manutenção, segurança, gestão de energia e suporte técnico. A automação pode reduzir a necessidade de pessoal em relação à escala física da instalação.",
            "### Retorno municipal",
            "Investigar arrecadação tributária, contratos locais, qualificação profissional e investimentos públicos associados ao empreendimento.",
            "### Incentivos fiscais e contrapartidas",
            "A atração de empreendimentos também envolve decisões sobre incentivos econômicos e tributários. Para avaliar seus resultados, é necessário comparar os benefícios concedidos com os investimentos realizados, os empregos gerados, a arrecadação efetiva e as obrigações assumidas.",
            "Em setembro de 2026, a Lei nº 15.504 instituiu o regime tributário Redata para serviços de data center. A análise das suas exigências deve utilizar o texto legal e a regulamentação aplicável, sem presumir que todo projeto recebe automaticamente os mesmos benefícios.",
            ">> Questão para debate",
            "> Como um município pode avaliar se os benefícios econômicos de um empreendimento são compatíveis com a infraestrutura exigida e com os recursos públicos utilizados?"
        ],
        "imagem": {
            "src": "img/limeira.jpeg",
            "alt": "Vista aérea de uma cidade média do interior paulista, com prédios e casas de telhado alaranjado.",
            "legenda": "Cidades do interior paulista recebem os investimentos e as demandas de infraestrutura.",
            "credito": "Wikipédia, verbete “Limeira”"
        },
        "video": null,
        "links": [
            {
                "texto": "Lei nº 15.504/2026 — Redata",
                "url": "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15504.htm"
            },
            {
                "texto": "Implicações trabalhistas e ambientais dos data centers no Brasil (artigo acadêmico)",
                "url": "https://doi.org/10.33239/rjtdh.v7.253"
            }
        ]
    },
    {
        "id": "geo-licenciamento",
        "titulo": "Licenciamento ambiental: o que está sendo questionado?",
        "tema": "Política ambiental",
        "modo": "grupo",
        "autores": [
            "Vinícius Ferreira",
            "Luis Gustavo",
            "Ruan Silva",
            "Gabriel Mariano"
        ],
        "grupo": "Royal Code",
        "data": "2026-10-29",
        "resumo": "Em abril de 2026 o Ministério Público de Contas de São Paulo apontou possíveis irregularidades em licenciamentos de data centers. O trabalho organiza as perguntas técnicas e institucionais do caso.",
        "texto": [
            "O licenciamento ambiental é um instrumento de avaliação dos impactos de determinados empreendimentos. Conforme o caso, a análise pode envolver recursos hídricos, consumo de energia, emissões, ruído, uso do solo e medidas de prevenção, mitigação e monitoramento.",
            "Em 20 de abril de 2026, o Ministério Público de Contas do Estado de São Paulo publicou uma notícia sobre uma representação relativa aos processos de licenciamento de data centers da Microsoft em Hortolândia e Sumaré. O documento apontou possíveis irregularidades e solicitou a análise dos procedimentos relacionados aos projetos.",
            "A representação é um documento relevante para compreender o debate regulatório, mas precisa ser lida como uma manifestação que apresenta questionamentos. Ela não deve ser descrita como uma decisão definitiva que comprovou todas as irregularidades apontadas.",
            "### Questões técnicas",
            "- Os estudos consideraram as condições climáticas locais?",
            "- As estimativas de consumo de água estão documentadas?",
            "- Foram avaliadas as condições de abastecimento e estiagem?",
            "- As medidas de mitigação possuem indicadores de acompanhamento?",
            "### Questões institucionais",
            "- Quais órgãos participaram do licenciamento?",
            "- Quais documentos foram apresentados e analisados?",
            "- Como a população pode consultar os procedimentos?",
            "- Quais decisões ou respostas oficiais foram publicadas?",
            ">> Como acompanhar o caso:",
            "> diferencie a licença emitida, os questionamentos apresentados, as respostas das autoridades e as decisões posteriores. A situação jurídica pode mudar, por isso é importante consultar documentos atualizados antes de descrever o resultado da investigação."
        ],
        "imagem": {
            "src": "img/ComoFuncionaUmDataCenter.jpeg",
            "alt": "Infográfico com os componentes de um data center: espaço físico, energia, climatização, rede, servidores, armazenamento e segurança.",
            "legenda": "Infográfico dos componentes de um data center.",
            "credito": "System ITs (crédito indicado na imagem)"
        },
        "video": null,
        "links": [
            {
                "texto": "Notícia oficial do MPC-SP sobre a representação",
                "url": "https://www.mpc.sp.gov.br/representacao-do-mpc-sp-aponta-possiveis-irregularidades-em-data-centers-no-interior-paulista"
            },
            {
                "texto": "Documento original: representação do MPC-SP (PDF)",
                "url": "https://www.mpc.sp.gov.br/sites/mpcsp/files/noticias/Representa%C3%A7%C3%A3o%20MPC.%20Data%20Centers.%20PM%20Sumar%C3%A9%20e%20Hortol%C3%A2ndia%20%28final%29.pdf"
            },
            {
                "texto": "Implicações trabalhistas e ambientais dos data centers no Brasil (artigo acadêmico)",
                "url": "https://doi.org/10.33239/rjtdh.v7.253"
            },
            {
                "texto": "Lei nº 15.504/2026 — regime Redata (Planalto)",
                "url": "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15504.htm"
            }
        ]
    },
    {
        "id": "geo-sustentabilidade",
        "titulo": "O que significa um data center sustentável?",
        "tema": "Sustentabilidade",
        "modo": "grupo",
        "autores": [
            "Vinícius Ferreira",
            "Luis Gustavo",
            "Ruan Silva",
            "Gabriel Mariano"
        ],
        "grupo": "Royal Code",
        "data": "2026-10-29",
        "resumo": "Metas, contratos e anúncios não são resultados. O trabalho explica indicadores como o WUE e o que verificar sobre energia, água, drenagem e monitoramento.",
        "texto": [
            "Empresas podem anunciar contratos de energia renovável, tecnologias de refrigeração, metas de eficiência e iniciativas de reuso de água. Essas medidas precisam ser analisadas de acordo com seu alcance, prazo, forma de medição e resultados efetivamente publicados.",
            "### Origem e eficiência",
            "Verificar a origem da eletricidade contratada, os certificados utilizados, a demanda efetiva e as medidas de eficiência energética.",
            "### Consumo e reuso",
            "Procurar dados de consumo, origem da água, tecnologia de refrigeração, metas de eficiência e volumes efetivamente reutilizados.",
            "### Impactos e monitoramento",
            "Verificar medidas de drenagem, ruído, uso do solo, proteção de áreas sensíveis e acompanhamento dos impactos sobre a vizinhança.",
            "### O indicador WUE",
            "A eficiência do uso da água, conhecida pela sigla WUE (Water Usage Effectiveness), é um indicador utilizado para relacionar o uso de água à energia consumida pela infraestrutura de tecnologia da informação. Sua interpretação depende da metodologia, dos limites considerados e dos dados utilizados.",
            "Um valor de referência não deve ser tratado como prova de sustentabilidade por si só. Também é necessário investigar a disponibilidade hídrica local, a origem da água e a quantidade total consumida.",
            ">> Uma medida anunciada é o mesmo que um resultado?",
            "> Não. Uma meta, um contrato ou um projeto demonstra uma intenção ou compromisso. Para avaliar o resultado, procure relatórios de desempenho, dados medidos, prazos cumpridos e verificações independentes, quando disponíveis."
        ],
        "imagem": {
            "src": "img/energia-renovavel.jpeg",
            "alt": "Painéis solares e aerogeradores representando fontes de energia renovável.",
            "legenda": "Fontes renováveis podem reduzir emissões, mas dependem da origem comprovada da energia.",
            "credito": "Adobe Stock"
        },
        "video": null,
        "links": [
            {
                "texto": "XIAO et al. Environmental impact and net-zero pathways for sustainable AI servers in the USA (Nature Sustainability, 2025)",
                "url": "https://doi.org/10.1038/s41893-025-01681-y"
            }
        ]
    },
    {
        "id": "geo-sintese",
        "titulo": "Desenvolvimento para quem e a que custo?",
        "tema": "Síntese",
        "modo": "grupo",
        "autores": [
            "Vinícius Ferreira",
            "Luis Gustavo",
            "Ruan Silva",
            "Gabriel Mariano"
        ],
        "grupo": "Royal Code",
        "data": "2026-10-29",
        "resumo": "Síntese crítica do estudo: o que já pode ser investigado com dados públicos e o que exige informações adicionais para avaliar benefícios e custos da expansão dos data centers.",
        "texto": [
            "Os casos analisados mostram que a infraestrutura digital faz parte do espaço geográfico e depende de recursos materiais. A expansão de data centers pode atrair investimentos e ampliar serviços, mas também cria demandas por água, energia, terrenos e infraestrutura urbana.",
            "A análise crítica não exige concluir antecipadamente que todos os projetos são benéficos ou prejudiciais. Ela exige comparar os benefícios anunciados, os custos documentados, as condições locais e a distribuição dos resultados entre empresas, poder público e população.",
            "### O que já pode ser investigado",
            "- Localização e cronograma de obras divulgados pelas empresas.",
            "- Capacidades elétricas informadas para as instalações.",
            "- Debate público sobre consumo de água e refrigeração.",
            "- Existência de uma representação do MPC-SP.",
            "- Legislação federal relativa ao regime Redata.",
            "### O que exige dados adicionais",
            "- Consumo real de água de cada instalação.",
            "- Consumo elétrico efetivo em diferentes períodos.",
            "- Número de empregos permanentes e sua distribuição.",
            "- Saldo tributário efetivamente recebido pelo município.",
            "- Impactos comprovados sobre tarifas, abastecimento ou ambiente.",
            ">> Conclusão orientadora",
            "> O desafio central é entender como os benefícios da economia digital podem ser conciliados com a disponibilidade de recursos naturais, a capacidade da infraestrutura pública e os direitos das comunidades locais. Essa avaliação exige transparência, planejamento territorial e dados verificáveis.",
            "### Monte sua própria análise",
            "Utilize os casos da Microsoft e da Scala para elaborar uma comparação geográfica. Preencha cada item com informações documentadas. Quando não encontrar dados suficientes, registre o que ainda precisa ser investigado.",
            "### Passo 1 — Localizar",
            "Identifique o município, o terreno, as vias de acesso e a infraestrutura existente. Procure mapas e imagens históricas.",
            "### Passo 2 — Comparar",
            "Organize dados sobre água, energia, empregos, investimentos e mudanças na paisagem. Informe a fonte e o período de cada número.",
            "### Passo 3 — Avaliar",
            "Compare compromissos ambientais com resultados documentados e formule uma conclusão baseada nas evidências encontradas.",
            ">> Questão final",
            "> Quais condições deveriam ser exigidas de um grande empreendimento digital para que seus benefícios econômicos fossem compatíveis com a proteção dos recursos naturais e o bem-estar da população local?"
        ],
        "imagem": {
            "src": "img/data-center.jpeg",
            "alt": "Corredor com fileiras de servidores em um data center.",
            "legenda": "Fileiras de servidores: a face física da “nuvem”.",
            "credito": "iStock"
        },
        "video": {
        "tipo": "externo",
        "titulo": "Bora Entender | Datacenters no Brasil",
        "url": "https://www.camara.leg.br/tv/bora-entender/1313841-bora-entender-datacenters-no-brasil"
        },
        "links": [
            {
                "texto": "FURTADO; CUNHA. Inteligência artificial, data centers e colonialismo digital (Liinc em Revista, 2024)",
                "url": "https://doi.org/10.18617/liinc.v20i2.7272"
            }
        ]
    }
];
