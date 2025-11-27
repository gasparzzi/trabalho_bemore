/* === CONFIGURAÇÃO SUPABASE === */
const SUPABASE_URL = 'https://lslhcoytqzeazhjdbwnp.supabase.co'; 
// Chave fornecida
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzbGhjb3l0cXplYXpoamRid25wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxNjE4NzEsImV4cCI6MjA3OTczNzg3MX0.p9gJeTQjdafLx1gq_eAMFiT8aHJmkcnubrkqJEXsVEg'; 

/* === INICIALIZAÇÃO SEGURA === */
let supabaseClient = null;
try {
    if (typeof supabase !== 'undefined') {
        supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
        console.log("Supabase cliente iniciado.");
    } else {
        console.error("ERRO CRÍTICO: Biblioteca Supabase não carregada no HTML.");
    }
} catch (e) { console.error("Erro na inicialização:", e); }

/* === FUNÇÕES UTILITÁRIAS === */
function safeSetText(id, text) {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
}

/* === BANCO DE DADOS DIDÁTICO (CONTEÚDO) === */
const DBService = {
    getPerguntas: function(aulaId) {
        // AULA 101: INTRODUÇÃO
        if (aulaId === 101) return [
            { dica: "A tela principal do Windows chama-se 'Área de Trabalho' (Desktop).", p: "Qual o nome da tela inicial do PC?", ops: ["Mesa", "Área de Trabalho", "Janela", "Bloco"], c: 1 },
            { dica: "A Barra de Tarefas fica embaixo e mostra os programas abertos.", p: "Onde fica a Barra de Tarefas?", ops: ["No topo", "Na parte inferior", "Não existe", "No meio"], c: 1 },
            { dica: "O Botão Iniciar (logo do Windows) abre o menu com todos os seus programas.", p: "Para ver todos os programas, clicamos em:", ops: ["Iniciar", "Desligar", "Ajuda", "Wi-Fi"], c: 0 },
            { dica: "Pastas (ícones amarelos) servem para guardar arquivos.", p: "Para que servem as pastas amarelas?", ops: ["Vírus", "Organizar arquivos", "Enfeite", "Sites"], c: 1 },
            { dica: "O 'X' no canto superior direito fecha a janela.", p: "Qual botão fecha a janela?", ops: ["-", "Quadrado", "X", "Bola"], c: 2 },
            { dica: "Ctrl + C serve para COPIAR.", p: "Atalho para copiar:", ops: ["Ctrl+V", "Ctrl+C", "Alt+F4", "Ctrl+Z"], c: 1 },
            { dica: "Ctrl + V serve para COLAR.", p: "Atalho para colar:", ops: ["Ctrl+V", "Ctrl+P", "Ctrl+C", "Enter"], c: 0 },
            { dica: "Arquivos apagados vão para a Lixeira.", p: "Arquivos deletados vão para:", ops: ["Nuvem", "Lixeira", "Correio", "Pen Drive"], c: 1 },
            { dica: "O botão DIREITO do mouse abre o menu de opções.", p: "Para ver opções extras, use o botão:", ops: ["Esquerdo", "Direito", "Meio", "Nenhum"], c: 1 },
            { dica: "Navegadores (Chrome, Edge) acessam a internet.", p: "O que é um Navegador?", ops: ["Acessa Internet", "Texto", "Jogo", "Vírus"], c: 0 },
            { dica: "O ícone de alto-falante controla o som.", p: "Ícone de som:", ops: ["Bateria", "Alto-falante", "Globo", "Cadeado"], c: 1 },
            { dica: "Caps Lock deixa as letras MAIÚSCULAS.", p: "Tecla para letra grande:", ops: ["Ctrl", "Alt", "Shift", "Tab"], c: 2 },
            { dica: "Alt + Tab alterna entre janelas.", p: "Alt + Tab serve para:", ops: ["Desligar", "Alternar janelas", "Menu", "Print"], c: 1 },
            { dica: "O Explorador de Arquivos gerencia suas pastas.", p: "Onde vemos nossas pastas?", ops: ["Internet", "Explorador de Arquivos", "Fotos", "Música"], c: 1 },
            { dica: "Use o menu Iniciar > Desligar para encerrar.", p: "Como desligar corretamente?", ops: ["Tomada", "Botão da tela", "Menu Iniciar", "Esperar"], c: 2 }
        ];
        // AULA 102: ÁREA DE TRABALHO
        if (aulaId === 102) return [
            { dica: "Ícones são atalhos visuais para programas.", p: "O que é um ícone?", ops: ["Vírus", "Atalho visual", "Erro", "Pasta"], c: 1 },
            { dica: "Arraste a janela pela Barra de Título (topo).", p: "Onde clicar para arrastar a janela?", ops: ["Barra de título", "Espaço", "Borda", "Lixeira"], c: 0 },
            { dica: "O botão (-) Minimiza (esconde) a janela.", p: "O botão (-) faz o quê?", ops: ["Fecha", "Minimiza", "Maximiza", "Apaga"], c: 1 },
            { dica: "Ctrl + A seleciona TUDO (All).", p: "Atalho para selecionar tudo:", ops: ["Ctrl+A", "Ctrl+C", "Alt+F4", "F5"], c: 0 },
            { dica: "Papel de Parede é o fundo da Área de Trabalho.", p: "Onde fica o papel de parede?", ops: ["Lixeira", "Área de Trabalho", "Windows", "Nuvem"], c: 1 },
            { dica: "Botão Direito > Novo > Pasta cria diretórios.", p: "Como criar pasta nova?", ops: ["Botão Direito > Novo", "Desligar", "Google", "Nada"], c: 0 },
            { dica: "PrintScreen tira foto da tela.", p: "Para que serve PrintScreen?", ops: ["Imprime", "Foto da tela", "Desligar", "Salva"], c: 1 },
            { dica: "Shift + Del apaga sem passar pela lixeira.", p: "Apagar sem ir para lixeira:", ops: ["Shift+Del", "Del", "Ctrl+X", "Alt+F4"], c: 0 },
            { dica: "O relógio fica no canto inferior direito.", p: "Onde fica o relógio?", ops: ["Canto Inferior Direito", "Menu", "Janela", "Topo"], c: 0 },
            { dica: "Duplo clique abre arquivos.", p: "Para abrir uma pasta, usamos:", ops: ["1 clique", "Duplo Clique", "Arrastar", "Renomear"], c: 1 },
            { dica: "A Lixeira guarda arquivos temporariamente.", p: "Para que serve a Lixeira?", ops: ["Recuperar apagados", "Vírus", "Limpeza", "Jogos"], c: 0 },
            { dica: "F5 atualiza a tela.", p: "Tecla para atualizar:", ops: ["F5", "F1", "F12", "Esc"], c: 0 },
            { dica: "Você pode ter vários programas abertos.", p: "Podemos abrir vários programas?", ops: ["Sim", "Não", "Só 3", "Pagar"], c: 0 },
            { dica: "A tecla Windows abre o Menu Iniciar.", p: "Botão Windows abre:", ops: ["Menu Iniciar", "Google", "Excel", "Nada"], c: 0 },
            { dica: "Alt + F4 fecha programas travados.", p: "Como fechar programa travado?", ops: ["Alt+F4", "Gritar", "Clicar", "Esperar"], c: 0 }
        ];
        return [];
    },

    getTrilhas: function() {
        return [
            {
                id: 1, titulo: "Windows Essencial", icone: "fab fa-windows", // Ícone corrigido
                aulas: [
                    {id:101, titulo:"Introdução", ordem:1}, 
                    {id:102, titulo:"Área de Trabalho", ordem:2}, 
                    {id:103, titulo:"Pastas", ordem:3}
                ]
            },
            {
                id: 2, titulo: "Internet e Web", icone: "fas fa-globe",
                aulas: [
                    {id:201, titulo:"Navegadores", ordem:1}, 
                    {id:202, titulo:"Sites e Links", ordem:2}
                ]
            }
        ];
    },

    /* === INTEGRAÇÃO COM BANCO DE DADOS === */
    getProgresso: async function(userId) {
        if (!supabaseClient) return [];
        try {
            const { data, error } = await supabaseClient
                .from('progresso_aluno')
                .select('*')
                .eq('usuario_id', userId);
            
            if(error) throw error;
            return data || [];
        } catch(e) { 
            console.warn("Falha ao buscar progresso (Online):", e.message);
            return []; 
        }
    },

    // *** CORREÇÃO PRINCIPAL DE SALVAMENTO ***
    salvarProgresso: async function(userId, aulaId, estrelas) {
        // 1. Se não tiver cliente ou for usuário falso (999), não salva no banco real
        if (!supabaseClient || userId === 999) {
            console.warn("Modo Offline: Progresso salvo apenas na memória local.");
            return;
        }

        try {
            console.log(`Tentando salvar no banco: User=${userId}, Aula=${aulaId}, Estrelas=${estrelas}`);
            
            // Usa UPSERT: Se existir (userId+aulaId), atualiza. Se não, cria.
            // Requer que você tenha criado a constraint UNIQUE no banco (passo SQL anterior).
            const { error } = await supabaseClient
                .from('progresso_aluno')
                .upsert(
                    { usuario_id: userId, aula_id: aulaId, status: 'concluida', estrelas: estrelas },
                    { onConflict: 'usuario_id, aula_id' }
                );

            if(error) {
                console.error("ERRO AO SALVAR NO BANCO:", error);
                alert("Aviso: Não foi possível sincronizar com o servidor. Verifique o console.");
            } else {
                console.log("Progresso sincronizado com sucesso!");
            }
        } catch(e) { console.error("Exceção crítica ao salvar:", e); }
    },

    atualizarUsuario: async function(uid, dados) {
        if(!supabaseClient) return {error: "Offline"};
        return await supabaseClient.from('usuarios').update(dados).eq('id', uid);
    }
};

