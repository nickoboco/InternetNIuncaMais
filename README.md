# 🌐 NIunca mais internet!

**Um simulador de paciência realista sobre problemas de internet no Brasil**

> *"O jogo que vai te fazer questionar se realmente vale a pena ter internet"*

---

## 📋 Sobre o Jogo

**NIunca mais internet!** é um jogo de simulação que recria fielmente a experiência frustrante de tentar resolver problemas de internet com operadoras brasileiras. Teste sua paciência enquanto navega por protocolos, chamados técnicos e a burocracia infinita das telecomunicações.

### 🎯 Objetivo
Sua internet não funciona! Use as ações disponíveis para tentar resolver o problema antes que sua paciência chegue a zero. Conseguirá chegar aos 100% de resolução sem perder a sanidade?

---

## 🎮 Como Jogar

### 📊 Sistema de Jogo
- **Paciência**: Começa em 100%. Quando chega a 0, você perde
- **Progresso**: Precisa chegar a 100% para vencer
- **Probabilidade**: 50% de chance para resultados positivos/negativos
- **Eventos Aleatórios**: 5% de chance de complicar ainda mais sua vida

### 🔢 Níveis de Ação

#### **Nível 1: Abrir Chamado**
- 📞 Ligar para a operadora
- 💬 Usar WhatsApp Business
- 📱 Tentar pelo aplicativo
- 📧 Enviar e-mail (boa sorte!)
- 🤖 Chat com IA que não entende nada

#### **Nível 2: Acompanhar Chamado**
- 🔎 Pegar status do chamado
- 👨🏼‍🔧 Receber visita técnica
- ☎️ Atender ligação da operadora
- 📲 Reclamar nas redes sociais

#### **Nível 3: Escalar (Paciência < 60)**
- 📡 **ANATEL** - O órgão regulador
- 📇 **Procon** - Defesa do consumidor
- 📞 **Ouvidoria** - Última instância interna
- 📋 **Reclame Aqui** - Tribunal da internet
- 🗄 **Consumidor.gov** - Portal oficial
- ⚖️ **Ação Judicial** - Quando não há mais esperança

#### **Nível 4: Tentar a Sorte (2x por ação)**
- 🔧 Arrumar sozinho
- 📶 Pedir Wi-Fi ao vizinho
- 📱 Viralizar no TikTok
- 💼 Postar no LinkedIn
- 🕵🏻 Chamar o Celso Russomanno

### ⚖️ Sistema de Protocolos N3
- **Uso único**: Cada ação regulatória só pode ser usada uma vez
- **Prazos específicos**: Aguarde o prazo para verificar o resultado
- **Bloqueio permanente**: Ação fica indisponível após encerramento

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Design responsivo com animações suaves
- **JavaScript (ES6+)**: Lógica de jogo e gerenciamento de estado
- **LocalStorage**: Persistência de dados (se implementado)

---

## 🚀 Como Executar

### Método 1: Servidor Local
```bash
# Clone o repositório
git clone [url-do-repositorio]

# Navegue até o diretório
cd gravatela

# Abra um servidor HTTP simples
python -m http.server 8000
# ou
npx serve .

# Acesse no navegador
http://localhost:8000
```

### Método 2: Abrir Diretamente
1. Baixe todos os arquivos
2. Abra `index.html` no seu navegador
3. Comece a sofrer!

---

## 📁 Estrutura do Projeto

```
gravatela/
├── index.html          # Página principal
├── style.css           # Estilos e layout responsivo
├── script.js           # Lógica principal do jogo
├── messages.js         # Banco de mensagens e outcomes
└── README.md           # Este arquivo
```

---

## 🎨 Características Técnicas

### ✨ Interface
- **Design Responsivo**: Funciona em desktop, tablet e mobile
- **Layout de 5 Colunas**: Header otimizado com métricas importantes
- **Blocos Fixos**: Mensagens, protocolos e histórico em tamanhos consistentes
- **Feedback Visual**: Cores dinâmicas para ações positivas/negativas
- **Animações Suaves**: Transições e efeitos de hover

