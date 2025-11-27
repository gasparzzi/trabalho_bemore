const SUPABASE_URL = 'https://lslhcoytqzeazhjdbwnp.supabase.co'; 
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzbGhjb3l0cXplYXpoamRid25wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxNjE4NzEsImV4cCI6MjA3OTczNzg3MX0.p9gJeTQjdafLx1gq_eAMFiT8aHJmkcnubrkqJEXsVEg'; 

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

const DBService = {
    getPerguntas: function(aulaId) {
        if (aulaId === 101) return [
            { dica: "A tela principal do Windows chama-se 'Área de Trabalho'.", p: "Qual o nome da tela inicial do PC?", ops: ["Mesa", "Área de Trabalho", "Janela", "Bloco"], c: 1 },
            { dica: "A Barra de Tarefas fica embaixo e mostra programas.", p: "Onde fica a Barra de Tarefas?", ops: ["Topo", "Parte Inferior", "Meio", "Não existe"], c: 1 },
            { dica: "Botão Iniciar (logo do Windows) abre o menu.", p: "Botão para ver programas:", ops: ["Iniciar", "Desligar", "Ajuda", "Wi-Fi"], c: 0 },
            { dica: "Pastas guardam arquivos.", p: "Para que servem pastas?", ops: ["Vírus", "Organizar arquivos", "Enfeite", "Sites"], c: 1 },
            { dica: "O 'X' fecha a janela.", p: "Qual botão fecha a janela?", ops: ["-", "Quadrado", "X", "Bola"], c: 2 },
            { dica: "Ctrl + C copia.", p: "Atalho Copiar:", ops: ["Ctrl+V", "Ctrl+C", "Alt+F4", "Ctrl+Z"], c: 1 },
            { dica: "Ctrl + V cola.", p: "Atalho Colar:", ops: ["Ctrl+V", "Ctrl+P", "Ctrl+C", "Enter"], c: 0 },
            { dica: "Apagados vão para a Lixeira.", p: "Arquivos apagados vão para:", ops: ["Nuvem", "Lixeira", "Correio", "Pen Drive"], c: 1 },
            { dica: "Botão Direito abre opções.", p: "Para ver opções, use botão:", ops: ["Esquerdo", "Direito", "Meio", "Nenhum"], c: 1 },
            { dica: "Navegador acessa internet.", p: "O que é Navegador?", ops: ["Acessa Internet", "Texto", "Jogo", "Vírus"], c: 0 },
            { dica: "Alto-falante controla som.", p: "Ícone de som:", ops: ["Bateria", "Alto-falante", "Globo", "Cadeado"], c: 1 },
            { dica: "Caps Lock deixa maiúscula.", p: "Tecla letra grande:", ops: ["Ctrl", "Alt", "Shift", "Tab"], c: 2 },
            { dica: "Alt + Tab troca janelas.", p: "Alt+Tab faz:", ops: ["Desliga", "Alterna janelas", "Menu", "Print"], c: 1 },
            { dica: "Explorador gerencia pastas.", p: "Onde vemos pastas?", ops: ["Internet", "Explorador", "Fotos", "Música"], c: 1 },
            { dica: "Menu Iniciar > Desligar.", p: "Como desligar?", ops: ["Tomada", "Botão tela", "Menu Iniciar", "Esperar"], c: 2 }
        ];
        if (aulaId === 102) return [
            { dica: "Ícones são atalhos visuais.", p: "O que é um ícone?", ops: ["Vírus", "Atalho visual", "Erro", "Pasta"], c: 1 },
            { dica: "Arraste pela barra de título.", p: "Onde arrastar janela?", ops: ["Barra título", "Espaço", "Borda", "Lixeira"], c: 0 },
            { dica: "Botão (-) minimiza.", p: "Botão (-) faz:", ops: ["Fecha", "Minimiza", "Maximiza", "Apaga"], c: 1 },
            { dica: "Ctrl+A seleciona tudo.", p: "Atalho tudo:", ops: ["Ctrl+A", "Ctrl+C", "Alt+F4", "F5"], c: 0 },
            { dica: "Papel de Parede é o fundo.", p: "Onde fica papel parede?", ops: ["Lixeira", "Área Trabalho", "Windows", "Nuvem"], c: 1 },
            { dica: "Botão Direito > Novo > Pasta.", p: "Como criar pasta?", ops: ["Botão Direito", "Desligar", "Google", "Nada"], c: 0 },
            { dica: "PrintScreen tira foto da tela.", p: "PrintScreen faz:", ops: ["Imprime", "Foto tela", "Desligar", "Salva"], c: 1 },
            { dica: "Shift+Del apaga direto.", p: "Apagar sem lixeira:", ops: ["Shift+Del", "Del", "Ctrl+X", "Alt+F4"], c: 0 },
            { dica: "Relógio no canto inferior direito.", p: "Onde fica relógio?", ops: ["Canto Inferior", "Menu", "Janela", "Topo"], c: 0 },
            { dica: "Duplo clique abre.", p: "Para abrir pasta:", ops: ["1 clique", "Duplo Clique", "Arrastar", "Renomear"], c: 1 },
            { dica: "Lixeira recupera arquivos.", p: "Para que serve Lixeira?", ops: ["Recuperar", "Vírus", "Limpeza", "Jogos"], c: 0 },
            { dica: "F5 atualiza.", p: "Tecla atualizar:", ops: ["F5", "F1", "F12", "Esc"], c: 0 },
            { dica: "Pode abrir vários programas.", p: "Pode abrir vários?", ops: ["Sim", "Não", "Só 3", "Pagar"], c: 0 },
            { dica: "Tecla Windows abre Iniciar.", p: "Botão Windows abre:", ops: ["Menu Iniciar", "Google", "Excel", "Nada"], c: 0 },
            { dica: "Alt+F4 fecha tudo.", p: "Fechar travado:", ops: ["Alt+F4", "Gritar", "Clicar", "Esperar"], c: 0 }
        ];
        return [];
    },

    getTrilhas: function() {
        return [
            {
                id: 1, titulo: "Windows Essencial", icone: "fab fa-windows",
                aulas: [{id:101, titulo:"Introdução", ordem:1}, {id:102, titulo:"Área de Trabalho", ordem:2}, {id:103, titulo:"Pastas", ordem:3}]
            },
            {
                id: 2, titulo: "Internet e Web", icone: "fas fa-globe",
                aulas: [{id:201, titulo:"Navegadores", ordem:1}, {id:202, titulo:"Sites", ordem:2}]
            }
        ];
    },

    getProgresso: async function(userId) {
        if (!supabaseClient) return [];
        const { data } = await supabaseClient.from('progresso_aluno').select('*').eq('usuario_id', userId);
        return data || [];
    },

    salvarProgresso: async function(userId, aulaId, estrelas) {
        if (!supabaseClient || userId === 999) return;
        try {
            const { error } = await supabaseClient
                .from('progresso_aluno')
                .upsert(
                    { usuario_id: userId, aula_id: aulaId, status: 'concluida', estrelas: estrelas },
                    { onConflict: 'usuario_id, aula_id' }
                );
            if(error) console.error("Erro SQL:", error);
        } catch(e) { console.error("Exceção:", e); }
    },

    atualizarUsuario: async function(uid, dados) {
        if(!supabaseClient) return {error: "Offline"};
        return await supabaseClient.from('usuarios').update(dados).eq('id', uid);
    }
};