/* === CONTROLE DO APP === */
const app = {
    user: null,
    vidas: 15,
    progressoLocal: [], // Armazena o estado atual da sessão
    
    // Navegação entre telas e controle da barra inferior
    navegar: function(screenId) {
        // 1. Esconde todas as telas
        document.querySelectorAll('.screen').forEach(s => { 
            s.classList.remove('active'); 
            s.style.display = 'none'; 
        });
        
        // 2. Mostra a tela desejada
        const target = document.getElementById(screenId);
        if(target) { 
            target.style.display = 'flex'; 
            setTimeout(() => target.classList.add('active'), 10); 
        }
        
        // 3. Controla a Barra de Navegação (Fixo no Mobile)
        const nav = document.getElementById('bottomNav');
        if(nav) {
            if(['homeScreen', 'rankingScreen', 'configScreen'].includes(screenId)) {
                nav.style.display = 'flex'; // Mostra a barra
                this.updateNavIcon(screenId);
            } else { 
                nav.style.display = 'none'; // Esconde a barra (Login, Aula)
            }
        }
    },

    updateNavIcon: function(screenId) {
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        if(screenId === 'homeScreen') document.querySelector('.nav-item:nth-child(1)').classList.add('active');
        if(screenId === 'rankingScreen') document.querySelector('.nav-item:nth-child(2)').classList.add('active');
        if(screenId === 'configScreen') document.querySelector('.nav-item:nth-child(3)').classList.add('active');
    },

    toggleAuth: function(tela) {
        const nav = document.getElementById('bottomNav');
        if(nav) nav.style.display = 'none'; // Garante que a barra suma
        document.querySelectorAll('.screen').forEach(s => { s.classList.remove('active'); s.style.display = 'none'; });
        const t = document.getElementById(tela === 'login' ? 'loginScreen' : 'cadastroScreen');
        if(t) { t.style.display = 'flex'; setTimeout(() => t.classList.add('active'), 10); }
    },

    /* --- LOGIN --- */
    login: async function() {
        const email = document.getElementById('loginEmail').value;
        const senha = document.getElementById('loginPass').value;
        const btn = document.querySelector('#loginScreen .btn-primary');

        if(!email || !senha) return alert("Preencha tudo.");
        if(btn) btn.innerText = "Conectando...";

        try {
            if(!supabaseClient) throw new Error("Cliente Offline");
            
            const { data, error } = await supabaseClient
                .from('usuarios')
                .select('*')
                .eq('email', email)
                .eq('senha_hash', senha)
                .single();
            
            if(error || !data) {
                alert("Login incorreto (ou usuário não existe).");
                if(btn) btn.innerText = "Entrar";
            } else {
                this.user = data;
                this.carregarDadosEdicao();
                
                // Busca progresso salvo
                this.progressoLocal = await DBService.getProgresso(this.user.id);
                
                this.loadHome();
                if(btn) btn.innerText = "Entrar";
            }
        } catch(e) {
            console.warn("Entrando em modo offline/teste devido a erro:", e);
            // Fallback para teste
            this.user = { id: 999, nome: "Visitante", email: email };
            this.carregarDadosEdicao();
            this.loadHome();
            if(btn) btn.innerText = "Entrar";
        }
    },

    registrar: async function() {
        const nome = document.getElementById('regNome').value;
        const email = document.getElementById('regEmail').value;
        const senha = document.getElementById('regPass').value;
        if(!nome || !email || !senha) return alert("Preencha tudo");
        
        try {
            const { error } = await supabaseClient.from('usuarios').insert([{ nome, email, senha_hash: senha }]);
            if(error) alert("Erro: " + error.message);
            else { alert("Sucesso! Faça login."); this.toggleAuth('login'); }
        } catch(e) { alert("Erro ao cadastrar."); }
    },

    logout: function() { location.reload(); },

    /* --- PERFIL --- */
    carregarDadosEdicao: function() {
        if(!this.user) return;
        const inNome = document.getElementById('editNome');
        const inEmail = document.getElementById('editEmail');
        if(inNome) inNome.value = this.user.nome;
        if(inEmail) inEmail.value = this.user.email;
    },

    atualizarPerfil: async function() {
        if(this.user.id === 999) return alert("Modo visitante não salva perfil.");
        
        const nome = document.getElementById('editNome').value;
        const email = document.getElementById('editEmail').value;
        const senha = document.getElementById('editSenha').value;
        const btn = document.querySelector('#configScreen .btn-primary');
        
        if(btn) btn.innerText = "Salvando...";
        const up = { nome, email };
        if(senha) up.senha_hash = senha;

        const { error } = await DBService.atualizarUsuario(this.user.id, up);
        if(btn) btn.innerText = "Salvar";

        if(error) alert("Erro."); 
        else {
            alert("Atualizado!");
            this.user.nome = nome; this.user.email = email;
            this.carregarDadosEdicao();
        }
    },

    toggleTheme: function() {
        const chk = document.getElementById('themeSwitch');
        if(chk && !chk.checked) document.body.classList.add('light-theme');
        else document.body.classList.remove('light-theme');
    },

    /* --- HOME: LÓGICA DE TRILHAS E BLOQUEIOS --- */
    loadHome: function() {
        // 1. Atualiza Ofensiva (Fogo)
        const fogo = this.progressoLocal.length > 0 ? 1 : 0;
        safeSetText('userXP', fogo);

        // 2. Renderiza Trilhas
        const container = document.getElementById('trilhasContainer');
        if(!container) return;
        container.innerHTML = '';
        
        const trilhas = DBService.getTrilhas();

        trilhas.forEach(trilha => {
            const div = document.createElement('div');
            div.innerHTML = `<div class="trilha-title"><i class="${trilha.icone}"></i> ${trilha.titulo}</div>`;
            const path = document.createElement('div');
            path.className = 'path-container';
            div.appendChild(path);
            container.appendChild(div);

            // Lógica de Bloqueio de Módulo (Internet bloqueada se Windows não acabou)
            let trilhaBloqueada = false;
            if (trilha.id === 2) {
                const acabouWindows = this.progressoLocal.some(p => p.aula_id === 103);
                if (!acabouWindows) trilhaBloqueada = true;
            }

            trilha.aulas.forEach((aula, idx) => {
                let status = 'locked', stars = '';
                const prog = this.progressoLocal.find(p => p.aula_id === aula.id);
                
                if(prog) { 
                    status = 'completed'; 
                    const q = prog.estrelas || 3; 
                    stars = '★'.repeat(q) + '☆'.repeat(3-q); 
                } else {
                    if (!trilhaBloqueada) {
                        // 1ª aula libera se a trilha estiver ok
                        if(idx === 0) { 
                            status = 'unlocked'; stars = '☆☆☆'; 
                        } else {
                            // Outras dependem da anterior
                            const ant = trilha.aulas[idx-1];
                            if(this.progressoLocal.some(p => p.aula_id === ant.id)) { 
                                status = 'unlocked'; stars = '☆☆☆'; 
                            }
                        }
                    }
                }

                const node = document.createElement('div');
                node.className = `aula-node ${status}`;
                node.innerHTML = `<div class="node-stars"><span class="star active">${stars}</span></div>
                                  <i class="fas ${status === 'completed' ? 'fa-check' : (status === 'locked' ? 'fa-lock' : 'fa-play')}"></i>
                                  <div class="node-label">${aula.titulo}</div>`;
                
                if(status !== 'locked') node.onclick = () => this.iniciarAula(aula.id, aula.titulo);
                path.appendChild(node);
            });
        });
        
        this.navegar('homeScreen');
    },

    /* --- QUIZ & SISTEMA DE DICAS --- */
    quizData: [], qIndex: 0, qAcertos: 0, aulaId: 0, vidas: 15,

    iniciarAula: function(id, titulo) {
        const dados = DBService.getPerguntas(id);
        if(!dados.length) return alert("Conteúdo em breve!");
        
        this.quizData = dados;
        this.qIndex = 0; this.qAcertos = 0; this.vidas = 15; this.aulaId = id;
        
        safeSetText('aulaTituloDisplay', titulo);
        
        // Reseta interface da dica
        document.getElementById('teachingArea').style.display = 'none';
        document.getElementById('btnDica').style.display = 'inline-flex';

        this.navegar('aulaScreen');
        this.renderQuestao();
    },

    mostrarDica: function() {
        document.getElementById('teachingArea').style.display = 'block';
        document.getElementById('btnDica').style.display = 'none';
    },

    renderQuestao: function() {
        const q = this.quizData[this.qIndex];
        
        // Prepara a dica (mas deixa escondida)
        document.getElementById('teachingText').innerText = q.dica || "Sem dica disponível.";
        document.getElementById('teachingArea').style.display = 'none';
        document.getElementById('btnDica').style.display = 'inline-flex';

        safeSetText('perguntaTexto', q.p);
        safeSetText('displayVidas', this.vidas);
        
        // Barra de Progresso
        const bar = document.getElementById('progressBar');
        if(bar) bar.style.width = `${(this.qIndex / this.quizData.length) * 100}%`;

        const div = document.getElementById('opcoesContainer');
        if(div) {
            div.innerHTML = '';
            q.ops.forEach((op, i) => {
                const b = document.createElement('button');
                b.className = 'option-btn'; b.innerText = op;
                b.onclick = () => this.check(i, q.c);
                div.appendChild(b);
            });
        }
    },

    check: function(i, c) {
        const modal = document.getElementById('feedbackModal');
        const img = document.getElementById('mascoteFeedback');
        if(modal) modal.style.display = 'flex';
        
        if(i === c) {
            this.qAcertos++;
            safeSetText('feedbackTitle', 'Correto!');
            safeSetText('feedbackMsg', 'Mandou bem.');
            if(img) img.src = "img/mascote_feliz.png";
        } else {
            this.vidas--;
            safeSetText('feedbackTitle', 'Ops!');
            safeSetText('feedbackMsg', 'Resposta incorreta.');
            if(img) img.src = "img/mascote_triste.png";
        }
    },

    proximaPergunta: async function() {
        document.getElementById('feedbackModal').style.display = 'none';

        if(this.vidas <= 0) { alert("Game Over! Recomeçando..."); return this.loadHome(); }

        this.qIndex++;
        if(this.qIndex < this.quizData.length) {
            this.renderQuestao();
        } else {
            // FIM DA AULA
            const pct = this.qAcertos / this.quizData.length;
            let est = 1;
            if(pct === 1) est = 3; else if(pct > 0.7) est = 2;

            alert(`Aula Concluída! Estrelas: ${est}`);
            
            // 1. Atualiza Localmente (Feedback Imediato)
            this.progressoLocal = this.progressoLocal.filter(p => p.aula_id !== this.aulaId);
            this.progressoLocal.push({ usuario_id: this.user.id, aula_id: this.aulaId, status: 'concluida', estrelas: est });
            
            this.loadHome(); // Volta para Home com status novo
            
            // 2. Salva no Banco (Segundo Plano)
            await DBService.salvarProgresso(this.user.id, this.aulaId, est);
        }
    },
    
    voltarParaHome: function() { this.loadHome(); }
};

// Inicializa
window.onload = function() {
    // Recupera tema salvo
    if(localStorage.getItem('tema') === 'light') {
        document.body.classList.add('light-theme');
        const sw = document.getElementById('themeSwitch');
        if(sw) sw.checked = false;
    }
    console.log("App carregado.");
};