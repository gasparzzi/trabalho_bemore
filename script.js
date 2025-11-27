/* === CONFIGURAÇÃO SUPABASE === */
const SUPABASE_URL = 'https://lslhcoytqzeazhjdbwnp.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzbGhjb3l0cXplYXpoamRid25wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxNjE4NzEsImV4cCI6MjA3OTczNzg3MX0.p9gJeTQjdafLx1gq_eAMFiT8aHJmkcnubrkqJEXsVEg';

/* === INICIALIZAÇÃO SEGURA === */
let supabaseClient = null;
try {
    if (typeof supabase !== 'undefined') {
        supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    } else {
        console.error("Biblioteca Supabase não carregada no HTML.");
    }
} catch (e) { console.error("Erro init:", e); }

/* === FUNÇÃO AUXILIAR PARA EVITAR ERROS NULL === */
function safeSetText(id, text) {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
}

/* === DADOS === */
const DBService = {
    getPerguntas: function(aulaId) {
        if (aulaId === 101) return [
            { p: "Qual a área principal ao ligar o PC?", ops: ["Mesa", "Área de Trabalho", "Janela", "Bloco Notas"], c: 1 },
            { p: "Para que serve a Barra de Tarefas?", ops: ["Enfeite", "Mostrar programas abertos", "Desligar", "Escrever"], c: 1 },
            { p: "Botão do menu principal do Windows?", ops: ["Iniciar", "Desligar", "Ajuda", "Wi-Fi"], c: 0 },
            { p: "Tecla que fecha janelas (Esc)?", ops: ["Enter", "Space", "Esc", "Shift"], c: 2 },
            { p: "Nome das 'pastas' amarelas?", ops: ["Arquivos", "Diretórios", "Imagens", "Sites"], c: 1 },
            { p: "Clicar no 'X' da janela faz o quê?", ops: ["Minimiza", "Maximiza", "Fecha", "Salva"], c: 2 },
            { p: "Atalho copiar:", ops: ["Ctrl+V", "Ctrl+C", "Alt+F4", "Ctrl+Z"], c: 1 },
            { p: "Atalho colar:", ops: ["Ctrl+V", "Ctrl+P", "Ctrl+C", "Enter"], c: 0 },
            { p: "Arquivos deletados vão para:", ops: ["Nuvem", "Lixeira", "Correio", "Pen Drive"], c: 1 },
            { p: "Renomear usa qual botão do mouse?", ops: ["Esquerdo", "Direito", "Meio", "Nenhum"], c: 1 },
            { p: "O que é um Navegador?", ops: ["Acessa Internet", "Texto", "Jogo", "Vírus"], c: 0 },
            { p: "Ícone de som parece:", ops: ["Bateria", "Alto-falante", "Globo", "Cadeado"], c: 1 },
            { p: "Tecla para maiúscula:", ops: ["Ctrl", "Alt", "Shift", "Tab"], c: 2 },
            { p: "Alt + Tab faz o quê?", ops: ["Desliga", "Alterna janelas", "Menu", "Print"], c: 1 },
            { p: "Explorador de Arquivos gerencia:", ops: ["Internet", "Pastas/Arquivos", "Fotos", "Música"], c: 1 }
        ];
        if (aulaId === 102) return [
            { p: "O que é um ícone?", ops: ["Vírus", "Atalho visual", "Erro", "Pasta"], c: 1 },
            { p: "Arrastar janela pela:", ops: ["Barra de título", "Espaço", "Borda", "Lixeira"], c: 0 },
            { p: "Botão traço (-) faz:", ops: ["Fechar", "Minimizar", "Maximizar", "Apagar"], c: 1 },
            { p: "Selecionar tudo:", ops: ["Ctrl+A", "Ctrl+C", "Alt+F4", "F5"], c: 0 },
            { p: "Papel de parede fica na:", ops: ["Lixeira", "Área de Trabalho", "Windows", "Nuvem"], c: 1 },
            { p: "Botão direito na Área serve para:", ops: ["Personalizar/Novo", "Desligar", "Google", "Nada"], c: 0 },
            { p: "PrintScreen faz:", ops: ["Imprime", "Foto da tela", "Desliga", "Salva"], c: 1 },
            { p: "Apagar sem lixeira:", ops: ["Shift+Del", "Del", "Ctrl+X", "Alt+F4"], c: 0 },
            { p: "Onde fica o relógio?", ops: ["Barra Tarefas", "Menu", "Janela", "Topo"], c: 0 },
            { p: "Clique duplo:", ops: ["Abre", "Seleciona", "Apaga", "Renomeia"], c: 0 },
            { p: "Lixeira é:", ops: ["Pasta excluídos", "Vírus", "Limpeza", "Jogos"], c: 0 },
            { p: "Atualizar tela:", ops: ["F5", "F1", "F12", "Esc"], c: 0 },
            { p: "Várias janelas abertas?", ops: ["Sim", "Não", "Só 3", "Pagar"], c: 0 },
            { p: "Botão Windows abre:", ops: ["Menu Iniciar", "Google", "Excel", "Nada"], c: 0 },
            { p: "Fechar programa travado:", ops: ["Alt+F4/Gerenciador", "Gritar", "Clicar", "Esperar"], c: 0 }
        ];
        return [];
    },

    getTrilhas: function() {
        return [
            { id: 1, titulo: "Windows Essencial", icone: "fa-windows", aulas: [{id:101, titulo:"Introdução", ordem:1}, {id:102, titulo:"Área de Trabalho", ordem:2}, {id:103, titulo:"Pastas", ordem:3}] },
            { id: 2, titulo: "Internet", icone: "fa-globe", aulas: Array.from({length:5},(_,i)=>({id:200+i, titulo:`Web ${i+1}`, ordem:i+1})) }
        ];
    },

    getProgresso: async function(userId) {
        if (!supabaseClient) return [];
        const { data } = await supabaseClient.from('progresso_aluno').select('*').eq('usuario_id', userId);
        return data || [];
    },

    salvarProgresso: async function(userId, aulaId, estrelas) {
        if (!supabaseClient) return;
        await supabaseClient.from('progresso_aluno').delete().match({ usuario_id: userId, aula_id: aulaId });
        await supabaseClient.from('progresso_aluno').insert([{ usuario_id: userId, aula_id: aulaId, status: 'concluida', estrelas: estrelas }]);
    },

    atualizarUsuario: async function(uid, dados) {
        if(!supabaseClient) return {error: "Offline"};
        return await supabaseClient.from('usuarios').update(dados).eq('id', uid);
    }
};

