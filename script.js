/* === CONFIGURAÇÃO SUPABASE === */
const SUPABASE_URL = 'https://lslhcoytqzeazhjdbwnp.supabase.co'; 
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzbGhjb3l0cXplYXpoamRid25wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxNjE4NzEsImV4cCI6MjA3OTczNzg3MX0.p9gJeTQjdafLx1gq_eAMFiT8aHJmkcnubrkqJEXsVEg'; 

/* === INICIALIZAÇÃO === */
let supabaseClient = null;
try {
    if (typeof supabase !== 'undefined') {
        supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    }
} catch (e) { console.error("Erro init"); }

function safeSetText(id, text) {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
}

/* === DADOS DIDÁTICOS === */
const DBService = {
    getPerguntas: function(aulaId) {
        // AULA 101: INTRODUÇÃO
        if (aulaId === 101) return [
            { dica: "A tela principal do Windows chama-se 'Área de Trabalho' (Desktop). É onde seus ícones ficam.", p: "Qual o nome da tela inicial do PC?", ops: ["Mesa", "Área de Trabalho", "Janela", "Bloco"], c: 1 },
            { dica: "A Barra de Tarefas fica embaixo e mostra os programas abertos.", p: "Onde fica a Barra de Tarefas?", ops: ["No topo", "Na parte inferior", "Não existe", "No meio"], c: 1 },
            { dica: "O Botão Iniciar (logo do Windows) abre o menu com todos os seus programas.", p: "Para ver todos os programas, clicamos em:", ops: ["Iniciar", "Desligar", "Ajuda", "Wi-Fi"], c: 0 },
            { dica: "Pastas (ícones amarelos) servem para guardar e organizar seus arquivos.", p: "Para que servem as pastas amarelas?", ops: ["Vírus", "Organizar arquivos", "Enfeite", "Sites"], c: 1 },
            { dica: "Para fechar uma janela, clique no X no canto superior direito.", p: "Qual botão fecha a janela?", ops: ["-", "Quadrado", "X", "Bola"], c: 2 },
            { dica: "Ctrl + C serve para COPIAR um arquivo ou texto.", p: "Atalho para copiar:", ops: ["Ctrl+V", "Ctrl+C", "Alt+F4", "Ctrl+Z"], c: 1 },
            { dica: "Ctrl + V serve para COLAR o que você copiou.", p: "Atalho para colar:", ops: ["Ctrl+V", "Ctrl+P", "Ctrl+C", "Enter"], c: 0 },
            { dica: "Arquivos apagados vão para a Lixeira antes de sumirem de vez.", p: "Arquivos deletados vão para:", ops: ["Nuvem", "Lixeira", "Correio", "Pen Drive"], c: 1 },
            { dica: "Use o botão DIREITO do mouse para ver opções como Renomear.", p: "Para ver opções extras, use o botão:", ops: ["Esquerdo", "Direito", "Meio", "Nenhum"], c: 1 },
            { dica: "Navegadores (Chrome, Edge) são programas para acessar a internet.", p: "O que é um Navegador?", ops: ["Acessa Internet", "Texto", "Jogo", "Vírus"], c: 0 },
            { dica: "O ícone de alto-falante perto do relógio controla o volume.", p: "Ícone de som:", ops: ["Bateria", "Alto-falante", "Globo", "Cadeado"], c: 1 },
            { dica: "Caps Lock ou Shift deixam as letras MAIÚSCULAS.", p: "Tecla para letra grande:", ops: ["Ctrl", "Alt", "Shift", "Tab"], c: 2 },
            { dica: "Alt + Tab alterna entre as janelas abertas.", p: "Alt + Tab serve para:", ops: ["Desligar", "Alternar janelas", "Menu", "Print"], c: 1 },
            { dica: "O Explorador de Arquivos é onde você gerencia suas pastas.", p: "Onde vemos nossas pastas?", ops: ["Internet", "Explorador de Arquivos", "Fotos", "Música"], c: 1 },
            { dica: "Nunca desligue direto da tomada. Use o menu Iniciar > Desligar.", p: "Como desligar corretamente?", ops: ["Tomada", "Botão da tela", "Menu Iniciar", "Esperar"], c: 2 }
        ];
        // AULA 102: ÁREA DE TRABALHO
        if (aulaId === 102) return [
            { dica: "Ícones são atalhos visuais para abrir programas rapidamente.", p: "O que é um ícone?", ops: ["Vírus", "Atalho visual", "Erro", "Pasta"], c: 1 },
            { dica: "Para mover uma janela, clique e arraste pela Barra de Título (topo).", p: "Onde clicar para arrastar a janela?", ops: ["Barra de título", "Espaço", "Borda", "Lixeira"], c: 0 },
            { dica: "O botão de traço (-) serve para Minimizar (esconder na barra).", p: "O botão (-) faz o quê?", ops: ["Fecha", "Minimiza", "Maximiza", "Apaga"], c: 1 },
            { dica: "Para selecionar tudo numa pasta, use o atalho Ctrl + A.", p: "Atalho para selecionar tudo:", ops: ["Ctrl+A", "Ctrl+C", "Alt+F4", "F5"], c: 0 },
            { dica: "O Papel de Parede é a imagem de fundo da sua Área de Trabalho.", p: "Onde fica o papel de parede?", ops: ["Lixeira", "Área de Trabalho", "Windows", "Nuvem"], c: 1 },
            { dica: "Para criar uma pasta nova: Botão Direito > Novo > Pasta.", p: "Como criar pasta nova?", ops: ["Botão Direito > Novo", "Desligar", "Google", "Nada"], c: 0 },
            { dica: "A tecla PrintScreen tira uma 'foto' (captura) da sua tela.", p: "Para que serve PrintScreen?", ops: ["Imprime", "Foto da tela", "Desligar", "Salva"], c: 1 },
            { dica: "Shift + Delete apaga um arquivo PERMANENTEMENTE (sem lixeira).", p: "Apagar sem ir para lixeira:", ops: ["Shift+Del", "Del", "Ctrl+X", "Alt+F4"], c: 0 },
            { dica: "O relógio do Windows geralmente fica no canto inferior direito.", p: "Onde fica o relógio?", ops: ["Canto Inferior Direito", "Menu", "Janela", "Topo"], c: 0 },
            { dica: "Um Duplo Clique (2x) serve para abrir arquivos e pastas.", p: "Para abrir uma pasta, usamos:", ops: ["1 clique", "Duplo Clique", "Arrastar", "Renomear"], c: 1 },
            { dica: "A Lixeira guarda arquivos apagados caso você queira recuperar.", p: "Para que serve a Lixeira?", ops: ["Recuperar apagados", "Vírus", "Limpeza", "Jogos"], c: 0 },
            { dica: "A tecla F5 atualiza a página ou a pasta.", p: "Tecla para atualizar:", ops: ["F5", "F1", "F12", "Esc"], c: 0 },
            { dica: "Você pode ter várias janelas e programas abertos ao mesmo tempo.", p: "Podemos abrir vários programas?", ops: ["Sim", "Não", "Só 3", "Pagar"], c: 0 },
            { dica: "A tecla com o logo do Windows abre o Menu Iniciar.", p: "Botão Windows abre:", ops: ["Menu Iniciar", "Google", "Excel", "Nada"], c: 0 },
            { dica: "Se um programa travar, use Alt + F4 para forçar o fechamento.", p: "Como fechar programa travado?", ops: ["Alt+F4", "Gritar", "Clicar", "Esperar"], c: 0 }
        ];
        return [];
    },

    getTrilhas: function() {
        return [
            {
                id: 1, 
                titulo: "Windows Essencial", 
                icone: "fab fa-windows", // <--- CORREÇÃO AQUI (fab para marcas)
                aulas: [
                    {id:101, titulo:"Introdução", ordem:1}, 
                    {id:102, titulo:"Área de Trabalho", ordem:2}, 
                    {id:103, titulo:"Pastas", ordem:3}
                ]
            },
            {
                id: 2, 
                titulo: "Internet e Web", 
                icone: "fas fa-globe", // <--- CORREÇÃO AQUI (fas para solidos)
                aulas: [
                    {id:201, titulo:"Navegadores", ordem:1}, 
                    {id:202, titulo:"Sites e Links", ordem:2}
                ]
            }
        ];
    },

    getProgresso: async function(userId) {
        if (!supabaseClient) return [];
        const { data } = await supabaseClient.from('progresso_aluno').select('*').eq('usuario_id', userId);
        return data || [];
    },

    salvarProgresso: async function(userId, aulaId, estrelas) {
        if (!supabaseClient) return;
        try {
            const { error } = await supabaseClient
                .from('progresso_aluno')
                .upsert(
                    { usuario_id: userId, aula_id: aulaId, status: 'concluida', estrelas: estrelas },
                    { onConflict: 'usuario_id, aula_id' }
                );
            if(error) console.error("Erro ao salvar:", error);
        } catch(e) { console.error("Exceção:", e); }
    },

    atualizarUsuario: async function(uid, dados) {
        if(!supabaseClient) return {error: "Offline"};
        return await supabaseClient.from('usuarios').update(dados).eq('id', uid);
    }
};

