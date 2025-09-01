document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const container = document.querySelector('.container');
    const pacienciaSpan = document.getElementById('paciencia');
    const pacienciaBar = document.getElementById('patience-bar');
    const chamadosCounterSpan = document.getElementById('chamados-counter');
    const daysPassedSpan = document.getElementById('days-passed');
    const actionsCounterSpan = document.getElementById('actions-counter');
    const progressBar = document.getElementById('progress-bar');
    const progressBarText = document.getElementById('progress-bar-text');
    const currentScoreSpan = document.getElementById('current-score');
    const logArea = document.getElementById('log');
    const protocolListDiv = document.getElementById('protocol-list');

    // Modals
    const introModal = document.getElementById('intro-modal');
    const cancellationModal = document.getElementById('cancellation-modal');
    const modalMessage = document.getElementById('modal-message');
    const gameoverModal = document.getElementById('gameover-modal');
    const feedbackModal = document.getElementById('feedback-modal');
    const feedbackText = document.getElementById('feedback-text');
    const howtoModal = document.getElementById('howto-modal');
    const howtoBtn = document.getElementById('howto-btn');
    const howtoClose = document.getElementById('howto-close');
    const restartGameBtn = document.getElementById('restart-game');
    // Modal para mensagem principal
    const logModalArea = document.getElementById('log-modal-area');
    // Remove qualquer modal popup antigo
    const oldMainMsgModal = document.getElementById('main-msg-modal');
    if (oldMainMsgModal) oldMainMsgModal.remove();
    // Cria elemento para mensagem em tempo real dentro do espaço reservado
    let mainMsgText = document.getElementById('main-msg-text');
    if (!mainMsgText) {
        mainMsgText = document.createElement('span');
        mainMsgText.id = 'main-msg-text';
        mainMsgText.style.width = '100%';
        mainMsgText.style.textAlign = 'center';
        mainMsgText.style.fontWeight = 'bold';
        mainMsgText.style.fontSize = '1rem';
        mainMsgText.style.display = 'block';
        logModalArea.appendChild(mainMsgText);
    }

    // Buttons
    const introStartBtn = document.getElementById('intro-start');
    const modalAccept = document.getElementById('modal-accept');
    const modalReject = document.getElementById('modal-reject');
    const gameoverRestartBtn = document.getElementById('gameover-restart');
    const actions = {
        ligar: document.getElementById('ligar'),
        chamarWpp: document.getElementById('chamar-wpp'),
        abrirApp: document.getElementById('abrir-app'),
        irLoja: document.getElementById('irLoja'),
        enviarEmail: document.getElementById('enviarEmail'),
        usarAssistenteVirtual: document.getElementById('usarAssistenteVirtual'),
        receberTecnico: document.getElementById('receber-tecnico'),
        pegarStatusN2: document.getElementById('pegar-status-n2'),
        ligarOuvidoria: document.getElementById('ligarOuvidoria'),
        chatOnline: document.getElementById('chatOnline'),
        reclamarRedeSocial: document.getElementById('reclamarRedeSocial'),
        receberLigacao: document.getElementById('receberLigacao'),
        procon: document.getElementById('procon'),
        reclameAqui: document.getElementById('reclame-aqui'),
        consumidorGov: document.getElementById('consumidor-gov'),
        anatel: document.getElementById('anatel'),
        mensagemCEO: document.getElementById('mensagemCEO'),
        defensoriaPublica: document.getElementById('defensoriaPublica'),
        acaoJudicial: document.getElementById('acaoJudicial'),
        arrumarSozinho: document.getElementById('arrumarSozinho'),
        vizinhoWifi: document.getElementById('vizinhoWifi'),
        videoTikTok: document.getElementById('videoTikTok'),
        CelsoRussomanno: document.getElementById('CelsoRussomanno'),
        trocarOperadora: document.getElementById('trocarOperadora'),
        esperar: document.getElementById('esperar'),
        cancelarPlano: document.getElementById('cancelar-plano'),
    };

    // Game State
    let state;
    let cancellationSequenceStep = 0;
    let cameFromIntroModal = false;

    // --- Core Functions ---

    function initializeGame() {
        console.log('initializeGame chamada');
        
        introStartBtn.onclick = () => {
            introModal.style.display = 'none';
            resetGame();
        };
        
        // Event listener para o botão "Como jogar" no modal de início
        const introHowtoBtn = document.getElementById('intro-howto');
        if (introHowtoBtn) {
            introHowtoBtn.addEventListener('click', () => {
                cameFromIntroModal = true;
                introModal.style.display = 'none';
                howtoModal.style.display = 'flex';
            });
        }
        
        // Register other event listeners once (evita duplicação)
        if (!initializeGame.eventListenersAdded) {
            Object.keys(actions).forEach(key => {
                if (actions[key] && key !== 'cancelarPlano') {
                    actions[key].addEventListener('click', () => triggerAction(key));
                }
            });
            if (actions.cancelarPlano) {
                actions.cancelarPlano.addEventListener('click', startCancellationSequence);
            }
            initializeGame.eventListenersAdded = true;
            console.log('Event listeners adicionados uma única vez');
        }
        
        // Event listeners para How to Play modal
        if (howtoBtn) {
            howtoBtn.addEventListener('click', () => {
                cameFromIntroModal = false;
                howtoModal.style.display = 'flex';
            });
        }
        if (howtoClose) {
            howtoClose.addEventListener('click', () => {
                howtoModal.style.display = 'none';
                // Se veio do modal de início, volta para ele
                if (cameFromIntroModal) {
                    introModal.style.display = 'flex';
                    cameFromIntroModal = false;
                }
            });
        }
        // Fechar modal clicando fora dele
        if (howtoModal) {
            howtoModal.addEventListener('click', (e) => {
                if (e.target === howtoModal) {
                    howtoModal.style.display = 'none';
                }
            });
        }
    }

    // --- Dias por ação ---
    const actionDayRules = {
        ligar: { count: 2, days: 1 },
        chamarWpp: { count: 3, days: 1 },
        abrirApp: { count: 1, days: 1 },
        enviarEmail: { count: 1, days: 2 },
        chatOnline: { count: 1, days: 1 },
        receberTecnico: { count: 1, days: 1 },
        pegarStatusN2: { count: 1, days: 1 },
        ligarOuvidoria: { count: 1, days: 1 },
        reclamarRedeSocial: { count: 1, days: 2 },
        receberLigacao: { count: 1, days: 1 },
        procon: { count: 1, days: 10 },
        reclameAqui: { count: 1, days: 4 },
        consumidorGov: { count: 1, days: 5 },
        anatel: { count: 1, days: 10 },
        mensagemCEO: { count: 1, days: 1 },
        defensoriaPublica: { count: 1, days: 20 },
        acaoJudicial: { count: 1, days: 45 },
        arrumarSozinho: { count: 2, days: 1 },
        vizinhoWifi: { count: 1, days: 1 },
        videoTikTok: { count: 1, days: 1 },
        CelsoRussomanno: { count: 1, days: 1 }
    };

    let actionCounters = {};

    function resetGame(isFullReset = true) {
        state = {
            paciencia: 100,
            progresso: 0,
            chamadosAbertos: 0,
            daysPassed: 0,
            actionsTaken: 0,
            isTicketOpen: false,
            hasTicketBeenClosed: false,
            activeN3Protocol: null,
            cancellationInProgress: false,
            protocols: [],
            usedN3Actions: [], // Rastreia quais N3 já foram usados com sucesso
            diyUsageCount: {} // Rastreia quantas vezes cada DIY foi usado (máximo 2)
        };
        actionCounters = {}; // Reset counters
        
        // Limpa o espaço reservado para mensagem mais recente
        if (mainMsgText) {
            mainMsgText.innerHTML = '';
            mainMsgText.style.visibility = 'hidden';
        }
        
        if(isFullReset) {
            // Limpa o log e mostra a mensagem inicial no espaço reservado
            logArea.innerHTML = '';
            logMessage('Bem-vindo ao teste de paciência! Sua internet <b>NIão FUNCIONA!</b> Quer tentar resolver? Use as ações ao lado e cuide para não perder a paciência!');
        }
        
        // Restaura os botões do footer para o estado normal
        hideRestartButton();
        
        // Reset completo do estilo visual e estado de TODOS os botões
        const allButtons = ['ligar', 'chamarWpp', 'abrirApp', 'irLoja', 'enviarEmail', 'usarAssistenteVirtual', 
                           'receberTecnico', 'pegarStatusN2', 'reclamarRedeSocial', 'receberLigacao', 'chatOnline',
                           'anatel', 'procon', 'ligarOuvidoria', 'reclameAqui', 'consumidorGov', 'defensoriaPublica', 'acaoJudicial',
                           'arrumarSozinho', 'vizinhoWifi', 'videoTikTok', 'mensagemCEO', 'CelsoRussomanno', 'trocarOperadora'];
        
        allButtons.forEach(key => {
            if (actions[key]) {
                actions[key].disabled = false;
                actions[key].style.color = '';
                actions[key].style.backgroundColor = '';
                actions[key].style.opacity = '';
                
                // Restaura texto original para botões N4 se existir
                if (['arrumarSozinho', 'vizinhoWifi', 'videoTikTok', 'mensagemCEO', 'CelsoRussomanno'].includes(key)) {
                    if (updateActionButtonsState.originalN4Texts && updateActionButtonsState.originalN4Texts[key]) {
                        actions[key].textContent = updateActionButtonsState.originalN4Texts[key];
                    }
                }
            }
        });
        
        updateUI();
    }

    // --- UI Update Functions ---

    function updateUI() {
        if (!state) return;
        
        // Validação preventiva para evitar valores inválidos
        if (state.paciencia < 0) state.paciencia = 0;
        if (state.paciencia > 100) state.paciencia = 100;
        if (state.progresso < 0) state.progresso = 0;
        if (state.progresso > 100) state.progresso = 100;
        
    pacienciaSpan.textContent = state.paciencia;
    // Contar todos protocolos, inclusive N3
    chamadosCounterSpan.textContent = Array.isArray(state.protocols) ? state.protocols.length : state.chamadosAbertos;
    daysPassedSpan.textContent = state.daysPassed;
    actionsCounterSpan.textContent = state.actionsTaken;
        progressBar.style.width = `${state.progresso}%`;
        progressBarText.textContent = `${state.progresso}%`;
        
        // Atualiza pontuação em tempo real
        updateCurrentScore();

    // Update patience bar (diminui para a esquerda)
    const pacienciaPercent = Math.max(0, Math.min(100, state.paciencia));
    pacienciaBar.style.width = `${pacienciaPercent}%`;
    pacienciaBar.style.left = '0';
    pacienciaBar.style.right = 'auto';
    
    // Atualiza cor da barra baseado no valor da paciência
    if (state.paciencia >= 70) {
        // Verde (alta paciência)
        pacienciaBar.style.background = '#28a745';
    } else if (state.paciencia >= 40) {
        // Amarelo (paciência média)
        pacienciaBar.style.background = '#ffc107';
    } else {
        // Vermelho (baixa paciência)
        pacienciaBar.style.background = '#dc3545';
    }

    function updateCurrentScore() {
        if (!state) return;
        
        // Verifica se o rankingSystem está disponível
        if (typeof rankingSystem === 'undefined') {
            currentScoreSpan.textContent = '0';
            return;
        }
        
        // Calcula a pontuação atual usando o sistema de ranking
        const gameData = {
            days: state.daysPassed,
            actions: state.actionsTaken,
            protocols: state.protocols.length,
            remainingPatience: state.paciencia
        };
        
        const scoreResult = rankingSystem.calculateScore(gameData, false); // false = sem bônus durante o jogo
        currentScoreSpan.textContent = scoreResult.score;
    }

        if (state.paciencia <= 0) {
            const resumoGameOver = `Sua paciência acabou após ${state.daysPassed} dias tentando resolver o problema, tendo aberto ${state.protocols.length} chamados e tomado ${state.actionsTaken} ações. Você decide viver sem internet mesmo, pois no fim, NIem vale a pena..`;
            showGameoverModal(resumoGameOver);
            // Não bloqueia os botões automaticamente - só quando o user clicar em "Fechar"
            return; // Evita múltiplos modais e logs
        }

        if (state.progresso >= 100) {
            // LOG DE SUCESSO - Registra vitória no histórico do jogo
            logVictoryMessage('🎉 VITÓRIA! Problema resolvido com sucesso! Internet funcionando 100%!');
            
            // Fecha todos os protocolos quando o jogo encerra
            state.protocols.forEach(p => {
                if (p.status === 'Em andamento') p.status = 'Encerrado';
            });
            // Limpa protocolo N3 ativo
            state.activeN3Protocol = null;
            // Fecha chamado se estiver aberto
            state.isTicketOpen = false;
            
            // Mostra modal de vitória com sistema de ranking
            showVictoryModal();
            return; // Evita múltiplos modais
        }

    // Modal de finalização
    function showFinalModal(msg) {
        let finalModal = document.getElementById('final-modal');
        let finalText = document.getElementById('final-modal-text');
        if (!finalModal) {
            finalModal = document.createElement('div');
            finalModal.id = 'final-modal';
            finalModal.style.position = 'fixed';
            finalModal.style.top = '0';
            finalModal.style.left = '0';
            finalModal.style.width = '100vw';
            finalModal.style.height = '100vh';
            finalModal.style.background = 'rgba(0,0,0,0.7)';
            finalModal.style.display = 'flex';
            finalModal.style.alignItems = 'center';
            finalModal.style.justifyContent = 'center';
            finalModal.style.zIndex = '100000';
            finalText = document.createElement('div');
            finalText.id = 'final-modal-text';
            finalText.style.background = '#fff';
            finalText.style.borderRadius = '12px';
            finalText.style.padding = '30px 40px';
            finalText.style.maxWidth = '500px';
            finalText.style.maxHeight = '400px';
            finalText.style.fontSize = '1.1rem';
            finalText.style.fontWeight = 'bold';
            finalText.style.textAlign = 'center';
            finalText.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
            finalText.style.lineHeight = '1.5';
            finalText.style.margin = '20px';
            finalModal.appendChild(finalText);
            document.body.appendChild(finalModal);
        }
        finalText.innerHTML = msg + '<br><br><div style="display:flex;gap:15px;justify-content:center;margin-top:20px;"><button id="final-modal-restart" style="padding:12px 20px;font-size:0.95rem;border-radius:6px;background:#dc3545;color:#fff;border:none;cursor:pointer;font-weight:600;transition:background 0.2s;">Sofrer novamente</button><button id="final-modal-close" style="padding:12px 20px;font-size:0.95rem;border-radius:6px;background:#28a745;color:#fff;border:none;cursor:pointer;font-weight:600;transition:background 0.2s;">Fechar</button></div>';
        finalModal.style.display = 'flex';
        
        // Botão Fechar - bloqueia todos os botões mas mantém o board visível
        const closeBtn = document.getElementById('final-modal-close');
        closeBtn.onclick = function() {
            finalModal.style.display = 'none';
            // Bloqueia todos os botões
            Object.values(actions).forEach(button => { 
                if(button) button.disabled = true; 
            });
            // Mostra o botão "Sofrer novamente" no footer
            showRestartButton();
        };
        closeBtn.onmouseover = function() {
            this.style.background = '#218838';
        };
        closeBtn.onmouseout = function() {
            this.style.background = '#28a745';
        };
        
        // Botão Sofrer novamente - reinicia o jogo
        const restartBtn = document.getElementById('final-modal-restart');
        restartBtn.onclick = function() {
            finalModal.style.display = 'none';
            resetGame(true); // Reset completo
        };
        restartBtn.onmouseover = function() {
            this.style.background = '#c82333';
        };
        restartBtn.onmouseout = function() {
            this.style.background = '#dc3545';
        };
    }
        updateActionButtonsState();
        updateProtocolListUI();
    }

    function showGameoverModal(customMessage) {
        // Atualiza a mensagem com o resumo se fornecido
        if (customMessage) {
            const gameoverMessage = document.getElementById('gameover-message');
            if (gameoverMessage) {
                gameoverMessage.textContent = customMessage;
            }
        }
        gameoverModal.style.display = 'flex';
    }

    if (gameoverRestartBtn) {
        gameoverRestartBtn.onclick = () => {
            gameoverModal.style.display = 'none';
            resetGame();
        };
    }

    // Botão fechar do game over
    const gameoverCloseBtn = document.getElementById('gameover-close');
    if (gameoverCloseBtn) {
        gameoverCloseBtn.onclick = () => {
            gameoverModal.style.display = 'none';
            // Bloqueia todos os botões
            Object.values(actions).forEach(button => { 
                if(button) button.disabled = true; 
            });
            // Mostra o botão "Sofrer novamente" no footer
            showRestartButton();
        };
    }

    // Botão "Sofrer novamente" do footer
    if (restartGameBtn) {
        restartGameBtn.onclick = () => {
            hideRestartButton();
            resetGame(true);
        };
    }

    // Funções para mostrar/esconder o botão de restart no footer
    function showRestartButton() {
        if (restartGameBtn) {
            restartGameBtn.style.display = 'block';
            // Esconde os botões normais do footer
            const esperarBtn = document.getElementById('esperar');
            const cancelarBtn = document.getElementById('cancelar-plano');
            if (esperarBtn) esperarBtn.style.display = 'none';
            if (cancelarBtn) cancelarBtn.style.display = 'none';
        }
    }

    function hideRestartButton() {
        if (restartGameBtn) {
            restartGameBtn.style.display = 'none';
            // Mostra os botões normais do footer
            const esperarBtn = document.getElementById('esperar');
            const cancelarBtn = document.getElementById('cancelar-plano');
            if (esperarBtn) esperarBtn.style.display = 'block';
            if (cancelarBtn) cancelarBtn.style.display = 'block';
        }
    }

    function updateActionButtonsState() {
        Object.values(actions).forEach(button => {
            // Desabilita todos os botões exceto cancelar-plano
            if (button && button.id !== 'cancelar-plano') button.disabled = true;
        });

        // Botão esperar só fica ativo se há protocolo N3 aguardando prazo
        if (actions.esperar) {
            if (state.activeN3Protocol && state.activeN3Protocol.daysWaited < state.activeN3Protocol.deadline) {
                actions.esperar.disabled = false;
                // Muda o texto para ser mais informativo
                const protocolName = updateActionButtonsState.originalTexts?.[state.activeN3Protocol.type] || state.activeN3Protocol.type;
                actions.esperar.textContent = `Esperar 1 dia (${protocolName}: ${state.activeN3Protocol.daysWaited}/${state.activeN3Protocol.deadline}d)`;
            } else {
                actions.esperar.disabled = true;
                actions.esperar.textContent = 'Esperar 1 dia';
            }
        }

        const n1_buttons = ['ligar', 'chamarWpp', 'abrirApp', 'irLoja', 'enviarEmail', 'usarAssistenteVirtual', 'chatOnline'];
        const n2_buttons = ['receberTecnico', 'pegarStatusN2', 'reclamarRedeSocial', 'receberLigacao'];
        // Inclui ligarOuvidoria no N3
        const n3_buttons = ['anatel', 'procon', 'ligarOuvidoria', 'reclameAqui', 'consumidorGov', 'acaoJudicial'];
        const n4_buttons = ['arrumarSozinho', 'vizinhoWifi', 'videoTikTok', 'mensagemCEO', 'CelsoRussomanno'];

        if (!state.isTicketOpen) {
            n1_buttons.forEach(key => { if(actions[key]) actions[key].disabled = false; });
        } else {
            n2_buttons.forEach(key => { if(actions[key]) actions[key].disabled = false; });
        }
        
        // Sempre habilita trocar operadora
        if (actions.trocarOperadora) {
            actions.trocarOperadora.disabled = false;
        }

        if (state.paciencia <= 60) {
            // Se há protocolo N3 ativo, só libera o botão correspondente se prazo expirou
            if (state.activeN3Protocol) {
                const protocolButton = actions[state.activeN3Protocol.type];
                if (protocolButton && state.activeN3Protocol.daysWaited >= state.activeN3Protocol.deadline) {
                    // Quando prazo expira, libera apenas o botão de status
                    protocolButton.disabled = false;
                }
                // Todos os outros botões N3 ficam desabilitados enquanto protocolo estiver ativo
                n3_buttons.forEach(key => {
                    if (actions[key] && key !== state.activeN3Protocol.type) {
                        actions[key].disabled = true;
                    }
                });
            } else {
                // Se não há protocolo ativo, libera os N3 que não foram usados
                n3_buttons.forEach(key => { 
                    if (actions[key]) {
                        if (state.usedN3Actions.includes(key)) {
                            actions[key].disabled = true;
                            actions[key].style.color = '#666';
                            actions[key].style.backgroundColor = '#f0f0f0';
                        } else {
                            actions[key].disabled = false;
                            actions[key].style.color = '';
                            actions[key].style.backgroundColor = '';
                        }
                    }
                });
            }
        }

        // Controla botões DIY (máximo 2 usos cada)
        n4_buttons.forEach(key => { 
            if (actions[key]) {
                const usageCount = state.diyUsageCount[key] || 0;
                
                // Usa texto original já capturado
                const originalText = updateActionButtonsState.originalN4Texts[key];
                if (originalText) {
                    if (usageCount > 0) {
                        actions[key].textContent = `${originalText} (${usageCount}/2)`;
                    } else {
                        actions[key].textContent = originalText;
                    }
                }
                
                if (usageCount >= 2) {
                    actions[key].disabled = true;
                    actions[key].style.color = '#666';
                    actions[key].style.backgroundColor = '#f0f0f0';
                    actions[key].style.opacity = '0.6';
                } else {
                    actions[key].disabled = false;
                    actions[key].style.color = '';
                    actions[key].style.backgroundColor = '';
                    actions[key].style.opacity = '';
                }
            }
        });

        // Salva textos originais dos botões N3 (inclui Ouvidoria)
        if (!updateActionButtonsState.originalTexts) {
            updateActionButtonsState.originalTexts = {};
            n3_buttons.forEach(key => {
                if (actions[key]) {
                    updateActionButtonsState.originalTexts[key] = actions[key].getAttribute('data-original-text') || actions[key].textContent;
                    actions[key].setAttribute('data-original-text', updateActionButtonsState.originalTexts[key]);
                }
            });
        }

        if (state.activeN3Protocol) {
            const protocolButton = actions[state.activeN3Protocol.type];
            if(protocolButton) {
                let name = updateActionButtonsState.originalTexts[state.activeN3Protocol.type];
                if (typeof state.activeN3Protocol.deadline === 'number' && !isNaN(state.activeN3Protocol.deadline)) {
                    if (state.activeN3Protocol.daysWaited >= state.activeN3Protocol.deadline) {
                        // Quando prazo expira, botão vira "Status"
                        protocolButton.textContent = `Status ${name}`;
                        protocolButton.disabled = false;
                    } else {
                        // Enquanto aguarda, mostra contador
                        protocolButton.textContent = `${name} (${state.activeN3Protocol.daysWaited}/${state.activeN3Protocol.deadline}d)`;
                        protocolButton.disabled = true;
                    }
                } else {
                    protocolButton.textContent = `Status ${name}`;
                    protocolButton.disabled = false;
                }
            }
        } else {
            n3_buttons.forEach(key => {
                if(actions[key]) {
                    actions[key].textContent = updateActionButtonsState.originalTexts[key];
                }
            });
        }

        if (state.cancellationInProgress) {
            Object.values(actions).forEach(button => {
                if (button && button.id !== 'cancelar-plano') button.disabled = true;
            });
        }
    }

    function disableAllGameButtons() {
        // Bloqueia todos os botões de ação do jogo
        Object.values(actions).forEach(button => {
            if (button) {
                button.disabled = true;
                // Adiciona um visual feedback de que o jogo terminou
                button.style.opacity = '0.5';
            }
        });
        
        // Bloqueia também outros botões específicos
        const howtoBtn = document.getElementById('howto-btn');
        if (howtoBtn) {
            howtoBtn.disabled = true;
            howtoBtn.style.opacity = '0.5';
        }
        
        console.log('Todos os botões do jogo foram bloqueados após vitória');
    }

    function logMessage(message, pacienciaDelta = 0, progressoDelta = 0) {
        // Mostra mensagem em tempo real no espaço reservado
        let feedback = '';
        if (pacienciaDelta !== 0) {
            const cor = pacienciaDelta > 0 ? 'green' : 'red';
            feedback += `<span style="color:${cor};font-weight:bold;">${pacienciaDelta > 0 ? '+' : ''}${pacienciaDelta} Paciência</span> `;
        }
        if (progressoDelta !== 0) {
            const cor = progressoDelta > 0 ? 'green' : 'red';
            feedback += `<span style="color:${cor};font-weight:bold;">${progressoDelta > 0 ? '+' : ''}${progressoDelta} Progresso</span> `;
        }
        
        // Determina a cor de fundo baseado no impacto geral
        let backgroundColor = '';
        const totalImpact = pacienciaDelta + progressoDelta;
        if (totalImpact > 0) {
            backgroundColor = 'rgba(40, 167, 69, 0.1)'; // Verde claro para positivo
        } else if (totalImpact < 0) {
            backgroundColor = 'rgba(220, 53, 69, 0.1)'; // Vermelho claro para negativo
        }
        
        // Exibe a nova mensagem no espaço reservado com cor de fundo
        mainMsgText.innerHTML = `<div>${message}</div>${feedback ? `<div style='margin-top:8px;'>${feedback}</div>` : ''}`;
        mainMsgText.style.visibility = 'visible';
        mainMsgText.style.backgroundColor = backgroundColor;
        mainMsgText.style.borderRadius = '8px';
        mainMsgText.style.padding = backgroundColor ? '0.7rem' : '';
        mainMsgText.style.transition = 'background-color 0.3s ease';
    }

    function moveCurrentMessageToLog() {
        if (mainMsgText && mainMsgText.style.visibility === 'visible' && mainMsgText.innerHTML.trim() !== '') {
            const currentMsg = mainMsgText.innerHTML;
            const p = document.createElement('p');
            p.className = 'log-entry';
            p.innerHTML = currentMsg;
            // Adiciona no TOPO do log (mensagem mais recente em cima)
            if (logArea.firstChild) {
                logArea.insertBefore(p, logArea.firstChild);
            } else {
                logArea.appendChild(p);
            }
            // Reset do estilo visual do bloco
            mainMsgText.style.visibility = 'hidden';
            mainMsgText.style.backgroundColor = '';
            mainMsgText.style.borderRadius = '';
            mainMsgText.style.padding = '';
            mainMsgText.innerHTML = '';
        }
    }

    function logVictoryMessage(message) {
        // Adiciona mensagem de vitória diretamente ao log com estilo especial
        const p = document.createElement('p');
        p.className = 'log-entry victory';
        p.innerHTML = message;
        // Adiciona no TOPO do log (mensagem mais recente em cima)
        if (logArea.firstChild) {
            logArea.insertBefore(p, logArea.firstChild);
        } else {
            logArea.appendChild(p);
        }
    }

    function updateProtocolListUI() {
        protocolListDiv.innerHTML = '';
        if (state.protocols.length === 0) {
            protocolListDiv.innerHTML = '';
            return;
        }
        // Reverter ordem para mostrar protocolos mais recentes no topo
        const protocolsReversed = [...state.protocols].reverse();
        protocolsReversed.forEach(protocol => {
            const item = document.createElement('div');
            item.className = 'protocol-item';
            let typeName = protocol.type.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            item.innerHTML = `<span>${typeName}: ${protocol.protocolNumber}</span><b><span class="protocol-status ${protocol.status.toLowerCase().replace(/ /g, '')}"></span> - ${protocol.status}</b>`;
            protocolListDiv.appendChild(item);
        });
    }

    function shakeScreen() {
        container.classList.add('frustration-shake');
        setTimeout(() => container.classList.remove('frustration-shake'), 500);
    }

    // --- Game Logic ---

    function triggerAction(actionType) {
        if (!state) return;
        
        // Proteção contra execução dupla
        if (triggerAction.isExecuting) {
            console.log(`triggerAction já executando para ${actionType}, ignorando chamada duplicada`);
            return;
        }
        triggerAction.isExecuting = true;
        
        console.log(`triggerAction chamada para: ${actionType}`);
        
        // Incrementa contador de ações tomadas
        state.actionsTaken++;
        
        // Move mensagem atual para o log antes de processar nova ação
        moveCurrentMessageToLog();

        // Verifica se deve ocorrer evento aleatório ANTES da ação normal
        if (typeof messages !== 'undefined' && messages.random && Math.random() < 0.05) {
            triggerRandomEvent();
            updateUI();
            triggerAction.isExecuting = false;
            return; // Para aqui - não executa a ação normal
        }

        let outcome = null;

        if (actionType === 'esperar') {
            handleEsperarAction();
            triggerAction.isExecuting = false;
            return;
        } else {
            outcome = getOutcome(actionType, Math.random() > 0.5);
        }

        // --- Loja de dias ---
        let daysToAdd = 0;
        if (actionDayRules[actionType]) {
            if (!actionCounters[actionType]) actionCounters[actionType] = 0;
            actionCounters[actionType]++;
            if (actionType === 'arrumarSozinho') {
                // Só passa 1 dia a cada 2 tentativas
                if (actionCounters[actionType] >= actionDayRules[actionType].count) {
                    daysToAdd = actionDayRules[actionType].days;
                    state.daysPassed += daysToAdd;
                    actionCounters[actionType] = 0;
                }
            } else {
                if (actionCounters[actionType] >= actionDayRules[actionType].count) {
                    daysToAdd = actionDayRules[actionType].days;
                    state.daysPassed += daysToAdd;
                    actionCounters[actionType] = 0;
                }
            }
        }

        // Atualiza dias aguardados do protocolo N3 ativo para todas as ações que passam dias
        if (state.activeN3Protocol && daysToAdd > 0) {
            state.activeN3Protocol.daysWaited += daysToAdd;
            const pIndex = state.protocols.findIndex(p => p.protocolNumber === state.activeN3Protocol.protocolNumber);
            if (pIndex !== -1) state.protocols[pIndex].daysWaited = state.activeN3Protocol.daysWaited;
        }

        // Incrementa contador de uso para botões DIY (nível 4)
        const n4_buttons = ['arrumarSozinho', 'vizinhoWifi', 'videoTikTok', 'mensagemCEO', 'CelsoRussomanno'];
        if (n4_buttons.includes(actionType)) {
            if (!state.diyUsageCount[actionType]) {
                state.diyUsageCount[actionType] = 0;
            }
            const prevCount = state.diyUsageCount[actionType];
            state.diyUsageCount[actionType]++;
            console.log(`Ação ${actionType}: ${prevCount} -> ${state.diyUsageCount[actionType]} (incrementado uma vez)`);
        }

        if (outcome) {
            processOutcome(outcome, actionType);
        }
        
        // Libera proteção contra execução dupla
        triggerAction.isExecuting = false;
        
        updateUI();
    }

    function handleEsperarAction() {
        state.daysPassed++;
        state.paciencia -= 1;
        
        // Atualiza dias aguardados do protocolo N3 ativo
        if (state.activeN3Protocol) {
            state.activeN3Protocol.daysWaited++;
            const pIndex = state.protocols.findIndex(p => p.protocolNumber === state.activeN3Protocol.protocolNumber);
            if (pIndex !== -1) state.protocols[pIndex].daysWaited = state.activeN3Protocol.daysWaited;
        }
        
        logMessage('Você esperou um dia. Nada aconteceu. Ainda.', -1, 0);
        updateUI();
    }

    function showFeedbackModal(pacienciaDelta, progressoDelta) {
        // Mostra um modal para cada tipo de alteração
        if (pacienciaDelta !== 0) {
            feedbackText.textContent = (pacienciaDelta > 0 ? `+${pacienciaDelta}` : `${pacienciaDelta}`) + " Paciência";
            feedbackModal.className = 'feedback-modal ' + (pacienciaDelta > 0 ? 'positive' : 'negative');
            feedbackModal.style.display = 'block';
            setTimeout(() => {
                feedbackModal.style.display = 'none';
            }, 1200);
        }
        if (progressoDelta !== 0) {
            setTimeout(() => {
                feedbackText.textContent = (progressoDelta > 0 ? `+${progressoDelta}` : `${progressoDelta}`) + " Progresso";
                feedbackModal.className = 'feedback-modal ' + (progressoDelta > 0 ? 'positive' : 'negative');
                feedbackModal.style.display = 'block';
                setTimeout(() => {
                    feedbackModal.style.display = 'none';
                }, 1200);
            }, pacienciaDelta !== 0 ? 1300 : 0);
        }
    }

    function processOutcome(outcome, actionType) {
        // N3 status logic - VERIFICA PRIMEIRO se deve executar status
        const n3_status_actions = ['anatel', 'procon', 'ligarOuvidoria', 'reclameAqui', 'consumidorGov', 'defensoriaPublica', 'acaoJudicial'];
        if (
            state.activeN3Protocol &&
            state.activeN3Protocol.type === actionType &&
            typeof state.activeN3Protocol.deadline === 'number' &&
            state.activeN3Protocol.daysWaited >= state.activeN3Protocol.deadline &&
            n3_status_actions.includes(actionType)
        ) {
            const statusMsgs = messages[actionType]?.status;
            if (statusMsgs && statusMsgs.length > 0) {
                const statusOutcome = statusMsgs[Math.floor(Math.random() * statusMsgs.length)];
                let sPaciencia = statusOutcome.paciencia || 0;
                let sProgresso = statusOutcome.progresso || 0;
                // Só loga a mensagem de status, não loga novamente a principal
                logMessage(statusOutcome.text, sPaciencia, sProgresso);
                state.paciencia += sPaciencia;
                if (state.paciencia < 0) state.paciencia = 0; // Impede paciência negativa
                if (state.paciencia > 100) state.paciencia = 100; // Cap at 100
                state.progresso += sProgresso;
                if (state.progresso < 0) state.progresso = 0; // Impede progresso negativo
                if (state.progresso > 100) state.progresso = 100; // Cap at 100
                const pIndex = state.protocols.findIndex(p => p.protocolNumber === state.activeN3Protocol.protocolNumber);
                if (pIndex !== -1) state.protocols[pIndex].status = 'Encerrado';
                if (statusOutcome.closesTicket) {
                    state.isTicketOpen = false;
                    state.hasTicketBeenClosed = true;
                    state.protocols.forEach(p => {
                        if (p.status === 'Em andamento') p.status = 'Encerrado';
                    });
                }
                // Libera protocolo N3 após pegar status
                state.activeN3Protocol = null;
                return; // PARA AQUI - não executa o resto da função
            }
        }

        let deltaPaciencia = outcome.paciencia || 0;
        let deltaProgresso = outcome.progresso || 0;

        if (deltaPaciencia < 0) shakeScreen();

        state.paciencia += deltaPaciencia;
        if (state.paciencia < 0) state.paciencia = 0; // Impede paciência negativa
        if (state.paciencia > 100) state.paciencia = 100; // Cap at 100

        state.progresso += deltaProgresso;
        if (state.progresso < 0) state.progresso = 0; // Impede progresso negativo
        if (state.progresso > 100) state.progresso = 100; // Cap at 100

        // Lógica de abertura de chamado - criar mensagem única
        if (outcome.opensTicket) {
            state.isTicketOpen = true;
            state.chamadosAbertos++;
            const newProtocol = {
                type: actionType,
                deadline: null,
                daysWaited: 0,
                protocolNumber: `NIemTente-${Math.floor(Math.random() * 9000) + 1000}`,
                status: 'Em andamento'
            };
            state.protocols.push(newProtocol);
            // Mensagem única concatenando texto principal + protocolo
            const mensagemCompleta = `${outcome.text}<br>Chamado <b>${newProtocol.protocolNumber}</b> gerado.`;
            logMessage(mensagemCompleta, deltaPaciencia, deltaProgresso);
        } else if (outcome.generatesProtocol) {
            const newProtocol = {
                type: actionType,
                deadline: outcome.deadline,
                daysWaited: 0,
                protocolNumber: `NiemValeaPena-${Math.floor(Math.random() * 9000) + 1000}`,
                status: 'Em andamento'
            };
            state.activeN3Protocol = newProtocol;
            state.protocols.push(newProtocol);
            // Marca este N3 como usado para bloquear uso futuro
            if (!state.usedN3Actions.includes(actionType)) {
                state.usedN3Actions.push(actionType);
            }
            // Concatenar mensagem principal + protocolo N3 em uma única mensagem
            const mensagemCompleta = `${outcome.text}<br>Protocolo <b>${newProtocol.protocolNumber}</b> gerado. Prazo: ${outcome.deadline} dias.`;
            logMessage(mensagemCompleta, deltaPaciencia, deltaProgresso);
        } else {
            // Só loga uma vez a mensagem principal para ações normais (incluindo Nível 4)
            logMessage(outcome.text, deltaPaciencia, deltaProgresso);
        }

        if (actionType === 'receberTecnico') state.daysPassed++;

        if (outcome.closesTicket) {
            state.isTicketOpen = false;
            state.hasTicketBeenClosed = true;
            state.protocols.forEach(p => {
                if (p.status === 'Em andamento') p.status = 'Encerrado';
            });
            state.activeN3Protocol = null;
        }

        if (outcome.resolvesProtocol) {
            if(state.activeN3Protocol) {
                const pIndex = state.protocols.findIndex(p => p.protocolNumber === state.activeN3Protocol.protocolNumber);
                if (pIndex !== -1) state.protocols[pIndex].status = 'Encerrado';
                state.activeN3Protocol = null;
            }
        }

        if (outcome.resetsGame) {
            logMessage(outcome.text);
            resetGame(false); // soft reset, don't show intro message
            logMessage("O jogo recomeçou, mas a luta é a mesma.");
            return; // Stop further processing
        }

        if (state.progresso > 98) state.progresso = 100;
        if (state.progresso < 0) state.progresso = 0;
    }

    function getOutcome(actionType, isPositive) {
        const outcomes = messages[actionType]?.[isPositive ? 'positive' : 'negative'];
        if (!outcomes || outcomes.length === 0) return null;
        return outcomes[Math.floor(Math.random() * outcomes.length)];
    }

    function triggerRandomEvent() {
        shakeScreen();
        const randomEvent = messages.random[Math.floor(Math.random() * messages.random.length)];
        let rPaciencia = randomEvent.paciencia || 0;
        let rProgresso = randomEvent.progresso || 0;
        logMessage(`EVENTO ALEATÓRIO: ${randomEvent.text}`, rPaciencia, rProgresso);
        state.paciencia += rPaciencia;
        if (state.paciencia < 0) state.paciencia = 0; // Impede paciência negativa
        if (state.paciencia > 100) state.paciencia = 100; // Cap at 100
        if(randomEvent.progresso !== undefined) {
            if (randomEvent.progresso === 0) {
                state.progresso = 0;
            } else {
                state.progresso = randomEvent.progresso;
            }
        }
        // Se progresso não está definido no evento, não mexe no progresso atual
        if (state.progresso < 0) state.progresso = 0; // Impede progresso negativo
        if (state.progresso > 100) state.progresso = 100; // Cap at 100

        if (randomEvent.closesTicket && state.isTicketOpen) {
            state.isTicketOpen = false;
            state.hasTicketBeenClosed = true;
            state.protocols.forEach(p => {
                if (p.status === 'Em andamento') p.status = 'Encerrado';
            });
            state.activeN3Protocol = null;
        }
    }

    // --- Cancellation Modal Logic ---

    function startCancellationSequence() {
        if (!state) return;
        
        // Incrementa contador de ações tomadas
        state.actionsTaken++;
        
        state.cancellationInProgress = true;
        cancellationSequenceStep = 0;
        updateUI();
        cancellationModal.style.display = 'flex';
        nextCancellationEvent();
    }

    function nextCancellationEvent(context = '') {
        cancellationSequenceStep++;
        let msg = '', onAccept = () => {}, onReject = () => {};
        
        // Reset reject button style and event listeners
        modalReject.style.backgroundColor = '#fa3e3e';
        modalReject.textContent = 'Rejeitar';
        modalReject.onclick = null; // Clear previous onclick

        switch (cancellationSequenceStep) {
            case 1:
                msg = 'A operadora está oferecendo o dobro de velocidade por metade do preço. Aceitar?';
                onAccept = () => { logMessage('Você aceitou a oferta. O ciclo continua!'); hideCancellationModal(); };
                onReject = () => nextCancellationEvent();
                break;
            case 2:
                const fine = Math.floor(Math.random() * 846) + 1250;
                msg = `Disseram que você terá que pagar uma multa de R$ ${fine},00. Aceita pagar a multa?`;
                onAccept = () => {
                    logMessage(`O boleto de pagamento falhou e te transferiram para o setor de retenção.`);
                    nextCancellationEvent('A emissão do boleto de cancelamento falhou e ');
                };
                onReject = () => {
                    logMessage('Você se recusou a pagar a multa.');
                    nextCancellationEvent('Como você se recusou a pagar a multa, ');
                };
                break;
            case 3:
                msg = `${context}você foi transferido para o setor de retenção. Aceita esperar a ligação deles ou quer rejeitar e cancelar de vez?`;
                onAccept = () => { logMessage('Você ficou aguardando o time de retenção te ligar... ningúem ligou.'); hideCancellationModal(); };
                onReject = () => nextCancellationEvent();
                break;
            case 4:
                msg = 'A operadora te fez uma última oferta: 1 ano de Netflix grátis. Aceitar ou cancelar de vez?';
                onAccept = () => { logMessage('Você aceitou a oferta. O pesadelo continua!'); hideCancellationModal(); };
                onAcceptSecond = () => { logMessage('Não há como rejeitar essa oferta. Apenas aceite e siga em frente. Pelo menos agora você tem Netflix grátis por 1 ano.'); hideCancellationModal() };
                onReject = () => {
                    modalReject.textContent = 'ACEITAR!';
                    modalReject.style.backgroundColor = '#4CAF50'; // Green like the accept button
                    modalReject.onclick = onAcceptSecond; // Now this button also accepts
                };
                break;
            default:
                hideCancellationModal();
                resetGame();
                break;
        }
        modalMessage.textContent = msg;
        modalAccept.onclick = onAccept;
        if (modalReject.onclick === null) { // Only set if not already set by case 4
            modalReject.onclick = onReject;
        }
    }

    function hideCancellationModal() {
        cancellationModal.style.display = 'none';
        if(state) {
            state.cancellationInProgress = false;
            updateUI();
        }
    }

    // --- RANKING SYSTEM FUNCTIONS ---

    function showVictoryModal() {
        const gameData = {
            days: state.daysPassed,
            actions: state.actionsTaken,
            protocols: state.protocols.length,
            remainingPatience: state.paciencia
        };

        // Calcular pontuação
        const scoreResult = rankingSystem.calculateScore(gameData, true); // true = com bônus na vitória
        
        // Preencher dados do modal
        document.getElementById('victory-days').textContent = gameData.days;
        document.getElementById('victory-actions').textContent = gameData.actions;
        document.getElementById('victory-protocols').textContent = gameData.protocols;
        document.getElementById('victory-patience').textContent = gameData.remainingPatience;
        document.getElementById('final-score').textContent = scoreResult.score;
        
        // Criar breakdown da pontuação
        const breakdown = scoreResult.breakdown;
        const breakdownContainer = document.getElementById('score-breakdown');
        breakdownContainer.innerHTML = '';
        
        const breakdownItems = [
            { label: '📊 Base', value: breakdown.base, positive: true },
            { label: '📅 Dias (-5 cada)', value: breakdown.daysPenalty, positive: false },
            { label: '🎯 Ações (-1 cada)', value: breakdown.actionsPenalty, positive: false },
            { label: '📋 Protocolos (-8 cada)', value: breakdown.protocolsPenalty, positive: false },
            { label: '😌 Paciência (+3 cada)', value: breakdown.patienceBonus, positive: true },
            { label: '⚡ Bônus Velocidade', value: breakdown.speedBonus, positive: true },
            { label: '🎯 Bônus Eficiência', value: breakdown.efficiencyBonus, positive: true }
        ];
        
        breakdownItems.forEach(item => {
            if (item.value !== 0) {
                const div = document.createElement('div');
                div.className = `breakdown-item ${item.positive ? 'breakdown-positive' : 'breakdown-negative'}`;
                div.innerHTML = `
                    <span>${item.label}</span>
                    <span>${item.value > 0 ? '+' : ''}${item.value}</span>
                `;
                breakdownContainer.appendChild(div);
            }
        });
        
        // Mostrar modal
        document.getElementById('victory-modal').style.display = 'flex';
        
        // Event listeners para os botões
        setupVictoryModalEvents(gameData, scoreResult.score);
    }

    function setupVictoryModalEvents(gameData, finalScore) {
        const submitBtn = document.getElementById('submit-score');
        const skipBtn = document.getElementById('skip-ranking');
        const viewRankingsBtn = document.getElementById('view-rankings');
        const victoryRestartBtn = document.getElementById('victory-restart');
        const playerNameInput = document.getElementById('player-name');
        const statusDiv = document.getElementById('ranking-status');

        // Limpar event listeners anteriores
        submitBtn.replaceWith(submitBtn.cloneNode(true));
        skipBtn.replaceWith(skipBtn.cloneNode(true));
        viewRankingsBtn.replaceWith(viewRankingsBtn.cloneNode(true));
        victoryRestartBtn.replaceWith(victoryRestartBtn.cloneNode(true));

        // Referenciar os novos elementos
        const newSubmitBtn = document.getElementById('submit-score');
        const newSkipBtn = document.getElementById('skip-ranking');
        const newViewRankingsBtn = document.getElementById('view-rankings');
        const newVictoryRestartBtn = document.getElementById('victory-restart');

        newSubmitBtn.addEventListener('click', async () => {
            const playerName = playerNameInput.value.trim();
            
            if (!playerName) {
                showRankingStatus('Por favor, digite seu nome!', 'error');
                return;
            }
            
            if (playerName.length > 20) {
                showRankingStatus('Nome muito longo! Máximo 20 caracteres.', 'error');
                return;
            }

            try {
                showRankingStatus('Salvando pontuação...', 'loading');
                newSubmitBtn.disabled = true;
                
                const result = await rankingSystem.saveScore(playerName, gameData);
                
                if (result.success) {
                    showRankingStatus(`Pontuação salva com sucesso! Score: ${result.score}`, 'success');
                    playerNameInput.style.display = 'none';
                    newSubmitBtn.style.display = 'none';
                    newSkipBtn.textContent = 'Continuar';
                } else {
                    throw new Error('Falha ao salvar');
                }
            } catch (error) {
                console.error('Erro ao salvar pontuação:', error);
                showRankingStatus('Erro ao salvar pontuação. Tente novamente.', 'error');
                newSubmitBtn.disabled = false;
            }
        });

        newSkipBtn.addEventListener('click', () => {
            document.getElementById('victory-modal').style.display = 'none';
            // Bloqueia todos os botões do jogo após vitória
            disableAllGameButtons();
            // Opcional: mostrar botão restart no footer ou resetar automaticamente
            showRestartButton();
        });

        newViewRankingsBtn.addEventListener('click', () => {
            showRankingModal();
        });

        newVictoryRestartBtn.addEventListener('click', () => {
            document.getElementById('victory-modal').style.display = 'none';
            resetGame(true);
        });

        // Enter para submeter
        playerNameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                newSubmitBtn.click();
            }
        });
    }

    function showRankingStatus(message, type) {
        const statusDiv = document.getElementById('ranking-status');
        statusDiv.textContent = message;
        statusDiv.className = `ranking-status ${type}`;
    }

    async function showRankingModal() {
        document.getElementById('ranking-modal').style.display = 'flex';
        
        // Verificar se já foi inicializado
        if (!document.getElementById('ranking-modal').hasAttribute('data-initialized')) {
            setupRankingModalEvents();
            document.getElementById('ranking-modal').setAttribute('data-initialized', 'true');
        }
        
        // Garantir que o filtro "all" esteja ativo
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === 'all') {
                btn.classList.add('active');
            }
        });
        
        // Carregar rankings
        await loadRankings();
        await loadGlobalStats();
    }

    function setupRankingModalEvents() {
        // Close buttons
        const rankingClose = document.getElementById('ranking-close');
        if (rankingClose) {
            rankingClose.replaceWith(rankingClose.cloneNode(true));
            document.getElementById('ranking-close').addEventListener('click', () => {
                document.getElementById('ranking-modal').style.display = 'none';
            });
        }

        const closeRankings = document.getElementById('close-rankings');
        if (closeRankings) {
            closeRankings.replaceWith(closeRankings.cloneNode(true));
            document.getElementById('close-rankings').addEventListener('click', () => {
                document.getElementById('ranking-modal').style.display = 'none';
            });
        }

        // Refresh button
        const refreshBtn = document.getElementById('refresh-rankings');
        if (refreshBtn) {
            refreshBtn.replaceWith(refreshBtn.cloneNode(true));
            document.getElementById('refresh-rankings').addEventListener('click', async () => {
                console.log('Atualizando rankings globais');
                await loadRankings();
                await loadGlobalStats();
            });
        }

        // Fechar clicando fora
        const modal = document.getElementById('ranking-modal');
        modal.addEventListener('click', (e) => {
            if (e.target.id === 'ranking-modal') {
                modal.style.display = 'none';
            }
        });
    }

    async function loadRankings() {
        const listContainer = document.getElementById('ranking-list');
        listContainer.innerHTML = '<div class="loading">Carregando rankings...</div>';
        
        console.log('Carregando rankings globais');

        try {
            const rankings = await rankingSystem.getTopRankings(20, 'all');
            
            console.log(`Recebidos ${rankings.length} rankings`);
            
            if (rankings.length === 0) {
                listContainer.innerHTML = `
                    <div class="empty-ranking">
                        <h3>📊 Nenhum ranking encontrado</h3>
                        <p>Seja o primeiro a aparecer aqui!</p>
                    </div>
                `;
                return;
            }

            listContainer.innerHTML = '';
            
            rankings.forEach((rank, index) => {
                const item = document.createElement('div');
                item.className = `ranking-item ${index < 3 ? `top-${index + 1}` : ''}`;
                
                const position = index < 3 ? 
                    ['🥇', '🥈', '🥉'][index] : 
                    `#${index + 1}`;
                
                const timeAgo = getTimeAgo(rank.timestamp);
                
                item.innerHTML = `
                    <div class="position">${position}</div>
                    <div class="player-name">${escapeHtml(rank.playerName)}</div>
                    <div class="player-score">${rank.score}</div>
                    <div class="player-details">
                        <span>📅 ${rank.days}d</span>
                        <span>🎯 ${rank.actions}a</span>
                        <span>📋 ${rank.protocols}p</span>
                        <span>⏰ ${timeAgo}</span>
                    </div>
                `;
                
                listContainer.appendChild(item);
            });
            
            console.log(`Rankings exibidos com sucesso`);
        } catch (error) {
            console.error('Erro ao carregar rankings:', error);
            listContainer.innerHTML = `
                <div class="empty-ranking">
                    <h3>❌ Erro ao carregar rankings</h3>
                    <p>Tente novamente em alguns instantes.</p>
                    <p><em>Erro: ${error.message}</em></p>
                </div>
            `;
        }
    }

    async function loadGlobalStats() {
        try {
            const stats = await rankingSystem.getGlobalStats();
            
            if (stats) {
                document.getElementById('total-games').textContent = stats.totalGames.toLocaleString();
                document.getElementById('avg-score').textContent = stats.averageScore.toLocaleString();
                document.getElementById('top-score').textContent = stats.topScore.toLocaleString();
            }
        } catch (error) {
            console.error('Erro ao carregar estatísticas:', error);
        }
    }

    function getTimeAgo(date) {
        const now = new Date();
        const diff = now - date;
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);

        if (minutes < 1) return 'agora';
        if (minutes < 60) return `${minutes}m`;
        if (hours < 24) return `${hours}h`;
        if (days < 7) return `${days}d`;
        return date.toLocaleDateString('pt-BR');
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // --- Initialize --- 
    initializeGame();

    // Adicionar botão "Ver Ranking" no header (opcional)
    if (document.getElementById('howto-btn')) {
        const titleButtons = document.querySelector('.title-buttons');
        const rankingBtn = document.createElement('button');
        rankingBtn.id = 'header-ranking-btn';
        rankingBtn.className = 'title-btn';
        rankingBtn.innerHTML = '🏆 Ranking';
        rankingBtn.addEventListener('click', () => {
            showRankingModal();
        });
        titleButtons.insertBefore(rankingBtn, titleButtons.firstChild);
    }
    
    // Inicializa o jogo e atualiza a UI
    initializeGame();
    
    // Captura textos originais dos botões N4 ANTES de qualquer modificação
    const n4_buttons = ['arrumarSozinho', 'vizinhoWifi', 'videoTikTok', 'mensagemCEO', 'CelsoRussomanno'];
    updateActionButtonsState.originalN4Texts = {};
    n4_buttons.forEach(key => {
        if (actions[key]) {
            updateActionButtonsState.originalN4Texts[key] = actions[key].textContent;
            console.log(`Texto original capturado para ${key}: "${actions[key].textContent}"`);
        }
    });
    
    // Inicializa estado básico para mostrar pontuação inicial
    if (!state) {
        state = {
            paciencia: 100,
            progresso: 0,
            chamadosAbertos: 0,
            daysPassed: 0,
            actionsTaken: 0,
            protocols: [],
            diyUsageCount: {}
        };
    }
    
    updateUI();
});

// === FIREBASE CONFIGURATION ===
const firebaseConfig = {
  apiKey: "__FIREBASE_KEY__",
  authDomain: "internetniuncamais.firebaseapp.com",
  projectId: "internetniuncamais",
  storageBucket: "internetniuncamais.firebasestorage.app",
  messagingSenderId: "503832825549",
  appId: "1:503832825549:web:fe09c58e3f4b101faee384"
};

// Inicializar Firebase quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    initializeRanking(firebaseConfig);
});