### 🧠 Mecânicas de Jogo
- **Sistema de Estado**: Gerenciamento completo da sessão
- **Contadores Inteligentes**: Ações, dias, protocolos rastreados
- **Lógica de Restrições**: Botões habilitados/desabilitados dinamicamente
- **Eventos Temporais**: Sistema de dias e prazos realistas

### 📱 Recursos
- **Modais Informativos**: Tutorial completo e ajuda contextual
- **Persistência de Sessão**: Estado mantido durante a partida
- **Sistema de Restart**: Recomeçar sem recarregar a página

---

## 🎯 Estratégias de Jogo

### 💡 Dicas para Sobreviver
1. **Gerencie sua paciência**: Ações negativas consomem paciência rapidamente
2. **Use N1 e N2 primeiro**: Esgote opções básicas antes de escalar
3. **Economize N3**: Use protocolos regulatórios como último recurso
4. **Aproveite N4**: Ações "DIY" podem dar sorte (2x cada)
5. **Monitore prazos**: Protocolos N3 têm deadlines específicos

### 🎲 Elementos de Sorte
- **RNG Realista**: Baseado em experiências reais dos usuários
- **Eventos Aleatórios**: Podem ajudar ou atrapalhar drasticamente
- **Milagre Cósmico**: 0.02% de chance de resolução instantânea

---

## 🏆 Condições de Vitória/Derrota

### ✅ **Vitória**
- Atingir **100% de progresso**
- Mensagem épica de congratulações
- Estatísticas finais: dias, chamados, ações

### ❌ **Derrota**
- **Paciência chegar a 0**
- Resumo da jornada de sofrimento
- Opção de "Sofrer novamente"

### 🎭 **Alternativa: Cancelar Plano**
- Sequência especial de retenção
- Múltiplas ofertas "imperdíveis"
- Final inevitável (spoiler: você não consegue cancelar)

---

## 🛡️ Recursos de Acessibilidade

- **Navegação por teclado**: Suporte completo
- **Contraste adequado**: Cores testadas para legibilidade
- **Textos descritivos**: Labels informativos em botões
- **Estrutura semântica**: HTML organizado para screen readers

---

## 🎪 Easter Eggs

- 🌟 **Milagre Cósmico**: Evento ultra-raro de resolução instantânea
- 🔄 **Eventos Aleatórios**: Situações absurdas mas realistas
- 🎭 **Sequência de Cancelamento**: Experiência "kafkiana" autêntica
- 📺 **Celso Russomanno**: Porque sempre tem alguém que sugere

---

## 🤝 Contribuindo

### 🐛 Reportar Bugs
- Abra uma issue descrevendo o problema
- Inclua passos para reproduzir
- Mencione navegador e versão

### 💡 Sugestões
- Novas mensagens realistas
- Mecânicas de jogo adicionais
- Melhorias de interface

### 🔧 Desenvolvimento
```bash
# Fork o repositório
# Crie uma branch para sua feature
git checkout -b minha-feature

# Commit suas mudanças
git commit -m "Adiciona nova mensagem de frustração"

# Push para sua branch
git push origin minha-feature

# Abra um Pull Request
```

---

## 📄 Licença

Este projeto é open-source e está disponível sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 🙏 Agradecimentos

- **Operadoras brasileiras**: Por fornecerem inspiração infinita
- **Usuários frustrados**: Pelas experiências "reais" compartilhadas
- **ANATEL**: Por existir (teoricamente)
- **Todos que já passaram por isso**: Vocês não estão sozinhos

---

## 📞 Contato

- **LinkedIn**: [Nickolas Selhorst](https://www.linkedin.com/in/nickolas-selhorst/)
- **Email**: [nickolas.selhorst@gmail.com]

---

**⚠️ Aviso**: Este jogo pode causar flashbacks de experiências reais com operadoras. Jogue com moderação e tenha um anti-stress por perto.

**🎮 Divirta-se** (se conseguir) com **NIunca mais internet!**

---

*"Um projeto que nasceu da frustração coletiva e se tornou arte digital"* ✨
