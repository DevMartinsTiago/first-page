// Inicialize o EmailJS com seu User ID (encontrado no painel do EmailJS)
emailjs.init('11Gq2yIIGqdmjovsa'); // Substitua pelo seu User ID

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o comportamento padrão de envio do formulário

    // Enviar o formulário via EmailJS
    emailjs.sendForm('service_8dmkm0e', 'template_fb7r2xe', this)
        .then(() => {
            document.getElementById('status-message').textContent = 'Mensagem enviada com sucesso!';
        }, (error) => {
            document.getElementById('status-message').textContent = 'Erro ao enviar mensagem.';
            console.error('Erro:', error);
        });

    // Limpar o formulário após o envio
    this.reset();
});
