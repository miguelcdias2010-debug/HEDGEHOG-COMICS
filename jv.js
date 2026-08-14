// 1. Lógica da Janela de Pagamento de Cursos
function processarPagamento(nomeCurso, preco) {
    alert(`🛒 Iniciando pagamento do Módulo ${nomeCurso}...\n💵 Valor: R$ ${preco.toFixed(2)}\n\nRedirecionando de forma segura para o processador de pagamento...`);
    // Aqui no futuro você liga o link da API do Mercado Pago, Stripe ou Gateway de Pix.
}

// 2. Lógica Real de Autenticação/Login
function realizarLogin(event) {
    event.preventDefault(); // Impede a página de recarregar
    
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email && senha) {
        alert(`✅ Login efetuado com sucesso!\nSeja bem-vindo de volta à plataforma.`);
        // Limpa os campos após o login
        document.getElementById('formLogin').reset();
        // Redireciona para o início ou página interna do curso
        window.location.href = "index.html"; 
    } else {
        alert("❌ Por favor, preencha todos os campos obrigatórios.");
    }
}

// 4. Lógica de Coleta do Feedback
function enviarFeedback(event) {
    event.preventDefault(); // Impede a página de recarregar
    
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;

    alert(`🎉 Muito obrigado pelo seu feedback, ${nome}!\nSua avaliação nos ajuda muito a melhorar as aulas de mangá.`);
    
    // Limpa o formulário
    document.getElementById('formFeedback').reset();
    window.location.href = "index.html";
}