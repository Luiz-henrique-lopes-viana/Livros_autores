const livros = [
    { 
      titulo: "A fênix Bandeirante",//1//
      desclivro:
        "Livro que divulga parcela dos resultados obtidos durante seis anos de pesquisa sobre a história da Academia de Polícia Militar do Barro Branco (APMBB), pela perspectiva das tradições implementadas na escola durante a década de 1930, em especial as tradições do uniforme histórico e do Espadim, que compunham um projeto de modernização do ensino militar paulista conduzido por Oficiais do Exército Nacional que atuavam como interventores junto à Força Pública do Estado de São Paulo (FPESP), durante a Era Vargas. Buscando alternativas ao referencial da história oficial e ao estruturalismo althusseriano, foi utilizado o referencial de pesquisadores como Thompson e Hobsbawn, em especial sobre a invenção das tradições. Nesse sentido, foram investigados diversos arquivos e fontes nas cidades de São Paulo, Rio de Janeiro e Resende, englobando acervos como o do Museu da PMESP, o Museu Acadêmico Cadete Eduardo Pinheiro na APMBB, Arquivo Histórico do Exército (AHEx), Centro de Pesquisa e Documentação de História Contemporânea do Brasil da Fundação Getúlio Vargas(CPDOC) e Memorial José Pessoa na Academia Militar das Agulhas Negras (AMAN). A partir desse referencial e das fontes, o autor demonstrou que o processo de gênese, evolução e consolidação das tradições é uma poderosa ferramenta poítico-pedagógica para mudanças na cultura de uma Instituição.",
      autor: {
        name: "Samuel Robens Loureiro",
        descAutor:
          " Doutorando em História da Educação pelo Programa de Estudos Pós-Graduados Educação: História, Política, Sociedade, da Pontifícia Universidade Católica de São Paulo (EHPS-PUC/SP). Pesquisa o processo de consolidação do sistema escolar adotado pelas academias de polícia militar no Brasil. Mestre em Educação pelo Programa de Estudos Pós-Graduados EHPS-PUC/SP. Também obteve o título de Mestre Profissional pela APMBB em 2014. Possui Bacharelado (2009) e Licenciatura (2010) em História pela Faculdade de Filosofia, Letras e Ciências Humanas da Universidade de São Paulo (FFLCH/USP). Também é Bacharel em Ciências Policiais de Segurança e Ordem Pública pela Academia De Polícia Militar Do Barro Branco (APMBB, 1994). Major da PMESP atua como Coordenador Operacional do 45º Batalhão de Polícia Militar do Interior, responsável pelo policiamento ostensivo no município de Praia Grande. Foi professor de História da PM na APMBB. Pesquisador na área de História da Educação integra o projeto de pesquisa História Das Instituições Educacionais: Intelectuais, Políticas E Práticas.",
      },
      imagem: {
        src: "img/fenixbandeirante.jpg",
        alt: "Fenix Bandeirante",
      },
      tag: {
        novo: true
      },
    },
    {
      titulo: "Artistas enfim: A Banda da Força Pública de São Paulo nos tempos da primeira República", //2//
      desclivro: "Sempre muito atento à “boca de mil dentes” que formava a cultura sonora da “Paulicea” em 1922, Mário de Andrade identificou que nela tocava “a banda do Fieramosca: Pa, pa, pa, pum!”, como também “a banda da polícia: Ta, ra, ta, tchim”. Não era sem razão as referências a esses dois grupos musicais. Eles eram bem conhecidos à época, em um panorama bastante concorrido e diversificado de bandas que circulavam pela cidade. Na verdade, entre o final do século XIX e as primeiras décadas do século XX as bandas de música ocupavam de maneira muito atuante os espaços públicos dos centros urbanos e em São Paulo a situação não era diferente, como indica o modernista. Embora as bandas tenham uma história variada e antiga, fundadas nas práticas comunitárias, civis e militares, elas começaram a se multiplicar na sua forma mais moderna nesse período. Por isso logo no começo do século XX já existiam dezenas e dezenas delas espalhadas pelos bairros de São Paulo.",
      autor:{ 
      name: "Cap PM José Roberto Dos Santos",
      descAutor: "é paulista de Sorocaba-SP nascido em 08 de abril, 1968. Bacharel em Música (instrumento clarinete) e Licenciado em História. Mestre em História Social pela Universidade de São Paulo (FFLCH) e doutorando em Humanidades pela Escola de Artes, Ciências e Humanidades da Universidade de São Paulo. É membro do grupo de Estudos de Bandas do Laboratório de Musicologia da USP e do Grupo de Estudos Entre a memória e a Hístória da música, do Departamento de História da FFLCH-USP. É Capitão do Quadro de Oficiais Músicos da Polícia Militar do Estado de São Paulo (veterano)."
    },
    
    imagem: {
    src: "img/banda_ForçaPublica.jpg",
    alt: "banda_ForçaPublica.jpg"
    },
    tag: {
      novo: true
    },
    },

    {
      titulo: "Código de Trânsito Brasileiro Comentado e Anotado", //3//

      desclivro:
        "A obra contém o Código de Trânsito Brasileiro (Lei n. 9.503, de 1997 e suas alterações até a Lei n. 13.160, de 2015); os Comentários ao artigo 161 do Capítulo XV (Das infrações) e a todos os artigos dos Capítulos XVI (Das penalidades), XVII (Das medidas administrativas) e XVIII (Do processo administrativo); E, em cada artigo, Pazetti faz referência às Resoluções do Conselho Nacional de Trânsito (CONTRAN) que tratam do assuntoo",
      autor: {
        name: "Ten.Cel PM Arnaldo Luis Theodosio Pazetti",
        descAutor:
          "Tenente Coronel da PM Arnaldo Luis Theodosio Pazetti nasceu em Santos, litoral paulista, e hoje chefia o Estado Maior do Comando de Policiamento de Trânsito.",
      },
      imagem: {
        src: "img/Codigo_Transito_CA.jpg",
        alt: "Codigo_Transito",
      },
      tag: {
        novo: true
      },
      
    },
  
    {
      titulo: "Código de Trânsito Brasileiro Anotado 2016", //4//
      desclivro: `A Coleção de Leis 2016 da Rideel está revista, atualizada e com conteúdo em
        Esta 5ª edição do nosso Código de Trânsito Brasileiro anotado, em comemoração aos 16 anos de vigência do atual CTB, apresenta dois grandes diferenciais em relação às edições anteriores:
        O principal deles é a ampliação do seu conteúdo, passando a ser uma coletânea completa de legislação de trânsito, com a maioria das Resoluções do Conselho Nacional de Trânsito (cujos textos estão devidamente atualizados, com as Resoluções posteriores que as alteraram); o segundo é a inclusão de anotações das Portarias do Departamento Nacional de Trânsito, nos artigos a que se referem (nas edições anteriores, as anotações limitavam-se às Resoluções do CONTRAN).
        Desde 2003, quando iniciamos este trabalho, a intenção tem sido integrar, em um mesmo compêndio, a legislação de trânsito em vigor em nosso país, caracterizada, principalmente, por sua complexidade.
        Dessa forma, o leitor tem acesso, em cada artigo, às outras normas que tratam do mesmo assunto, o que torna a consulta mais fácil e otimizada.
        Para o leigo no assunto, o formato do livro elimina, substancialmente, a dificuldade de interpretar e associar toda a legislação de trânsito.
        Para o especialista na matéria, a obra serve como fonte inicial de consulta, a partir da qual os assuntos podem ser detalhados com mais propriedade, pois a indicação principal de cada assunto já se encontra em mãos.`,
      autor: {
        name: "Ten.Cel PM Arnaldo Luis Theodosio Pazetti",
        descAutor: "Tenente Coronel da PM Arnaldo Luis Theodosio Pazetti nasceu em Santos, litoral paulista, e hoje chefia o Estado Maior do Comando de Policiamento de Trânsito.",
      },
      imagem: {
        src: "img/Codigo_Transito.jpg",
        alt: "apa_ctb_anotado3",
      },
      tag: {
        novo: true
      },
    },
    {
      titulo: "Orientações às Produções Cientificas & Direitos Autorais", //5//
      desclivro: "ORIENTAÇÕES ÀS PRODUÇÕES CIENTÍFICAS & DIREITOS AUTORAIS tem por finalidade o estudo à comunidade acadêmica a respeito de lacunas existentes em diversas obras de metodologias científicas e principalmente ensinar, dar dicas a você orientador, aluno, professor, coordenador e editor a respeito das fundamentais dúvidas que permeiam as produções científicas notadamente os Artigos Científicos, as diversas Monografias, quer sejam os Trabalhos de Conclusão de Curso (TCC), Dissertações de Mestrado ou ainda Teses de Doutorado. O foco principal deste livro é esclarecer ao leitor a respeito dos macetes para realizações das produções científicas bem como informar os pesquisadores dos direitos autorais que permeiam as construções textuais. Os principais itens deste livro são o de destacar e informar aos leitores a respeito do conhecimento a questão extremamente necessária que é a polêmica do plágio em trabalhos científicos, a importância das produções científicas, falar do ensino à adultos, o verdadeiro papel do orientador no processo, contribuições que a tecnologia possa ser útil inclusive no processo de orientação, modalidades de avaliações das produções, bem como diversas dicas de praticidades de interesse aos orientadores, professores e alunos. O conteúdo deste livro trata-se de anotações e manuscritos do autor de síntese do material didático, vide Bibliografia e conhecimento agregado em Stricto Sensu, utilizado por ele durante diversos anos em suas aulas de Metodologia Científica nas Graduações em nível Tecnólogos, Bacharelado e Pós Graduações Stricto Sensu, nos Mestrados e Doutorados, que participou como docente bem como anotações e orientações que usa em suas diversas palestras, em novo arranjo. O título Orientações às Produções Científicas & Direitos Autorais surgiu especialmente das dúvidas surgidas e esclarecidas em sala de aula bem como em orientações diversas, que em novo orquestrado de informações, objetiva-se neste livro informar os principais destaques aos leitores a respeito do conhecimento a questão polêmica frente importância das produções científicas e do plágio no tocante as técnicas diversas de elaboração.",
      autor:{ 
      name:"Cap PM Rodrigo de Oliveira Andreo Hernandez",
      descAutor:"Mestre em Ciências da Educação e Valores Humanos pela Unicapital, recomendação CAPES, Parecer CNE/CES Nº: 193/2009, Diário Oficial da União de 25AGO09. Rodrigo de Oliveira Andreo Hernandez também é Pós Graduado pela Universidade de São Paulo-USP e pela Pontificaria Universidade Capital-PUC, bem como pelo SENAC. É Oficial da Polícia Militar do Estado de São Paulo, patente de Capitão PM, formado pela Academia de Polícia Militar do Barro Branco, Bacharelado ,em Ciências Policiais de Segurança e Ordem Pública."
    },
    
    imagem: {
    src: "img/Orientacoes_Producoes.jpg",
    alt: "Orientacoes_Producoes.jpg"
    }
    },

    {
      titulo: "Trânsito - Reflexões Jurídicas, Vol II", //6//
      desclivro: `
        Dando continuidade ao 1º volume, lançado em 2009, este livro contém uma compilação de diversos textos escritos por mim, fruto de minha experiência profissional e dedicação docente, sobre a temática “trânsito”, publicados em diversos sites especializados, dentre os quais destaco (e recomendo) a homepage do CEAT  Centro de Estudos Avançados e Treinamento / Trânsito (www.ceatt.com.br) e o Código de Trânsito Brasileiro Digital, de propriedade da Perkons (www.ctbdigital.com.br).
        Aos que acompanham meu trabalho, trata-se de uma oportunidade ímpar para reler e estudar diversas questões polêmicas sobre o Código de Trânsito Brasileiro e legislação complementar. Àqueles que terão o primeiro contato com minha produção bibliográfica, espero contribuir com o esclarecimento e a reflexão a respeito dos assuntos aqui abordados.
        Como a legislação de trânsito se altera com muita frequência, obviamente que algumas informações encontram-se desatualizadas, por este motivo tomamos o cuidado de registrar a data em que cada artigo foi redigido (mantendo-se a redação original), bem como lançamos algumas notas explicativas a respeito de determinadas mudanças.
        Alerto, todavia, que é mínima a necessidade de ajustes, permanecendo o material, como um todo, atual e pertinente ao estudo.
        O objetivo maior, como o próprio título do livro esclarece, é propiciar reflexões a respeito deste assunto que cada vez mais faz parte da vida de qualquer cidadão. Neste volume 2, as reflexões vão além do aspecto jurídico, contemplando divagações que permeiam o comportamento do ser humano, de uma maneira geral.
        Os textos foram organizados por ordem alfabética do título, independente da data em que foram escritos, e sem uma necessária ordem de leitura; portanto, o leitor pode escolher o assunto que lhe despertar maior interesse, e ir diretamente à página indicada.
        Recomendo, entretanto, que, na medida do possível, seja realizada a leitura integral do trabalho, pois tenho certeza que o estudo por completo trará uma visão mais ampla sobre a legislação de trânsito brasileira.`,
      autor: {
        name: "Cap PM Julyver Modesto de Araujo",
        descAutor: "",
      },
      imagem: {
        src: "img/capa_reflexoes_2.jpg",
        alt: "capa_reflexoes_2.jpg",
      },
    },
  
    {
      titulo: "Código de Trânsito Brasileiro Anotado", //7//
      desclivro:
        "Esta 5ª edição do nosso Código de Trânsito Brasileiro anotado, em comemoração aos 16 anos de vigência do atual CTB, apresenta dois grandes diferenciais em relação às edições anteriores: o principal deles é a ampliação do seu conteúdo, passando a ser uma coletânea completa de legislação de trânsito, com a maioria das Resoluções do Conselho Nacional de Trânsito (cujos textos estão devidamente atualizados, com as Resoluções posteriores que as alteraram); o segundo é a inclusão de anotações das Portarias do Departamento Nacional de Trânsito, nos artigos a que se referem (nas edições anteriores, as anotações limitavam-se às Resoluções do CONTRAN). Desde 2003, quando iniciamos este trabalho, a intenção tem sido integrar, em um mesmo compêndio, a legislação de trânsito em vigor em nosso país, caracterizada, principalmente, por sua complexidade. Dessaforma, o leitor tem acesso, em cada artigo, às outras normas que tratam do mesmo assunto, o que torna a consulta mais fácil e otimizada. Para o leigo no assunto, o formato do livro elimina, substancialmente, a dificuldade de interpretar e associar toda a legislação de trânsito. Para o especialista na matéria, a obra serve como fonte inicial de consulta, a partir da qual os assuntos podem ser detalhados com mais propriedade, pois a indicação principal de cada assunto já se encontra em mãos.",
      autor: {
        name: "Cap PM Julyver Modesto de Araujo",
        descAutor:
          "",
      },
      imagem: {
        src: "img/capa_ctb_anotado3.jpg",
        alt: "Codigo_Transito_CA.",
      },
    },
    {
      titulo: "Manual Brasileiro de Fiscalização de Trânsito, Vol I", //8//
      desclivro: 
      `Fiscalizar, segundo o Anexo I do Código de Trânsito Brasileiro, é “controlar o cumprimento das normas estabelecidas na legislação de trânsito”.
      Para que isto seja possível, é necessário que o agente de trânsito não só as conheça, mas saiba interpretá-las, para uma correta adequação do fato ocorrido à previsão jurídica. Tal trabalho nem sempre é simples, pois, além da complexidade da legislação de trânsito, existem entendimentos diversos sobre cada dispositivo legal, o que causa divergências na atividade fiscalizadora.
      O Manual Brasileiro de Fiscalização de Trânsito, cujo Volume I foi aprovado pela Resolução do CONTRAN n. 371/10, vem, exatamente, suprir esta necessidade de padronização dos procedimentos adotados pelos órgãos e entidades executivos de trânsito e rodoviários de todo  o país, motivo pelo qual é de observância obrigatória, tendo sido prorrogado o prazo de adequação até o dia 31/12/12 (Deliberação n. 120/11).
      Neste livro, o leitor encontrará explicações detalhadas sobre cada infração de trânsito de competência municipal: descrição da infração, penalidade, medida administrativa, valor da multa, normas correlatas, quando autuar e não autuar, exigência de sinalização de trânsito e observações importantes no auto de infração.
      Ao condutor, será uma fonte de pesquisa importante, para que conheça seus direitos e deveres no trânsito. Ao agente de fiscalização, será uma ferramenta indispensável à boa atuação do órgão responsável por fazer cumprir a LEI.`,
      autor: {
        name: "Cap PM Julyver Modesto de Araujo",
        descAutor:
          "Capitão da Polícia Militar do Estado de São Paulo, especialista em trânsito.",
      },
      imagem: {
        src: "img/capa_manual_brasileiro_fiscalizacao_transito.jpg",
        alt: "capa_manual_brasileiro_fiscalizacao_transito",
      },
    },
  
    {
      titulo: "Poder de Polícia Administrativa de Trânsito", //9//
      desclivro:
        "O trabalho monográfico de Julyver Modesto de Araujo versa sobre o poder instrumental conferido à Administração pública, denomina¬do “poder de polícia” e que representa as intervenções estatais frente à liberdade e propriedade dos indivíduos. Apesar da aparente redun¬dância na expressão “poder de polícia administrativa” e das críticas quanto à atual utilidade do termo, o objeto de estudo justifica-se, em especial, pela sua utilização no Código de Trânsito em vigor no Brasil, instituído pela Lei nº 9.503/97, diante do que se pretendeu demonstrar, após a adequada explanação geral sobre o tema, a incidência desta potestade estatal na regulação e controle do uso das vias públicas, enfatizando-se, ao final, a questão das sanções administrativas de trânsito.",
      autor: {
        name: "Cap PM Julyver Modesto de Araujo",
        descAutor:
          "a orientação do Professor Dr. Silvio Luis Ferreira da Rocha, o autor obteve, com o presente trabalho, o título de Mestre em Direito do Estado, com concentração em Direito Administrativo, na Pontifícia Universidade Católica de são Paulo – PUC-SP. No ano de 2009, sua obra foi selecionada na IX Prêmio DENATRAN de Educação no trânsito, categoria 'obra técnica'.",
      },
  
      imagem: {
        src: "img/capa_poder_policia_administrativa_transito.jpg",
        alt: "capa_poder_policia_administrativa_transito",
      },
    },
  
    {
      titulo: "Trânsito - Reflexões Jurídicas, Vol I", //10//
      desclivro:
        "Lidar com as questões do trânsito tem sido minha paixão nos últimos doze anos, desde que me formei Oficial da Polícia Militar do Estado de São Paulo e fui classificado no 1º Batalhão de Polícia de Trânsito, responsável pelo policiamento de trânsito na área central da capital paulista. De lá pra cá, exercendo várias atividades profissionais relacionadas ao trânsito, sempre me dediquei ao contínuo estudo sobre esse assunto tão fascinante, cujo aprendizado é constante e ininterrupto.Costumo dizer que três são as características marcantes da legislação de trânsito brasileira: complexa, dinâmica e, infelizmente, cheia de falhas. Portanto, estudar esse emaranhado de normas constitui um verdadeiro desafio dos profissionais do trânsito e de todos aqueles que se interessam pela área.Nesta obra, reuni alguns artigos jurídicos redigidos por mim, nos últimos dois anos, e publicados em diversos sites jurídicos e especializados no tema, aos quais agradeço a exposição do meu trabalho e aproveito para divulgar seus endereços eletrônicos ao leitor, asseverando que encontrará outras boas referências doutrinárias sobre trânsito e áreas correlatas.",
      autor: {
        name: "Cap PM Julyver Modesto de Araujo",
        descAutor: "",
      },
  
      imagem: {
        src: "img/capa_reflexoes.jpg",
        alt: "capa_reflexoes.jpg",
      },
    },

    {
      titulo: "Noções de Direito Militar", //11//
      desclivro: "Esta obra trata de um ramo especial do Direito que atualmente é desconhecido dos estudantes da matéria, haja vista que esta disciplina não é ministrada nos cursos regulares das universidades públicas e privadas brasileiras. O Direito Militar é aplicado aos integrantes das Forças Armadas, das Polícias Militares e dos Corpos de Bombeiros Militares, instituições que devem obediência e respeito às regras impostas pelo Código Penal-Militar e pelo Código de Processo Penal-Militar. O Direito Militar desperta o interesse das pessoas porque cuida de uma categoria de funcionários públicos que são considerados como sendo funcionários especiais, que possuem prerrogativas e deveres especiais e que têm o direito de serem processados e julgados perante uma Justiça Especial, que é a Justiça Militar da União ou a Justiça Militar dos Estados e do Distrito Federal. O objetivo deste trabalho é servir de subsídio ao estudante de Direito que pesquisa acerca de um ramo diferenciado da disciplina, ao militar que exerce as funções de Polícia Judiciária-Militar, ao candidato em concurso público e aos amantes da leitura de forma geral.",
      autor: { 
        name: "Ten PM Ademir Antonio Minani",
        descAutor: "Ademir Antonio Minani está 1º Tenente no Corpo de Bombeiros da Polícia Militar do Estado de São Paulo; hodiernamente presta serviços no 13º Grupamento de Bombeiros, com sede em São José do Rio Preto; licenciado em Letras, Língua e Literatura Espanholas pela Faculdade Ernesto Riscali de Olímpia-SP; Pós-graduado em Direito Militar pela Universidade Cruzeiro do Sul-SP; membro fundador da Academia Olimpiense de Letras."
      },
      imagem: {
        src: "img/nocoes_direito.jpg",
        alt: "nocoes_direito.jpg"
      }
    },
    {
      titulo: "Dicionário de Linguagem Castrense", //12//
      desclivro: "Nesta obra estão definidos cerca de cinco mil verbetes e expressões que são utilizados no linguajar cotidiano das instituições militares, sobretudo, nos quartéis de bombeiros. A primeira seção cita uma série de expressões idiomáticas e traz a explicação de cada uma delas e a situação em que são utilizadas. Em seguida estão dispostos os termos classificados como jargões, que são aquelas palavras que fazem parte do linguajar falado dentro dos quartéis, ou então, usadas por certos grupos de militares. Os vocábulos classificados como gírias significam que a palavra faz parte do vocabulário militar, mas que, também é usada por outros indivíduos ou grupo deles. No glossário geral estão contemplados os verbetes usuais no cotidiano dos quartéis, tais como: adágios, axiomas, termos de anatomia, termos jurídicos, financeiros, logísticos, administrativos, forenses, termos técnicos, termos de heráldica, nomes de equipamentos de bombeiros, enfim, a obra contempla a universalidade de uma linguagem específica utilizada por um determinado seguimento social. O objetivo deste trabalho é servir de subsídio ao estudante de linguística que pesquisa acerca de um linguajar específico, ao militar que exerce suas funções na área administrativa, pois está constantemente obrigado a pesquisar para executar suas funções, ao candidato em concurso público e aos amantes da leitura de forma geral.",
      autor: { 
        name: "Ten PM Ademir Antonio Minani",
        descAutor: "Ademir Antonio Minani está 1º Tenente no Corpo de Bombeiros da Polícia Militar do Estado de São Paulo; hodiernamente presta serviços no 13º Grupamento de Bombeiros, com sede em São José do Rio Preto; licenciado em Letras, Língua e Literatura Espanholas pela Faculdade Ernesto Riscali de Olímpia-SP; Pós-graduando em Direito Militar pela Universidade Cruzeiro do Sul-SP; membro fundador e Conselheiro Fiscal da Academia Olimpiense de Letras."
      },
      imagem: {
        src: "img/dicionario_linguagem_castrense.jpg",
        alt: "dicionario_linguagem_castrense.jpg"
      }
    },
  
    {
      titulo: "Quartel da Luz - Mansão da Rota", //13//
      desclivro:
        "O livro 'Quartel da Luz, Mansão da Rota' é um rico documento que conta a história do Batalhão 'Tobias de Aguiar'. A narrativa de mais de cem anos do prédio do Quartel da Luz, localizado à Av. Tiradentes, no coração de São Paulo, é intrigante e apaixonada. Fatos curiosos e que ajudaram a construir esta história prendem a atenção do leitor do início ao fim. Fotos inéditas ilustram os vários momentos marcantes da corporação. Impossível não se emocionar com as diversas passagens descritas de maneira simples, atraente e com precisão histórica. Impossível não se orgulhar destes homens capazes de dar a vida em prol da segurança dos cidadãos de bem.",
      autor: {
        name: "Cel  PM Paulo Adriano Lopes Lucinda Telhada",
        descAutor: "",
      },
      imagem: {
        src: "img/quartel_luz_mansao_rota.jpg",
        alt: "quartel_luz_mansao_rota",
      },
    },
  
    {
      titulo: "A Polícia de São Paulo nos Campos da Itália", //14//
      desclivro:
        "A Polícia de São Paulo nos Campos da Itália de nossa autoria, encontra-se disponível para aquisição nos seguintes locais:Museu da Polícia Militar – Rua Jorge Miranda, 308 – Luz Fone: 3311-9955Associação de Oficiais da Reserva da Polícia Militar – Rua Tabatingüera, 278 – Centro Fone: 3107-7531Associação de Ex – Combatenetes do Brasil – Secção São Paulo – Rua Santa Madalena, 46 - Bela Vista Fone: 3285-2870.No mês de Maio, estará nas boas livrarias de São Paulo.O livro descreve um pelotão de homens da extinta Guarda Civil de São Paulo, que na 2ª Guerra Mundial, em pleno teatro de Operações na Itália, pertenceu à FEB (FORÇA EXPEDICIONÁRIA BRASILEIRA), atuando como pelotão de MILITARY POLICE (Polícia Militar).A intenção é trazer ao conhecimento de todo povo brasileiro a história de homens simples que lutaram por um mundo melhor, história de homens que morreram longe daqueles a quem amavam e foram sepultados em terra estranha; para os integrantes da PMESP, a história de velhos camaradas que valorizaram e elevaram o nome de nossa CorporaçãoProcuramos mostrar a história da Polícia do Exército e em especial do 1º Batalhão de Polícia do Exército ''Batalhão Marechal Zenóbio da Costa'' sediado no Rio de Janeiro.Os fatos e as 120 (cento e vinte) fotografias reproduzidas foram conseguidas pessoalmente com os sobreviventes entrevistados ou com os familiares dos que já haviam falecido e as biografias militares junto a Diretoria de Pessoal, seção de Inativos, da PMESP, através de suas pastas de Assentamentos Individuais.",
      autor: {
        name: "Maj  PM Paulo Adriano L. L. Telhada",
        descAutor: "",
      },
  
      imagem: {
        src: "img/capa_nao_disponivel.jpg",
        alt: "",
      },
    },
    {
      titulo: "Maus tratos aos animais e violência contra as pessoas", //15//
      desclivro: "O livro “Maus tratos aos animais e violência contra as pessoas – A aplicação da Teoria do Link nas ocorrências da Polícia Militar paulista”, de Marcelo Robis Francisco Nassaro é uma adaptação da dissertação de mestrado do autor, defendida em 2013. Robis Nassaro estudou registros criminais de pessoas autuadas pela Polícia Militar do Estado de São Paulo por maus tratos aos animais e observou que uma porcentagem significativa delas também apresentou outros registros por crimes violentos contra pessoas, indicando uma conexão entre esses delitos. A pesquisa, pioneira no Brasil, além de confirmar a relação entre os maus tratos aos animais e a violência contra as pessoas pode servir de base científica para que forças policiais de segurança criem ações de prevenção primária, combatendo os maus tratos aos animais e evitando outros crimes no futuro. A expectativa do autor é que este trabalho contribua para a implementação de políticas públicas, especialmente de segurança pública, para combater os maus tratos e agir preventivamente em relação aos futuros crimes violentos contra pessoas e animais. O valor arrecadado com a venda desta edição será revertido pelo autor, integralmente, para projetos do Instituto Nina Rosa, que tem como foco a difusão da Educação Humanitária, baseada em valores positivos, e que resgata a relação homem-ambiente, contribuindo para a formação de uma sociedade mais justa e pacífica.",
      autor: { 
        name: "Cap PM Marcelo Robis Francisco Nassaro",
        descAutor: ""
      },
      imagem: {
        src: "img/maus_tratos.jpg",
        alt: "maus_tratos.jpg"
      }
    },
  
    {
      titulo: "Irmão Caçula", //16//
      desclivro:
        "Esta é uma história real, que enfatiza um rapaz usuário de drogas.A vida dele não é nada boa, mas serve de exemplo a não ser seguido.O autor conta sua história e fala do pai para homenageá-lo.Fala menos sobre os outros irmãos, mas tem grande amor e admiração por todos eles. Sem dúvidas, é para homenageá-los também.Com certeza, muitos dos que lerem esta história se lembrarão de seus pais, que agiam da mesma forma, ou de maneira bem parecida.“As vezes tomamos decisões difíceis em nossas vidas que não dá para saber se foi correta. Só vamos saber se foi a correta ou a errada quando temos o resultado.”Natanael Correa.",
      autor: {
        name: "Sd PM Natanael Correa",
        descAutor: "",
      },
  
      imagem: {
        src: "img/irmao_cacula.jpg",
        alt: "irmao_cacula.jpg",
      },
    },

    {
      titulo: "A Polícia e a Igreja", //17//
      desclivro: "A Igreja Cristã tem um papel importante no combate à violência e à criminalidade. Este é o grande argumento de Evandro Teixeira Alves em sua tentativa de buscar viabilizar um relacionamento efetivo entre a Igreja e a polícia, instituições que ele vê inseridas no que chama de “eixo do bem”. Na opinião do autor, a promoção do bem estar social, e a melhoria dos níveis de segurança e de qualidade de vida das pessoas dependem da união dessas duas instituições, ainda bastante afastadas uma da outra por conta de tabus e paradigmas que impedem essas duas grandes expressões do tecido social de se relacionarem de forma mais eficaz e produtiva, buscando alcançar seus objetivos particulares e garantir o cumprimento de suas missões, que estão voltadas para um ponto comum: atender às comunidades em suas necessidades. Frise-se que tanto igreja quanto polícia são igualmente bem exploradas no conteúdo deste livro. Por isso Igreja e violência é um livro instigante. Trata dos aspectos organizacionais e históricos e dos fundamentos da polícia conhecida como comunitária. Fala também sobre a Igreja Cristã, dando um panorama sintético sobre seu histórico, suas ênfases, a missão, o sistema de ensino, a responsabilidade social da Igreja e sobre noções de antropologia cristã. A partir disso, o autor enumera algumas possibilidades para um relacionamento mais integrado e participativo entre a polícia e a igreja, sugerindo formas de atuação para ambas as instituições. Resultado de pesquisa realizada junto aos chefes de polícia do Estado de São Paulo, a obra expõe várias estratégias a partir das quais polícia e igreja podem aproximar-se, valendo-se desta aproximação para alcançar melhores resultados no controle e combate à violência. De leitura fácil e fluida, o livro mostra quão próximos e parecidos são esses institutos – a igreja e a polícia - que parecem, a muitos de nós, tão diferentes e distantes.",
      autor:{ 
      name: "Ten.Cel PM Evandro Teixeira Alves",
      descAutor:"Evandro Teixeira Alves é oficial superior da PM de S.Paulo, casado com Carla e pai de Vitória. Atualmente, trabalha como Comandante do 18º Grupamento de Bombeiros, em Barueri/SP, é pastor da Igreja Metodista, e conselheiro da Associação dos Policiais Militares Evangélicos de São Paulo (PMs de Cristo). Foi oficial de policiamento ostensivo, de trânsito, do Corpo de Bombeiros e da Defesa Civil no Governo do Estado de São Paulo. É formado no Curso de Formação de Oficiais pela Academia de Polícia Militar do Barro Branco, Teólogo pela Universidade Metodista de São Paulo, e Tecnólogo em Processamento de Dados pela Universidade Santana. Mestre e Doutor em Ciências Policiais de Segurança e Ordem Pública. Possui cursos de especialização stricto sensu na área de Bombeiros, Tecnologia na FATEC/SP, Pedagogia, Gestão pela Qualidade, Planejamento, Modelo de Gestão pela Excelência, entre outros. Participou de Seminários e Congressos na área de Polícia Comunitária, Gestão por Projetos (PMI), Teologia e Defesa Civil."
    },
    
    imagem: {
    src: "img/policia_igreja.jpg",
    alt: "policia_igreja.jpg"
    }
    },
  
    {
      titulo: "Vocabulário Policial", //18//
      desclivro:
        "resenha: Com 336 páginas, o Vocabulário contém mais de 3.000 verbetes, a história de todas as polícias militares do Brasil, a Declaração dos Direitos do Homem e do Cidadão, a Declaração dos Direitos Humanos, o Alfabeto Fonético Internacional e o Código Q. Foi preciada pelo Desembargador Alvaro Lazzarini, que escreveu: 'Quem, a partir de agora, quiser falar sobre polícia, nas suas múltiplas facetas, terá oportunidade de encontrar informações precisas neste Vocabulário Policial'.O Vocabulário Policial está à venda por R$ 30,00 e pode ser pago em até 5 (cinco) parcelas de R$ 6,00, com débito no holerite, no código da Associação de Auxílio Mútuo dos Oficiais da Polícia Militar.Os pedidos devem ser feitos por e-mail direcionado a midiaempresarial@uol.com.br que enviará por Correio",
      autor: {
        name: "Cel PM Alaor Silva Brandão",
        descAutor: "",
      },
  
      imagem: {
        src: "img/vocabulario-policial.jpg",
        alt: "vocabulario-policial.jpg",
      },
    },

    {
      titulo: "Estratégias de Policiamento Preventivo.", //19//
      desclivro: "O livro “Estratégias de Policiamento Preventivo” foi desenvolvido por dois oficiais da Polícia Militar de São Paulo como relato de suas experiências profissionais consolidadas em um amplo programa colocado em prática no início do segundo semestre de 2009, com parceria de outros órgãos relacionados à segurança pública, na cidade e região de Assis, sudoeste paulista, área de circunscrição do 32º BPM/I. Com recurso narrativo e descrição de iniciativas em doze meses de intensa atividade policial, os autores sistematizaram o programa intitulado “Indiferença Zero”. O texto concentra-se no movimento policial que causou positivo impacto na comunidade regional pelos rápidos resultados alcançados e comprovados por dados estatísticos juntados ao final da obra. Ao conjunto de relatos foram acrescidas experiências reconhecidas como boas práticas em outras unidades policiais de modo a enriquecer o repertório de ideias úteis ao trabalho dos gestores de segurança pública. O Coronel PM Lincoln de Oliveira Lima, com 28 anos na Polícia Militar, exerceu o Comando 32º BPM/I, quando ainda no posto de Tenente-Coronel PM e o Major PM Adilson Luís Franco Nassaro, com 25 anos de carreira, foi o seu Coordenador Operacional. Compilaram as estratégias em três grupos que formam um ciclo: “Integração, Motivação/Criatividade e Divulgação” (I-M/C-D) com uma abordagem sistêmica do exercício de polícia ostensiva. Ao mesmo tempo, descreveram um idealizado círculo virtuoso que o gestor local de segurança pública é capaz de provocar na esfera de policiamento preventivo. Os relatos publicados viabilizam uma espécie de “manual de boas práticas” abrangendo o surpreendente número de 100 itens, conforme índice remissivo oferecido também ao final da obra. A pretensão é clara: fazer circular tais informações e propiciar o surgimento de outras boas práticas, inspiradas nos mesmo registros.",
      autor:{ 
      name: "Lincoln de Oliveira Lima; Adilson Luís Franco Nassaro",
      descAutor:""
    },
    
    imagem: {
    src: "img/estrategias_policiamento.jpg",
    alt: "estrategias_policiamento.jpg"
    }
    },

    {
      titulo: " Introdução ao Estudo das Ciências Policiais.", //20//
      desclivro: 
      "A obra compreende uma ferramenta importante para a percepção dos temas que envolvem a Segurança Pública. Com cunho filosófico o autor inova lançando os primeiros delineamentos sobre a autonomia que pode envolver o assunto, desde aspectos da formação do conhecimento, sua interpretação e até demonstra a criação uma trilogia para interpretar...",
      autor: {
        name: "Maj  PM Célio Egídio da Silva",
        descAutor:
          "",
      },
  
      imagem: {
        src: "img/imagem.jpg",
        alt: "imagem.jpg",
      },
    },

    {
      titulo: 'Fundamentos Juridicos da Atividade Policial "1ed São Paulo: Supreme Cultura 2010"', //21//
      desclivro: "O mais completo e inédito trabalho sobre o sistema dicotômico de segurança pública brasileiro. Parte do postulado de separação dos poderes cunhado na Revolução Francesa, evoluindo numa moderna abordagem de direito processual penal comparado entre os atuais modelos francês, português, italiano, espanhol, alemão e norte-americano, para desaguar numa conclusiva tese de análise crítica sobre as atuais bases doutrinárias brasileiras, apontando suas inconsistências, como uma tentativa de delinear os conceitos e limites próprios das atividades de polícia administrativa e de polícia judiciária.",
      autor:{ 
      name: "Maj  PM Azor Lopes da Silva Junior",
      descAutor:"O autor, Azor Lopes da Silva Júnior, é Doutorando em Sociologia (UNESP), Mestre em Direito Público (UNIFRAN), Especialista em Direito (UNESP), Bacharel em Direito (UNIRP) e Especialista em Segurança Pública (PUCRS); no Sistema de Ensino Militar, é Doutor (APMG-PMPR-UFPR), Mestre (PMESP-CAES) e Bacharel (PMESP-APMBB) em Ciências Policiais de Segurança e Ordem Pública. É professor de Direito no Centro de Altos Estudos de Segurança, Centro Universitário de Rio Preto e Faculdade “Dom Bosco”.",
    },
    
    imagem: {
    src: "img/LIVRO_CAPA EDITADA_FUND ATIV POL.jpeg",
    alt: "LIVRO_CAPA EDITADA_FUND ATIV POL.jpeg"
    }
    },
    {
      titulo: "Constituição Federal Interpretada: Artigo por Artigo, Parágrafo por Parágrafo. 1. ed. São Paulo: editora Manole, 2010.", //22//
      desclivro: "Mais novo título a compor a bem-sucedida linha de códigos interpretados em formato reduzido da Editora Manole, a Constituição Federal interpretada cumpre a missão de apresentar interpretações artigo por artigo, parágrafo por parágrafo do principal diploma legal da República, de forma prática, didática e completa.",
      autor:{ 
      name: "Maj  PM Azor Lopes da Silva Junior",
      descAutor:"O Major Azor Lopes da Silva Júnior, foi convidado pelo organizador, Antônio Cláudio da Costa Machado, e pela coordenadora, Anna Candida da Cunha Ferraz, para compor um grupo de constitucionalistas de todo o país para se debruçarem sobre os dispositivos da CF/88, apresentando-os de forma clara para estudantes e profissionais do Direito. Ao Major Azor, co-autor da obra, coube cuidar do Capítulo VII: Da Administração Pública (artigos 37 a 43 da Constituição Federal"
    },
    
    imagem: {
    src: "img/CONST FED INTERPRETADA_CAPA.jpg",
    alt: "CONST FED INTERPRETADA_CAPA.jpg",
    }
    },
    {
      titulo: "Teoria e Prática Policial Aplicada aos Juizados Especiais Criminais (2. ed. São Paulo: Suprema Cultura, 2008)", //23//
      desclivro: " Com o surgimento dos Juizados Especiais Criminais em 1995, pela vontade do constituinte originário (art. 92, CF), nasceu um novo sistema de prestação jurisdicional que rompe não só com os paradigmas do formalismo processual, mas que também alarga a esfera de atuação das policias militares, não só para a repressão imediata, mas que também as legitima para a formalização do registro, por Termo Circunstanciado de Ocorrência, daquelas infrações penais consideradas menor potencial ofensivo e que, apesar da reduzida gravidade, são as de maior incidência criminal. Na busca da excelência na prestação de serviços públicos, a revisão hermenêutica de paradigmas jurídicos equivocados nos faria canalizar todas as energias das polícias civis à investigação e combate à criminalidade violenta e à organizada que cresce dia-a-dia, deixando-se os delitos de intolerância e de perturbação à ordem pública a cargo das polícias militares, cuja presença e atuação são mais constantes no meio social. Um efetivo investimento, de início meramente político nesse sentido, aliado a um eficiente planejamento estratégico com ênfase na capacitação das polícias – uma bem treinada e dirigida à investigação da criminalidade violenta e organizada e a outra à prevenção criminal, à repressão imediata dos delitos e ao registro simplificado de infrações de menor potencial ofensivo – certamente revolucionaria a segurança pública, aumentando para próximo da realidade o registro dos casos hoje subnotificados e o índice de elucidação dos crimes mais graves, cuja atribuição de investigação cabe, às Polícias Civis Estaduais e Polícia Federal.",
      autor:{ 
      name: "Maj  PM Azor Lopes da Silva Junior",
      descAutor:""
    },
    
    imagem: {
    src: "img/CAPA TEORIA E PRATICA 2 EDICAO.jpg",
    alt: "CAPA TEORIA E PRATICA 2 EDICAO.jpg",
    }
    },

    {
      titulo: "Manual de Apoio Jurídico Operacional",//24//
      desclivro:
        "A obra está disponível.",
      autor: {
        name: "Cap PM Azor Lopes da Silva Junior",
        descAutor:
          ""
      },
      imagem: {
        src: "img/livro_juridico.jpg",
        alt: "livro_juridico.jpg"
      },
      especial: true
    },
  

  
    {
      titulo: "O policial um servo de Deus",//25//
      desclivro:
        "Diante do grande clamor, nos dias atuais, por segurança, como sociedade buscamos um modelo ideal de polícia e a pergunta que constantemente fazemos é a seguinte:Onde encontrar o modelo ideal de polícia?Neste livro o autor apresenta o modelo ideal: o policial como um servo de Deus.O verdadeiro policial se alia ao Criador propiciando à sociedade uma melhor qualidade de vida ao impedir que haja morte, roubo ou destruição.João 10:10.Você encontrará neste livro respostas para indagações que têm impedido ou dificultado muitos cristãos de entrarem para a carreira policial. E se em um confronto com um marginal eu vier a mata-lo? Como ser cristão em uma profissão tão violenta aos olhos da sociedade?",
      autor: {
        name: "Custódio Alves Barreto Neto",
        descAutor: "",
      },
  
      imagem: {
        src: "img/Opolicial.gif",
        alt: "",
      },
    },

    {
      titulo: "Contra Ataque: Medidas Antibomba",//26//
      desclivro: "Os atentados ou ameaças de bomba podem ocorrer em qualquer lugar e a qualquer tempo. Durante os períodos de agitações políticas, situações de greves, demonstrações estudantis etc., tais episódios tendem a aumentar. As bombas podem ser construídas para parecer com quase tudo e podem ser colocadas ou enviadas de diversas formas. A probabilidade de encontrar uma bomba estereotipada é quase inexistente. O único denominador comum que existe entre bombas é que são construídas para explodir. A maioria das bombas são artesanais, e só são limitadas em seu projeto pela imaginação dos construtores da bomba e os recursos disponíveis. Como acontece com outros fatos policiais, depois que alguma bomba explodiu numa determinada localização, a polícia poderá receber cartas ou avisos telefônicos a respeito da existência de outras bombas colocadas ou mesmo apenas ameaças da existência de bombas. Estas últimas caracterizam o que classificamos de 'terror psicológico', pois envolvem toda uma situação real de procedimentos técnicos e científicos - mas o objetivo primordial não é a explosão, e sim a quebra da rotina do alvo que consequentemente, gerará os efeitos premeditados pela crise. É um paradoxo, porém fato verdadeiro que o progresso humano se realiza mais rapidamente, sem limitações legais ou econômicas, quando sua aplicação imediata consiste na mais eficaz destruição da humanidade, especialmente quando esta triste experiência se apresenta pela utilização de artefatos explosivos, utilizados na prática do terrorismo. Esse tipo de terrorismo, que a humanidade procura por todos os meios extirpar, já foi responsável pela morte de milhões de pessoas inocentes em todo o mundo. Todavia, temos infelizmente de conviver com ele, combatendo-o em todas as frentes, usando de todos os recursos legais necessários para evitá-lo e puni-lo.",
      autor: { 
        name: "Ten.Cel PM  Mascarenhas",
        descAutor: ""
      },
      imagem: {
        src: "img/contraataque.gif",
        alt: "contraataque.gif"
      }
    },

    {
      titulo: "Radiografia do Seqüestro", //27//
      desclivro: "",
      autor: { 
        name: "Ten.Cel PM Mascarenhas",
    "descAutor": `
      <p>A criminalidade vem em um crescente. Há necessidade de que toda a sociedade se prepare para defender-se dela. O Estado e suas instituições nunca conseguirão proporcionar a defesa de seus membros individualmente. Assim, cabe a cada um de nós preparar-se como membro do grupo social e adquirir os conhecimentos necessários para, nos limites da lei, assegurar a si e a seus familiares o coeficiente de proteção indispensável à tranqüilidade hodierna.</p>

      <p>A onipresença policial é impossível. A colaboração de todos é indispensável: O conhecimento do “Modus Operandi” é fator importante para a prevenção. Necessário é que todos o compreendam e ajudem a minimizar as possibilidades de ocorrência.</p>

      <p>Neste sentido, apresenta-se este trabalho que não esgota o assunto, mas irá preencher o vácuo da falta de prevenção, orientar para os comportamentos anti-riscos e transversalizar a consecução do objetivo comum, que é evitar que sejamos todos vítimas e grupo social objetos dessa agressão física e psicológica que é a perda da liberdade de ir e vir pela efetivação do crime de seqüestro. Devemos prevenir para não sofrer; discrição é a palavra-chave; atenção é a palavra sucesso.</p>

      <p><strong>Sinopse:</strong></p>

      <p>Na anatomia da criminalidade brasileira, o seqüestro é uma atividade financeira em que ocorre menos riscos e se fatura muito dinheiro em um pequeno lapso de tempo. Utilizando táticas de guerrilha, ações são cada vez mais audaciosas e contam com sofisticado apoio logístico, atingindo níveis incontroláveis em determinados Estados.</p>

      <p>Isso representa atualmente um risco de vida imediato para um número cada vez maior de pessoas, destacadamente os grandes empresários. Contudo, já é alta a estatística policial de casos onde os seqüestrados são da classe média e os valores dos resgates se limitam a bens móveis.</p>

      <p>Evidencia-se, desta maneira, que o seqüestro já é um fato comum, parte de nosso dia a dia, e que as seqüelas causadas às vítimas são de proporções muito maiores do que possa parecer. Aliado a esses aspectos, há um agravamento da situação quando ocorre a divulgação desorientada do seqüestro, o envolvimento de pessoas despreparadas e o aparecimento de 'heróis' oportunistas.</p>

      <p>É sob este prisma que se faz necessário radiografar o seqüestro e compreender que a primeira defesa é conhecer profundamente que tipos de pessoas o fazem, suas motivações, objetivos, técnicas e organizações. Em segundo plano, é importante saber conhecer o risco de vir a ser uma futura vítima desta modalidade de crime e, por fim, como administrar claramente o evento chamado 'cativeiro'.</p>
    `
  },
      imagem: {
        src: "img/sequestro.gif",
        alt: "sequestro.gif"
      }
    },

    {
      titulo: "Como se Comportar Enquanto Refém", //28//
      desclivro: " Ten Cel Mascarenhas",
      autor:{ 
      name: "Ten.Cel PM Mascarenhas",
      descAutor:"Este livro discute um tema importante, porque é atualíssimo na nossa dinâmica social. E, sendo as ocorrências com reféns uma realidade hoje corriqueira, o presente livro vem suprir uma necessidade que não pode ser ignorada. Trata-se de adquirir os instrumentos que permitem enfrentar e administrar o evento de maneira segura. O objetivo principal é indicar ao leitor o comportamento adequado às suas próprias atitudes e às da polícia que administra o evento crítico. De outro lado, objetiva servir aos grupos especiais cuja missão exige capacidade, precisão e consciência dos riscos. Conhecedor profundo da realidade da vida Policial Militar, não apenas teórico mas sobretudo pela experiência pessoal, o Capitão Mascarenhas aborda o tema de maneira estritamente profissional e objetiva. Resta aproveitar o valioso conhecimento colocado aqui à disposição, principalmente dispor dele para aperfeiçoar e corrigir possíveis erros em operações desse tipo."
    },
    
    imagem: {
    src: "img/referm.gif",
    alt: "referm.gif",
    }
    },

    {
      titulo: "Gerenciando Crises em Segurança", //29//
      desclivro: "O exercício da segurança, seja pública ou privada, exige de seus participantes a plena conscientização da necessidade de uma doutrina de segurança e risco, de um ambiente bem organizado e de ferramentas adequadas. Nesse contexto, o cidadão, responsável pela sua própria segurança, a organização policial, responsável pela segurança pública, e as empresas de segurança privada, têm o dever de conhecer e avaliar os riscos prováveis que os cercam a fim de evitá-los, preveni-los e inibi-los. Cabe, portanto, primordialmente a cada envolvido no processo, de forma isolada e conjugando esforços, estar devidamente motivado e preparado para cumprir o seu papel de forma pontual e determinante. Exercer essa capacitação gerenciadora de riscos nada mais é do que cumprir com o dever elementar de garantir a vida e preservar o patrimônio. Os esforços e investimentos em segurança ainda são subestimados, contudo é imperioso mudar esse cenário para se ter diretrizes, procedimentos e medidas claras, objetivas e adequadas para extrair os melhores resultados gerenciando crises em segurança.",
      autor:{ 
      name: "Ten.Cel PM Mascarenhas",
      descAutor:""
    },
    
    imagem: {
    src: "img/gerenciamento.gif",
    alt: "",
    }
    },
  
  
  
    {
      titulo: "O Profissional de Polícia", //30//
      desclivro:
        "Missão legal das Polícias; Diferenciação das responsabilidades: Civil, Penal e Adm; Ato Administrativo - Conceito e Requisitos; Conceito de autoridade e atuações; Fundamentação do Boletim de Ocorrência; Estudos sobre o direito penal; Prisão em flagrante; Busca domiciliar e conflitos de atribuições entre as polícias; Acidente de trânsito; Localização de Chassi; Seguro obrigatório; Tatuagem criminal; Observações do policial no atendimento de ocorrência; Advogado - Direitos; Procedimentos em ocorrências especiais; Morte de Policial; Partes do código penal brasileiro; Partes do código de trânsito brasileiro; Partes da lei de abuso de autoridade; Partes do estatuto da criança e do adolescente; Partes do estatuto do idoso; Partes da Lei Maria da Penha - Violência Doméstica e Familiar; Partes da lei de crime contra o meio ambiente; Partes do código de defesa do consumidor; Armas; Lei 9099/95; Drogas; Partes do código eleitoral; Partes da Lei de contravenções penais; Agenda Telefônica",
      autor: {
        name: "Sérgio Moreira dos Santos",
        descAutor: "",
      },
  
      imagem: {
        src: "img/profissional_policia.png",
        alt: "profissional_policia.png",
      },
    },
  
    {
      titulo: "Direito Penal Militar e Procedimentos Admininstrativos Militar", //31//
      desclivro: 
      "ASSUNTOS CONTIDOS: 1) Na parte DIREITO PENAL MILITAR: Embasamento e conceito do crime militar; Competência para apuração de crimes militares para a polícia judicial militar; Prazo para conclusão do inquérito; Prov. do Of. em Serv. Qdo conhecimento da infração penal militar; Da prisão em flagrante delito de crime militar; Esquematização para o inquérito policial militar (IPM); Esq. auto de prisão em flagrante delito (APFD); Súmulas de interesse para o exercício de polícia; Inaplicação da Lei 9.099/95 na atuação da polícia judicial militar; Itens a serem preenchidos para prisão em flagrante delito; Lavratura do auto prisão em flagrante delito (APFD); Providências iniciais no inquérito policial militar; Da deserção; Código penal militar (Alguns artigos); Código de processo penal militar (Alguns artigos); Reunião e ordem das peças do inquérito - Sindicância; Modelos de documentos; 2) Na parte PROCEDIMENTO ADMINISTRATIVO MILITAR: Poder hierárquico; Poder disciplinar; Responsabilidade administrativa; Processos administrativos, Processo administrativo disciplinar; Meios sumários; Diferenciações de procedimentos pelo RD da PMESP; Esquematização para a sindicância; Regulamento disciplinar da PMESP (Alguns artigos); Atividade extra-corporação; Acidente com viatura policial; Recursos administrativos",
      autor: {
        name: "Sérgio Moreira dos Santos",
        descAutor: "",
      },
  
      imagem: {
        src: "img/direito_penal_militar.png",
        alt: "direito_penal_militar.png",
      },
    },

    {
      titulo: 'Ilha Anchieta, Rebelião, Fatos e Lendas', //32//
      desclivro: "O livro “ILHA ANCHIETA”, Rebelião, Fatos e Lendas, traz ao leitor reminiscência de tempo idos e vividos , por um pessoal que deixou muita saudade e que, apesar da trágica, é muito importante para que os leitores tomem conhecimento do que foi a REBELIÃO, que mobilizou, não só a Polícia Militar da região, como também o 6º BC de Santos, a Polícia Militar Fluminense, a Polícia Marítima e o Exército, culminando com mortes desnecessárias, mas que aconteceu, e que tem de ficar em nossa recordação, indelével. Trata-se de um documento espetacular sobre a Ilha Anchieta, uma obra de muito capricho, muito boa vontade, fruto de uma pesquisa incansável do ambiente daquela época. Pesquisa esta, toda realizada através de um  estudo profundo dos anais da própria história e da Polícia Militar, mas com um estilo, comparado a Edgar Alan Pöe, Agatha Christie e Edgar Wallace, famosos escritores policiais, lembrando também, o filme “Ilha do Diabo Papilon” – (Borboleta), do escritor Henri Charrière, narrando a fuga de um preso daquele presídio francês, nas Guianas, por sinal ele próprio. Foram tempos que não deverão voltar jamais. Trazem muitas tristezas aos corações, pelas pessoas que desapareceram bruscamente. Muitos em plena juventude, pois eram soldados jovens que executavam um trabalho de muita responsabilidade diante da opinião pública. O ocorrido foi o resultado de uma convivência muito próxima entre presos e policiais que, como não se esperava, de uma hora para outra , eclodiu na “REBELIÃO”... Temos a Ilha como uma passagem esmaecida...de tempo que se foram. Que a Ilha Anchieta seja sempre um paraíso ecológico e que, essa imagem triste, vá aos poucos desaparecendo da mente das pessoas. Mas que permaneça o respeito e o reconhecimento àqueles que em cumprimento ao seu dever, deram a própria vida...",
      autor:{ 
      name: "Ten PM Samuel Messias de Oliveira",
      descAutor:""
    },
    
    imagem: {
    src: "img/livr0_ilhaanchieta.jpg",
    alt: "livr0_ilhaanchieta.jpg",
    }
    },

    {
      titulo: "A Ordem Unida na Evolução da Doutrina Militar", //33//
      desclivro:
        "A Ordem Unida na Evolução da Doutrina Militar de autoria do 1 Ten PM Helio Tenório dos Santos com prefacio do Cel Cláudio Moreira Bento, Presidente da Academia de Historia Militar Terrestre do Brasil. Trata-se do primeiro livro publicado no Brasil sobre a historia da prática de ordem unida nas organizações militares, abordando a questão com relação à sua influência na evolução e organização dos exércitos ocidentais através dos tempos. A obra enfoca o surgimento da ordem unida na Grécia Antiga. Acompanha sua evolução no Império Romano. Estuda as características da guerra na Idade Media. Mostra a importância da ordem unida como alavanca propulsora do Renascimento. Pinta com detalhes o apogeu da ordem unida no século das luzes e na era napoleônica. Conclui o caminho ligando as evoluções tecnológicas dos dois últimos séculos 'a importância presente da ordem unida. Estudando a história da ordem unida do ponto de vista tático de infantaria, o autor consegue demonstrar sua influencia nos mais diversos aspectos da vida militar, tais como o regulamento disciplinar, uso de uniformes, patentes e sistemas de promoção, suprimento, recrutamento, honras e continências, e vários outros. Os capítulos são ilustrados com fotos e esquemas, contendo inúmeros exemplos históricos. A obra foi aprovada pela Diretoria de Ensino e Instrução da Polícia Militar para divulgação nas escolas de formação na matéria de Educação Institucional, tendo sido distribuída pelo Clube Militar a unidades diversas das Forcas Armadas em todo o Brasil.",
      autor: {
        name: "1º Ten PM Helio Tenório dos Santos",
        descAutor: "",
      },
  
      imagem: {
        src: "img/livro_ordemunida.jpg",
        alt: "livro_ordemunida.jpg",
      },
    },

    {
      titulo: "Equitação preparação física do cavaleiro", //34//
      desclivro: "É mportante ressaltar que não houve, neste livro, a pretensão de fornecer fórmulas mágicas para resolver os diversos problemas de natureza física e orgânica decorrentes da prática da equitação, seja ela utilitária, competitiva ou de simples lazer. Na verdade, o que se procurou demonstrar é que os exercícios físicos preparatórios, executados antes de montar a cavalo, permitem que o cavaleiro tenha melhor desempenho e evite a ocorrência de vários tipos de lesões, algumas graves, decorrentes da falta de um trabalho de preparação física adequada. Assim procedendo, foi percorrida uma trajetória que envolveu duas etapas. A da literatura forneceu o embasamento teórico; a da reflexão levou à constatação da inexistência de trabalho específico e atualizado para o condicionamento físico do cavaleiro. A preparação de ambos os atletas - cavalo e cavaleiro - tem sido heterogênea, pois tem se valido do enfoque quase exclusivo que é dado ao cavalo; ou, ainda, do pressuposto de que o cavaleiro já tivesse o condicionamento físico necessário. Por meio da experiência de 30 anos na equitação - e dos estudos que ajudaram a consolidar este texto - tornou-se evidente a necessidade de se avaliar, em detalhes, a solicitação motora exigida do atleta no decorrer da prática desportiva. Dessa forma, a análise do trabalho muscular do ginete e da movimentação espacial de seu corpo, em seus diversos segmentos, foi de vital importância à adequação e à estruturação dos exercícios físicos específicos propostos. Ademais, não se podem ignorar alguns itens importantes. Primeiro, que quanto melhor o nível de coordenação motora tanto mais fácil e precisa será a realização do movimento, minimizando, conseqüentemente, o esforço e o consumo energético, que se traduzirá no baixo nível de fadiga e na redução das lesões. Segundo, que se pode desenvolver a flexibilidade, tornando-a apropriada à modalidade desportiva, respeitando as limitações antropométricas do cavaleiro. Terceiro, que a força muscular pode ser trabalhada, para a aquisição de resistência orgânica adequada às diferentes solicitações impostas aos segmentos corporais, ampliando-se a faculdade de vencer a fadiga. Por último, que o equilíbrio dinâmico leva em conta as posições preparatórias para movimentos variáveis, uma vez que, embora o cavaleiro tenha relativa estabilidade, estará montado sobre outro corpo em movimento que alterará constantemente seu equilíbrio. Logo, ao formular as propostas, o objetivo foi fornecer recursos auxiliares de alongamento, musculação e aeróbicos que ajudassem não só o cavaleiro a superar os problemas das limitações orgânicas e emocionais, mas também diminuíssem o nível de fadiga, e, em decorrência, as lesões físicas, aprimorando seu desempenho esportivo. Com a busca e a evolução de técnicas relacionadas com desempenho desportivo, as metas deixaram de depender exclusivamente da dedicação dos atletas e passaram a se aliar ao desenvolvimento tecnológico e científico. Assim, a utilização de todos os recursos disponíveis será decisiva para que se cruze a linha tênue que separa o gênio do medíocre, e para que se atinja o conceito da equitação em sua plenitude: arte e exercício.",
      autor:{ 
      name: "Jorge Augusto Rêgo",
      descAutor:""
    },
  
    
    imagem: {
    src: "img/livro_equitacao.gif",
    alt: "livro_equitacao.gif",
    }
    },

    {
      titulo: "Legislação Policial Militar Anotada vol.2", //35//
      desclivro: 
        "O presente livro, em continuação ao anterior que tratou da legislação de interesse das Polícias Militares e Corpos de Bombeiros Militares do país, vem agora cuidar da legislação pertinente à Polícia Militar do Estado de São Paulo, estando devidamente acompanhada de anotações que tencionam facilitar o entendimento do dispositivo apreciado. Destina-se principalmente a dar um direcionamento sobre o assunto pesquisado, possibilitando encontrar a resposta que se estiver buscando. Presta-se ao estudo e à pesquisa dos que atuam nas áreas jurídicas, em especial, dos que cuidam da legislação relativa à organização militar do Estado de São Paulo, bem como pode ser amplamente difundida entre os diversos cursos existentes na milícia Bandeirante, servindo como livro-base para o acompanhamento de unidades didáticas que versem sobre organização e efetivos, administração policial militar, direito constitucional aplicado e outras afins. Excetuando-se a Constituição Estadual, que data de 5-10-1989, as demais normas existem há pelo menos trinta anos e, hodiernamente, não mais estão acessíveis aos seus usuários, dificultando o trabalho dos administradores da Polícia Militar do Estado de São Paulo, bem como o dos estudiosos ou profissionais das ciências jurídicas que atuam nessa área. Trata-se de obra inédita contendo muito da experiência de seus autores na análise da legislação apontada, principalmente com respeito aos conflitos de sua aplicação na Polícia Militar do Estado de São Paulo.",
      
      autor: {
        name: "Ailton Soares; Roberto de Jesus Moretti; Otávio Henrique Oliveira de Souza",
        descAutor: `
          <p>Otávio Henrique Oliveira de Souza é Major PM (Asp/80), Chefe da Subseção de Legislação da 1ª EM/PM, bacharel em Direito pela Faculdade de Direito de Guarulhos (e-mail: otaviohenrique@polmil.sp.gov.br).</p>
    
          <p>Ailton Soares é Capitão PM (Asp/82), Adjunto da Subseção de Legislação da 1ª EM/PM, bacharel em Direito pela Universidade Braz Cubas de Mogi das Cruzes (e-mail: asoares@polmil.sp.gov.br).</p>
    
          <p>Roberto de Jesus Moretti é Capitão PM (Asp/84), Adjunto da Subseção de Legislação da 1ª EM/PM, bacharel em Direito pela Universidade de São Paulo (e-mail: moretti@polmil.sp.gov.br).</p>
    
          <p>Instrutores de diversos cursos realizados para oficiais e praças de sua Corporação, atualmente exercem suas funções junto ao Estado-Maior da Polícia Militar do Estado de São Paulo, na condição de oficiais adjuntos de legislação, onde têm a oportunidade de assessorar o Comando Geral na análise e interpretação das normas em vigor afetas à sua Polícia Militar.</p>
    
          <p>Tendo como co-autor Antônio Bernardes de Souza, Coronel da reserva da Polícia Militar do Estado de São Paulo, publicaram as seguintes obras:</p>
          <ul>
            <li>Direitos e vantagens dos policiais militares do Estado de São Paulo, pela Editora Atlas;</li>
            <li>Plebiscito, a hora do povo, pela Editora Fisco e Contribuinte.</li>
          </ul>
    
          <p>Individualmente, contam com textos publicados na Revista “A Força Policial”, periódico bimestral que divulga matérias de interesse da Polícia Militar do Estado de São Paulo.</p>
        `
      },
    
      imagem: {
        src: "img/capa Leg Anot vol 2.gif",
        alt: "capa Leg Anot vol 2.gif"
      },
    
      especial: true
    },
    
    {
      titulo: "Roteiro de Investigação e Registro dos Crimes Militares", //36//
      desclivro: "Trata-se de uma obra direcionada a ampliar o conhecimento teórico e prático de todas as autoridades envolvidas na atividade de Polícia Judiciária Militar, esclarecendo dúvidas e apresentando conteúdo doutrinário referente a esta matéria de legislação especial. Em suma, busca ensinar tanto Oficiais quanto Graduados a realizarem investigações dos crimes militares, bem como elaborar devidamente os Procedimentos devidos de Polícia Judiciária Militar: Auto de Prisão em Flagrante Delito, Inquérito Policial Militar e Termo de Deserção. Dividi-se em três partes: Doutrina - Modelos - Legislação.",
      autor: {
        name: "Alexandre Henriques da Costa; Carlos Botelho Lourenço; Sérgio de Souza Merlo",
        descAutor: `
          <p>Alexandre Henriques da Costa (1º Ten PM - 2º BPChq)</p>
          <p>Carlos Botelho Lourenço (Cap PM - CPChq)</p>
          <p>Sérgio de Souza Merlo (Cap PM - CPChq)</p>
          <p>Lançamento em 04 de maio de 2001, às 17 horas, na sede do 2º Batalhão de Polícia de Choque, sito à Rua Dr. Jorge Miranda, 367 - Luz.</p>
        `
      },
      imagem: {
        src: "img/roteiro_investigacao.jpg",
        alt: "roteiro_investigacao.jpg"
      }
    },
    

  {
    titulo: "Legislação Policial Militar Anotada 1ª", //37//
    desclivro: ` O presente livro pretende publicar a legislação relativa às Polícias Militares e Corpos de Bombeiros Militares, a qual, acompanhada de anotações pertinentes  facilitarão ao leitor um entendimento claro do dispositivo que estiver apreciando, de modo que lhe sejam minoradas as dúvidas por ventura existentes.

   A legislação que ora é apresentada, diz respeito especificamente à legislação aplicável às Polícias Militares e Corpos de Bombeiros Militares do Brasil, vez que seu conteúdo diz respeito à dispositivos da Constituição Federal que lhes são mais interessantes e também da legislação federal que estabelece as normas gerais de organização dessas instituições.

 Excetuando a Constituição Federal, que data de 5-10-1988, as demais normas tratam-se de legislação existente a pelo menos trinta anos e que hodiernamente não mais estão acessíveis aos seus usuários, dificultando o trabalho dos administradores de polícia e de bombeiro militares, bem como dos estudiosos ou profissionais das ciências jurídicas que militam nessa área, obrigando-os a se socorrer de cópias reprográficas ou apostilas que são fornecidas nos diversos cursos das Corporações e que, nem sempre, estão atualizadas ou são plenamente confiáveis no seu teor.

 Esta legislação é parte integrante dos currículos dos vários cursos de formação e aperfeiçoamento, especialmente da Polícia Militar do Estado de São Paulo, e, temos certeza que também de outras organizações militares estaduais. 

 De qualquer modo, devem ser de conhecimento de todos os profissionais de polícia militar e de bombeiros militar. 

 Não obstante sua destinação específica, ela interessa também aos profissionais das ciências jurídicas que pretendem atuar em defesa dos direitos dos policiais militares, constituindo-se num grande obstáculo a ausência de fonte segura desse conhecimento.

 Sem pretender esgotar os assuntos abordados, destina-se principalmente a dar um direcionamento ao leitor sobre o assunto pesquisado, de modo a lhe facilitar achar a resposta que estiver buscando. 

 Esta obra trata da legislação de interesse das Polícias Militares e dos Corpos de Bombeiros Militares do País, devidamente acompanhada de anotações pertinentes que  pretendem facilitar o entendimento do dispositivo apreciado. 
Destinando-se, principalmente, a dar um direcionamento sobre o assunto pesquisado, facilitando-se encontrar a resposta que se estiver buscando. 

 Presta-se ao estudo e pesquisa dos que militam nas áreas jurídicas, em especial, os que cuidam da legislação afeta às organizações militares estaduais, bem como pode ser amplamente difundida entre os diversos cursos existentes nessas milícias, servindo como livro-base para o acompanhamento de unidades didáticas que versem sobre organização e  administração policial militar, direito constitucional aplicado e outras afins.

 O conteúdo deste livro destina-se aos policiais militares e bombeiros militares de todo o País, bem como aos diversos profissionais das áreas jurídicas que militam no campo militar estadual, além de professores, instrutores e alunos dos diversos cursos de formação, aperfeiçoamento e especialização existentes em todas essas milícias, servindo como ponto de partida para o perfeito entendimento da legislação que regula a organização das forças militares estaduais. 

 Os autores procuraram destacar, em cada dispositivo analisado, os pontos de interesse à sua interpretação, indicando ao estudioso, senão, a plena solução da dúvida, mas, ao menos, uma direção que certamente o levará à ela. 

 Trata-se de obra inédita contendo muito da experiência de seus autores na análise da legislação apontada, principalmente com respeito aos conflitos de sua aplicação na Polícia Militar do Estado de São Paulo.`,
    autor: {
      name: "Otávio Henrique Oliveira de Souza; Ailton Soares; Roberto de Jesus Moretti",
      descAutor: `
        <p>Otávio Henrique Oliveira de Souza é Major PM (Asp/80), Chefe da Subseção de Legislação da 1ª EM/PM, bacharel em Direito pela Faculdade de Direito de Guarulhos (e-mail: otaviohenrique@polmil.sp.gov.br).</p>
  
        <p>Ailton Soares é Capitão PM (Asp/82), Adjunto da Subseção de Legislação da 1ª EM/PM, bacharel em Direito pela Universidade Braz Cubas de Mogi das Cruzes (e-mail: asoares@polmil.sp.gov.br).</p>
  
        <p>Roberto de Jesus Moretti é Capitão PM (Asp/84), Adjunto da Subseção de Legislação da 1ª EM/PM, bacharel em Direito pela Universidade de São Paulo (e-mail: moretti@polmil.sp.gov.br).</p>
  
        <p>Instrutores de diversos cursos realizados para oficiais e praças de sua Corporação, atualmente exercem suas funções junto ao Estado-Maior da Polícia Militar do Estado de São Paulo, na condição de oficiais adjuntos de legislação, onde têm a oportunidade de assessorar o Comando Geral na análise e interpretação das normas em vigor afetas à sua Polícia Militar.</p>
  
        <p>Tendo como co-autor Antônio Bernardes de Souza, Coronel da reserva da Polícia Militar do Estado de São Paulo, publicaram as seguintes obras:</p>
        <ul>
          <li>Direitos e vantagens dos policiais militares do Estado de São Paulo, pela Editora Atlas;</li>
          <li>Plebiscito, a hora do povo, pela Editora Fisco e Contribuinte.</li>
        </ul>
  
        <p>Individualmente, contam com textos publicados na Revista “A Força Policial”, periódico bimestral que publica matérias de interesse da Polícia Militar do Estado de São Paulo.</p>
      `
    },
  
    imagem: {
      src: "img/capalegispmanotada.jpg",
      alt: "capalegispmanotada"
    },
  
    especial: true
  },
  


  {
    titulo: 'Direitos e Vantagens dos Policiais Militares do Estado de São Paulo - 4ª Edição - Revista e Ampliada - Editora Atlas', //38//
    desclivro: `
    <p class="resume_book" >Trata-se de uma obra que visa fornecer os elementos necessários para o estudo e a compreensão da legislação aplicável aos integrantes da Polícia Militar do Estado de São Paulo. Os autores, com a experiência adquirida nos anos de serviço prestados junto à 1ª Seção do Estado Maior da Polícia Militar, órgão de assessoria do Comandante Geral, procuram resolver problemas de interpretação e aplicação da legislação vigente, despertando o interesse pelos complexos temas diretamente relacionados com a área de recursos humanos da organização. Destina-se, além dos policiais militares que encontram dificuldades em exercer seus direitos com total desembaraço, aos profissionais de Direito que atuam nessa área, tais como Juízes, Promotores, Advogados, Estagiários e Estudantes. Desde a última edição, em 1996, muitas mudanças ocorreram no ordenamento jurídico, implicando na reformulação de muitos capítulos e até a inclusão de outros nesta 4ª edição - Revista e Ampliada.</p>

    <strong>Em termos Federais, temos:</strong>
   <p class="resume_book" > O direito dos policiais militares, conforme consta na Constituição Federal e em diversas leis federais que regulamentam a profissão e garantem os direitos dos militares, assegurando que os integrantes da Polícia Militar possam exercer suas funções com dignidade e segurança.</p>
    <strong>Em termos Estaduais, temos a edição:</strong>
    <p class="resume_book" >Das normas estaduais que regulam a atuação dos policiais militares, as quais complementam as legislações federais e tratam de questões específicas da Polícia Militar do Estado de São Paulo, oferecendo diretrizes e regulamentações que visam garantir a segurança jurídica e a proteção dos direitos dos seus integrantes.</p>
`,
    
    autor: {
      name: "Ailton Soares; Antônio Bernarde; Otávio Henrique Oliveira de Souza; Roberto de Jesus Moretti",
      descAutor: `
        <p>Ailton Soares é Capitão PM (Asp/82), Adjunto da Subseção de Legislação da 1ª EM/PM, bacharel em Direito pela Universidade Braz Cubas de Mogi das Cruzes (e-mail: asoares@polmil.sp.gov.br).</p>
  
        <p>Antônio Bernardes de Souza é Coronel Res PM (Asp/71), Diretor da Cruz Azul, bacharel em Direito pela Faculdade de Direito de Guarulhos.</p>
  
        <p>Otávio Henrique Oliveira de Souza é Major PM (Asp/80), Chefe da Subseção de Legislação da 1ª EM/PM, bacharel em Direito pela Faculdade de Direito de Guarulhos (e-mail: otaviohenrique@polmil.sp.gov.br).</p>
  
        <p>Roberto de Jesus Moretti é Capitão PM (Asp/84), Adjunto da Subseção de Legislação da 1ª EM/PM, bacharel em Direito pela Universidade de São Paulo (e-mail: moretti@polmil.sp.gov.br).</p>
      `
    },
  
    imagem: {
      src: "img/20000207.jpg",
      alt: "20000207.jpg"
    }
  },
  


  {
    titulo: "Manual de Prevenção e Combate a Incêndios", //39//
    desclivro: "o Manual de Prevenção e Combate a Incêndios, pela Editora SENAC e Livraria Saraiva. Trata-se de um material indispensável para empresas de todos os portes e todos aqueles que se interessam pelo assunto. Em seu conteúdo poderá ser encontrado noções básicas sobre hidrantes, extintores, iluminação de emergência, primeiros socorros entre outros assuntos. Sera realizado no dia 12 de maio, quarta feira a partir das 19:00h, lançamento do livro e noite de autógrafos na Saraiva Mega Store, Shopping Center Norte, travessa Casalbuono, 120.",
    autor:{ 
    name: "Maj    PM Abel Batista Camilo Júnior",
    descAutor:""
  },

imagem: {
  src: "img/abel204293.jpg",
  alt: "abel204293.jpg"
}
},


{
  titulo: "O Código Florestal e a Legislação Extravagante - A Teoria e a Prática da Proteção Florestal", //40//
  desclivro: "Os efeitos de danos nocivos ao meio ambiente foram e ainda são uma preocupação de ordem mundial, enquadrando-se aí como motivo preocupante a degradação florestal, existente na história humana desde seu início. Atualmente, a preocupação com esta área ambiental ganha destaque, considerando que em todo o planeta em poucos lugares encontraremos uma vegetação ainda preservada e capaz de realizar suas funções ambientais. O Brasil, como país de destaque por sua rica e exuberante flora, possui uma legislação específica para a proteção florestal, a qual tem como missão a garantia jurídica da proteção de florestas e demais formas de vegetação nos diferentes ecossistemas nacionais, como a Mata Atlântica, o Cerrado e a Floresta Amazônica. A presente obra busca subsidiar os leitores com elementos teóricos e práticos necessários à compreensão da legislação ambiental correlata à área florestal, tratando do assunto a partir da estrutura jurídica do Código Florestal Brasileiro, a Lei Federal n° 4 .771, de 1965, entrelaçando-o com toda a legislação ambiental que possua como foco a proteção florestal.",
  autor:{ 
  name: "Rogério da Cruz Caradori",
  descAutor:""
},

imagem: {
src: "img/codigo-florestal-legislacao-extravagante.jpg",
alt: "codigo-florestal-legislacao-extravagante.jpg",
}
},

{
  titulo: "Direitos Humanos - Perspectivas e reflexões para o século XXI",//41//
  desclivro: "Esta obra resulta da atuação de Grupo de Pesquisa/CNPq intitulado Direitos Humanos - Perspectivas e Reflexões para o Século XXI que funcionou no biênio 2011/2013 tendo como principais características a pluralidade de ideias, diversidade de membros e o amplo interesse na propagação da educação e da advocacia em Direitos Humanos. Mais que um pilar da República Federativa do Brasil, o respeito aos Direitos Humanos aqui se revela como medida de coexistência, de superação, e porque não afirmar, de bem viver.",
  autor:{ 
  name: "Rogério da Cruz Caradori",
  descAutor:""
},

imagem: {
src: "img/direitos-humanos.jpg",
alt: "direitos-humanos.jpg",
}
},


{
  titulo: "Urbanização: Uma ferramenta dos direitos fundamentais na garantia da segurança pública", //42//
  desclivro: 'Em tempos modernos as questões envolvendo a área de segurança pública ganham cada vez mais destaque na mídia e nas discussões em sociedade. Ao contrário do que muitos pensam, as atividades policiais não são as únicas garantidoras da manutenção da ordem pública. Cabe ao Estado a adoção de políticas públicas que garantam a aplicação dos direitos fundamentais voltados à sadia qualidade de vida na questão das moradias em grandes centros urbanos. Esta obra busca compreender até que ponto a falta de urbanização e o desrespeito a esse direito podem influenciar em questões de segurança pública e, desta forma, trazer problemas de quebra de ordem da paz social. O livro aborda em seu Capítulo I uma breve noção sobre urbanização, desde sua criação na história e características modernas nas grandes cidades. No Capítulo II adentra à seara da Segurança Pública indicando os modelos de policiamento e políticas públicas adotadas nesses mesmos centros urbanos da atualidade. Por fim, em seu Capítulo III, entrelaça os assuntos de forma a apontar os padrões mínimos necessários para se obter resultados eficazes da tão sonhada "sensação de segurança", resultante de atividades policiais e de políticas públicas que garantam a paz social. Livro em formato digital, publicado pela Amazon Books, disponível em:',
  autor:{ 
  name: "Rogério da Cruz Caradori",
  descAutor:""
},

imagem: {
src: "img/urbanizacao-ferramenta-direitos-fundamentais-garantia-seguranca-publica.jpg",
alt: "urbanizacao-ferramenta-direitos-fundamentais-garantia-seguranca-publica.jpg",
}
},

{
  titulo: "Os Direitos Humanos e o conflito de civilizações", //43
  desclivro: "A obra trata de forma sucinta a questão dos conflitos das civilizações modernas, como suas origens, características e finalidades, entrelaçando a questão com os Direitos Humanos na atualidade.",
  autor:{ 
  name: "Rogério da Cruz Caradori",
  descAutor:""
},

imagem: {
src: "img/direitos-humanos-conflitos-civilizacoes.jpg",
alt: "direitos-humanos-conflitos-civilizacoes.jpg",
}
},





];

export { livros };