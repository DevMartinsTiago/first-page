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


const slides = document.querySelectorAll('.slide');
let slideIndex = 0;

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex += 2; // Incrementa de 2 em 2 para mostrar 2 slides por vez
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  slides[slideIndex].style.display = "block";
  slides[slideIndex + 1].style.display = "block";

  setTimeout(showSlides, 2000); // Muda a cada 2 segundos
}

showSlides();