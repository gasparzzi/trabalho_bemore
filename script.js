/* === CONTEÚDO DIDÁTICO REVISADO (CENÁRIOS REAIS) === */
const DBService = {
    getPerguntas: function(aulaId) {
        // AULA 101: CONHECENDO O AMBIENTE (Windows)
        if (aulaId === 101) return [
            { 
                dica: "A 'Área de Trabalho' é como se fosse sua mesa real de estudos: é onde você deixa os trabalhos que está usando agora e as ferramentas principais.",
                p: "Você acabou de ligar o computador. Qual é o nome da tela principal que aparece, onde ficam o papel de parede e os ícones?", 
                ops: ["Tela de Bloqueio", "Área de Trabalho (Desktop)", "Protetor de Tela", "Painel de Controle"], c: 1 
            },
            { 
                dica: "A Barra de Tarefas (aquela faixa lá embaixo) serve para multitarefa. Ela mostra quais programas estão abertos para você não se perder.",
                p: "Você está escrevendo um texto e ouvindo música ao mesmo tempo. Onde você olha para ver quais programas estão abertos?", 
                ops: ["Na Lixeira", "No Menu Iniciar", "Na Barra de Tarefas", "Dentro da pasta Documentos"], c: 2 
            },
            { 
                dica: "O Menu Iniciar é o 'mapa' do seu computador. Se você não acha um programa na tela, ele com certeza está lá.",
                p: "Você quer abrir a Calculadora, mas não tem ícone na tela. Onde você clica para procurar qualquer programa instalado?", 
                ops: ["No botão Iniciar (Logo Windows)", "No relógio", "No ícone de Wi-Fi", "No botão de desligar"], c: 0 
            },
            { 
                dica: "Ícones são atalhos. Pense neles como botões mágicos que te levam direto para um lugar (programa ou pasta) sem ter que caminhar até lá.",
                p: "O que são as pequenas figuras clicáveis espalhadas pela sua tela?", 
                ops: ["Vírus de computador", "Erros do sistema", "Ícones (Atalhos)", "Decorações fixas"], c: 2 
            },
            { 
                dica: "O cursor do mouse muda de formato. Se virar uma ampulheta ou círculo girando, o computador está pensando.",
                p: "Você clicou para abrir um programa e o cursor do mouse virou um círculo girando. O que isso significa?", 
                ops: ["Que o computador travou para sempre", "Que o computador está processando (carregando)", "Que a internet caiu", "Que você deve desligar imediatamente"], c: 1 
            },
            { 
                dica: "Clique com o botão DIREITO do mouse quando quiser ver 'opções extras' ou 'propriedades' de algo. O esquerdo é para ação direta.",
                p: "Você quer mudar o nome de uma pasta, mas não sabe o atalho. Qual botão do mouse abre o menu de opções?", 
                ops: ["O botão Esquerdo (Principal)", "A rodinha do meio (Scroll)", "O botão Direito (Secundário)", "Os dois ao mesmo tempo"], c: 2 
            },
            { 
                dica: "A Lixeira é uma segurança. Se apagar algo sem querer, pode resgatar de lá. Mas se esvaziar a lixeira, já era!",
                p: "Você apagou uma foto importante por engano! Onde você deve procurar para tentar recuperá-la?", 
                ops: ["Na Barra de Tarefas", "Na Lixeira", "No Menu Iniciar", "Na pasta de Downloads"], c: 1 
            },
            { 
                dica: "Desligar o computador incorretamente (puxando o fio) pode corromper seus arquivos. O sistema precisa 'arrumar a casa' antes de sair.",
                p: "Qual é a forma segura de desligar o computador para não estragar o sistema?", 
                ops: ["Apertar o botão do monitor", "Puxar o cabo da tomada", "Fechar a tampa do notebook", "Menu Iniciar > Ligar/Desligar > Desligar"], c: 3 
            },
            { 
                dica: "Reiniciar é o remédio sagrado da informática. Ele limpa a memória temporária e resolve pequenos erros.",
                p: "Seu computador está lento e travando. Qual a primeira coisa que um técnico recomendaria fazer?", 
                ops: ["Comprar um novo", "Reiniciar o sistema", "Apagar todos os arquivos", "Bater no gabinete"], c: 1 
            },
            { 
                dica: "O Explorador de Arquivos (ícone de pasta amarela) é onde você gerencia seus documentos, fotos e downloads.",
                p: "Você baixou uma imagem da internet e quer encontrá-la. Qual programa você abre para navegar nas suas pastas?", 
                ops: ["Google Chrome", "Explorador de Arquivos", "Calculadora", "Bloco de Notas"], c: 1 
            }
        ];

        // AULA 102: JANELAS E ORGANIZAÇÃO
        if (aulaId === 102) return [
            { 
                dica: "Os botões de controle ficam no canto superior direito: Traço (Minimizar), Quadrado (Maximizar) e X (Fechar).",
                p: "Você quer esconder uma janela momentaneamente para ver a área de trabalho, mas sem fechá-la. Qual botão usa?", 
                ops: ["O X vermelho", "O quadrado", "O traço (-)", "Alt + F4"], c: 2 
            },
            { 
                dica: "A Barra de Título é o topo da janela. É lá que você 'segura' a janela para arrastá-la pela tela.",
                p: "Sua janela está cobrindo um ícone que você precisa ver. Onde você clica e segura para arrastar a janela de lugar?", 
                ops: ["No meio do texto", "Na Barra de Título (topo)", "Na borda inferior", "No botão de fechar"], c: 1 
            },
            { 
                dica: "Pastas servem para organização. Imagine uma gaveta cheia de papéis soltos: é o caos. Pastas resolvem isso.",
                p: "Sua Área de Trabalho está cheia de fotos espalhadas. Qual a melhor forma de organizar?", 
                ops: ["Apagar todas as fotos", "Criar uma Pasta chamada 'Fotos' e mover tudo para lá", "Mudar o papel de parede", "Deixar como está"], c: 1 
            },
            { 
                dica: "Maximizar faz a janela ocupar a tela toda para você focar. Restaurar faz ela voltar ao tamanho pequeno.",
                p: "A janela está pequena e você quer que ela ocupe a tela inteira para ler melhor. O que você faz?", 
                ops: ["Clica no botão Maximizar (Quadrado)", "Puxa as bordas manualmente", "Minimiza a janela", "Compra um monitor maior"], c: 0 
            },
            { 
                dica: "Selecionar vários arquivos de uma vez economiza tempo. Você pode clicar e arrastar o mouse para criar uma caixa de seleção.",
                p: "Você quer mover 10 arquivos para uma pasta. Como fazer isso rápido?", 
                ops: ["Mover um por um", "Clicar e arrastar o mouse para selecionar todos e mover juntos", "Abrir 10 janelas diferentes", "Renomear todos"], c: 1 
            },
            { 
                dica: "Ctrl + Z é o atalho de 'Desfazer'. Se você apagou algo ou escreveu errado, ele volta no tempo.",
                p: "Ops! Você apagou um texto sem querer. Qual atalho mágico desfaz sua última ação?", 
                ops: ["Ctrl + C", "Ctrl + V", "Ctrl + Z", "Alt + F4"], c: 2 
            },
            { 
                dica: "Alt + Tab é o atalho da produtividade. Ele permite trocar de janelas sem tirar a mão do teclado.",
                p: "Você está jogando, mas o chefe chegou. Qual atalho troca rapidamente para a janela de trabalho?", 
                ops: ["Alt + Tab", "Ctrl + Alt + Del", "F5", "Esc"], c: 0 
            },
            { 
                dica: "Renomear arquivos ajuda a encontrá-los depois. 'Trabalho_Final_Versão_2' é melhor que 'Sem_Título_1'.",
                p: "Para mudar o nome de um arquivo selecionado, você pode apertar qual tecla?", 
                ops: ["F2", "F5", "Delete", "Enter"], c: 0 
            },
            { 
                dica: "A tecla Windows + D minimiza TUDO de uma vez e mostra a Área de Trabalho (Desktop).",
                p: "Tem muitas janelas abertas e você quer ver a área de trabalho limpa imediatamente. Qual o atalho?", 
                ops: ["Fechar uma por uma", "Windows + D", "Ctrl + C", "Desligar o monitor"], c: 1 
            },
            { 
                dica: "Arquivos têm extensões. '.jpg' é imagem, '.mp3' é música, '.docx' é documento de texto.",
                p: "Você recebeu um arquivo 'Trabalho.mp3'. Que tipo de arquivo é esse?", 
                ops: ["Um documento de texto", "Uma planilha", "Uma música/áudio", "Um vírus"], c: 2 
            }
        ];

        // AULA 201: INTERNET BÁSICA
        if (aulaId === 201) return [
            { 
                dica: "O Navegador (Browser) é o carro que você usa para viajar na estrada da internet.",
                p: "Qual desses programas serve para acessar sites na internet?", 
                ops: ["Microsoft Word", "Google Chrome", "Excel", "Photoshop"], c: 1 
            },
            { 
                dica: "A Barra de Endereço fica no topo do navegador. É lá que você digita o destino (ex: youtube.com).",
                p: "Você quer entrar no site da prefeitura. Onde você digita o endereço 'www.prefeitura.sp.gov.br'?", 
                ops: ["Na barra de pesquisa do Google", "Na Barra de Endereço (topo do navegador)", "No chat do Facebook", "No menu Iniciar"], c: 1 
            },
            { 
                dica: "Wi-Fi é a conexão sem fio. O cabo azul (Ethernet) é a conexão com fio, geralmente mais rápida e estável.",
                p: "Seu notebook não conecta no Wi-Fi. Qual cabo você pode usar para conectar direto no roteador?", 
                ops: ["Cabo HDMI", "Cabo USB", "Cabo de Rede (Ethernet)", "Cabo de Força"], c: 2 
            },
            { 
                dica: "Links são textos ou imagens clicáveis que levam a outra página. Geralmente o cursor vira uma 'mãozinha'.",
                p: "Como você sabe que um texto azul na internet é um Link clicável?", 
                ops: ["Ele pisca", "O cursor do mouse vira uma mãozinha ao passar por cima", "Ele desaparece", "O computador apita"], c: 1 
            },
            { 
                dica: "Atualizar a página (F5) serve para carregar novos conteúdos ou tentar corrigir se o site travou.",
                p: "A página do site carregou pela metade. O que você faz para tentar corrigir?", 
                ops: ["Clica no botão Atualizar (Seta giratória) ou F5", "Desliga o monitor", "Abre o Word", "Manda um email"], c: 0 
            }
        ];
        
        return [];
    },

    getTrilhas: function() {
        return [
            {
                id: 1, 
                titulo: "Windows Essencial", 
                icone: "fab fa-windows",
                aulas: [
                    {id:101, titulo:"Primeiros Passos", ordem:1}, 
                    {id:102, titulo:"Janelas e Pastas", ordem:2}
                ]
            },
            {
                id: 2, 
                titulo: "Internet e Web", 
                icone: "fas fa-globe",
                aulas: [
                    {id:201, titulo:"Navegadores", ordem:1}
                ]
            }
        ];
    },

    // MANTENHA AS FUNÇÕES ABAIXO IGUAIS (getProgresso, salvarProgresso, etc)
    // Elas já estão corretas na versão anterior.
    
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
/* FIM DO DBSERVICE */