window.onscroll = () => {
    let header = document.querySelector('.header')

    header.classList.toggle('sticky', window.scrollY > 100)

    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

$(document).ready(function () {
    $('.scrollTo').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var moveTo = $(target).offset().top;

        $('html, body').animate({
            scrollTop: moveTo
        }, 1000); // Tempo da animação em milissegundos
    });
});

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

function redirectTo(url) {
    window.open(url, '_blank')
}
// Função para abrir a janela modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.body.style.overflow = 'hidden'; // Impede a rolagem do corpo ao mostrar a janela modal
  }
  
  // Função para fechar a janela modal
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto'; // Habilita a rolagem do corpo ao fechar a janela modal
  }
// Impedir a propagação do evento de clique até o elemento pai (project-box)
document.querySelectorAll('.see-more-button').forEach(button => {
    button.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});