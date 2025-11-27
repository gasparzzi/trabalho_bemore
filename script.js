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
            { 
                dica: "Pense na sua mesa de estudos real. É o primeiro lugar que você vê, onde deixa as ferramentas que está usando agora.",
                p: "Ao ligar o computador e fazer login, você se depara com a tela principal onde ficam o papel de parede e seus ícones. Qual o nome dela?", 
                ops: ["Painel de Controle", "Área de Trabalho (Desktop)", "Protetor de Tela", "Janela Principal"], c: 1 
            },
            { 
                dica: "É a faixa horizontal na parte inferior da tela. Ela serve para você saber quais aplicativos estão abertos e alternar entre eles.",
                p: "Você está com o Chrome e o Word abertos, mas o Word sumiu da tela. Onde você clica para trazê-lo de volta?", 
                ops: ["Na Lixeira", "No ícone de Wi-Fi", "Na Barra de Tarefas (ícone do Word)", "No botão de Desligar"], c: 2 
            },
            { 
                dica: "O ícone é o logotipo do Windows (quatro quadrados). Ele é o 'mapa' para encontrar qualquer coisa instalada no PC.",
                p: "Você quer abrir a Calculadora, mas não tem atalho na tela. Onde você clica para pesquisar qualquer programa?", 
                ops: ["Botão Iniciar", "Relógio", "Explorador de Arquivos", "Navegador"], c: 0 
            },
            { 
                dica: "Imagine uma gaveta amarela em um arquivo físico. No computador, elas servem para agrupar arquivos e organizar a bagunça.",
                p: "Sua área de trabalho está cheia de fotos espalhadas. Qual recurso você usa para agrupar todas elas em um único lugar?", 
                ops: ["Criar um Atalho", "Criar uma Pasta (Diretório)", "Mudar o papel de parede", "Usar o Bloco de Notas"], c: 1 
            },
            { 
                dica: "No canto superior direito das janelas existem 3 botões. O traço (-) apenas esconde a janela na barra inferior, sem encerrar o programa.",
                p: "Você quer limpar a tela para ver o papel de parede, mas NÃO quer fechar o programa que está usando. Qual botão você aperta?", 
                ops: ["O X vermelho", "O quadrado (Maximizar)", "O traço (Minimizar)", "O botão de Ajuda"], c: 2 
            },
            { 
                dica: "C = Copy (Copiar). Esse atalho cria uma duplicata do item na memória do computador.",
                p: "Você precisa colocar o mesmo texto em dois documentos diferentes. Primeiro você seleciona o texto e aperta:", 
                ops: ["Ctrl + V", "Ctrl + C", "Alt + F4", "Ctrl + Z"], c: 1 
            },
            { 
                dica: "V vem depois do C. Esse comando 'despeja' o que você copiou no local desejado.",
                p: "Depois de copiar o texto, você vai para o outro documento e aperta qual combinação para ele aparecer?", 
                ops: ["Ctrl + P", "Ctrl + X", "Ctrl + V", "Enter"], c: 2 
            },
            { 
                dica: "A Lixeira é uma pasta de segurança. Arquivos lá dentro ainda ocupam espaço, mas podem ser resgatados.",
                p: "Você apagou um trabalho importante por acidente! O que você faz?", 
                ops: ["Chora e desliga o PC", "Abre a Lixeira e clica em Restaurar", "Formata o computador", "Abre o navegador de internet"], c: 1 
            },
            { 
                dica: "O botão esquerdo é para ação direta (abrir/clicar). O botão direito é para ver o menu de contexto (propriedades, renomear, etc).",
                p: "Para ver as 'Propriedades' de um arquivo ou mudar o nome dele, qual botão do mouse usamos?", 
                ops: ["Esquerdo (Principal)", "Direito (Secundário)", "A rodinha (Scroll)", "Os dois juntos"], c: 1 
            },
            { 
                dica: "Browser ou Navegador é o programa que interpreta os códigos da web. Exemplos: Chrome, Edge, Firefox.",
                p: "Qual desses programas é utilizado especificamente para acessar sites na internet?", 
                ops: ["Microsoft Word", "Google Chrome", "Adobe Photoshop", "Bloco de Notas"], c: 1 
            },
            { 
                dica: "Caps Lock (ou Fixa) tranca o teclado em modo maiúsculo. Shift faz maiúscula apenas enquanto você segura.",
                p: "Você precisa digitar um título todo em letras MAIÚSCULAS (Caixa Alta). Qual tecla você ativa?", 
                ops: ["Ctrl", "Alt", "Caps Lock (Fixa)", "Tab"], c: 2 
            },
            { 
                dica: "Esse atalho permite pular de um programa para outro sem usar o mouse.",
                p: "Seu chefe chegou e você precisa trocar rapidamente da tela do jogo para a planilha de trabalho. Qual o atalho?", 
                ops: ["Alt + Tab", "Ctrl + Alt + Del", "F5", "Esc"], c: 0 
            },
            { 
                dica: "O ícone é uma pasta amarela na barra de tarefas. Ele serve para navegar pelos seus documentos, downloads e discos.",
                p: "Você baixou um boleto e não sabe onde ele foi parar. Qual programa você abre para procurar na pasta 'Downloads'?", 
                ops: ["Calculadora", "Explorador de Arquivos", "Paint", "Configurações"], c: 1 
            },
            { 
                dica: "Puxar da tomada corta a energia abruptamente e pode corromper o disco rígido ou o sistema operacional.",
                p: "Qual a forma correta e segura de encerrar o uso do computador?", 
                ops: ["Puxar o fio da tomada", "Apertar o botão do monitor", "Menu Iniciar > Ligar/Desligar > Desligar", "Esperar a bateria acabar"], c: 2 
            },
            { 
                dica: "O quadrado (Maximizar) faz a janela ocupar a tela toda. Restaurar faz ela voltar a ser uma janela menor.",
                p: "A janela do programa está pequena no meio da tela e você quer que ela ocupe o monitor inteiro. O que você clica?", 
                ops: ["No botão Minimizar", "No botão Maximizar (Quadrado)", "No X de fechar", "Arrasta para a lixeira"], c: 1 
            }
        ];

        
        if (aulaId === 102) return [
            { 
                dica: "Atalhos são identificados por uma pequena setinha no canto do ícone. Eles são apenas caminhos, não o arquivo real.",
                p: "O que acontece se você apagar o ícone de atalho de um programa na Área de Trabalho?", 
                ops: ["O programa é desinstalado", "O computador para de funcionar", "Apenas o atalho some, o programa continua instalado", "O monitor desliga"], c: 2 
            },
            { 
                dica: "A Barra de Título fica no topo da janela. É a única parte segura para clicar e arrastar sem ativar nada dentro do programa.",
                p: "Sua janela está cobrindo um texto importante. Onde você clica e segura para arrastar a janela para o lado?", 
                ops: ["Na Barra de Título (topo)", "Na barra de rolagem", "No botão de fechar", "No meio do texto"], c: 0 
            },
            { 
                dica: "F5 é o atalho universal de 'Refresh' ou Atualizar. Serve para recarregar o conteúdo da pasta ou site.",
                p: "Você salvou um arquivo na pasta mas ele ainda não apareceu. Qual tecla você aperta para atualizar a visualização?", 
                ops: ["F1", "F5", "Esc", "Delete"], c: 1 
            },
            { 
                dica: "Ctrl + A (All) seleciona tudo que está na pasta atual.",
                p: "Você quer selecionar TODAS as 50 fotos de uma pasta para mover. Qual o atalho mais rápido?", 
                ops: ["Clicar uma por uma", "Ctrl + A", "Alt + F4", "Ctrl + P"], c: 1 
            },
            { 
                dica: "Botão Direito na área vazia abre o menu de personalização do ambiente.",
                p: "Como você faz para trocar o Papel de Parede (imagem de fundo) da Área de Trabalho?", 
                ops: ["Clica com botão Direito na tela vazia > Personalizar", "Clica na Lixeira", "Reinicia o PC", "Aperta F1"], c: 0 
            },
            { 
                dica: "PrtScn (Print Screen) copia a imagem da tela para a área de transferência.",
                p: "Apareceu uma mensagem de erro e o técnico pediu uma foto da tela (Print). Qual tecla você usa?", 
                ops: ["Scroll Lock", "Pause Break", "PrtScn (Print Screen)", "Insert"], c: 2 
            },
            { 
                dica: "Shift + Delete ignora a lixeira e apaga o arquivo para sempre. Cuidado!",
                p: "Qual comando apaga um arquivo permanentemente, sem chance de recuperar pela Lixeira?", 
                ops: ["Delete", "Ctrl + Delete", "Shift + Delete", "Alt + Delete"], c: 2 
            },
            { 
                dica: "A Área de Notificação fica ao lado do relógio. Mostra Wi-Fi, Bateria, Volume e avisos do sistema.",
                p: "Onde você olha para ver se o notebook está carregando ou se tem Wi-Fi conectado?", 
                ops: ["Canto Superior Esquerdo", "Canto Inferior Direito (Perto do relógio)", "No centro da tela", "No Menu Iniciar"], c: 1 
            },
            { 
                dica: "Um clique seleciona (destaca). Dois cliques executam (abrem).",
                p: "Você clicou uma vez no ícone e ele ficou azul, mas não abriu. O que você deveria ter feito?", 
                ops: ["Clicado com botão direito", "Dado um Duplo Clique (2x rápido)", "Arrastado para a lixeira", "Esperado 10 minutos"], c: 1 
            },
            { 
                dica: "Arrastar para a borda lateral faz a janela ocupar exatamente metade da tela (Snap).",
                p: "Você quer dividir a tela: metade para ler um PDF e metade para escrever no Word. O que você faz com a janela?", 
                ops: ["Arrasta ela até bater na borda lateral da tela", "Diminui manualmente milímetro por milímetro", "Não é possível fazer isso", "Fecha uma delas"], c: 0 
            },
            { 
                dica: "A tecla Windows (Bandeira) abre o menu principal do sistema.",
                p: "Qual tecla do teclado abre o Menu Iniciar sem precisar usar o mouse?", 
                ops: ["Ctrl", "Alt", "Tecla Windows (Bandeira)", "Espaço"], c: 2 
            },
            { 
                dica: "Alt + F4 é o comando de encerramento. Ele fecha a janela ativa imediatamente.",
                p: "Um programa travou e não quer fechar no X. Qual atalho força o fechamento da janela ativa?", 
                ops: ["Ctrl + C", "Alt + F4", "Shift + Tab", "F11"], c: 1 
            },
            { 
                dica: "Renomear (F2) serve para organizar. Nomes claros ajudam na busca.",
                p: "Você salvou o arquivo como 'Trabalho.docx' mas quer mudar para 'Trabalho_Final.docx'. O que você faz?", 
                ops: ["Abre o arquivo e apaga tudo", "Clica com botão Direito > Renomear", "Cria uma nova pasta", "Manda por email"], c: 1 
            },
            { 
                dica: "Suspender mantém tudo aberto na memória gastando pouca energia. Desligar fecha tudo.",
                p: "Você vai almoçar e volta em 30 min. Quer manter seus programas abertos, mas economizar energia. O que escolhe?", 
                ops: ["Desligar", "Reiniciar", "Suspender", "Tirar da tomada"], c: 2 
            },
            { 
                dica: "Cortar (Ctrl + X) remove do lugar original. Copiar (Ctrl + C) mantém o original.",
                p: "Qual a diferença entre COPIAR e CORTAR um arquivo?", 
                ops: ["Nenhuma, são iguais", "Copiar mantém o original, Cortar remove o original (move)", "Cortar apaga o arquivo para sempre", "Copiar só funciona com texto"], c: 1 
            }
        ];
        return [];
    },

    getTrilhas: function() {
        return [
            {
                id: 1, titulo: "Windows Essencial", icone: "fab fa-windows",
                aulas: [
                    {id:101, titulo:"Primeiros Passos", ordem:1}, 
                    {id:102, titulo:"Janelas e Pastas", ordem:2}, 
                    {id:103, titulo:"Organização", ordem:3}
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

    
    getProgresso: async function(userId) {
        if (!supabaseClient) return [];
        try {
            const { data } = await supabaseClient.from('progresso_aluno').select('*').eq('usuario_id', userId);
            return data || [];
        } catch(e) { return []; }
    },

    salvarProgresso: async function(userId, aulaId, estrelas) {
        if (!supabaseClient || userId === 999) return;
        try {
            const { error } = await supabaseClient.from('progresso_aluno').upsert(
                { usuario_id: userId, aula_id: aulaId, status: 'concluida', estrelas: estrelas },
                { onConflict: 'usuario_id, aula_id' }
            );
            if(error) console.error("Erro Salvar:", error);
        } catch(e) { console.error(e); }
    },

    atualizarUsuario: async function(uid, dados) {
        if(!supabaseClient) return {error: "Offline"};
        return await supabaseClient.from('usuarios').update(dados).eq('id', uid);
    }
};

const app = {
    user: null, vidas: 15, progressoLocal: [],
    
    navegar: function(screenId) {
        document.querySelectorAll('.screen').forEach(s => { s.classList.remove('active'); s.style.display = 'none'; });
        const target = document.getElementById(screenId);
        if(target) { target.style.display = 'flex'; setTimeout(() => target.classList.add('active'), 10); }
        
        const nav = document.getElementById('bottomNav');
        if(nav) {
            if(['homeScreen', 'rankingScreen', 'configScreen'].includes(screenId)) {
                nav.style.display = ''; nav.classList.add('visible');
                this.updateNavIcon(screenId);
            } else { nav.classList.remove('visible'); nav.style.display = 'none'; }
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

        if(!supabaseClient) { 
            this.user = { id: 999, nome: "Visitante", email: email };
            this.loadHome();
            if(btn) btn.innerText = "Entrar";
            return;
        }

        try {
            const { data, error } = await supabaseClient.from('usuarios').select('*').eq('email', email).eq('senha_hash', senha).single();
            if(error || !data) {
                alert("Dados incorretos.");
                if(btn) btn.innerText = "Entrar";
            } else {
                this.user = data;
                this.carregarDadosEdicao();
                this.progressoLocal = await DBService.getProgresso(this.user.id);
                this.loadHome();
                if(btn) btn.innerText = "Entrar";
            }
        } catch(e) {
            alert("Erro conexão.");
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

        if(error) alert("Erro."); else { alert("Atualizado!"); this.user.nome = nome; this.user.email = email; }
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
                        if(idx === 0) { status = 'unlocked'; stars = '☆☆☆'; }
                        else {
                            const ant = trilha.aulas[idx-1];
                            if(this.progressoLocal.some(p => p.aula_id === ant.id)) { status = 'unlocked'; stars = '☆☆☆'; }
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

    quizData: [], qIndex: 0, qAcertos: 0, aulaId: 0,

    iniciarAula: function(id, titulo) {
        const dados = DBService.getPerguntas(id);
        if(!dados.length) return alert("Em breve!");
        this.quizData = dados; this.qIndex = 0; this.qAcertos = 0; this.vidas = 15; this.aulaId = id;
        
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
