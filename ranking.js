// Sistema de Ranking - NIunca mais internet!
class RankingSystem {
    constructor() {
        this.db = null;
        this.isFirebaseReady = false;
    }

    // Inicializar Firebase (será chamado após configuração)
    initFirebase(firebaseConfig) {
        try {
            firebase.initializeApp(firebaseConfig);
            this.db = firebase.firestore();
            this.isFirebaseReady = true;
            console.log('Firebase inicializado com sucesso!');
        } catch (error) {
            console.error('Erro ao inicializar Firebase:', error);
            this.isFirebaseReady = false;
        }
    }

    // Calcular pontuação baseada nas métricas do jogo
    calculateScore(gameData, isVictory = false) {
        const base = 1000;
        const daysPenalty = gameData.days * 5;
        const actionsPenalty = gameData.actions * 1;
        const protocolsPenalty = gameData.protocols * 8;
        
        // Bônus só são aplicados na vitória
        let patienceBonus = 0;
        let speedBonus = 0;
        let efficiencyBonus = 0;
        
        if (isVictory) {
            // Bônus de paciência na vitória
            patienceBonus = gameData.remainingPatience * 3;
            
            // Bônus de velocidade na vitória
            if (gameData.days <= 3) speedBonus = 200;
            else if (gameData.days <= 5) speedBonus = 150;
            else if (gameData.days <= 10) speedBonus = 75;
            
            // Bônus de eficiência na vitória
            if (gameData.actions <= 10) efficiencyBonus = 100;
            else if (gameData.actions <= 15) efficiencyBonus = 75;
            else if (gameData.actions <= 20) efficiencyBonus = 35;
        }

        const finalScore = Math.max(0, 
            base - daysPenalty - actionsPenalty - protocolsPenalty + 
            patienceBonus + speedBonus + efficiencyBonus
        );

        return {
            score: finalScore,
            breakdown: {
                base,
                daysPenalty: -daysPenalty,
                actionsPenalty: -actionsPenalty,
                protocolsPenalty: -protocolsPenalty,
                patienceBonus,
                speedBonus,
                efficiencyBonus
            }
        };
    }

    // Salvar pontuação no Firebase
    async saveScore(playerName, gameData) {
        if (!this.isFirebaseReady) {
            throw new Error('Firebase não está configurado');
        }

        try {
            const scoreData = this.calculateScore(gameData);
            const rankingEntry = {
                playerName: playerName.trim().substring(0, 20), // Limita nome
                score: scoreData.score,
                days: gameData.days,
                actions: gameData.actions,
                protocols: gameData.protocols,
                remainingPatience: gameData.remainingPatience,
                scoreBreakdown: scoreData.breakdown,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                gameVersion: "1.0",
                userAgent: navigator.userAgent.substring(0, 100) // Para analytics
            };

            const docRef = await this.db.collection('rankings').add(rankingEntry);
            console.log('Pontuação salva com ID:', docRef.id);
            return { success: true, id: docRef.id, score: scoreData.score };
        } catch (error) {
            console.error('Erro ao salvar pontuação:', error);
            throw error;
        }
    }

    // Buscar top rankings
    async getTopRankings(limit = 10, filter = 'all') {
        if (!this.isFirebaseReady) {
            return [];
        }

        try {
            let query = this.db.collection('rankings')
                .orderBy('score', 'desc')
                .limit(limit);

            // Aplicar filtros de tempo
            if (filter !== 'all') {
                const now = new Date();
                let startDate;
                
                if (filter === 'today') {
                    // Início do dia atual
                    startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
                } else if (filter === 'week') {
                    // 7 dias atrás
                    startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                } else if (filter === 'month') {
                    // Início do mês atual
                    startDate = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);
                }

                if (startDate) {
                    console.log(`Aplicando filtro ${filter}: desde ${startDate.toISOString()}`);
                    query = query.where('timestamp', '>=', firebase.firestore.Timestamp.fromDate(startDate));
                }
            }

            const snapshot = await query.get();
            const rankings = [];

            snapshot.forEach((doc, index) => {
                const data = doc.data();
                rankings.push({
                    id: doc.id,
                    position: index + 1,
                    ...data,
                    timestamp: data.timestamp?.toDate() || new Date()
                });
            });

            console.log(`Carregados ${rankings.length} rankings com filtro '${filter}'`);
            return rankings;
        } catch (error) {
            console.error('Erro ao buscar rankings:', error);
            return [];
        }
    }

    // Buscar estatísticas gerais
    async getGlobalStats() {
        if (!this.isFirebaseReady) {
            return null;
        }

        try {
            const snapshot = await this.db.collection('rankings').get();
            
            if (snapshot.empty) {
                return {
                    totalGames: 0,
                    averageScore: 0,
                    averageDays: 0,
                    averageActions: 0,
                    topScore: 0
                };
            }

            let totalScore = 0;
            let totalDays = 0;
            let totalActions = 0;
            let topScore = 0;
            const count = snapshot.size;

            snapshot.forEach(doc => {
                const data = doc.data();
                totalScore += data.score || 0;
                totalDays += data.days || 0;
                totalActions += data.actions || 0;
                if (data.score > topScore) topScore = data.score;
            });

            return {
                totalGames: count,
                averageScore: Math.round(totalScore / count),
                averageDays: Math.round((totalDays / count) * 10) / 10,
                averageActions: Math.round((totalActions / count) * 10) / 10,
                topScore
            };
        } catch (error) {
            console.error('Erro ao buscar estatísticas:', error);
            return null;
        }
    }

    // Verificar se o nome já existe (opcional - para evitar duplicatas)
    async checkNameExists(playerName) {
        if (!this.isFirebaseReady) return false;

        try {
            const snapshot = await this.db.collection('rankings')
                .where('playerName', '==', playerName.trim())
                .limit(1)
                .get();
            
            return !snapshot.empty;
        } catch (error) {
            console.error('Erro ao verificar nome:', error);
            return false;
        }
    }

    // Obter ranking de um jogador específico
    async getPlayerRanking(playerName) {
        if (!this.isFirebaseReady) return null;

        try {
            const snapshot = await this.db.collection('rankings')
                .where('playerName', '==', playerName.trim())
                .orderBy('score', 'desc')
                .limit(1)
                .get();

            if (snapshot.empty) return null;

            const playerData = snapshot.docs[0].data();
            
            // Buscar quantos players tem score maior
            const higherScoresSnapshot = await this.db.collection('rankings')
                .where('score', '>', playerData.score)
                .get();

            return {
                ...playerData,
                position: higherScoresSnapshot.size + 1,
                id: snapshot.docs[0].id
            };
        } catch (error) {
            console.error('Erro ao buscar ranking do jogador:', error);
            return null;
        }
    }
}

// Instância global do sistema de ranking
const rankingSystem = new RankingSystem();

// Função para configurar Firebase (será chamada quando o config estiver pronto)
function initializeRanking(firebaseConfig) {
    rankingSystem.initFirebase(firebaseConfig);
}
