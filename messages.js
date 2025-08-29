const messages = {
	"ligar": {
		"positive": [
			{ "text": "O atendente abriu um chamado e te passou o protocolo. Agora é esperar.", "progresso": 2, "paciencia": 0, "opensTicket": true },
			{ "text": "Depois de explicar tudo em detalhes 5 vezes, finalmente abriram um chamado para você.", "progresso": 2, "paciencia": -5, "opensTicket": true },
			{ "text": "O atendente pediu desculpas e abriu um chamado. Agora é aguardar.", "progresso": 1, "paciencia": 1, "opensTicket": true },
			{ "text": "Seu caso foi registrado e está em análise. Chamado aberto.", "progresso": 1, "paciencia": 1, "opensTicket": true },
			{ "text": "O sistema gerou um chamado para sua reclamação. Protocolo anotado.", "progresso": 2, "paciencia": 0, "opensTicket": true },
			{ "text": "Atendente abriu chamado e prometeu retorno em até 48h.", "progresso": 1, "paciencia": 2, "opensTicket": true },
			{ "text": "Chamado aberto! Agora é torcer para alguém olhar seu caso rápido.", "progresso": 2, "paciencia": 0, "opensTicket": true },
			{ "text": "Seu chamado foi aberto e está na fila de atendimento da equipe técnica.", "progresso": 1, "paciencia": 1, "opensTicket": true }
		],
		"negative": [
			{ "text": "Após 45 minutos na musiquinha, a ligação caiu.", "paciencia": -5 },
            { "text": "Você confirmou seu CPF 3 vezes e a ura não aceitou, pediu para você tentar novamente outra hora.", "paciencia": -10 },
            { "text": "Atendente não conseguiu abrir o chamado.", "paciencia": -4 },
            { "text": "O agente de IA na ura não entendeu o problema e entrou em loop.", "paciencia": -8 },
			{ "text": "Atendente transferiu para vários setores e não conseguiu abrir um chamado.", "paciencia": -7 },
			{ "text": "Você foi colocado em espera por mais de uma hora e desligou revoltado.", "paciencia": -10 },
			{ "text": "O registro de protocolo sumiu do sistema enquanto você falava.", "paciencia": -6 },
			{ "text": "Atendente repetiu o script sem ler seu caso e não abriu o chamado. Você sentiu que perdeu tempo.", "paciencia": -8 },
			{ "text": "Receberam seu relato, mas disseram que não há previsão de solução, não abriram o chamado.", "paciencia": -8 },
			{ "text": "Alguém desligou enquanto transferia seu chamado.", "paciencia": -9 },
			{ "text": "Atendente registrou o chamado para outro CPF.", "paciencia": -6 },
			{ "text": "A automação na URA marcou seu caso como 'resolvido' automaticamente.", "paciencia": -11 },
		]
	},
	"chamarWpp": {
		"positive": [
			{ "text": "O bot finalmente abriu um chamado para você. Protocolo gerado.", "progresso": 2, "paciencia": 0, "opensTicket": true },
			{ "text": "Após muita insistência, o atendente humano no chat abriu um chamado.", "progresso": 1, "paciencia": -2, "opensTicket": true },
			{ "text": "Seu caso foi registrado no sistema via WhatsApp. Chamado aberto.", "progresso": 2, "paciencia": 0, "opensTicket": true },
			{ "text": "Recebeu mensagem de confirmação: chamado aberto!", "progresso": 1, "paciencia": 1, "opensTicket": true },
			{ "text": "O bot pediu seus dados e abriu um chamado. Agora é esperar.", "progresso": 2, "paciencia": 0, "opensTicket": true },
			{ "text": "Chamado aberto via WhatsApp. Protocolo enviado por mensagem.", "progresso": 1, "paciencia": 1, "opensTicket": true },
			{ "text": "Atendente abriu chamado e prometeu retorno em breve.", "progresso": 2, "paciencia": 0, "opensTicket": true },
			{ "text": "Seu chamado foi aberto e está aguardando análise.", "progresso": 1, "paciencia": 1, "opensTicket": true },
			{ "text": "Chamado aberto! Agora é aguardar resposta.", "progresso": 2, "paciencia": 0, "opensTicket": true },
			{ "text": "Protocolo gerado via WhatsApp.", "progresso": 1, "paciencia": 1, "opensTicket": true }
		],
		"negative": [
			{ "text": "O bot pediu seu CPF 3 vezes e depois encerrou o atendimento por inatividade.", "paciencia": -3 },
			{ "text": "Você ficou horas esperando uma resposta e só recebeu mensagem automática.", "paciencia": -6 },
			{ "text": "Te mandaram um formulário que não salva suas respostas. Perdeu tudo.", "paciencia": -5 },
			{ "text": "O chat sumiu e voltou sem o histórico. Você teve que repetir tudo.", "paciencia": -7 },
			{ "text": "Sistema indisponível.", "paciencia": -8 },
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
			{ "text": "Chamado aberto pelo app! Protocolo gerado.", "progresso": 2, "paciencia": 0, "opensTicket": true },
			{ "text": "Você conseguiu abrir um chamado pelo app. Agora é esperar.", "progresso": 1, "paciencia": 1, "opensTicket": true },
			{ "text": "O app registrou seu problema e abriu um chamado.", "progresso": 2, "paciencia": 0, "opensTicket": true },
			{ "text": "Seu chamado foi registrado no app.", "progresso": 2, "paciencia": 0, "opensTicket": true },
			{ "text": "Chamado aberto pelo app. Protocolo enviado.", "progresso": 1, "paciencia": 1, "opensTicket": true }
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
    "irLoja": {
        "positive": [
            { "text": "Na loja, o atendente abriu um chamado com protocolo em papel.", "progresso": 2, "paciencia": -5, "opensTicket": true },
            { "text": "O gerente ouviu seu caso e abriu um chamado prioritário.", "progresso": 2, "paciencia": -2, "opensTicket": true },
            { "text": "Você saiu da loja com um protocolo em mãos. Chamado aberto.", "progresso": 2, "paciencia": -3, "opensTicket": true },
            { "text": "Chamado aberto na loja. Agora é esperar.", "progresso": 1, "paciencia": -4, "opensTicket": true }
        ],
        "negative": [
            { "text": "A loja estava lotada e você esperou 2 horas para ser atendido.", "paciencia": -10 },
            { "text": "O sistema da loja estava fora do ar. Pediram para você voltar amanhã.", "paciencia": -8 }
        ]
    },
    "enviarEmail": {
        "positive": [
            { "text": "Seu e-mail foi respondido com um número de protocolo. Chamado aberto.", "progresso": 2, "paciencia": 0, "opensTicket": true },
            { "text": "O suporte respondeu seu e-mail e abriu um chamado.", "progresso": 1, "paciencia": 1, "opensTicket": true },
            { "text": "Chamado aberto via e-mail. Protocolo enviado.", "progresso": 2, "paciencia": 0, "opensTicket": true },
            { "text": "Seu problema foi registrado e chamado aberto por e-mail.", "progresso": 1, "paciencia": 1, "opensTicket": true }
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
			{ "text": "O técnico veio e resolveu o problema! ...só que não. Ele disse que o problema é na central e abriu outro chamado.", "progresso": 15, "paciencia": 5, "closesTicket": true },
			{ "text": "Técnico identificou cabos soltos e consertou, mas não voltou a funcionar. Ele falou pra você ligar na Central.", "progresso": 5, "paciencia": 5, "closesTicket": true },
			{ "text": "O técnico veio, testou e deixou relatório com próximos passos. Pediu pra você entrar em contato no WPP e relatar o que ele orientou.", "progresso": 5, "paciencia": 3 , "closesTicket": true },
			{ "text": "Técnico agendou reparo de infraestrutura e prometeu retorno em 48h. Abriu um novo ticket.", "progresso": 8, "paciencia": 2, "opensTicket": true },
			{ "text": "O técnico indicou que o problema é intermitente e pediu acompanhamento da Central. Falou que você deve pegar um status com eles.", "progresso": 6, "paciencia": 1 , "closesTicket": true },
			{ "text": "Técnico trocou modem defeituoso e fez teste, Internet funcionou por 5 minutos, mas assim que ele foi embora o problema voltou.", "progresso": 9, "paciencia": 5, "closesTicket": true },
			{ "text": "Técnico só confirmou o problema e solicitou troca do modem para a Central.", "progresso": 5, "paciencia": 0, "opensTicket": true },
			{ "text": "Visita técnica confirmou instalação incorreta do cliente. Informou que você precisa ligar na Central para validar.", "progresso": 7, "paciencia": 2 , "closesTicket": true },
			{ "text": "Técnico realizou teste e encaminhou para outro N2 um relatório. Abriu outro chamado.", "progresso": 9, "paciencia": 2, "opensTicket": true }
		],
		"negative": [
			{ "text": "O técnico não apareceu na janela de 8h. 'Problemas na rota', disse o SMS.", "paciencia": -10 },
			{ "text": "O técnico veio e não tinha a peça necessária; só anotou e foi embora.", "paciencia": -8 , "closesTicket": true },
			{ "text": "Técnico culpou sua instalação residencial e não resolveu.", "paciencia": -12 , "closesTicket": true },
			{ "text": "Você ficou esperando o técnico o dia todo sem aviso de atraso.", "paciencia": -9 },
			{ "text": "Técnico cancelou em cima da hora por 'imprevisto'.", "paciencia": -7 },
			{ "text": "Técnico fez intervenção improvisada que piorou a situação.", "paciencia": -15 , "closesTicket": true },
			{ "text": "Técnico faltou sem justificativa e ninguém remarcou.", "paciencia": -11 },
			{ "text": "Visita rápida sem diagnóstico completo; problema voltou.", "paciencia": -10 },
			{ "text": "Técnico disse que precisa cobrar um valor extra alegando que o serviço está fora do contrato, você não pagou e ele fechou o chamado.", "paciencia": -13 , "closesTicket": true },
			{ "text": "O técnico veio, mas fechou seu chamado dizendo que estava tudo certo. Você discorda. ", "paciencia": -10, "closesTicket": true },
			{ "text": "O técnico cancelou todos os chamados abertos alegando erro de sistema. ", "paciencia": -12, "closesTicket": true },
			{ "text": "O técnico fechou o chamado sem resolver nada. Você terá que abrir outro.", "paciencia": -8, "closesTicket": true }
		]
	},
	"pegarStatusN2": {
		"positive": [
			{ "text": "O status do chamado é 'Em tratativa'. O que quer que isso signifique.", "progresso": 1, "paciencia": -1 },
			{ "text": "O N2 confirmou diagnóstico e prometeu acionamento da central.", "progresso": 5, "paciencia": -2 },
			{ "text": "N2 reportou que houve oscilação na área e está monitorando.", "progresso": 3, "paciencia": -3 },
			{ "text": "Você recebeu um registro técnico detalhado do N2.", "progresso": 2, "paciencia": -1 },
			{ "text": "N2 colocou seu chamado como prioridade alta com previsão de 24 horas.", "progresso": 1, "paciencia": -6 },
			{ "text": "N2 informou que o caso foi escalado para engenharia central. Abriu um novo chamado.", "progresso": 6, "paciencia": -2, "opensTicket": true }
		],
		"negative": [
			{ "text": "O sistema não encontrou seu protocolo. Você tem certeza que anotou certo?", "paciencia": -5 },
			{ "text": "N2 disse que não vê falha e que tudo está Ok na central. Você ficou mais confuso.", "paciencia": -4, "closesTicket": true  },
			{ "text": "Status mudou para 'Aguardando peça' e não há prazo.", "paciencia": -6 },
			{ "text": "N2 escalou e não deu mais notícias. O protocolo ficou parada em 'aguardando'.", "paciencia": -7 },
			{ "text": "Relatório do N2 foi genérico e não explicou nada. Sem chamado foi fechado.", "paciencia": -3 , "closesTicket": true },
			{ "text": "Seu pedido foi reclassificado com prioridade menor sem aviso.", "paciencia": -8 },
			{ "text": "N2 solicitou testes que não são possíveis remotamente e fechou seu chamado.", "paciencia": -5 , "closesTicket": true },
			{ "text": "Informaram que o problema é intermitente e não há ação imediata. Fechou o chamado.", "paciencia": -6 , "closesTicket": true },
			{ "text": "Resposta técnica contraditória entre N1 e N2.", "paciencia": -7 },
			{ "text": "Chamado ficou em fila de engenharia sem previsão clara.", "paciencia": -9 },
			{ "text": "O status mudou para 'Encerrado por engano'. Foi tudo fechado sem solução.", "paciencia": -7, "closesTicket": true },
			{ "text": "O sistema fechou todos os chamados abertos por erro de integração na plataforma.", "paciencia": -9, "closesTicket": true }
		]
	},
    "ligarOuvidoria": {
        "positive": [
            { "text": "A Ouvidoria atendeu, gerou um novo protocolo e prometeu acompanhar o caso de perto.", "paciencia": 5, "generatesProtocol": true, "deadline": 5 },
            { "text": "Falar na Ouvidoria fez seu chamado original ser marcado como 'crítico'.", "progresso": 3, "paciencia": 5 }
        ],
        "negative": [
            { "text": "A Ouvidoria só atende das 10 às 14 de segunda a quarta. Hoje não é um desses dias.", "paciencia": -4 },
            { "text": "A Ouvidoria informou que você precisa esperar o prazo do chamado original (10 dias) antes de reclamar.", "paciencia": -6 },
            { "text": "A Ouvidoria fechou qualquer chamado alegando que já foi resolvido, mas não foi. 1 chamado encerrado.", "paciencia": -6, "closesTicket": true },
            { "text": "A Ouvidoria encerrou todos os chamados por duplicidade. Todos os chamados encerrados.", "paciencia": -8, "closesTicket": true }
        ],
        "status": [
		    { "text": "A Ouvidoria te retornou a ligação informando que seu chamado foi encerrado por inconsistência de dados.", "paciencia": -9, "closesTicket": true },
            { "text": "A Ouvidoria informou que o chamado foi encerrado por não se enquadrar nas políticas de 'serviço essencial'.", "paciencia": -11, "closesTicket": true },
            { "text": "O prazo de resposta da Ouvidoria é de 15 dias úteis, e você precisa aguardar esse tempo.", "paciencia": -7, "closesTicket": false },
            { "text": "A Ouvidoria fechou o chamado alegando que já foi solucionado, mas na verdade não foi.", "paciencia": -10, "closesTicket": true },
            { "text": "A Ouvidoria te transferiu para o suporte regular e seu chamado foi encerrado.", "paciencia": -12, "closesTicket": true }
		]
    },
    "chatOnline": {
        "positive": [
            { "text": "O chat online funcionou e o atendente te deu uma atualização útil sobre o chamado.", "progresso": 4, "paciencia": 1 },
            { "text": "Você conseguiu que o atendente do chat registrasse sua insatisfação, adicionando urgência ao chamado.", "progresso": 3, "paciencia": 1 }
        ],
        "negative": [
            { "text": "O chat online desconectou no meio da conversa. Você terá que começar de novo.", "paciencia": -5 },
            { "text": "Você ficou travado na posição 58 da fila do chat online.", "paciencia": -3 },
            { "text": "O atendente do chat fechou seu chamado sem te avisar.", "paciencia": -4, "closesTicket": true },
            { "text": "O chat encerrou todos os chamados abertos por tempo de inatividade. Todos os chamados encerrados.", "paciencia": -7, "closesTicket": true }
        ]
    },
    "reclamarRedeSocial": {
        "positive": [
            { "text": "Sua reclamação na rede social foi notada. O perfil oficial da empresa pediu seu CPF por DM.", "progresso": 5, "paciencia": 2 },
            { "text": "Outros usuários com o mesmo problema comentaram no seu post. A pressão aumentou um pouco.", "progresso": 2, "paciencia": 3 }
        ],
        "negative": [
            { "text": "Sua reclamação foi ignorada. Aparentemente, o estagiário das redes sociais está de folga.", "paciencia": -4 },
            { "text": "Um bot respondeu sua reclamação com uma mensagem genérica que não ajuda em nada.", "paciencia": -5 },
            { "text": "O perfil oficial respondeu que seu chamado foi encerrado por falta de interação.", "paciencia": -5, "closesTicket": true },
            { "text": "A empresa fechou todos os chamados abertos após sua reclamação viralizar negativamente. ", "paciencia": -10, "closesTicket": true },
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
            { "text": "Era do setor de qualidade, querendo saber sobre seu problema. Registraram sua insatisfação.", "progresso": 3, "paciencia": 1 }
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
			{ "text": "Você abriu uma reclamação no Procon. A empresa tem 10 dias para responder. Protocolo gerado.", "generatesProtocol": true, "deadline": 10, "paciencia": 5 },
			{ "text": "Procon notificou a empresa e houve primeiro contato. +10 de progresso.", "progresso": 10, "generatesProtocol": true, "deadline": 10 },
			{ "text": "Procon confirmou recebimento e incluiu seu caso em relatório público.", "progresso": 5, "generatesProtocol": true, "deadline": 10 }
		],
		"negative": [
			{ "text": "O site do Procon está fora do ar. Parece que não é só a sua internet.", "paciencia": -5 },
			{ "text": "Procon pediu documentos que você não tem agora. Processo travou.", "paciencia": -4 },
			{ "text": "A empresa apresentou defesa e o Procon pediu mais prazo.", "paciencia": -6 },
			{ "text": "Procon classificou o caso como sem materialidade. Você discordou.", "paciencia": -8 },
			{ "text": "Sistema do Procon atrasou a notificação e o prazo expirou.", "paciencia": -7 },
			{ "text": "Procon mandou mensagem automática e não houve humanização.", "paciencia": -3 },
			{ "text": "Recurso foi indeferido por detalhe processual que você desconhecia.", "paciencia": -9 },
			{ "text": "A empresa descumpriu decisão do Procon e nada foi executado.", "paciencia": -12 },
			{ "text": "Demora na tramitação administrativa do Procon.", "paciencia": -10 },
			{ "text": "Procon solicitou complementação que não altera o resultado final.", "paciencia": -6 }
		],
		"status": [
			{ "text": "O Procon respondeu: a empresa apresentou defesa e você terá que aguardar nova análise.", "paciencia": -5 , "closesTicket": true},
			{ "text": "O Procon intermediou um acordo e você vai receber R$15 reais de desconto na próxima fatura.", "progresso": 5,  "paciencia": -5, "closesTicket": true },
			{ "text": "O Procon informou que o caso foi encerrado sem solução efetiva.", "paciencia": -8, "closesTicket": true },
			{ "text": "O Procon marcou uma audiência de conciliação. Agora é esperar mais um pouco.", "progresso": 5,  "paciencia":-3, "closesTicket": true }
		]
	},
	"reclameAqui": {
		"positive": [
			{ "text": "Sua reclamação no Reclame Aqui foi publicada! A reputação da empresa que lute. Protocolo gerado.", "generatesProtocol": true, "deadline": 5, "paciencia": 2 },
			{ "text": "Reclame Aqui abriu canal de negociação direta com a empresa.", "progresso": 15, "deadline": 5, "generatesProtocol": true },
		],
		"negative": [
			{ "text": "Você esqueceu sua senha do Reclame Aqui. A recuperação de senha não funciona.", "paciencia": -3 },
			{ "text": "A empresa respondeu com mensagem padrão e ignorou a solução.", "paciencia": -10 },
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
			{ "text": "Sua reclamação foi marcada como resolvida, mas você não recebeu contato.", "paciencia": -7, "closesTicket": true },
			{ "text": "A empresa pediu 10 documentos diferente em anexo e fechou logo na sequência por falta de documentação.", "paciencia": -10 , "closesTicket": true},
		]
	},
	"consumidorGov": {
		"positive": [
			{ "text": "Reclamação registrada no Consumidor.gov. Agora é oficial. Protocolo gerado.", "generatesProtocol": true, "deadline": 15, "paciencia": 5 },
			{ "text": "Consumidor.gov sugeriu conciliação e marcou audiência virtual com prazo de 10 dias.", "progresso": 15, "generatesProtocol": true },
		],
		"negative": [
			{ "text": "O sistema do Consumidor.gov exige um cadastro complexo que te fez desistir.", "paciencia": -4 },
			{ "text": "O sistema travou e você não conseguir abrir a reclamação.", "paciencia": -6 },
			{ "text": "Consumidor.gov reportou conflito de informações e não gerou o protocolo", "paciencia": -5 },
			{ "text": "A empresa contestou tudo e o caso travou sem registro de protocolo.", "paciencia": -9 },
			{ "text": "O painel da plataforma apresentou erro e ninguém conseguiu acessar o processo.", "paciencia": -8 },
		],
		"status": [
			{ "text": "Consumidor.gov informou que a empresa respondeu, mas não resolveu.", "paciencia": -8, "closesTicket": true },
			{ "text": "A plataforma marcou seu caso como 'finalizado'. Você pode recorrer.", "paciencia": -5, "closesTicket": true },
			{ "text": "A empresa propôs um acordo via Consumidor.gov e disse que vai resolver em 15 dias.","paciencia": -3, "progresso": 15 , "closesTicket": true},
			{ "text": "Seu caso foi encaminhado para análise administrativa e eles têm prazo de 5 dias", "paciencia": -3, "progresso": 5, "closesTicket": true },
			{ "text": "Empresa afirmou que só resolverá fora da plataforma. Processo emperrou.", "paciencia": -7, "closesTicket": true },
		]
	},
	"anatel": {
		"positive": [
			{ "text": "Você apelou para a ANATEL. A coisa ficou séria. Protocolo gerado.", "generatesProtocol": true, "deadline": 7, "paciencia": 10 },
			{ "text": "ANATEL notificou a operadora e abriu processo administrativo.", "progresso": 25, "generatesProtocol": true, "deadline": 7 },
			{ "text": "ANATEL solicitou relatório detalhado da empresa e acelerou a investigação.", "progresso": 30, "deadline": 5, "generatesProtocol": true },
			{ "text": "ANATEL exigiu relatório de ação com prazo.", "progresso": 26, "deadline": 10,"generatesProtocol": true }
		],
		"negative": [
			{ "text": "A ANATEL informa que você precisa de um protocolo da ouvidoria da empresa, que você não tem.", "paciencia": -8 },
			{ "text": "ANATEL arquivou temporariamente por falta de documentos.", "paciencia": -6 },
			{ "text": "Resposta da ANATEL foi técnica demais e não trouxe solução imediata.", "paciencia": -4 },
			{ "text": "Prazo da ANATEL é extenso e a sua paciência acabou.", "paciencia": -9 },
			{ "text": "ANATEL disse que não há responsabilidade direta da operadora no caso.", "paciencia": -12 },
			{ "text": "Você recebeu notificação burocrática sem ações concretas.", "paciencia": -7 },
			{ "text": "Recurso administrativo da ANATEL demorou demais.", "paciencia": -11 },
			{ "text": "ANATEL pediu tentativa de solução prévia com a empresa e travou o processo.", "paciencia": -8 },
			{ "text": "Decisão desfavorável por interpretação técnica estreita.", "paciencia": -13 }
        ],
        "status": [
            { "text": "A ANATEL informou que a operadora respondeu, mas não resolveu.", "paciencia": -10, "closesTicket": true  },
            { "text": "A ANATEL encerrou o processo por falta de provas. -12 de paciência.", "paciencia": -12, "closesTicket": true },
            { "text": "A ANATEL notificou a empresa novamente e eles pediram mais 10 dias de prazo", "progresso": 10, "paciencia": -5, "closesTicket": true  },
            { "text": "Seu caso foi encaminhado para fiscalização.", "paciencia": -5, "progresso": 8, "closesTicket": true}
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
            { "text": "A operadora fechou todos os chamados após sua postagem viralizar de forma negativa.", "paciencia": -10, "closesTicket": true },
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
            { "text": "A Defensoria Pública aceitou seu caso e enviou uma notificação para a empresa.", "progresso": 10, "paciencia": 5, "generatesProtocol": true, "deadline": 30 },
            { "text": "Após a notificação da Defensoria, a empresa te ligou para propor um acordo.", "progresso": 15, "paciencia": 10 }
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
            { "text": "Você entrou com uma ação no Juizado Especial Cível. A empresa foi citada e tem uma audiência marcada.", "progresso": 20, "paciencia": 0, "closesTicket": true },
        ],
        "negative": [
            { "text": "O processo é lento. A primeira audiência foi marcada para daqui a 6 meses.", "paciencia": -15 },
            { "text": "O juiz considerou o pedido improcedente. Você perdeu tempo e paciência.", "paciencia": -20 },
            { "text": "Você não conseguiu juntar a documentação necessária e o processo foi arquivado.", "paciencia": -10 },
            { "text": "A empresa não compareceu à audiência. Apenas protelaram o problema.", "paciencia": -12 },
            { "text": "Você descobriu que o advogado da empresa já trabalhou no tribunal.", "paciencia": -15 },
            { "text": "A operadora contratou um escritório de advocacia que é conhecido por usar táticas de intimidação.", "paciencia": -18 }
        ],
        "status": [
            { "text": "O processo judicial foi encerrado sem acordo.", "paciencia": -15, "closesTicket": true },
            { "text": "O juiz marcou nova audiência para daqui a 6 meses.", "paciencia": -10, "progresso": 1,"closesTicket": true },
            { "text": "Você ganhou R$30 reais de desconto na fatura.", "progresso": 10, "paciencia": 10, "closesTicket": true}
        ]
    },
    "arrumarSozinho": {
        "positive": [
            { "text": "Reiniciar o modem deu certo por alguns minutos, mas logo caiu de novo.", "progresso": 5, "paciencia": -5 }
        ],
        "negative": [
            { "text": "Você tentou 'configurações avançadas' no modem e agora nem a luz de energia acende mais.", "paciencia": -15 },
            { "text": "Ao mexer nos cabos, você acidentalmente desconectou o da TV. Agora são dois problemas.", "paciencia": -10 },
            { "text": "Você entrou na interface do roteador e esqueceu a senha de administrador. Agora está bloqueado.", "paciencia": -12 },
            { "text": "Sem querer, você derrubou café em cima do roteador. Cheiro de queimado no ar...", "paciencia": -20 },
            { "text": "Na tentativa de 'melhorar o sinal', você reposicionou a antena. Agora ela quebrou.", "paciencia": -8 },
            { "text": "Você resolveu atualizar o firmware manualmente e travou tudo no meio do processo.", "paciencia": -18 },
            { "text": "Tentando soprar a entrada do cabo, você fez o fio ficar ainda mais frouxo.", "paciencia": -7 },
            { "text": "Seu cachorro achou que o cabo que você mexeu era brinquedo. Adeus, cabo.", "paciencia": -15 },
            { "text": "Ao resetar o modem com um clipe de papel, você manteve pressionado tempo demais e apagou todas as configurações.", "paciencia": -12 },
            { "text": "Você puxou o cabo de energia sem querer enquanto mexia nos fios. Tudo desligado.", "paciencia": -10 },
            { "text": "Você decidiu trocar o modem de lugar para 'pegar melhor o sinal'. Agora não lembra onde ligava cada fio.", "paciencia": -9 }
        ]
    },
    "trocarOperadora": {
        "positive": [
            { "text": "Você trocou de operadora. A nova instalação foi rápida e a internet está funcionando. Jogo novo, vida nova.", "progresso": 100, "paciencia": 20, "closesTicket": true, "resetsGame": true }
        ],
        "negative": [
            { "text": "A nova operadora usa a mesma infraestrutura da antiga. O problema persiste.", "paciencia": -25, "closesTicket": true }
        ]
    },
    "vizinhoWifi": {
        "positive": [
            { "text": "Seu vizinho te passou a senha do Wi-Fi. Você pode ao menos ver seus e-mails.", "paciencia": 15 },
            { "text": "O sinal do vizinho está ótimo. Você começa a questionar suas escolhas de vida.", "paciencia": 10 }
        ],
        "negative": [
            { "text": "O Wi-Fi do vizinho também é da mesma operadora e está fora do ar. Vocês compartilham o sofrimento.", "paciencia": -5 },
            { "text": "Seu vizinho trocou a senha e não te avisou. A alegria durou pouco.", "paciencia": -10 },
            { "text": "A conexão do vizinho é tão ruim que não carrega nem uma página de busca.", "paciencia": -7 },
            { "text": "A conexão do Wi-Fi do vizinho funciona, mas cai a cada 5 minutos.", "paciencia": -8 },
            { "text": "Seu vizinho te passou a senha, mas só funciona quando a porta está aberta.", "paciencia": -4 },
            { "text": "A vizinha te deu a senha, mas depois te cobrou uma mensalidade por usar a internet.", "paciencia": -10 },
            { "text": "A vizinha te deu a senha, mas o Wi-Fi dela só funciona para aplicativos de chat.", "paciencia": -9 },
            { "text": "A senha é tão complexa que você desistiu antes de conseguir se conectar.", "paciencia": -3 }
        ]
    },
    "videoTikTok": {
        "positive": [
            { "text": "Você postou um vídeo reclamando no TikTok. Desabafar te fez bem.", "paciencia": 10 },
            { "text": "Seu vídeo teve 12 visualizações, mas uma delas foi da sua mãe te dando apoio moral.", "paciencia": 5 },
            { "text": "Seu vídeo viralizou! A operadora foi notificada e agora eles estão desesperados pra resolver seu problema.", "progresso": 10, "paciencia": 20, "opensTicket": true },
            { "text": "Um influenciador famoso repostou seu vídeo e marcou a operadora.", "progresso": 8, "paciencia": 15 },
            { "text": "Você recebeu comentários de outros clientes que estavam com o mesmo problema. A solidariedade te confortou.", "progresso": 2, "paciencia": 5 },
            { "text": "O perfil oficial da operadora fez um dueto com seu vídeo, pedindo para você entrar em contato por DM.", "progresso": 10, "paciencia": 5, "opensTicket": true },
            { "text": "Seu vídeo inspirou um 'desafio' no TikTok de reclamações contra a operadora.", "progresso": 5, "paciencia": 10 },
            { "text": "O setor de marketing da operadora te ligou para pedir para você apagar o vídeo em troca de um ano de internet grátis.", "progresso": 30, "paciencia": 30, "closesTicket": true },
        ],
        "negative": [
            { "text": "Seu vídeo foi denunciado por 'discurso de ódio' contra a operadora. O TikTok o removeu.", "paciencia": -8 },
            { "text": "Ninguém se importou com seu vídeo. Você se sentiu ainda mais sozinho nessa luta.", "paciencia": -6 },
            { "text": "A operadora fechou todos os chamados abertos após seu vídeo viralizar negativamente. Todos os chamados encerrados.", "paciencia": -10, "closesTicket": true },
            { "text": "Sua reclamação se perdeu na 'For You Page' e não alcançou ninguém.", "paciencia": -5 },
            { "text": "Um bot da operadora comentou no seu vídeo com uma mensagem de 'Agradecemos o seu feedback!'.", "paciencia": -7 },
            { "text": "O vídeo foi ignorado pela operadora, mas os haters não perderam a oportunidade.", "paciencia": -9 },
            { "text": "A operadora não só ignorou o vídeo, como também encerrou seus chamados.", "paciencia": -12, "closesTicket": true },
            { "text": "Seu vídeo recebeu um comentário de um funcionário da operadora que te ofendeu pessoalmente.", "paciencia": -15 },
            { "text": "O vídeo não deu em nada. Você se sente tolo por ter feito ele.", "paciencia": -5 },
            { "text": "A operadora processou você pelo vídeo e cobrou o prejuízo de marketing.", "paciencia": -20, "closesTicket": true }
        ]
    },
    "random": [ 
        { "text": "Uma atualização de sistema da operadora resetou seu chamado. Ele não existe mais.", "paciencia": -10, "closesTicket": true },
        { "text": "A operadora te ligou para oferecer um novo plano, ignorando completamente seu problema.", "paciencia": -5 },
        { "text": "Seu vizinho, que usa a mesma operadora, está com a internet funcionando perfeitamente.", "paciencia": -3 },
        { "text": "Choveu. A desculpa agora é 'condições climáticas adversas'.", "paciencia": -7 },
        { "text": "Sua fatura do mês veio com um aumento inexplicável, mesmo com o serviço inoperante.", "paciencia": -10 },
        { "text": "Você recebeu um e-mail de 'boas-vindas' da operadora, como se fosse um cliente novo.", "paciencia": -8 },
        { "text": "O site da operadora está em manutenção. Não é possível acessar a área do cliente.", "paciencia": -4 },
        { "text": "Você recebeu uma ligação para avaliar o serviço de atendimento, mas a pesquisa não te deixa dar nota zero.", "paciencia": -7 },
        { "text": "Um robô te ligou e desligou na sua cara.", "paciencia": -4 },
        { "text": "Um vizinho que não usa a mesma operadora fez um comentário sarcástico sobre o seu problema.", "paciencia": -3 },
        { "text": "A operadora enviou um SMS avisando que seu problema 'foi resolvido'. Você checa e nada mudou.", "paciencia": -10, "closesTicket": true },
        { "text": "Um técnico estava a caminho, mas ligou dizendo que seu carro quebrou.", "paciencia": -6 },
        { "text": "A operadora te enviou um e-mail de 'obrigado' por ser um cliente fiel.", "paciencia": -4 },
        { "text": "Você descobriu que seu 'chamado em andamento' na verdade está com status de 'encerrado' há 3 dias.", "paciencia": -12, "closesTicket": true },
        ] 
    };