const app = {
    user: null,
    vidas: 15,
    progressoLocal: [],
    
    // NAVEGAÇÃO SEGURA (Controle da barra)
    navegar: function(screenId) {
        document.querySelectorAll('.screen').forEach(s => { s.classList.remove('active'); s.style.display = 'none'; });
        const target = document.getElementById(screenId);
        if(target) { target.style.display = 'flex'; setTimeout(() => target.classList.add('active'), 10); }
        
        const nav = document.getElementById('bottomNav');
        if(nav) {
            // Remove o display:none manual e adiciona a classe visible
            if(['homeScreen', 'rankingScreen', 'configScreen'].includes(screenId)) {
                nav.style.display = ''; // Limpa o inline style
                nav.classList.add('visible'); // Adiciona o grid
                this.updateNavIcon(screenId);
            } else { 
                nav.classList.remove('visible'); // Remove o grid
                nav.style.display = 'none'; // Força none
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
        if(nav) { nav.classList.remove('visible'); nav.style.display = 'none'; }
        document.querySelectorAll('.screen').forEach(s => { s.classList.remove('active'); s.style.display = 'none'; });
        const t = document.getElementById(tela === 'login' ? 'loginScreen' : 'cadastroScreen');
        if(t) { t.style.display = 'flex'; setTimeout(() => t.classList.add('active'), 10); }
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
            else { alert("Sucesso!"); this.toggleAuth('login'); }
        } catch(e) { alert("Erro."); }
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
        if(this.user.id === 999) return alert("Visitante não salva.");
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
        else { alert("Atualizado!"); this.user.nome = nome; this.user.email = email; }
    },

    toggleTheme: function() {
        const chk = document.getElementById('themeSwitch');
        if(chk && !chk.checked) document.body.classList.add('light-theme');
        else document.body.classList.remove('light-theme');
        localStorage.setItem('tema', chk.checked ? 'dark' : 'light');
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
        
        document.getElementById('teachingText').innerText = q.dica || "Sem dica.";
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
            safeSetText('feedbackMsg', 'Mandou bem.');
            if(img) img.src = "img/mascote_feliz.png";
        } else {
            this.vidas--;
            safeSetText('feedbackTitle', 'Ops!');
            safeSetText('feedbackMsg', 'Resposta errada.');
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

window.onload = function() {
    const nav = document.getElementById('bottomNav');
    if(nav) { nav.style.display = 'none'; nav.classList.remove('visible'); }

    if(localStorage.getItem('tema') === 'light') {
        document.body.classList.add('light-theme');
        const sw = document.getElementById('themeSwitch');
        if(sw) sw.checked = false;
    }
};