/* === APP === */
const app = {
    user: null,
    vidas: 15,
    progressoLocal: [],
    
    navegar: function(screenId) {
        document.querySelectorAll('.screen').forEach(s => { s.classList.remove('active'); s.style.display = 'none'; });
        const target = document.getElementById(screenId);
        if(target) {
            target.style.display = 'flex';
            setTimeout(() => target.classList.add('active'), 10);
        }
        const nav = document.getElementById('bottomNav');
        if(nav) {
            if(['homeScreen', 'rankingScreen', 'configScreen'].includes(screenId)) {
                nav.style.display = 'flex';
                document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
                // Lógica simples de active no nav
                if(screenId === 'homeScreen') document.querySelector('.nav-item:nth-child(1)').classList.add('active');
                if(screenId === 'rankingScreen') document.querySelector('.nav-item:nth-child(2)').classList.add('active');
                if(screenId === 'configScreen') document.querySelector('.nav-item:nth-child(3)').classList.add('active');
            } else {
                nav.style.display = 'none';
            }
        }
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
            if(!supabaseClient) throw new Error("Supabase offline");
            
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
            alert("Erro de conexão (tente novamente).");
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

    carregarDadosEdicao: function() {
        if(!this.user) return;
        // Proteção contra NULL aqui
        const inNome = document.getElementById('editNome');
        const inEmail = document.getElementById('editEmail');
        if(inNome) inNome.value = this.user.nome;
        if(inEmail) inEmail.value = this.user.email;
        
        safeSetText('configUserName', this.user.nome);
        safeSetText('configUserEmail', this.user.email);
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
        if(btn) btn.innerText = "Salvar Alterações";

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
        // Calcula XP
        let pts = 0;
        this.progressoLocal.forEach(p => pts += (p.estrelas || 1));
        safeSetText('userXP', pts);

        const container = document.getElementById('trilhasContainer');
        if(!container) return;
        container.innerHTML = '';
        
        DBService.getTrilhas().forEach(trilha => {
            const div = document.createElement('div');
            div.innerHTML = `<div class="trilha-title"><i class="fas ${trilha.icone}"></i> ${trilha.titulo}</div>`;
            const path = document.createElement('div');
            path.className = 'path-container';
            div.appendChild(path);
            container.appendChild(div);

            trilha.aulas.forEach((aula, idx) => {
                let status = 'locked', stars = '';
                const prog = this.progressoLocal.find(p => p.aula_id === aula.id);
                
                if(prog) { 
                    status = 'completed'; 
                    const q = prog.estrelas || 3; 
                    stars = '★'.repeat(q) + '☆'.repeat(3-q); 
                } else {
                    // Libera 101 sempre, e outras se a anterior foi feita
                    if(idx === 0) { status = 'unlocked'; stars = '☆☆☆'; }
                    else {
                        const ant = trilha.aulas[idx-1];
                        if(this.progressoLocal.some(p => p.aula_id === ant.id)) { status = 'unlocked'; stars = '☆☆☆'; }
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

    /* QUIZ */
    quizData: [], qIndex: 0, qAcertos: 0, aulaId: 0,

    iniciarAula: function(id, titulo) {
        const dados = DBService.getPerguntas(id);
        if(!dados.length) return alert("Em breve!");
        
        this.quizData = dados;
        this.qIndex = 0; this.qAcertos = 0; this.vidas = 15; this.aulaId = id;
        
        safeSetText('aulaTituloDisplay', titulo);
        const imgCont = document.getElementById('imgPerguntaContainer');
        if(imgCont) imgCont.style.display = 'none';
        
        this.navegar('aulaScreen');
        this.renderQuestao();
    },

    renderQuestao: function() {
        const q = this.quizData[this.qIndex];
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
            safeSetText('feedbackTitle', 'Mandou bem!');
            safeSetText('feedbackMsg', 'Resposta correta.');
            if(img) img.src = "img/mascote_feliz.png";
        } else {
            this.vidas--;
            safeSetText('feedbackTitle', 'Ops!');
            safeSetText('feedbackMsg', 'Resposta incorreta.');
            if(img) img.src = "img/mascote_triste.png";
        }
    },

    proximaPergunta: async function() {
        const modal = document.getElementById('feedbackModal');
        if(modal) modal.style.display = 'none';

        if(this.vidas <= 0) { alert("Game Over"); return this.loadHome(); }

        this.qIndex++;
        if(this.qIndex < this.quizData.length) {
            this.renderQuestao();
        } else {
            const pct = this.qAcertos / this.quizData.length;
            let est = 1;
            if(pct === 1) est = 3; else if(pct > 0.7) est = 2;

            alert(`Fim! Estrelas: ${est}`);
            
            this.progressoLocal = this.progressoLocal.filter(p => p.aula_id !== this.aulaId);
            this.progressoLocal.push({ usuario_id: this.user.id, aula_id: this.aulaId, status: 'concluida', estrelas: est });
            
            this.loadHome();
            await DBService.salvarProgresso(this.user.id, this.aulaId, est);
        }
    },
    
    voltarParaHome: function() { this.loadHome(); }
};