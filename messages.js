const messages = {
	"ligar": {
		"positive": [
			{ "text": "O atendente abriu um chamado e te passou o protocolo. Agora é esperar.", "progresso": 3, "paciencia": 1, "opensTicket": true },
			{ "text": "Depois de explicar tudo em detalhes 5 vezes, finalmente abriram um chamado para você.", "progresso": 3, "paciencia": -5, "opensTicket": true },
			{ "text": "O atendente falou que sente muito pela sua situação e abriu um chamado.", "progresso": 3, "paciencia": 2, "opensTicket": true },
			{ "text": "Seu caso foi registrado e está em análise.", "progresso": 3, "paciencia": 2, "opensTicket": true },
			{ "text": "O sistema gerou um chamado para sua reclamação.", "progresso": 3, "paciencia": 1, "opensTicket": true },
			{ "text": "Atendente abriu chamado e prometeu retorno em até 48h.", "progresso": 3, "paciencia": 3, "opensTicket": true },
			{ "text": "Chamado aberto! Agora é torcer para alguém olhar seu caso rápido.", "progresso": 3, "paciencia": 2, "opensTicket": true },
			{ "text": "Seu chamado foi aberto e está na fila de atendimento da equipe técnica.", "progresso": 3, "paciencia": 1, "opensTicket": true }
		],
		"negative": [
			{ "text": "Você ficou 45 minutos ouvindo a musiquinha e a ligação caiu.", "paciencia": -5 },
            { "text": "Você confirmou seu CPF 3 vezes e a ura informou que estava errado, a ligação caiu.", "paciencia": -6 },
            { "text": "Atendente não conseguiu abrir o chamado por indisponibilidade no sistema.", "paciencia": -4 },
            { "text": "O agente de IA na ura não conseguia te entender, entrou em loop e a ligação caiu.", "paciencia": -8 },
			{ "text": "O atendente te transferiu para outro setor e a ligação caiu antes dele abrir o chamado.", "paciencia": -7 },
			{ "text": "Você foi colocado em espera por mais de uma hora e desligou revoltado.", "paciencia": -5 },
			{ "text": "O chamado que abriram sumiu do sistema assim que você desligou a ligação.", "paciencia": -6 },
			{ "text": "O atendente ficava pedindo 'só mais um momento' e não abriu o chamado. Você perdeu tempo.", "paciencia": -8 },
			{ "text": "Te atenderam e disseram que não há motivo para abrir chamado, pois o serviço vai normalizar sozinho em breve.", "paciencia": -1 },
			{ "text": "A ura pediu o número do passaporte para prosseguir. Qual a lógica disso?", "paciencia": -3 },
			{ "text": "O atendente registrou um chamado no cadastro errado e você só viu depois que desligou.", "paciencia": -6 },
			{ "text": "A automação na ura marcou seu chamado como 'resolvido' assim que você desligou.", "paciencia": -4 },
		]
	},
	"chamarWpp": {
		"positive": [
			{ "text": "Depois de passar por 40 opções, o bot finalmente abriu um chamado para você.", "progresso": 2, "paciencia": 1, "opensTicket": true },
			{ "text": "Após muita insistência, um atendente humano assumiu e abriu um chamado.", "progresso": 4, "paciencia": 1, "opensTicket": true },
			{ "text": "Seu caso foi registrado no sistema via WhatsApp. Chamado aberto.", "progresso": 3, "paciencia": 1, "opensTicket": true },
			{ "text": "O bot funcinou e você recebeu uma mensagem de confirmação: chamado aberto!", "progresso": 1, "paciencia": 1, "opensTicket": true },
			{ "text": "O bot pediu seus dados e abriu um chamado.", "progresso": 2, "paciencia": 0, "opensTicket": true },
			{ "text": "Chamado aberto via WhatsApp. Protocolo foi enviado por sms.", "progresso": 3, "paciencia": 1, "opensTicket": true },
			{ "text": "Atendente assumiu o atendimento e abriu um chamado.", "progresso": 2, "paciencia": 2, "opensTicket": true },
			{ "text": "Seu chamado foi aberto e está aguardando análise.", "progresso": 1, "paciencia": 1, "opensTicket": true },
			{ "text": "Chamado aberto! Agora é aguardar resposta.", "progresso": 2, "paciencia": 1, "opensTicket": true },
			{ "text": "Protocolo gerado via WhatsApp.", "progresso": 1, "paciencia": 1, "opensTicket": true }
		],
		"negative": [
			{ "text": "O bot pediu seu CPF 3 vezes e depois encerrou o atendimento por inatividade.", "paciencia": -3 },
			{ "text": "Você ficou horas esperando uma resposta e só recebeu mensagem automática.", "paciencia": -6 },
			{ "text": "Te mandaram um formulário que não salva suas respostas. Perdeu tudo.", "paciencia": -5 },
			{ "text": "O chat sumiu e voltou sem o histórico. Você teve que repetir tudo.", "paciencia": -7 },
			{ "text": "Sistema indisponível.", "paciencia": -4 },
			{ "text": "Atendente enviou link inválido que não abre no seu celular.", "paciencia": -4 },
            { "text": "Seu WPP travou e fechou a conversa sem salvar a mensagem.", "paciencia": -5 },
            { "text": "Sua bateria acabou do nada e você vai ter que recomeçar o chat.", "paciencia": -6 },
			{ "text": "Respostas automáticas conflitantes te confundiram e não geraram o chamado.", "paciencia": -5 },
			{ "text": "O chat saiu do ar durante envio de seu documento.", "paciencia": -6 },
			{ "text": "Atendimento encerrou sem gerar protocolo. Você ficou sem registro.", "paciencia": -9 },
			{ "text": "O Agent de IA no WhatsApp é só um bot comum e não conseguiu abrir o chamado.", "paciencia": -7 }
		]
	},
	"abrirApp": {
		"positive": [
			{ "text": "Chamado aberto pelo app! Protocolo gerado.", "progresso": 2, "paciencia": 3, "opensTicket": true },
			{ "text": "Você conseguiu abrir um chamado pelo app. Agora é esperar.", "progresso": 1, "paciencia": 0, "opensTicket": true },
			{ "text": "O app registrou seu problema e abriu um chamado.", "progresso": 2, "paciencia": 2, "opensTicket": true },
			{ "text": "Seu chamado foi registrado no app.", "progresso": 2, "paciencia": 2, "opensTicket": true },
			{ "text": "Chamado aberto pelo app. Protocolo enviado.", "progresso": 1, "paciencia": 2, "opensTicket": true },
            { "text": "Você conseguiu abrir o chamado e recebeu um número de protocolo. Uma luz no fim do túnel!", "progresso": 2, "paciencia": 1, "opensTicket": true },
            { "text": "O app te informou que um técnico entrará em contato em breve. A esperança se renova.", "progresso": 2, "paciencia": 2, "opensTicket": true },
            { "text": "O app enviou uma notificação de que seu chamado foi encaminhado para a equipe de supervisão.", "progresso": 1, "paciencia": 1, "opensTicket": true },
            { "text": "Você recebeu uma mensagem no chat do app confirmando a abertura do seu chamado.", "progresso": 2, "paciencia": 1, "opensTicket": true },
            { "text": "O app te informou a previsão de atendimento do seu chamado. Pelo menos você tem uma data.", "progresso": 2, "paciencia": 2, "opensTicket": true },
            { "text": "O app gerou um número de protocolo e te mandou um e-mail de confirmação. A burocracia está funcionando!", "progresso": 3, "paciencia": 2, "opensTicket": true }
            ],
		"negative": [
			{ "text": "O app deu 'Erro ao conectar com o servidor'. Tente mais tarde.", "paciencia": -2 },
			{ "text": "Você foi desconectado no meio do envio e perdeu os anexos.", "paciencia": -4 },
			{ "text": "O app aceitou o chamado, mas não gerou protocolo visível.", "paciencia": -3 },
			{ "text": "Atualização do app quebrou o formulário de abertura de chamadas.", "paciencia": -5 },
			{ "text": "Recebeu erro 500 e nada foi registrado.", "paciencia": -6 },
			{ "text": "App pediu autenticação que não funcionava e te travou.", "paciencia": -7 },
			{ "text": "App sugeriu solução genérica que não se aplica ao seu caso.", "paciencia": -3 },
			{ "text": "Formulário do app repetia campos e travou no envio.", "paciencia": -5 },
            { "text": "Você não conseguiu anexar arquivos importantes pelo app.", "paciencia": -6 },
            { "text": "O app não mostra seu endereço.", "paciencia": -4 },
			{ "text": "Você não encontrou suporte humano pelo app e não conseguiu gerar o chamado.", "paciencia": -6 }
		]
	},
    "enviarEmail": {
        "positive": [
            { "text": "Seu e-mail foi respondido com um número de protocolo. Chamado aberto.", "progresso": 2, "paciencia": 0, "opensTicket": true },
            { "text": "O suporte respondeu seu e-mail e abriu um chamado.", "progresso": 1, "paciencia": 1, "opensTicket": true },
            { "text": "Chamado aberto via e-mail. Protocolo enviado.", "progresso": 2, "paciencia": 0, "opensTicket": true },
            { "text": "Seu problema foi registrado e chamado aberto por e-mail.", "progresso": 1, "paciencia": 1, "opensTicket": true },
            { "text": "Seu e-mail foi respondido com um número de protocolo. Chamado aberto.", "progresso": 2, "paciencia": 0, "opensTicket": true },
            { "text": "O suporte respondeu seu e-mail e abriu um chamado.", "progresso": 1, "paciencia": 1, "opensTicket": true },
            { "text": "Chamado aberto via e-mail. Protocolo enviado.", "progresso": 2, "paciencia": 0, "opensTicket": true },
            { "text": "Seu problema foi registrado e chamado aberto por e-mail.", "progresso": 1, "paciencia": 1, "opensTicket": true },
            { "text": "O e-mail foi recebido e seu problema foi encaminhado para a equipe de suporte. Um número de protocolo foi gerado.", "progresso": 2, "paciencia": 1, "opensTicket": true },
            { "text": "Você recebeu uma resposta automática com a confirmação de que o seu ticket de suporte foi aberto com sucesso.", "progresso": 1, "paciencia": 0, "opensTicket": true },
            { "text": "O suporte respondeu ao seu e-mail e, como previsto, um novo chamado foi criado em seu nome.", "progresso": 2, "paciencia": 1, "opensTicket": true },
            { "text": "Um e-mail de confirmação chegou, e com ele, a certeza de que seu problema foi registrado e será tratado.", "progresso": 2, "paciencia": 2, "opensTicket": true },
            { "text": "Seu e-mail foi lido, seu caso foi analisado e um chamado foi aberto para que a solução seja encontrada. Você tem um protocolo.", "progresso": 3, "paciencia": 3, "opensTicket": true },
            { "text": "O suporte enviou um e-mail de resposta, garantindo que seu problema foi recebido e um chamado de atendimento foi aberto.", "progresso": 2, "paciencia": 2, "opensTicket": true }
        ],
        "negative": [
            { "text": "Você enviou o e-mail e recebeu uma resposta automática dizendo que o canal está desativado.", "paciencia": -5 },
            { "text": "Seu e-mail foi para a caixa de spam do suporte e nunca foi lido.", "paciencia": -6 },
            { "text": "Seu e-mail foi respondido, mas a resposta é um aviso de caixa de entrada cheia. A paciência diminuiu em 3 pontos.", "paciencia": -3 },
            { "text": "Você enviou o e-mail, mas o endereço está incorreto. A mensagem retornou.", "paciencia": -4 },
            { "text": "O servidor de e-mail está em manutenção e sua mensagem não foi entregue. ", "paciencia": -5 },
            { "text": "O suporte te respondeu, mas a resposta foi uma mensagem genérica e não relacionada ao seu problema.", "paciencia": -4 },
            { "text": "Seu e-mail foi enviado com sucesso, mas a pessoa de suporte que o recebeu está de férias.", "paciencia": -5 },
            { "text": "Você recebeu uma resposta do suporte, mas o anexo enviado está corrompido.", "paciencia": -6 },
            { "text": "O sistema do suporte identificou seu e-mail como 'SPAM' e o removeu automaticamente.", "paciencia": -7 },
            { "text": "O e-mail foi enviado e recebido, mas a fila de suporte é gigantesca. O prazo de resposta é de 10 dias úteis.", "paciencia": -6 },
            { "text": "A resposta do suporte direciona você para um outro canal de contato que também não funciona.", "paciencia": -8 },
            { "text": "Seu e-mail foi respondido por um assistente virtual que entra em 'loop' infinito sem resolver seu problema.", "paciencia": -5 }
        ]
    },
    "usarAssistenteVirtual": {
        "positive": [
            { "text": "O agente de IA abriu um chamado para você.", "progresso": 2, "paciencia": 0, "opensTicket": true },
            { "text": "Após algumas tentativas, o agente de IA registrou seu problema e abriu chamado.", "progresso": 1, "paciencia": 1, "opensTicket": true },
            { "text": "Chamado aberto pelo Agente de IA.", "progresso": 2, "paciencia": 0, "opensTicket": true },
            { "text": "Seu caso foi registrado pelo Agente de IA.", "progresso": 1, "paciencia": 1, "opensTicket": true }
        ],
        "negative": [
            { "text": "O agente de IA não te entendeu e te encaminhou para um setor que não existe.", "paciencia": -5 },
            { "text": "O agente de IA te transferiu para um atendente humano que te informou que o agente de IA errou.", "paciencia": -7 },
            { "text": "O agente de IA te deu uma resposta incorreta e você foi cobrado por um serviço que não contratou.", "paciencia": -8 },
            { "text": "O agente de IA te fez várias perguntas, mas no final te informou que 'não pode te ajudar'.", "paciencia": -6 },
            { "text": "O agente de IA te transferiu para outro agente de IA, que te transferiu novamente. Esse 'loop' te custou 9 pontos de paciência.", "paciencia": -9 },
            { "text": "O agente de IA te pediu para repetir a mesma informação quatro vezes.", "paciencia": -6 },
            { "text": "Você digitou a opção 'falar com atendente' e o agente de IA te deu uma resposta pré-gravada.", "paciencia": -7 },
            { "text": "O agente de IA identificou o seu problema, mas te pediu para ligar para outro número para resolver.", "paciencia": -5 },
            { "text": "O agente de IA te informou que para resolver seu problema, você deve assinar com outra operadora.", "paciencia": -8 },
            { "text": "O agente de IA te disse que o sistema está fora do ar e você deve ligar de novo mais tarde.", "paciencia": -6 }
        ]
    },
	"receberTecnico": {
		"positive": [
			{ "text": "O técnico veio e resolveu o problema! ...só que não. Ele disse que o problema é na central e que vão te ligar.", "progresso": 6, "paciencia": 1 },
			{ "text": "O técnico identificou cabos soltos no poste, mas não arrumou, pois ele não têm o treinamento. Ele falou pra você aguardar outro técnico.", "progresso": 5, "paciencia": 1 },
			{ "text": "O técnico veio, testou e tirou fotos do modem. Falou que retorna outro dia para terminar o serviço.", "progresso": 5, "paciencia": 1 },
			{ "text": "O técnico agendou um reparo de infraestrutura e prometeu retorno em 48h.", "progresso": 6, "paciencia": 1 },
			{ "text": "O técnico trocou o modem e a internet funcionou por 10 minutos. Assim que ele foi embora o problema voltou, pelo menos o chamado continua aberto.", "progresso": 5, "paciencia": 1},
			{ "text": "O técnico só confirmou o problema e solicitou troca do modem para a Central. Abriu um novo chamado e disse que vão te ligar.", "progresso": 5, "paciencia": 1, "opensTicket": true },
			{ "text": "O técnico confirmou que sua instalação estava incorreta e informou que a Central vai te ligar pra falar o que fazer.", "progresso": 7, "paciencia": 1 },
			{ "text": "O técnico realizou um teste e encaminhou seu chamado para outra equipe que vai voltar em até 48 horas.", "progresso": 9, "paciencia": 1}
		],
		"negative": [
			{ "text": "O técnico não apareceu na janela de 24h. Seu chamado fechou sozinho por 'indisponibilidade'.", "paciencia": -8, "closesTicket": true },
			{ "text": "O técnico veio, mas esqueceu as ferramentas. Tirou uma foto da fachada e foi embora. Fechou o chamado.", "paciencia": -8 , "closesTicket": true },
			{ "text": "O técnico culpou a sua instalação e alegou que não consegue resolver. Fechou teu chamado.", "paciencia": -7 , "closesTicket": true },
			{ "text": "Você ficou esperando o técnico o dia todo, mas ele não apareceu. O chamado continua aberto.", "paciencia": -9 },
			{ "text": "O técnico cancelou em cima da hora por 'imprevisto'. Seu chamado foi cancelado.", "paciencia": -7 ,"closesTicket": true},
			{ "text": "O técnico fez uma gambiarra improvisada que piorou a situação. Fechou o chamado.", "paciencia": -6 , "closesTicket": true },
			{ "text": "O técnico faltou sem justificativa e ninguém remarcou. Cancelaram o chamado.", "paciencia": -8 , "closesTicket": true},
			{ "text": "A visita foi rápida e sem diagnóstico completo, nada foi feito. Pelo menos o chamado continua aberto.", "paciencia": -4 },
			{ "text": "O técnico disse que precisa cobrar um valor extra alegando que o serviço está fora do contrato, você não pagou e ele fechou o chamado.", "paciencia": -6 , "closesTicket": true },
			{ "text": "O técnico veio, mas fechou seu chamado dizendo que estava tudo certo, mesmo sem funcionar.", "paciencia": -9, "closesTicket": true },
			{ "text": "O técnico cancelou todos os chamados abertos alegando que deu erro no sistema e foi embora. ", "paciencia": -8, "closesTicket": true },
			{ "text": "O técnico fechou o chamado sem resolver. Você terá que abrir outro.", "paciencia": -8, "closesTicket": true }
		]
	},
	"pegarStatusN2": {
		"positive": [
			{ "text": "O status do chamado é 'Em tratativa'. O que quer que isso signifique.", "progresso": 1 },
			{ "text": "O atendente informou que há um problema no poste e prometeu escalonar o caso para a central.", "progresso": 5 },
			{ "text": "Atendente informou que houve oscilação na área e está monitorando.", "progresso": 3},
			{ "text": "Atendente te explicou que a situação é complexa e requer mais investigação.", "progresso": 2 },
			{ "text": "Atendente colocou seu chamado como prioridade 'alta' e previsão de 24 horas.", "progresso": 5 },
			{ "text": "Atendente informou que seu caso foi escalado para engenharia central e um novo chamado foi aberto.", "progresso": 6, "opensTicket": true },
            { "text": "O atendente te informou que o seu chamado foi transferido para um setor de alta prioridade. Apenas a mudança de setor já é um pequeno avanço.", "progresso": 2 },
            { "text": "O status do chamado foi alterado para 'Em avaliação técnica'. Seu problema está sendo investigado.", "progresso": 3 },
            { "text": "Atendente confirmou que a solicitação foi lida pela equipe responsável e que eles estão cientes do problema.", "progresso": 1 },
            { "text": "O atendente apenas confirmou seu endereço. Mas essa nova verificação pode significar algum progresso.", "progresso": 1 },
            { "text": "Atendente informou que o problema foi escalado para a próxima etapa do processo interno. A burocracia está seguindo o fluxo.", "progresso": 2 }
		],
		"negative": [
			{ "text": "O sistema não encontrou seu protocolo. Você tem certeza que anotou certo? Deve ter sido um bug.", "paciencia": -5, "closesTicket": true },
			{ "text": "O atendente fechou seu chamado e disse que não consta nenhuma falha na sua internet. Você ficou mais confuso e com raiva.", "paciencia": -4, "closesTicket": true },
			{ "text": "Mudaram o status para 'Aguardando disponibilidade', mas nem te pediram data alguma.", "paciencia": -6 },
			{ "text": "Atendente escalou o chamado, mas não deu mais notícias. O protocolo ficou parado em 'aguardando técnico'.", "paciencia": -7 },
			{ "text": "Atendente disse que o chamado está sendo fechado por 'Falta de informações'.", "paciencia": -3 , "closesTicket": true },
			{ "text": "Seu chamado foi reclassificado com prioridade 'baixa' sem explicação.", "paciencia": -8 },
			{ "text": "Atendente solicitou testes que não são possíveis remotamente e fechou seu chamado por 'falta de apoio'.", "paciencia": -5 , "closesTicket": true },
			{ "text": "Informaram que o problema é pontual e não há ação imediata. Fecharam o chamado.", "paciencia": -6 , "closesTicket": true },
			{ "text": "Disseram que o chamado está na fila e é pra você esperar.", "paciencia": -7 },
			{ "text": "Falaram que você é impaciente e que deve aguardar alguém te ligar.", "paciencia": -9 },
			{ "text": "O status mudou para 'Encerrado por engano'. Foi fechado sem solução.", "paciencia": -7, "closesTicket": true },
			{ "text": "O sistema fechou todos os chamados abertos por um bug na plataforma.", "paciencia": -9, "closesTicket": true }
		]
	},
    "ligarOuvidoria": {
        "positive": [
            { "text": "A Ouvidoria atendeu, gerou um novo protocolo e prometeu acompanhar o caso de perto.", "paciencia": 5, "generatesProtocol": true,  "deadline": 4, },
            { "text": "Falar na Ouvidoria fez seu caso ser marcado como 'crítico'.", "progresso": 3,  "generatesProtocol": true,  "deadline": 3,"paciencia": 5 },
            { "text": "A Ouvidoria atendeu, gerou um novo protocolo e prometeu acompanhar o caso de perto.", "paciencia": 5, "generatesProtocol": true, "deadline": 4, },
            { "text": "Falar na Ouvidoria fez seu caso ser marcado como 'crítico'.", "progresso": 3, "generatesProtocol": true, "deadline": 3,"paciencia": 5 },
            { "text": "O atendente da Ouvidoria informou que o seu problema foi entendido e que será tratado com prioridade. Eles abriram um novo protocolo.", "paciencia": 6, "generatesProtocol": true, "deadline": 4, "progresso": 3 },
            { "text": "A Ouvidoria te transferiu para um setor de alta gerência e disse que vão avaliar. ", "paciencia": 4, "generatesProtocol": true, "deadline": 4, "progresso": 4 },
            { "text": "O atendente da Ouvidoria te ouviu por 15 minutos e disse que entrará em contato com a gerência do suporte para resolver o seu problema.", "paciencia": 5, "generatesProtocol": true, "deadline": 5, "progresso": 5 }
        ],
        "negative": [
            { "text": "A Ouvidoria só atende das 10 às 14 de segunda a quarta. Hoje não é um desses dias.", "paciencia": -4 },
            { "text": "A Ouvidoria informou que você precisa retornar o contato daqui 10 dias para abrir um protocolo", "paciencia": -6 },
            { "text": "A Ouvidoria fechou tudo alegando que seu caso já foi resolvido, mas não foi.", "paciencia": -6, "closesTicket": true },
            { "text": "A Ouvidoria encerrou todos os chamados alegando duplicidade.", "paciencia": -8, "closesTicket": true },
            { "text": "A Ouvidoria desligou o telefone na sua cara sem te dar nenhuma satisfação.", "paciencia": -9 },
            { "text": "Você ligou para a Ouvidoria, mas eles alegaram que não existe nenhum chamado aberto no seu nome.", "paciencia": -9, "closesTicket": true },
            { "text": "O número da Ouvidoria te direcionou para o suporte normal. Você teve que começar tudo de novo.", "paciencia": -9, "closesTicket": true }
        ],
        "status": [
		    { "text": "A Ouvidoria te retornou a ligação informando que seu chamado foi encerrado por inconsistência de dados.", "paciencia": -9, "closesTicket": true },
            { "text": "A Ouvidoria informou que o chamado foi encerrado por não se enquadrar nas políticas de 'serviço essencial'.", "paciencia": -8, "closesTicket": true },
            { "text": "O prazo de resposta da Ouvidoria é de 15 dias úteis, e você precisa aguardar esse tempo.", "paciencia": -7, "closesTicket": false },
            { "text": "A Ouvidoria fechou o chamado alegando que já foi solucionado, mas na verdade não foi.", "paciencia": -7, "closesTicket": true },
            { "text": "A Ouvidoria te transferiu para o suporte regular e seu chamado foi encerrado.", "paciencia": -8, "closesTicket": true },
            { "text": "O status do seu chamado foi alterado para 'Em avaliação pela alta gestão'. É um pequeno progresso.", "progresso": 2, "paciencia": 3, "closesTicket": true },
            { "text": "A Ouvidoria confirmou que seu caso foi encaminhado para a equipe técnica de supervisão. Melhor que nada.", "progresso": 5, "paciencia": 5, "closesTicket": true  },
            { "text": "A Ouvidoria confirmou que um técnico será enviado em 48 horas para resolver seu problema. Será?", "progresso": 7, "paciencia": 7, "closesTicket": true  }
        ]
    },
    "reclamarRedeSocial": {
        "positive": [
            { "text": "Sua reclamação na rede social foi notada. O perfil oficial da empresa pediu seu CPF por DM.", "progresso": 5, "paciencia": 2 },
            { "text": "Outros usuários com o mesmo problema comentaram no seu post. A pressão aumentou um pouco.", "progresso": 2, "paciencia": 3 },
            { "text": "A equipe de redes sociais te enviou uma mensagem direta e criou um chamado interno para seu problema.", "progresso": 4, "paciencia": 4 },
            { "text": "O perfil oficial respondeu publicamente que está 'analisando' a sua situação, e que entrará em contato em breve.", "progresso": 3, "paciencia": 3 },
            { "text": "Um gerente das redes sociais te seguiu. Talvez a atenção de alguém maior resolva.", "progresso": 3, "paciencia": 5 },
            { "text": "A equipe das redes sociais te respondeu, pediu desculpas pelo ocorrido e disse que vai 'dar uma olhada' no seu caso.", "progresso": 2, "paciencia": 4 },
            { "text": "Um influenciador digital com milhares de seguidores curtiu sua reclamação, o que aumentou a visibilidade do seu post.", "progresso": 3, "paciencia": 6 },
            { "text": "Você recebeu uma mensagem privada com um link para o chat de suporte. Bora tentar né.", "progresso": 3, "paciencia": 5 },
            { "text": "O perfil oficial marcou seu post como 'em andamento'. Ao menos estão olhando pra ele.", "progresso": 1, "paciencia": 2 },
            { "text": "A operadora te mandou uma mensagem automática com um link de um formulário. Vai saber se dá certo.", "progresso": 2, "paciencia": 2 }
        ],
        "negative": [
            { "text": "Sua reclamação foi ignorada. Aparentemente, o estagiário das redes sociais está de folga.", "paciencia": -4 },
            { "text": "Um bot respondeu sua reclamação com uma mensagem genérica que não ajuda em nada.", "paciencia": -5 },
            { "text": "O perfil oficial respondeu que seu chamado foi encerrado por falta de interação.", "paciencia": -5, "closesTicket": true },
            { "text": "A empresa fechou todos os chamados abertos após sua reclamação viralizar negativamente. ", "paciencia": -8, "closesTicket": true },
            { "text": "A equipe de redes sociais apagou seu post, alegando que ele viola as 'regras de comunidade'.", "paciencia": -7 },
            { "text": "A operadora te enviou uma DM pedindo seu CPF, mas depois de você enviar, eles pararam de responder.", "paciencia": -6 },
            { "text": "Você recebeu uma resposta da equipe de redes sociais que te direciona para a central de atendimento telefônico.", "paciencia": -8 },
            { "text": "O perfil oficial respondeu de forma pública com uma mensagem que não tem nada a ver com o seu problema.", "paciencia": -5 },
            { "text": "Ninguém da empresa respondeu, mas perfis falsos com o nome da empresa começaram a te seguir.", "paciencia": -3 },
            { "text": "Sua reclamação se perdeu no meio de outras centenas de reclamações não respondidas.", "paciencia": -6 }
        ]
    },
    "receberLigacao": {
        "positive": [
            { "text": "A operadora ligou para confirmar a visita técnica de amanhã. Pelo menos eles avisam.", "paciencia": 2 },
            { "text": "Era do setor de qualidade, querendo saber sobre seu problema. Registraram sua insatisfação.", "progresso": 3, "paciencia": 1 },
            { "text": "A operadora ligou para dizer que sua solicitação foi registrada com sucesso. Nenhuma ação foi tomada, mas é um progresso.", "paciencia": 1 },
            { "text": "O atendente confirmou que seu caso está 'em análise'. O status não mudou, mas ao menos você sabe.", "paciencia": 2 },
            { "text": "Era um robô com uma voz agradável te desejando um bom dia.", "paciencia": 1 },
            { "text": "O atendente ligou apenas para confirmar seu nome completo. Ele foi bem educado.", "paciencia": 1 },
            { "text": "A operadora ligou para dizer que o setor responsável irá analisar o seu caso. Algum dia.", "paciencia": 2 },
            { "text": "Era um funcionário da operadora que te ouviu por 10 minutos. Parece que ele se importou, mas nada foi resolvido por enquanto.", "paciencia": 3 },
            { "text": "A ligação era para avisar que sua solicitação foi encaminhada para a equipe de supervisão. É uma etapa a mais.", "paciencia": 2 },
            { "text": "O atendente te ligou para dizer que entende sua frustração. A empatia vale um pouco, certo?", "paciencia": 1 },
            { "text": "A operadora te ligou apenas para confirmar seu endereço de e-mail. Eles se preocupam com os detalhes.", "paciencia": 1 },
            { "text": "Você recebeu uma ligação da operadora agradecendo por sua paciência. É algo, eu acho.", "paciencia": 2 }
        ],
        "negative": [
            { "text": "A operadora te ligou para oferecer um novo plano de celular. Eles realmente não leem o histórico.", "paciencia": -7 },
            { "text": "Era uma gravação dizendo 'Alô, está me ouvindo?' e depois desligou. Bizarro.", "paciencia": -3 },
            { "text": "A ligação informou que seu chamado foi encerrado automaticamente.", "paciencia": -4, "closesTicket": true },
            { "text": "O robô encerrou todos os chamados abertos por inconsistência de dados.", "paciencia": -9, "closesTicket": true },
            { "text": "Era uma telemarketing te oferecendo um empréstimo. ", "paciencia": -2 },
            { "text": "A operadora ligou para dizer que o técnico não poderá comparecer. Você deve remarcar.", "paciencia": -6, "closesTicket": true },
            { "text": "A ligação era para informar que sua fatura está atrasada, mesmo você tendo pago em dia.", "paciencia": -5 },
            { "text": "Você recebeu uma ligação da operadora, mas ao atender, a chamada caiu.", "paciencia": -4 },
            { "text": "Era uma pesquisa de satisfação automática com 20 perguntas, e você não pode pular.", "paciencia": -5 },
            { "text": "O robô da operadora te ligou e desligou na sua cara.", "paciencia": -6 },
            { "text": "A ligação informou que seu plano foi alterado sem a sua permissão.", "paciencia": -8 },
            { "text": "Você atendeu a ligação e foi direcionado para uma música de espera infinita.", "paciencia": -7 },
            { "text": "O robô encerrou seu chamado sem a sua autorização.", "paciencia": -9, "closesTicket": true }
        ]
    },
	"procon": {
		"positive": [
			{ "text": "Você abriu uma reclamação no Procon. A empresa tem 10 dias para responder. Protocolo gerado.", "generatesProtocol": true, "deadline": 5, "paciencia": 5 },
			{ "text": "Procon notificou a empresa e houve primeiro contato.", "progresso": 10, "generatesProtocol": true, "deadline": 5 },
			{ "text": "Procon confirmou recebimento e incluiu seu caso em relatório público.", "progresso": 5, "generatesProtocol": true, "deadline": 5 }
		],
		"negative": [
			{ "text": "O site do Procon está fora do ar. Parece que não é só a sua internet.", "paciencia": -5 },
			{ "text": "Procon pediu documentos que você não tem agora. Processo travou.", "paciencia": -4 },
			{ "text": "A empresa apresentou defesa e o Procon pediu mais prazo.", "paciencia": -6 },
			{ "text": "Procon classificou o caso como sem materialidade. Você discordou.", "paciencia": -8 },
			{ "text": "Sistema do Procon atrasou a notificação e o prazo expirou.", "paciencia": -7 },
			{ "text": "Procon mandou mensagem automática e não houve humanização.", "paciencia": -3 },
			{ "text": "Recurso foi indeferido por detalhe processual que você desconhecia.", "paciencia": -9 },
			{ "text": "A empresa descumpriu decisão do Procon e nada foi executado.", "paciencia": -4 },
			{ "text": "Demora na tramitação administrativa do Procon.", "paciencia": -6 },
			{ "text": "Procon solicitou complementação que não altera o resultado final.", "paciencia": -6 }
		],
		"status": [
			{ "text": "O Procon informou que a empresa apresentou uma defesa justa e que sua reclamação não procede. What?!", "paciencia": -5 , "closesTicket": true},
			{ "text": "O Procon intermediou um acordo e você vai receber R$15 reais de desconto na próxima fatura. Ual!", "progresso": 2,  "paciencia": -5, "closesTicket": true },
			{ "text": "O Procon cancelou sua reclamação alegando que está fora da área de atuação deles. Brincadeira!", "paciencia": -8, "closesTicket": true },
			{ "text": "O Procon solicitou uma audiência de conciliação presencial na sede da empresa. Haja paciência!", "progresso": 8,  "paciencia":-10, "closesTicket": true }
		]
	},
	"reclameAqui": {
		"positive": [
			{ "text": "Sua reclamação no Reclame Aqui foi publicada! A reputação da empresa que lute. Protocolo gerado.", "generatesProtocol": true, "deadline": 5, "paciencia": 2 },
			{ "text": "Reclame Aqui abriu canal de negociação direta com a empresa.", "progresso": 15, "deadline": 5, "generatesProtocol": true },
		],
		"negative": [
			{ "text": "Você esqueceu sua senha do Reclame Aqui. A recuperação de senha não funciona.", "paciencia": -3 },
			{ "text": "A empresa respondeu com mensagem padrão e ignorou a solução.", "paciencia": -8 },
			{ "text": "A sua reclamação foi removida por um problema técnico.", "paciencia": -5 },
			{ "text": "Pouco engajamento público; a empresa não sentiu pressão.", "paciencia": -4 },
			{ "text": "A plataforma pediu documentos extras e a reclamação ficou pendente.", "paciencia": -6 },
			{ "text": "Empresa ofereceu voucher ridículo e o caso seguiu sem solução real.", "paciencia": -8 },
			{ "text": "Resposta tardia e sem comprometimento com prazos.", "paciencia": -7 },
			{ "text": "Plataforma apresentou instabilidade e reclamação ficou off.", "paciencia": -5 },
			{ "text": "Empresa contestou publicamente e a situação ficou mais confusa.", "paciencia": -9 },
			{ "text": "Moderação negou publicação por conteúdo técnico sem sentido.", "paciencia": -4 }
		],
		"status": [
			{ "text": "A empresa respondeu no Reclame Aqui com uma mensagem padrão.", "paciencia": -6 },
			{ "text": "Sua reclamação foi marcada como resolvida, mas você não recebeu contato algum.", "paciencia": -7, "closesTicket": true },
			{ "text": "A empresa pediu 10 documentos diferente em anexo e fechou o caso logo na sequência por falta de documentação.", "paciencia": -10 , "closesTicket": true},
		]
	},
	"consumidorGov": {
		"positive": [
			{ "text": "Reclamação registrada no Consumidor.gov.", "generatesProtocol": true, "deadline": 6, "paciencia": 5 },
			{ "text": "Consumidor.gov sugeriu conciliação e marcou audiência virtual com prazo de 5 dias.", "progresso": 15, "deadline": 5,"generatesProtocol": true },
		],
		"negative": [
			{ "text": "O sistema do Consumidor.gov exige um cadastro complexo que te fez desistir.", "paciencia": -4 },
			{ "text": "O sistema travou e você não conseguir abrir a reclamação.", "paciencia": -6 },
			{ "text": "Consumidor.gov reportou conflito de informações e não gerou o protocolo", "paciencia": -5 },
			{ "text": "A empresa contestou tudo e o caso travou sem registro de protocolo.", "paciencia": -9 },
			{ "text": "O painel da plataforma apresentou erro e ninguém conseguiu acessar o processo.", "paciencia": -8 },
		],
		"status": [
			{ "text": "Consumidor.gov informou que a empresa respondeu pedindo um prazo de 10 dias para avaliar.", "paciencia": -8, "closesTicket": true },
			{ "text": "O sistema marcou seu caso como 'Resolvido' automaticamente. Você terá que abrir outro chamado.", "paciencia": -5, "closesTicket": true },
			{ "text": "A empresa propôs um acordo via Consumidor.gov e disse que vai tentar resolver em 15 dias.","paciencia": -3, "progresso": 15 , "closesTicket": true},
			{ "text": "Seu caso foi encaminhado para análise administrativa da operadora e eles têm prazo de 5 dias para tentar ver o que fazer", "paciencia": -3, "progresso": 5, "closesTicket": true },
			{ "text": "Empresa respondeu dizendo que só resolverá fora da plataforma. Fecharam sua reclamação.", "paciencia": -7, "closesTicket": true },
		]
	},
	"anatel": {
		"positive": [
			{ "text": "Você apelou para a ANATEL. A coisa ficou séria. Protocolo gerado.", "generatesProtocol": true, "deadline": 4, "paciencia": 10 },
			{ "text": "ANATEL notificou a operadora e abriu processo administrativo.", "progresso": 25, "generatesProtocol": true, "deadline": 5 },
			{ "text": "ANATEL solicitou relatório detalhado da empresa e acelerou a investigação.", "progresso": 30, "deadline": 5, "generatesProtocol": true },
			{ "text": "ANATEL exigiu relatório de ação com prazo.", "progresso": 26, "deadline": 6,"generatesProtocol": true }
		],
		"negative": [
			{ "text": "A ANATEL informa que você precisa de um protocolo da ouvidoria da empresa, que você não tem.", "paciencia": -8 },
			{ "text": "ANATEL arquivou sua reclamação temporariamente por falta de documentos.", "paciencia": -6 },
			{ "text": "A ANATEL te deu uma resposta genérica e não ajudou.", "paciencia": -4 },
			{ "text": "A ANATEL informou que o prazo é 10 dias úteis e você desistiu.", "paciencia": -9 },
			{ "text": "ANATEL disse que não há responsabilidade direta da operadora no caso.", "paciencia": -10 },
			{ "text": "A ANATEL te enviou uma notificação burocrática sem ações concretas.", "paciencia": -7 },
			{ "text": "A ANATEL nem te respondeu.", "paciencia": -10 },
			{ "text": "ANATEL pediu tentativa de solução prévia com a empresa e travou o processo.", "paciencia": -8 },
			{ "text": "A ANATEL não entendeu sua reclamação e bloqueou seu acesso ao sistema.", "paciencia": -13 }
        ],
        "status": [
            { "text": "A ANATEL informou que a operadora pediu mais tempo para avaliar o caso e fechou seu protocolo.", "paciencia": -10, "closesTicket": true  },
            { "text": "A ANATEL encerrou o processo por falta de evidências.", "paciencia": -12, "closesTicket": true },
            { "text": "A ANATEL notificou a empresa novamente e eles pediram mais 10 dias de prazo. Pelo menos tem um prazo.", "progresso": 10, "paciencia": -5, "closesTicket": true  },
            { "text": "Seu caso foi encaminhado para fiscalização externa. Pena que o prazo é 30 dias.", "paciencia": -5, "progresso": 8, "closesTicket": true}
        ]
    },
    "mensagemCEO": {
        "positive": [
            { "text": "Sua postagem citando o CEO no LinkedIn foi notada por um gerente que entrou em contato prometendo ajudar.", "progresso": 3, "paciencia": 2 },
            { "text": "Sua postagem recebeu algumas curtidas de funcionários da empresa. Talvez alguém veja.", "progresso": 1, "paciencia": 2 }
        ],
        "negative": [
            { "text": "Sua postagem citando o CEO foi visualizada e ignorada.", "paciencia": -5 },
            { "text": "Você não tem uma conta Premium no LinkedIn e não pode citar o CEO, seu post foi bloqueado.", "paciencia": -2 },
            { "text": "O CEO do concorrente curtiu sua postagem, mas o da sua operadora não.", "paciencia": -4 },
            { "text": "Sua postagem recebeu um comentário automático pedindo para você entrar em contato por um canal que você já usou.", "paciencia": -7 },
            { "text": "Um funcionário da operadora, não relacionado ao suporte, te mandou uma mensagem privada pedindo para você apagar o post.", "paciencia": -6 },
            { "text": "Sua postagem viralizou, mas a única resposta da empresa foi uma nota de 'lamentamos o ocorrido'.", "paciencia": -8 },
            { "text": "A operadora fechou todos os chamados após sua postagem viralizar de forma negativa.", "paciencia": -6, "closesTicket": true },
            { "text": "Você recebeu uma resposta pública, mas foi apenas um 'Sua voz é importante para nós!'.", "paciencia": -5 },
            { "text": "Você tentou citar o CEO e seu perfil foi bloqueado.", "paciencia": -9 },
            { "text": "O LinkedIn removeu sua postagem por 'conteúdo sensível' sem dar explicação.", "paciencia": -8 },
            { "text": "Seu post foi ignorado e o CEO postou uma foto do seu happy hour.", "paciencia": -7 }
        ],
        "status": [
            { "text": "O CEO visualizou sua mensagem, mas não respondeu.", "paciencia": -7 },
            { "text": "Um gerente entrou em contato após o CEO ver sua mensagem.", "progresso": 5 },
            { "text": "Sua mensagem foi ignorada e o caso foi encerrado.", "paciencia": -8, "closesTicket": true },
            { "text": "O CEO pediu para o suporte te ligar.", "progresso": 3 }
        ]
    },
	"defensoriaPublica": {
        "positive": [
            { "text": "A Defensoria Pública aceitou seu caso e enviou uma notificação para a empresa. Quem sabe!", "progresso": 10, "paciencia": 5, "generatesProtocol": true, "deadline": 6 },
            { "text": "Após a notificação da Defensoria, a empresa te ligou para propor um acordo. Vamos ver no que dá!", "progresso": 15, "paciencia": 10 }
        ],
        "negative": [
            { "text": "A fila na Defensoria Pública era enorme. Você conseguiu apenas agendar um atendimento para daqui a 2 meses.", "paciencia": -8 },
            { "text": "A Defensoria Pública considerou seu caso de baixa complexidade e orientou procurar o Juizado Especial Cível.", "paciencia": -5 }
        ],
        "status": [
            { "text": "A Defensoria Pública informou que a empresa não respondeu.", "paciencia": -10 },
            { "text": "A Defensoria marcou uma audiência de conciliação. ", "progresso": 8 },
            { "text": "Seu caso foi arquivado por falta de resposta.", "paciencia": -12, "closesTicket": true },
            { "text": "A Defensoria conseguiu um acordo extrajudicial.", "progresso": 15 }
        ]
    },
    "acaoJudicial": {
        "positive": [
            { "text": "Você entrou com uma ação no Juizado Especial Cível. A empresa foi citada e tem uma audiência marcada para daqui 6 dias.", "progresso": 20, "paciencia": -10, "generatesProtocol": true, "deadline": 6  },
        ],
        "negative": [
            { "text": "O processo é lento. A primeira audiência foi marcada para daqui a 6 meses.", "paciencia": -10 },
            { "text": "O juiz considerou o pedido improcedente. Você perdeu tempo e paciência.", "paciencia": -10 },
            { "text": "Você não conseguiu juntar a documentação necessária e o processo foi arquivado.", "paciencia": -10 },
            { "text": "A empresa não compareceu à audiência. Apenas protelaram o problema.", "paciencia": -9 },
            { "text": "Você descobriu que o advogado da empresa já trabalhou no tribunal.", "paciencia": -8 },
            { "text": "A operadora contratou um escritório de advocacia que é conhecido por usar táticas de intimidação.", "paciencia": -9 }
        ],
        "status": [
            { "text": "O processo judicial foi arquivado, mas nem falaram com você.", "paciencia": -15, "closesTicket": true },
            { "text": "O juiz marcou nova audiência para daqui a 6 meses. Segue sem internet.", "paciencia": -10, "progresso": 1,"closesTicket": true },
            { "text": "Você ganhou o processo e terá um desconto de R$30 reais de desconto na fatura. A internet não voltou a funcionar.", "progresso": 10, "paciencia": -10, "closesTicket": true}
        ]
    },
    "arrumarSozinho": {
        "positive": [
            { "text": "Reiniciar o modem deu certo por 30 minutos, mas logo caiu de novo.", "progresso": 1 },
            { "text": "Você ligou e desligou o modem novamente e o sinal voltou a funcionar, mas está bem fraco e quase não funciona.", "progresso": 1 },
            { "text": "Você mexeu nos cabos e as luzes do roteador voltaram a acender. Agora, pelo menos o modem liga.", "progresso": 2 },
            { "text": "A luz do roteador voltou a piscar. Sinal que a operadora reconhece o aparelho novamente.", "progresso": 1 },
            { "text": "Você ligou o cabo novamente e o sinal fraco retornou desde que você esteja a 1 metro do roteador.", "progresso": 1 }
        ],
        "negative": [
            { "text": "Você tentou 'configurações avançadas' no modem e agora nem a luz de energia acende mais.", "paciencia": -8 },
            { "text": "Ao mexer nos cabos, você acidentalmente desconectou o da TV. Agora são dois problemas.", "paciencia": -8 },
            { "text": "Você entrou na interface do roteador e esqueceu a senha de administrador. Agora está bloqueado.", "paciencia": -4 },
            { "text": "Sem querer, você derrubou café em cima do roteador. Cheiro de queimado no ar...", "paciencia": -7 },
            { "text": "Na tentativa de 'melhorar o sinal', você reposicionou a antena. Agora ela quebrou.", "paciencia": -8 },
            { "text": "Você resolveu atualizar o firmware manualmente e travou tudo no meio do processo.", "paciencia": -6 },
            { "text": "Tentando soprar a entrada do cabo, você fez o fio ficar ainda mais frouxo.", "paciencia": -7 },
            { "text": "Seu cachorro achou que o cabo que você mexeu era brinquedo. Adeus, cabo.", "paciencia": -9 },
            { "text": "Ao resetar o modem com um clipe de papel, você manteve pressionado tempo demais e apagou todas as configurações.", "paciencia": -8 },
            { "text": "Você puxou o cabo de energia sem querer enquanto mexia nos fios. Tudo desligado.", "paciencia": -8 },
            { "text": "Você decidiu trocar o modem de lugar para 'pegar melhor o sinal'. Agora não lembra onde ligava cada fio.", "paciencia": -9 }
        ]
    },
    "vizinhoWifi": {
        "positive": [
            { "text": "Seu vizinho te passou a senha do Wi-Fi. Você pode ao menos ver seus e-mails.", "paciencia": 4 },
            { "text": "O sinal do vizinho está ótimo. Você começa a questionar suas escolhas de vida.", "paciencia": 5 },
            { "text": "Seu vizinho te deu a senha e a internet é tão rápida que você consegue assistir séries em 4K. Mas ele desliga o roteador de noite pra economizar energia.", "paciencia": 3 },
            { "text": "O vizinho te passou a senha e o sinal é super estável. Você pode trabalhar.", "paciencia": 2 },
            { "text": "Seu vizinho está fora e te deixou o roteador ligado para você ter internet à vontade.", "paciencia": 2 },
            { "text": "A conexão é tão boa que você esqueceu que a sua própria internet não está funcionando.", "paciencia": 3 },
            { "text": "O vizinho compartilhou a senha sem pedir nada em troca. A humanidade ainda tem salvação.", "paciencia": 1 },
            { "text": "A internet do vizinho é tão forte que o sinal chega em todos os cômodos da sua casa.", "paciencia": 2 },
            { "text": "Você se conectou à internet do vizinho e, de repente, tudo começou a carregar instantaneamente.", "paciencia": 4 },
            { "text": "O vizinho te deu a senha e a internet funciona para tudo, desde e-mails até jogos online.", "paciencia": 8 },
            { "text": "A conexão do vizinho é tão boa que até o seu celular antigo está funcionando mais rápido.", "paciencia": 6 },
            { "text": "Você descobriu que o vizinho tem uma conexão de fibra ótica. Sorte a sua!", "paciencia": 9 }
        ],
        "negative": [
            { "text": "O Wi-Fi do vizinho também é da mesma operadora e está fora do ar. Vocês compartilham o sofrimento.", "paciencia": -5 },
            { "text": "Seu vizinho trocou a senha e não te avisou. A alegria durou pouco.", "paciencia": -8 },
            { "text": "A conexão do vizinho é tão ruim que não carrega nem uma página de busca.", "paciencia": -7 },
            { "text": "A conexão do Wi-Fi do vizinho funciona, mas cai a cada 5 minutos.", "paciencia": -8 },
            { "text": "Seu vizinho te passou a senha, mas só funciona quando a porta está aberta.", "paciencia": -4 },
            { "text": "A conexão é tão lenta que você assiste os vídeos do YouTube quadro a quadro", "paciencia": -9 },
            { "text": "Você se conectou à internet do vizinho, mas o sinal só funciona quando chove e o céu está cinza.", "paciencia": -8 },
            { "text": "O vizinho instalou um roteador com inteligência artificial que te desconecta se você usar mais de 100MB por dia.", "paciencia": -10 },
            { "text": "A internet do vizinho só carrega em anos bissextos. A paciência está acabando.", "paciencia": -10 },
            { "text": "O vizinho te deu a senha, mas depois te entregou um contrato de uso que te obriga a bater palmas para o roteador toda vez que ele piscar.", "paciencia": -10 },
            { "text": "A conexão só funciona quando o vizinho está fora de casa, o que raramente acontece. Você está na espreita.", "paciencia": -7 },
            { "text": "O sinal é tão fraco que a única coisa que você consegue fazer é mandar mensagens de texto no WhatsApp.", "paciencia": -5 },
            { "text": "O vizinho te cobrou uma mensalidade por usar a internet e ainda te mandou um boleto por e-mail.", "paciencia": -10 },
            { "text": "A senha é tão complexa que você desistiu antes de conseguir se conectar.", "paciencia": -3 }
        ]
    },
    "videoTikTok": {
        "positive": [
            { "text": "Você postou um vídeo reclamando no TikTok. Desabafar te fez bem.", "paciencia": 5 },
            { "text": "Seu vídeo teve 12 visualizações, mas uma delas foi da sua mãe te dando apoio moral.", "paciencia": 5 },
            { "text": "Seu vídeo viralizou! A operadora foi notificada e agora eles estão desesperados pra resolver seu problema.", "progresso": 5, "paciencia": 10, "opensTicket": true },
            { "text": "Um influenciador famoso repostou seu vídeo e marcou a operadora.", "progresso": 4, "paciencia": 10 },
            { "text": "Você recebeu comentários de outros clientes que estavam com o mesmo problema. A solidariedade te confortou.", "progresso": 2, "paciencia": 5 },
            { "text": "O perfil oficial da operadora fez um dueto com seu vídeo, pedindo para você entrar em contato por DM.", "progresso": 5, "paciencia": 5, "opensTicket": true },
            { "text": "Seu vídeo inspirou um 'desafio' no TikTok de reclamações contra a operadora.", "progresso": 5, "paciencia": 8 },
            { "text": "O setor de marketing da operadora te ligou para pedir para você apagar o vídeo em troca de um ano de internet grátis. Pena que não funciona.", "progresso": 5, "paciencia": 6, "closesTicket": true },
        ],
        "negative": [
            { "text": "Seu vídeo foi denunciado por 'discurso de ódio' contra a operadora. O TikTok o removeu.", "paciencia": -8 },
            { "text": "Ninguém se importou com seu vídeo. Você se sentiu ainda mais sozinho nessa luta.", "paciencia": -6 },
            { "text": "A operadora fechou todos os chamados abertos após seu vídeo viralizar negativamente. Todos os chamados encerrados.", "paciencia": -4, "closesTicket": true },
            { "text": "Sua reclamação se perdeu na 'For You Page' e não alcançou ninguém.", "paciencia": -5 },
            { "text": "Um bot da operadora comentou no seu vídeo com uma mensagem de 'Agradecemos o seu feedback!'.", "paciencia": -7 },
            { "text": "O vídeo foi ignorado pela operadora, mas os haters não perderam a oportunidade.", "paciencia": -9 },
            { "text": "A operadora não só ignorou o vídeo, como também encerrou seus chamados.", "paciencia": -10, "closesTicket": true },
            { "text": "Seu vídeo recebeu um comentário de um funcionário da operadora que te ofendeu pessoalmente.", "paciencia": -9 },
            { "text": "O vídeo não deu em nada. Você se sente tolo por ter feito ele.", "paciencia": -5 },
            { "text": "A operadora processou você pelo vídeo e cobrou o prejuízo de marketing.", "paciencia": -12, "closesTicket": true }
        ]
    },
    "CelsoRussomanno": {
        "positive": [
            { "text": "A equipe do Celso Russomanno te respondeu dizendo que vão entrar em contato com a operadora para ver se conseguem ajudar.", "progresso": 5, "paciencia": 6 },
            { "text": "Sua mensagem foi lida por um dos assessores do Celso Russomanno e ele disse que 'o caso é interessante'. A esperança está viva.", "progresso": 6, "paciencia": 8},
            { "text": "Você foi convidado para participar de um quadro no programa. A exposição pública pode te ajudar a resolver.", "progresso": 10, "paciencia": 10 },
            { "text": "A equipe te deu dicas sobre como agir e te encorajou a continuar lutando pelos seus direitos.", "progresso": 8, "paciencia": 7 },
            { "text": "O perfil do Celso Russomanno te respondeu no Twitter dizendo: 'conte com a gente!'..", "progresso": 8, "paciencia": 9 }
        ],
        "negative": [
            { "text": "Equipe do Celso Russomanno te respondeu falando que você precisa pagar R$3000 reais de cachê para que ele olhe seu caso.", "paciencia": -10 },
            { "text": "A equipe te respondeu dizendo que o problema não está na alçada deles.", "paciencia": -8 },
            { "text": "Você marcou o Celso Russomanno em um post e ele te bloqueou.", "paciencia": -10 },
            { "text": "Você mandou a mensagem com a história e a equipe do Celso te respondeu com um emoji de joinha e mais nada.", "paciencia": -7 },
            { "text": "A equipe te respondeu com um link para o canal do YouTube.", "paciencia": -8 }
        ]
    },
    "random": [ 
        { "text": "Uma atualização de sistema da operadora resetou tudo. Qualquer chamado que você tinha, não existe mais.", "paciencia": -6, "closesTicket": true },
        { "text": "A operadora te ligou para oferecer um novo plano, ignorando completamente seu problema.", "paciencia": -5 },
        { "text": "Seu vizinho, que usa a mesma operadora, está com a internet funcionando perfeitamente.", "paciencia": -3 },
        { "text": "Choveu. A desculpa agora é 'condições climáticas adversas'.", "paciencia": -7 },
        { "text": "Sua fatura do mês veio com um aumento inexplicável, mesmo com o serviço inoperante.", "paciencia": -7 },
        { "text": "Você recebeu um e-mail de 'boas-vindas' da operadora, como se fosse um cliente novo.", "paciencia": -8 },
        { "text": "O site da operadora está em manutenção. Não é possível acessar a área do cliente.", "paciencia": -4 },
        { "text": "Você recebeu uma ligação para avaliar o serviço de atendimento, mas a pesquisa não te deixa dar nota zero.", "paciencia": -7 },
        { "text": "Um robô te ligou e desligou na sua cara.", "paciencia": -4 },
        { "text": "Um vizinho que não usa a mesma operadora fez um comentário sarcástico sobre o seu problema.", "paciencia": -3 },
        { "text": "A operadora enviou um SMS avisando que seu problema 'foi resolvido'. Você checa e nada mudou, mas todos seus chamados foram fechados.", "paciencia": -8, "closesTicket": true },
        { "text": "Um técnico estava a caminho, mas ligou dizendo que seu carro quebrou.", "paciencia": -6 },
        { "text": "A operadora te enviou um e-mail de 'obrigado' por ser um cliente fiel.", "paciencia": -4 },
        { "text": "Você acessou o APP e descobriu que fecharam todos seus chamados há 3 dias.", "paciencia": -6, "closesTicket": true },
        ] 
    };
    
