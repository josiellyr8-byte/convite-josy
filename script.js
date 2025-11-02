document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('DOMContentLoaded', () => {
    
    // ==============================================
    // NOVO CÓDIGO: EFEITO GLITTER/CONFETTI (EXPLOSÃO INICIAL)
    // ==============================================
    
    // 1. Inicializa o objeto confetti
    const jsConfetti = new JSConfetti();

    // 2. Define as cores lilás/lavanda/roxo para o confetti
    const lilacColors = [
        '#E0BBE4', // Lavanda Suave
        '#957DAD', // Lilás Acinzentado
        '#5C3A82', // Roxo Principal
        '#F0E6FF', // Fundo claro (para dar um toque de glitter branco/claro)
        '#6D28D9'  // Roxo Vibrante
    ];

    // 3. Dispara o Confetti no carregamento
    jsConfetti.addConfetti({
        confettiColors: lilacColors,
        confettiNumber: 250, // Quantidade de "glitters"
        confettiRadius: 5,   // Tamanho (deixa pequeno como glitter)
        // Opcional: Adicionar emojis de estrela para parecer mais com glitter/brilho
        emojis: ['✨', '💜', '🌟'],
        emojiSize: 30 
    });

    // ==============================================
    // (Restante do seu código JavaScript, como Mapa e RSVP)
    // ==============================================
    
    // 1. Funcionalidade do Botão de Mapa
    const botaoMapa = document.getElementById('abrirMapa');
    // ... (restante do seu código)
});
    // 1. Funcionalidade do Botão de Mapa
    const botaoMapa = document.getElementById('abrirMapa');
    // Você pode pesquisar o local no Google Maps e pegar o link de compartilhamento
    const linkLocal = 'https://share.google/7cglBm9hdPG3v4bjk'; 

    botaoMapa.addEventListener('click', () => {
        window.open(linkLocal, '_blank');
    });

    // 2. Funcionalidade da Confirmação de Presença (RSVP) via WhatsApp
    const formRSVP = document.getElementById('formRSVP');
    const nomeInput = document.getElementById('nome');
    const acompanhantesInput = document.getElementById('acompanhantes');
    const mensagemSucesso = document.getElementById('mensagemSucesso');
    
    // **IMPORTANTE: Coloque seu número de WhatsApp com código do país e DDD (sem símbolos).**
    const seuNumeroWhatsapp = '5581996913743'; 
    const dataAniversario = '15 de Novembro, 18h, Boi e Brasa - Ilha do Retiro';

    formRSVP.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o recarregamento da página

        const nomeConvidado = nomeInput.value;
        const numAcompanhantes = parseInt(acompanhantesInput.value) || 0;

        let mensagemWhatsapp = `Olá! Meu nome é ${nomeConvidado} e gostaria de confirmar minha presença no seu aniversário no dia ${dataAniversario}.`;

        if (numAcompanhantes > 0) {
            mensagemWhatsapp += ` Confirmo para um total de ${numAcompanhantes + 1} pessoas (eu e ${numAcompanhantes} acompanhante(s)).`;
        } else {
            mensagemWhatsapp += ` Estarei presente sozinho(a).`;
        }

        // Codifica a mensagem para ser usada na URL do WhatsApp
        const mensagemCodificada = encodeURIComponent(mensagemWhatsapp);
        
        // Monta o link do WhatsApp
        const linkWhatsapp = `https://wa.me/${5581996913743}?text=${mensagemCodificada}`;

        // Abre o link em uma nova janela/aba
        window.open(linkWhatsapp, '_blank');
        
        // Oculta o formulário e mostra a mensagem de sucesso (interatividade visual)
        formRSVP.style.display = 'none';
        mensagemSucesso.style.display = 'block';

        // Opcional: Você pode resetar o formulário se quiser que ele apareça novamente após o envio
        // formRSVP.reset();
    });
});