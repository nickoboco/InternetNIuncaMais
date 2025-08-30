document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const container = document.querySelector('.container');
    const pacienciaSpan = document.getElementById('paciencia');
    const pacienciaBar = document.getElementById('patience-bar');
    const chamadosCounterSpan = document.getElementById('chamados-counter');
    const daysPassedSpan = document.getElementById('days-passed');
    const progressBar = document.getElementById('progress-bar');
    const progressBarText = document.getElementById('progress-bar-text');
    const logArea = document.getElementById('log');
    const protocolListDiv = document.getElementById('protocol-list');

    // Modals
    const introModal = document.getElementById('intro-modal');
    const cancellationModal = document.getElementById('cancellation-modal');
    const modalMessage = document.getElementById('modal-message');
    const gameoverModal = document.getElementById('gameover-modal');
    const feedbackModal = document.getElementById('feedback-modal');
    const feedbackText = document.getElementById('feedback-text');
    // Modal para mensagem principal
    let mainMsgModal = document.getElementById('main-msg-modal');
    let mainMsgText = document.getElementById('main-msg-text');
    const logModalArea = document.getElementById('log-modal-area');
    if (!mainMsgModal) {
        mainMsgModal = document.createElement('div');
        mainMsgModal.id = 'main-msg-modal';
        mainMsgModal.style.position = 'absolute';
        mainMsgModal.style.top = '0';
        mainMsgModal.style.left = '50%';
        mainMsgModal.style.transform = 'translateX(-50%)';
        mainMsgModal.style.background = '#fff';
        mainMsgModal.style.borderRadius = '12px';
        mainMsgModal.style.boxShadow = '0 8px 25px rgba(0,0,0,0.18)';
        mainMsgModal.style.padding = '16px 28px';
        mainMsgModal.style.zIndex = '99999';
        mainMsgModal.style.display = 'none';
        mainMsgModal.style.textAlign = 'center';
        mainMsgModal.style.fontSize = '1rem';
        mainMsgModal.style.fontWeight = 'bold';
        mainMsgModal.style.maxWidth = '320px';
        mainMsgModal.style.pointerEvents = 'none';
        mainMsgText = document.createElement('span');
        mainMsgText.id = 'main-msg-text';
        mainMsgModal.appendChild(mainMsgText);
        logModalArea.appendChild(mainMsgModal);
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
        trocarOperadora: document.getElementById('trocarOperadora'),
        esperar: document.getElementById('esperar'),
        cancelarPlano: document.getElementById('cancelar-plano'),
    };

    // Game State
    let state;
    let cancellationSequenceStep = 0;

    // --- Core Functions ---

    function initializeGame() {
        introStartBtn.onclick = () => {
            introModal.style.display = 'none';
            resetGame();
        };
        // Register other event listeners once
        Object.keys(actions).forEach(key => {
            if (actions[key] && key !== 'cancelarPlano') {
                actions[key].addEventListener('click', () => triggerAction(key));
            }
        });
        if (actions.cancelarPlano) {
            actions.cancelarPlano.addEventListener('click', startCancellationSequence);
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
        videoTikTok: { count: 1, days: 1 }
    };

    let actionCounters = {};

    function resetGame(isFullReset = true) {
        state = {
            paciencia: 100,
            progresso: 0,
            chamadosAbertos: 0,
            daysPassed: 0,
            isTicketOpen: false,
            hasTicketBeenClosed: false,
            activeN3Protocol: null,
            cancellationInProgress: false,
            protocols: [],
        };
        actionCounters = {}; // Reset counters
        if(isFullReset) {
            logArea.innerHTML = '<p>Bem-vindo ao teste de paciência! Sua internet <b>NÃO FUNCIONA!</b> Será que vão resolver?</p>';
        }
        updateUI();
    }

    // --- UI Update Functions ---

    function updateUI() {
        if (!state) return;
        pacienciaSpan.textContent = state.paciencia;
        chamadosCounterSpan.textContent = state.chamadosAbertos;
        daysPassedSpan.textContent = state.daysPassed;
        progressBar.style.width = `${state.progresso}%`;
        progressBarText.textContent = `${state.progresso}%`;

    // Update patience bar (diminui para a esquerda)
    const pacienciaPercent = Math.max(0, Math.min(100, state.paciencia));
    pacienciaBar.style.width = `${pacienciaPercent}%`;
    pacienciaBar.style.left = '0';
    pacienciaBar.style.right = 'auto';

        if (state.paciencia <= 0) {
            showGameoverModal();
            Object.values(actions).forEach(button => { if(button) button.disabled = true; });
            actions.cancelarPlano.disabled = false;
            return; // Evita múltiplos modais e logs
        }

        if (state.progresso >= 100) {
            showFinalModal('MILAGRE! Você alcançou 100% e resolveu o problema!');
            Object.values(actions).forEach(button => { if(button) button.disabled = true; });
            actions.cancelarPlano.disabled = false;
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
            finalText.style.borderRadius = '16px';
            finalText.style.padding = '40px 60px';
            finalText.style.fontSize = '1.3rem';
            finalText.style.fontWeight = 'bold';
            finalText.style.textAlign = 'center';
            finalText.style.boxShadow = '0 8px 32px rgba(0,0,0,0.25)';
            finalModal.appendChild(finalText);
            document.body.appendChild(finalModal);
        }
        finalText.innerHTML = msg + '<br><br><button id="final-modal-close" style="margin-top:18px;padding:10px 28px;font-size:1rem;border-radius:8px;background:#007bff;color:#fff;border:none;cursor:pointer;">Fechar</button>';
        finalModal.style.display = 'flex';
        document.getElementById('final-modal-close').onclick = function() {
            finalModal.style.display = 'none';
        };
    }
        updateActionButtonsState();
        updateProtocolListUI();
    }

    function showGameoverModal() {
        gameoverModal.style.display = 'flex';
    }

    if (gameoverRestartBtn) {
        gameoverRestartBtn.onclick = () => {
            gameoverModal.style.display = 'none';
            resetGame();
        };
    }

    function updateActionButtonsState() {
        Object.values(actions).forEach(button => {
            // Não desabilita o botão esperar
            if (button && button.id !== 'cancelar-plano' && button.id !== 'esperar') button.disabled = true;
        });

        const n1_buttons = ['ligar', 'chamarWpp', 'abrirApp', 'irLoja', 'enviarEmail', 'usarAssistenteVirtual'];
        const n2_buttons = ['receberTecnico', 'pegarStatusN2', 'reclamarRedeSocial', 'receberLigacao'];
        // Inclui ligarOuvidoria no N3
        const n3_buttons = ['anatel', 'procon', 'ligarOuvidoria', 'reclameAqui', 'consumidorGov', 'defensoriaPublica', 'acaoJudicial'];
        const n4_buttons = ['arrumarSozinho', 'vizinhoWifi', 'videoTikTok', 'mensagemCEO', 'trocarOperadora'];

        if (!state.isTicketOpen) {
            n1_buttons.forEach(key => { if(actions[key]) actions[key].disabled = false; });
        } else {
            n2_buttons.forEach(key => { if(actions[key]) actions[key].disabled = false; });
        }

        if (state.paciencia <= 60) {
            n3_buttons.forEach(key => { if(actions[key]) actions[key].disabled = false; });
        }

        n4_buttons.forEach(key => { if(actions[key]) actions[key].disabled = false; });

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
                protocolButton.disabled = true;
                let name = updateActionButtonsState.originalTexts[state.activeN3Protocol.type];
                if (typeof state.activeN3Protocol.deadline === 'number' && !isNaN(state.activeN3Protocol.deadline)) {
                    protocolButton.textContent = `Status ${name} (${state.activeN3Protocol.daysWaited}/${state.activeN3Protocol.deadline}d)`;
                } else {
                    protocolButton.textContent = `Status ${name}`;
                }
                if (state.activeN3Protocol.deadline && state.activeN3Protocol.daysWaited >= state.activeN3Protocol.deadline) {
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

    function logMessage(message, pacienciaDelta = 0, progressoDelta = 0) {
        // Mostra toast lateral antes de adicionar ao log
        let feedback = '';
        if (pacienciaDelta !== 0) {
            const cor = pacienciaDelta > 0 ? 'green' : 'red';
            feedback += `<span style="color:${cor};font-weight:bold;">${pacienciaDelta > 0 ? '+' : ''}${pacienciaDelta} Paciência</span> `;
        }
        if (progressoDelta !== 0) {
            const cor = progressoDelta > 0 ? 'green' : 'red';
            feedback += `<span style="color:${cor};font-weight:bold;">${progressoDelta > 0 ? '+' : ''}${progressoDelta} Progresso</span> `;
        }
        mainMsgText.innerHTML = `<div>${message}</div>${feedback ? `<div style='margin-top:8px;'>${feedback}</div>` : ''}`;
        mainMsgModal.style.display = 'block';
        setTimeout(() => {
            mainMsgModal.style.display = 'none';
            const p = document.createElement('p');
            p.className = 'log-entry';
            p.innerHTML = message;
            // Cria o bloco de pontos ganhos/perdidos
            const pointsDiv = document.createElement('span');
            pointsDiv.className = 'log-points';
            let pointsArr = [];
            if (pacienciaDelta !== 0) {
                const cor = pacienciaDelta > 0 ? 'green' : 'red';
                pointsArr.push(
                    `<span class="${pacienciaDelta > 0 ? 'points-positive' : 'points-negative'}"><b><span style="color:${cor};font-weight:bold;">${pacienciaDelta > 0 ? '+' : ''}${pacienciaDelta} Paciência</span></b></span>`
                );
            }
            if (progressoDelta !== 0) {
                const cor = progressoDelta > 0 ? 'green' : 'red';
                pointsArr.push(
                    `<span class="${progressoDelta > 0 ? 'points-positive' : 'points-negative'}"><b><span style="color:${cor};font-weight:bold;">${progressoDelta > 0 ? '+' : ''}${progressoDelta} Progresso</span></b></span>`
                );
            }
            if (pointsArr.length > 0) {
                pointsDiv.innerHTML = pointsArr.join(' ');
                p.appendChild(pointsDiv);
            }
            logArea.prepend(p);
        }, 3000);
    }

    function updateProtocolListUI() {
        protocolListDiv.innerHTML = '';
        if (state.protocols.length === 0) {
            protocolListDiv.innerHTML = '<p>Nenhum chamado registrado ainda.</p>';
            return;
        }
        state.protocols.forEach(protocol => {
            const item = document.createElement('div');
            item.className = 'protocol-item';
            let typeName = protocol.type.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            item.innerHTML = `<span>Canal: ${typeName}: ${protocol.protocolNumber}</span><b><span class="protocol-status ${protocol.status.toLowerCase().replace(/ /g, '')}"></span> - ${protocol.status}</b>`;
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
        if (Math.random() < 0.0002) {
            triggerMiracle();
            return;
        }

        let outcome = null;

        if (actionType === 'esperar') {
            handleEsperarAction();
            return;
        } else {
            outcome = getOutcome(actionType, Math.random() > 0.5);
        }

        // --- Loja de dias ---
        if (actionDayRules[actionType]) {
            if (!actionCounters[actionType]) actionCounters[actionType] = 0;
            actionCounters[actionType]++;
            if (actionType === 'arrumarSozinho') {
                // Só passa 1 dia a cada 2 tentativas
                if (actionCounters[actionType] >= actionDayRules[actionType].count) {
                    state.daysPassed += actionDayRules[actionType].days;
                    actionCounters[actionType] = 0;
                }
            } else {
                if (actionCounters[actionType] >= actionDayRules[actionType].count) {
                    state.daysPassed += actionDayRules[actionType].days;
                    actionCounters[actionType] = 0;
                }
            }
        }

        if (outcome) {
            processOutcome(outcome, actionType);
        }
        triggerRandomEvent();
        updateUI();
    }

    function handleEsperarAction() {
        state.daysPassed++;
        state.paciencia -= 1;
        if (state.activeN3Protocol) {
            state.activeN3Protocol.daysWaited++;
            const pIndex = state.protocols.findIndex(p => p.protocolNumber === state.activeN3Protocol.protocolNumber);
            if (pIndex !== -1) state.protocols[pIndex].daysWaited = state.activeN3Protocol.daysWaited;
        }
        logMessage('Você esperou um dia. Nada aconteceu. Ainda.');
        triggerRandomEvent();
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
        let deltaPaciencia = outcome.paciencia || 0;
        let deltaProgresso = outcome.progresso || 0;

        if (deltaPaciencia < 0) shakeScreen();

        state.paciencia += deltaPaciencia;
        if (state.paciencia > 100) state.paciencia = 100; // Cap at 100

        state.progresso += deltaProgresso;

        // Show feedback modal
        showFeedbackModal(deltaPaciencia, deltaProgresso);

        // Só loga uma vez a mensagem principal
        logMessage(outcome.text, deltaPaciencia, deltaProgresso);

        if (actionType === 'receberTecnico') state.daysPassed++;

        // N3 status logic
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
                if (state.paciencia > 100) state.paciencia = 100; // Cap at 100
                state.progresso += sProgresso;
                const pIndex = state.protocols.findIndex(p => p.protocolNumber === state.activeN3Protocol.protocolNumber);
                if (pIndex !== -1) state.protocols[pIndex].status = 'Encerrado';
                if (statusOutcome.closesTicket) {
                    state.isTicketOpen = false;
                    state.hasTicketBeenClosed = true;
                    state.protocols.forEach(p => {
                        if (p.status === 'Em andamento') p.status = 'Encerrado';
                    });
                }
                state.activeN3Protocol = null;
                return;
            }
        }

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
            logMessage(`Chamado <b>${newProtocol.protocolNumber}</b> gerado.`);
        }
        if (outcome.closesTicket) {
            state.isTicketOpen = false;
            state.hasTicketBeenClosed = true;
            state.protocols.forEach(p => {
                if (p.status === 'Em andamento') p.status = 'Encerrado';
            });
            state.activeN3Protocol = null;
        }
        if (outcome.generatesProtocol) {
            const newProtocol = {
                type: actionType,
                deadline: outcome.deadline,
                daysWaited: 0,
                protocolNumber: `NiemValeaPena-${Math.floor(Math.random() * 9000) + 1000}`,
                status: 'Em andamento'
            };
            state.activeN3Protocol = newProtocol;
            state.protocols.push(newProtocol);
            logMessage(`Protocolo ${newProtocol.protocolNumber} gerado. Prazo: ${outcome.deadline} dias.`);
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

    function triggerMiracle() {
        logMessage('EVENTO CÓSMICO RARÍSSIMO: Um alinhamento planetário fez com que um técnico sênior resolvesse tudo em 15 minutos.');
        state.progresso = 100;
        state.paciencia += 100;
        if (state.paciencia > 100) state.paciencia = 100; // Cap at 100
        shakeScreen();
        updateUI();
    }

    function triggerRandomEvent() {
        if (typeof messages !== 'undefined' && messages.random && Math.random() < 0.05) {
            shakeScreen();
            const randomEvent = messages.random[Math.floor(Math.random() * messages.random.length)];
            let rPaciencia = randomEvent.paciencia || 0;
            let rProgresso = randomEvent.progresso || 0;
            logMessage(`EVENTO ALEATÓRIO: ${randomEvent.text}`, rPaciencia, rProgresso);
            state.paciencia += rPaciencia;
            if (state.paciencia > 100) state.paciencia = 100; // Cap at 100
            if(randomEvent.progresso) {
                state.progresso = randomEvent.progresso;
            } else if (randomEvent.progresso === 0) {
                state.progresso = 0;
            } else {
                state.progresso = Math.floor(state.progresso * 0.9);
            }

            if (randomEvent.closesTicket && state.isTicketOpen) {
                state.isTicketOpen = false;
                state.hasTicketBeenClosed = true;
                state.protocols.forEach(p => {
                    if (p.status === 'Em andamento') p.status = 'Encerrado';
                });
                state.activeN3Protocol = null;
            }
        }
    }

    // --- Cancellation Modal Logic ---

    function startCancellationSequence() {
        if (!state) return;
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
                msg = 'Oferecemos o dobro de internet por metade do preço. Aceitar?';
                onAccept = () => { logMessage('Você aceitou a oferta. O ciclo continua!'); hideCancellationModal(); };
                onReject = () => nextCancellationEvent();
                break;
            case 2:
                const fine = Math.floor(Math.random() * 100) + 50;
                msg = `Há uma multa de R$ ${fine},00. Deseja pagar e cancelar?`;
                onAccept = () => {
                    logMessage(`Falhou a emissão do boleto da multa de R$ ${fine},00.`);
                    nextCancellationEvent('Após a falha na emissão do boleto, ');
                };
                onReject = () => {
                    logMessage('Você se recusou a pagar a multa.');
                    nextCancellationEvent('Como você se recusou a pagar a multa, ');
                };
                break;
            case 3:
                msg = `${context}você foi transferido para o setor de retenção. Aceitar para esperar, Rejeitar para cancelar de vez.`;
                onAccept = () => { logMessage('Você ficou aguardando o time de retenção e ninguem te atendeu..'); hideCancellationModal(); };
                onReject = () => nextCancellationEvent();
                break;
            case 4:
                msg = 'Última oferta: um pão de queijo e um café. Aceitar ou cancelar de vez?';
                onAccept = () => { logMessage('Você aceitou o pão de queijo. O pesadelo continua!'); hideCancellationModal(); };
                onAcceptSecond = () => { logMessage('Não há como rejeitar o destino. Apenas aceite.'); hideCancellationModal() };
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

    // --- Initialize --- 
    initializeGame();
});