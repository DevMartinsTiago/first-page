// Inicialize o EmailJS com seu User ID
emailjs.init('11Gq2yIIGqdmjovsa'); // Substitua pelo seu User ID

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o comportamento padrão de envio do formulário

    // Enviar o formulário via EmailJS
    emailjs.sendForm('service_8dmkm0e', 'template_fb7r2xe', this)
        .then(() => {
            // Mostrar mensagem de sucesso com SweetAlert
            Swal.fire({
                icon: 'success',
                title: 'Sucesso!',
                text: 'Mensagem enviada com sucesso!',
            });
        }, (error) => {
            // Mostrar mensagem de erro com SweetAlert
            Swal.fire({
                icon: 'error',
                title: 'Erro!',
                text: 'Erro ao enviar mensagem.',
            });
            console.error('Erro:', error);
        });

    // Limpar o formulário após o envio
    this.reset();
});

// Menu responsivo
const mobileMenu = document.getElementById('mobile-menu');
const menuList = document.querySelector('header nav ul');

mobileMenu.addEventListener('click', () => {
    menuList.classList.toggle('active');
});