/* === APP CONTROLLER === */
const app = {
    user: null,
    vidas: 15,
    progressoLocal: [],
    
    navegar: function(screenId) {
        document.querySelectorAll('.screen').forEach(s => { s.classList.remove('active'); s.style.display = 'none'; });
        const target = document.getElementById(screenId);
        if(target) { target.style.display = 'flex'; setTimeout(() => target.classList.add('active'), 10); }
        
        const nav = document.getElementById('bottomNav');
        if(nav) {
            if(['homeScreen', 'rankingScreen', 'configScreen'].includes(screenId)) {
                nav.style.display = 'flex';
                this.updateNavIcon(screenId);
            } else { nav.style.display = 'none'; }
        }
    },

    updateNavIcon: function(screenId) {
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        if(screenId === 'homeScreen') document.querySelector('.nav-item:nth-child(1)').classList.add('active');
        if(screenId === 'rankingScreen') document.querySelector('.nav-item:nth-child(2)').classList.add('active');
        if(screenId === 'configScreen') document.querySelector('.nav-item:nth-child(3)').classList.add('active');
    },

    toggleAuth: function(tela) {
        document.querySelectorAll('.screen').forEach(s => { s.classList.remove('active'); s.style.display = 'none'; });
        const t = document.getElementById(tela === 'login' ? 'loginScreen' : 'cadastroScreen');
        if(t) { t.style.display = 'flex'; setTimeout(() => t.classList.add('active'), 10); }
        const nav = document.getElementById('bottomNav');
        if(nav) nav.style.display = 'none';
    },

    login: async function() {
        const email = document.getElementById('loginEmail').value;
        const senha = document.getElementById('loginPass').value;
        const btn = document.querySelector('#loginScreen .btn-primary');

        if(!email || !senha) return alert("Preencha tudo.");
        if(btn) btn.innerText = "Entrando...";

        try {
            if(!supabaseClient) throw new Error("Offline");
            const { data, error } = await supabaseClient.from('usuarios').select('*').eq('email', email).eq('senha_hash', senha).single();
            
            if(error || !data) {
                alert("Login incorreto.");
                if(btn) btn.innerText = "Entrar";
            } else {
                this.user = data;
                this.carregarDadosEdicao();
                this.progressoLocal = await DBService.getProgresso(this.user.id);
                this.loadHome();
                if(btn) btn.innerText = "Entrar";
            }
        } catch(e) {
            alert("Erro de conexão.");
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
        } catch(e) { alert("Erro cadastro."); }
    },

    logout: function() { location.reload(); },

    carregarDadosEdicao: function() {
        if(!this.user) return;
        const inNome = document.getElementById('editNome');
        const inEmail = document.getElementById('editEmail');
        if(inNome) inNome.value = this.user.nome;
        if(inEmail) inEmail.value = this.user.email;
    },

    atualizarPerfil: async function() {
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

    loadHome: function() {
        const fogo = this.progressoLocal.length > 0 ? 1 : 0;
        safeSetText('userXP', fogo);

        const container = document.getElementById('trilhasContainer');
        if(!container) return;
        container.innerHTML = '';
        
        const trilhas = DBService.getTrilhas();

        trilhas.forEach(trilha => {
            const div = document.createElement('div');
            // CORREÇÃO AQUI: Removido o 'fas' fixo para usar o ícone correto do objeto
            div.innerHTML = `<div class="trilha-title"><i class="${trilha.icone}"></i> ${trilha.titulo}</div>`;
            
            const path = document.createElement('div');
            path.className = 'path-container';
            div.appendChild(path);
            container.appendChild(div);

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
                        if(idx === 0) { 
                            status = 'unlocked'; stars = '☆☆☆'; 
                        } else {
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

    /* QUIZ & DICA */
    quizData: [], qIndex: 0, qAcertos: 0, aulaId: 0, vidas: 15,

    iniciarAula: function(id, titulo) {
        const dados = DBService.getPerguntas(id);
        if(!dados.length) return alert("Em breve!");
        
        this.quizData = dados;
        this.qIndex = 0; this.qAcertos = 0; this.vidas = 15; this.aulaId = id;
        
        safeSetText('aulaTituloDisplay', titulo);
        
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
        
        document.getElementById('teachingText').innerText = q.dica || "Sem dica disponível.";
        document.getElementById('teachingArea').style.display = 'none';
        document.getElementById('btnDica').style.display = 'inline-flex';

        safeSetText('perguntaTexto', q.p);
        safeSetText('displayVidas', this.vidas);
        
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
            safeSetText('feedbackMsg', 'Continue assim.');
            if(img) img.src = "img/mascote_feliz.png";
        } else {
            this.vidas--;
            safeSetText('feedbackTitle', 'Errado!');
            safeSetText('feedbackMsg', 'A resposta correta era outra.');
            if(img) img.src = "img/mascote_triste.png";
        }
    },

    proximaPergunta: async function() {
        document.getElementById('feedbackModal').style.display = 'none';

        if(this.vidas <= 0) { alert("Game Over"); return this.loadHome(); }

        this.qIndex++;
        if(this.qIndex < this.quizData.length) {
            this.renderQuestao();
        } else {
            const pct = this.qAcertos / this.quizData.length;
            let est = 1;
            if(pct === 1) est = 3; else if(pct > 0.7) est = 2;

            alert(`Concluído! Estrelas: ${est}`);
            
            this.progressoLocal = this.progressoLocal.filter(p => p.aula_id !== this.aulaId);
            this.progressoLocal.push({ usuario_id: this.user.id, aula_id: this.aulaId, status: 'concluida', estrelas: est });
            
            this.loadHome(); 
            await DBService.salvarProgresso(this.user.id, this.aulaId, est);
        }
    },
    
    voltarParaHome: function() { this.loadHome(); }
};